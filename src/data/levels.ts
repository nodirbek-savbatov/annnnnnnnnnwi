import { CourseLevel } from '../types/course';

export const courseLevels: CourseLevel[] = [
  {
    level: 1,
    title: 'LEVEL 1',
    subtitle: 'Trading asoslari, MT5 va orderlar',
    description: "Valyuta juftliklari, XAUUSD ning tabiati, MT5 terminali sozlamalari, buyruqlar turlari va likvidlik mexanikasi.",
    moduleNumbers: [1, 2, 3],
    color: '#3b82f6', // blue
  },
  {
    level: 2,
    title: 'LEVEL 2',
    subtitle: 'Price Action, Market Structure, Supply/Demand, Liquidity',
    description: "Yapon shamchalari, Multi-Timeframe tahlil, BOS va CHoCH, Range chegaralari, S&R zonalari, Order Block va Liquidity sweep.",
    moduleNumbers: [4, 5, 6, 7, 8, 9, 10, 11],
    color: '#10b981', // emerald
  },
  {
    level: 3,
    title: 'LEVEL 3',
    subtitle: 'Technical Analysis, Fundamental Analysis, XAUUSD va Economic News',
    description: "Klassik grafik figuralari, RSI va MA cheklovlari, XAUUSD sessiyalari (London, NY, Asian sweep), DXY korrelyatsiyasi va NFP/CPI yangiliklari.",
    moduleNumbers: [12, 13, 14, 15, 16],
    color: '#f59e0b', // amber
  },
  {
    level: 4,
    title: 'LEVEL 4',
    subtitle: 'Risk Management, Psychology, Entry/Exit, Backtesting',
    description: "1-2% risk qoidasi, Lot kalkulyatori, FOMO va Revenge trading nazorati, aniq 3-konflyuens entry modeli, exit intizomi va 100 ta savdo backtest protokoli.",
    moduleNumbers: [17, 18, 19, 20, 21],
    color: '#8b5cf6', // purple
  },
  {
    level: 5,
    title: 'LEVEL 5',
    subtitle: 'Trading Journal, Demo Trading, Statistics, Real Account Audit',
    description: "Savdo jurnali yuritish, 1-3 oylik demo intizom, Expectancy va Profit Factor hisob-kitoblari hamda 25 talik real hisob audit checklisti.",
    moduleNumbers: [22, 23, 24, 25],
    color: '#ec4899', // pink/rose
  },
];
