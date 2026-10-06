import { Module, Lesson } from '../types/course';
import { level1Modules } from './modulesLevel1';
import { level2Modules } from './modulesLevel2';
import { level3Modules } from './modulesLevel3';
import { level4Modules } from './modulesLevel4';
import { level5Modules } from './modulesLevel5';

export { courseLevels } from './levels';
export { topUzbekChannels, allCourseChannels, externalTools } from './resources';
export { auditChecklistItems } from './checklist';

export const allModules: Module[] = [
  ...level1Modules,
  ...level2Modules,
  ...level3Modules,
  ...level4Modules,
  ...level5Modules,
];

export const allLessons: Lesson[] = allModules.flatMap((m) => m.lessons);

export function getModuleById(id: number | string): Module | undefined {
  const num = typeof id === 'string' ? parseInt(id, 10) : id;
  return allModules.find((m) => m.id === num);
}

export function getLessonById(moduleId: number | string, lessonId: number | string): Lesson | undefined {
  const m = getModuleById(moduleId);
  if (!m) return undefined;
  const lNum = typeof lessonId === 'string' ? parseInt(lessonId, 10) : lessonId;
  return m.lessons.find((l) => l.lessonNumber === lNum);
}

export function getPrevNextLesson(moduleId: number, lessonNumber: number): {
  prev: { moduleId: number; lessonNumber: number; title: string } | null;
  next: { moduleId: number; lessonNumber: number; title: string } | null;
} {
  const currentIndex = allModules.findIndex((m) => m.id === moduleId);
  if (currentIndex === -1) return { prev: null, next: null };

  const currentModule = allModules[currentIndex];
  const lessonIndex = currentModule.lessons.findIndex((l) => l.lessonNumber === lessonNumber);
  if (lessonIndex === -1) return { prev: null, next: null };

  let prev = null;
  if (lessonIndex > 0) {
    const prevL = currentModule.lessons[lessonIndex - 1];
    prev = { moduleId: currentModule.id, lessonNumber: prevL.lessonNumber, title: prevL.title };
  } else if (currentIndex > 0) {
    const prevMod = allModules[currentIndex - 1];
    const prevL = prevMod.lessons[prevMod.lessons.length - 1];
    prev = { moduleId: prevMod.id, lessonNumber: prevL.lessonNumber, title: prevL.title };
  }

  let next = null;
  if (lessonIndex < currentModule.lessons.length - 1) {
    const nextL = currentModule.lessons[lessonIndex + 1];
    next = { moduleId: currentModule.id, lessonNumber: nextL.lessonNumber, title: nextL.title };
  } else if (currentIndex < allModules.length - 1) {
    const nextMod = allModules[currentIndex + 1];
    const nextL = nextMod.lessons[0];
    next = { moduleId: nextMod.id, lessonNumber: nextL.lessonNumber, title: nextL.title };
  }

  return { prev, next };
}
