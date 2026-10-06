import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProgressProvider } from './context/ProgressContext';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { CoursePage } from './pages/CoursePage';
import { ModulePage } from './pages/ModulePage';
import { LessonPage } from './pages/LessonPage';
import { ProgressPage } from './pages/ProgressPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { AboutPage } from './pages/AboutPage';
import { NotFoundPage } from './pages/NotFoundPage';

export default function App() {
  return (
    <ProgressProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="course" element={<CoursePage />} />
            <Route path="course/module/:moduleId" element={<ModulePage />} />
            <Route path="course/module/:moduleId/lesson/:lessonId" element={<LessonPage />} />
            <Route path="progress" element={<ProgressPage />} />
            <Route path="resources" element={<ResourcesPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ProgressProvider>
  );
}

