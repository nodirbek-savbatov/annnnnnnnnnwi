import { ChannelResource, ExternalToolResource } from '../types/course';

export const topUzbekChannels: ChannelResource[] = [
  {
    name: 'Smart Money Uzbek',
    role: "Bozor strukturasi, SMC, Liquidity va Supply/Demand bo'yicha yetakchi",
    description: "Bozor strukturasi (BOS/CHoCH), Smart Money Concept (SMC), Liquidity sweep va Order Block mavzularida eng chuqur va ilmiy kontent beruvchi kanal.",
    rank: 1,
    topics: ['Market Structure', 'SMC', 'Liquidity', 'Supply & Demand', 'Entry Model', 'Backtesting'],
    url: 'https://www.youtube.com',
  },
  {
    name: 'Sardor | Trader | Businessman',
    role: "Risk Management, Psixologiya va XAUUSD amaliy xususiyatlari",
    description: "Risk Management, psixologik intizom, XAUUSD ning tezkorlik xususiyatlari va real hisobga o'tish auditida eng realistik va to'g'ri yondashuv.",
    rank: 2,
    topics: ['Risk Management', 'XAUUSD Volatility', 'Trading Psychology', 'Real Account Audit'],
    url: 'https://www.youtube.com',
  },
  {
    name: 'Feruzbek Aliev / HBS Hamjamiyati',
    role: "Boshlang'ich tushunchalar, MT5, Orderlar, Breakout/Retest va Journaling",
    description: "Boshlang'ich poydevor tushunchalar, MetaTrader 5, Yapon shamchalari, Support & Resistance, Breakout/Retest va Trading Journaling bo'yicha eng tartibli darsliklar.",
    rank: 3,
    topics: ['Forex Asoslari', 'Candlesticks', 'Support & Resistance', 'Economic News', 'Trading Journal'],
    url: 'https://www.youtube.com',
  },
];

export const allCourseChannels: ChannelResource[] = [
  ...topUzbekChannels,
  {
    name: 'Uranus',
    role: "MT5 Sozlamalari, Texnik Tahlil va Psixologiya",
    description: "MetaTrader 5 platformasini sozlash, klassik texnik tahlil asoslari, treyding psixologiyasi va demo hisobda ishlash qoidalari.",
    topics: ['MetaTrader 5', 'Technical Analysis', 'Psixologiya', 'Demo Trading'],
    url: 'https://www.youtube.com',
  },
  {
    name: 'Habibullo Saidimronov',
    role: "Order turlari va Bozor Mexanikasi",
    description: "Bozor va kechiktirilgan buyruqlar (Market, Limit, Stop) va ularning MT5 dagi amaliy ijrosi.",
    topics: ['Order turlari', 'Spread & Commission', 'Bozor mexanikasi'],
    url: 'https://www.youtube.com',
  },
  {
    name: 'Muhammad Ali | Treyding',
    role: "Fundamental Analiz va DXY Indeksi",
    description: "Makroiqtisodiy tahlil, AQSh dollari indeksi (DXY) va Oltin o'rtasidagi korrelyatsiya asoslari.",
    topics: ['Fundamental Analiz', 'DXY', 'Korrelyatsiya', 'Makroiqtisodiyot'],
    url: 'https://www.youtube.com',
  },
];

export const externalTools: ExternalToolResource[] = [
  {
    name: 'TradingView',
    purpose: 'Grafik tahlili va Bar Replay (Backtesting)',
    description: "XAUUSD ning global grafiklari, SMC tahlil asboblari va o'tmishdagi 100 ta savdoni pleyer kabi sinash (Replay Mode) uchun asosiy platforma.",
    url: 'https://www.tradingview.com',
    category: 'backtest',
  },
  {
    name: 'ForexFactory',
    purpose: 'Iqtisodiy Yangiliklar Kalendari (Red Folder)',
    description: "NFP, CPI, FOMC, PCE yangiliklarini real vaqt rejimida kuzatish, kutilma va fakt ko'rsatkichlarini taqqoslash.",
    url: 'https://www.forexfactory.com',
    category: 'calendar',
  },
  {
    name: 'Investing.com',
    purpose: 'Global Makroiqtisodiy Kalendar va Xomashyo Tahlili',
    description: "DXY Dollar indeksi, foiz stavkalari, davlat obligatsiyalari va Oltin bo'yicha chuqur moliyaviy ma'lumotlar.",
    url: 'https://www.investing.com',
    category: 'calendar',
  },
  {
    name: 'MetaTrader 5 (MT5)',
    purpose: 'Savdo Terminali va Buyruqlar Ijrosi',
    description: "Kompyuter va telefonda demo va real hisoblarni boshqarish, limit/stop buyruqlar joylashtirish va grafik sozlamalari.",
    url: 'https://www.metatrader5.com',
    category: 'platform',
  },
  {
    name: 'Soft4FX Forex Simulator',
    purpose: 'MT5 uchun professional Backtest vositasi',
    description: "MT5 terminali ichida tarixiy ma'lumotlar ustida aniq spred va ko'p taymfreymlarda amaliy mashq qilish simulyatori.",
    url: 'https://soft4fx.net',
    category: 'backtest',
  },
  {
    name: 'Notion / Excel',
    purpose: 'Trading Journal (Savdo Kundaligi)',
    description: "Har bir savdoning skrinshoti, 13 ta asosiy parametri, psixologik holat va oylik natijalarni tizimli qayd etish vositasi.",
    url: 'https://www.notion.so',
    category: 'journal',
  },
];
