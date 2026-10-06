export type BadgeType = 
  | 'FACT' 
  | 'RULE' 
  | 'HEURISTIC' 
  | 'COMMON PRACTICE' 
  | 'UNCERTAIN' 
  | 'PRACTICAL RULE' 
  | 'FORMULA';

export interface VideoInfo {
  title: string;
  channel: string;
  language: string;
  duration: string;
  date: string;
  qualityScore: number; // e.g. 92
  youtubeUrl: string;
  youtubeId: string;
}

export interface BackupVideoInfo {
  title?: string;
  channel?: string;
  youtubeUrl?: string;
  youtubeId?: string;
  whenToUse?: string;
  note?: string; // e.g. "Bu darsga 100% mos va sifatli muqobil o'zbekcha zaxira video topilmadi."
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctOptionIndex: number;
  explanation: string;
}

export interface TextbookBadge {
  type: BadgeType;
  text: string;
}

export interface TextbookConnection {
  badges: TextbookBadge[];
  beforeText?: string;
  afterText?: string;
  formula?: string;
  formulaExplanation?: string;
  notes?: string[];
  chartPrompt?: string; // e.g. [CHART KERAK: XAUUSD H4...]
}

export interface Lesson {
  id: string;
  moduleId: number;
  lessonNumber: number;
  title: string;
  objective: string;
  mainVideo: VideoInfo;
  analysis: {
    coveredTopics: string[];
    missingTopics: string[];
    warningsOrDubious?: string;
  };
  whyThisVideo: string[];
  backupVideo: BackupVideoInfo;
  textbookConnection: TextbookConnection;
  tasks: string[]; // Video ko'rish vazifasi
  quizQuestions: QuizQuestion[];
  chartType?: 'structure' | 'supply_demand' | 'breakout_retest' | 'liquidity';
  hasCalculator?: 'risk' | 'expectancy';
  hasChecklist?: boolean;
}

export interface Module {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  level: 1 | 2 | 3 | 4 | 5;
  description: string;
  objective: string;
  bestChannel: string;
  bestVideo?: string;
  lessons: Lesson[];
}

export interface CourseLevel {
  level: 1 | 2 | 3 | 4 | 5;
  title: string;
  subtitle: string;
  description: string;
  moduleNumbers: number[];
  color: string;
}

export interface ChannelResource {
  name: string;
  role: string;
  description: string;
  rank?: number;
  topics: string[];
  url?: string;
}

export interface ExternalToolResource {
  name: string;
  purpose: string;
  description: string;
  url: string;
  category: 'platform' | 'calendar' | 'backtest' | 'journal';
}

export interface ChecklistAuditItem {
  id: string;
  moduleNumber: number;
  title: string;
  description: string;
  category: 'Backtesting' | 'Demo' | 'Risk' | 'Journal' | 'SMC' | 'Psixologiya';
}
