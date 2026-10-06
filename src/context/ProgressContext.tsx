import React, { createContext, useContext, useEffect, useState } from 'react';
import { allLessons, allModules, auditChecklistItems } from '../data';

interface ProgressData {
  completedLessons: string[]; // e.g. ['m1-l1']
  checklistChecked: Record<string, boolean>; // e.g. { 'chk-1': true }
  quizAnswers: Record<string, number>; // { 'q1-1': 0 }
  lastVisited: { moduleId: number; lessonNumber: number } | null;
}

interface ProgressContextType {
  completedLessons: string[];
  checklistChecked: Record<string, boolean>;
  quizAnswers: Record<string, number>;
  lastVisited: { moduleId: number; lessonNumber: number } | null;
  totalLessons: number;
  completedLessonsCount: number;
  overallPercent: number;
  checklistCheckedCount: number;
  checklistTotalCount: number;
  checklistPercent: number;
  isLessonCompleted: (lessonId: string) => boolean;
  isModuleCompleted: (moduleId: number) => boolean;
  toggleLessonCompleted: (lessonId: string, moduleId: number) => void;
  markLessonCompleted: (lessonId: string, moduleId: number) => void;
  toggleChecklistItem: (itemId: string) => void;
  recordQuizAnswer: (questionId: string, optionIndex: number) => void;
  setLastVisitedLesson: (moduleId: number, lessonNumber: number) => void;
  resetProgress: () => void;
}

const STORAGE_KEY = 'xauusd_academy_progress_v2';

const defaultProgress: ProgressData = {
  completedLessons: [],
  checklistChecked: {},
  quizAnswers: {},
  lastVisited: { moduleId: 1, lessonNumber: 1 },
};

const ProgressContext = createContext<ProgressContextType | null>(null);

export const ProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [data, setData] = useState<ProgressData>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        return { ...defaultProgress, ...JSON.parse(stored) };
      }
    } catch {
      // Fallback
    }
    return defaultProgress;
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch {
      // Storage quota or disabled
    }
  }, [data]);

  const totalLessons = allLessons.length;
  const completedLessonsCount = data.completedLessons.length;
  const overallPercent = totalLessons > 0 ? Math.round((completedLessonsCount / totalLessons) * 100) : 0;

  const checklistTotalCount = auditChecklistItems.length;
  const checklistCheckedCount = Object.values(data.checklistChecked).filter(Boolean).length;
  const checklistPercent = checklistTotalCount > 0 ? Math.round((checklistCheckedCount / checklistTotalCount) * 100) : 0;

  const isLessonCompleted = (lessonId: string) => {
    return data.completedLessons.includes(lessonId);
  };

  const isModuleCompleted = (moduleId: number) => {
    const mod = allModules.find((m) => m.id === moduleId);
    if (!mod || mod.lessons.length === 0) return false;
    return mod.lessons.every((l) => data.completedLessons.includes(l.id));
  };

  const toggleLessonCompleted = (lessonId: string) => {
    setData((prev) => {
      const exists = prev.completedLessons.includes(lessonId);
      const updated = exists
        ? prev.completedLessons.filter((id) => id !== lessonId)
        : [...prev.completedLessons, lessonId];
      return {
        ...prev,
        completedLessons: updated,
      };
    });
  };

  const markLessonCompleted = (lessonId: string) => {
    setData((prev) => {
      if (prev.completedLessons.includes(lessonId)) return prev;
      return {
        ...prev,
        completedLessons: [...prev.completedLessons, lessonId],
      };
    });
  };

  const toggleChecklistItem = (itemId: string) => {
    setData((prev) => {
      const nextChecked = { ...prev.checklistChecked, [itemId]: !prev.checklistChecked[itemId] };
      return { ...prev, checklistChecked: nextChecked };
    });
  };

  const recordQuizAnswer = (questionId: string, optionIndex: number) => {
    setData((prev) => ({
      ...prev,
      quizAnswers: { ...prev.quizAnswers, [questionId]: optionIndex },
    }));
  };

  const setLastVisitedLesson = (moduleId: number, lessonNumber: number) => {
    setData((prev) => ({
      ...prev,
      lastVisited: { moduleId, lessonNumber },
    }));
  };

  const resetProgress = () => {
    setData(defaultProgress);
    localStorage.removeItem(STORAGE_KEY);
  };

  return (
    <ProgressContext.Provider
      value={{
        completedLessons: data.completedLessons,
        checklistChecked: data.checklistChecked,
        quizAnswers: data.quizAnswers,
        lastVisited: data.lastVisited,
        totalLessons,
        completedLessonsCount,
        overallPercent,
        checklistCheckedCount,
        checklistTotalCount,
        checklistPercent,
        isLessonCompleted,
        isModuleCompleted,
        toggleLessonCompleted,
        markLessonCompleted,
        toggleChecklistItem,
        recordQuizAnswer,
        setLastVisitedLesson,
        resetProgress,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
};
