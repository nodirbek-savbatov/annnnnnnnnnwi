import { Module } from '../types/course';

export const level4Modules: Module[] = [
  {
    id: 17,
    slug: 'module-17',
    title: 'RISK MANAGEMENT (ENG MUHIM MODUL)',
    subtitle: 'Risk Per Trade, Position Sizing va Lot Kalkulyatori',
    level: 4,
    description: "Kapitalning ko'pi bilan 1-2% ini riskka qo'yish, stop-loss masofasiga qarab lot hajmini professional hisoblash formulasi.",
    objective: "Har bir savdoda kapilalning ko'pi bilan 1-2 foizini xavfga qo'yish, stop-loss masofasiga qarab lot hajmini professional hisoblash.",
    bestChannel: 'Sardor | Trader | Businessman',
    bestVideo: 'Risk Management (Pulni boshqarish) oltin qoidalari',
    lessons: [
      {
        id: 'm17-l1',
        moduleId: 17,
        lessonNumber: 1,
        title: 'Risk Per Trade, Position Sizing va Lot Kalkulyatori',
        objective: "Har bir savdoda kapilalning ko'pi bilan 1-2 foizini xavfga qo'yish, stop-loss masofasiga qarab lot hajmini professional hisoblash.",
        hasCalculator: 'risk',
        mainVideo: {
          title: 'Risk Management (Pulni boshqarish) oltin qoidalari',
          channel: 'Sardor | Trader | Businessman',
          language: "O'zbekcha",
          duration: '14:10',
          date: '2026-yil',
          qualityScore: 98,
          youtubeUrl: 'https://www.youtube.com/watch?v=QT6lRsW3DI4',
          youtubeId: 'QT6lRsW3DI4',
        },
        analysis: {
          coveredTopics: [
            'Bir savdoga 1-2% risk qoidasi',
            'Lot size ni stop-loss pipsiga qarab hisoblash',
            'Risk/Reward (R:R) nisbati (Kamida 1:2 yoki 1:3)',
            'Margin Call va Stop Out holatining kelib chiqishi',
          ],
          missingTopics: ['Murakkab Kelly Criterion formulasi'],
          warningsOrDubious: "Yo'q. Video 100% risk menejmentning akademik prinsiplariga tayangan.",
        },
        whyThisVideo: [
          'Professional va havaskor o\'rtasidagi yagona farq — Risk Management ekanini aniq ko\'rsatib beradi.',
          'Depositni saqlab qolishning aniq formulalarini beradi.',
        ],
        backupVideo: {
          title: 'Risk Menejment va Lot hisoblash',
          channel: 'Feruzbek Aliev',
          youtubeUrl: 'https://www.youtube.com/watch?v=W7Sp6Ko6YZU',
          youtubeId: 'W7Sp6Ko6YZU',
        },
        textbookConnection: {
          badges: [
            {
              type: 'FORMULA',
              text: "Risk Amount ($) = Account Balance × Risk % | Lot Size = Risk Amount / (Stop Loss (pips) × Pip Value)",
            },
          ],
          formula: "Risk Amount ($) = Account Balance × Risk %\nLot Size = Risk Amount / (Stop Loss (pips) × Pip Value)",
          formulaExplanation: "Misol: $1000 balans, 1% risk = $10 risk. Stop Loss = 20 pips. XAUUSD lot size = 0.05 lot.",
          notes: [
            "Hech qachon bitta savdoga depozitning 2% idan ko'prog'ini xavfga qo'ymang.",
            "Minimal Risk:Reward nisbati kamida 1:2 yoki 1:3 bo'lishi shart.",
          ],
        },
        tasks: [
          '$500 depozit va 2% risk bo\'lganda, bitta savdodagi maksimal zararingiz qancha bo\'lishi kerak ($10)?',
          'Win rate 40% bo\'lsa ham, Risk/Reward 1:3 bo\'lsa, uzoq muddatda foyda qilish mumkinmi?',
        ],
        quizQuestions: [
          {
            id: 'q17-1',
            question: "$500 depozit va 2% qat'iy risk qoidasi o'rnatilgan bo'lsa, bitta savdodagi ruxsat berilgan maksimal zarar (Risk Amount) necha dollar bo'ladi?",
            options: ['$10', '$50', '$100', '$25'],
            correctOptionIndex: 0,
            explanation: "$500 × 2% = $10. Demak sizning stop lossingiz urilganda yo'qotishingiz aniq $10 dan oshmasligi kerak.",
          },
          {
            id: 'q17-2',
            question: "Agar treyderning Win Rate ko'rsatkichi atigi 40% bo'lsa, lekin har bir foydali savdoda Risk/Reward 1:3 bo'lsa, u uzoq muddatda foydada bo'ladimi?",
            options: [
              "Ha, u doimiy sof daromad keltiradi (10 savdoda: 4 g'alaba × 3R = +12R, 6 mag'lubiyat × 1R = -6R, sof natija +6R)",
              "Yo'q, 40% bu juda past va hisob kuyadi",
              "Faqat 100% win rate foyda keltiradi",
              "Bu faqat tasodifga bog'liq",
            ],
            correctOptionIndex: 0,
            explanation: "To'g'ri Risk/Reward (1:2, 1:3) hatto 40% lik g'alaba ko'rsatkichida ham jiddiy barqaror daromad keltirish imkonini beradi.",
          },
        ],
      },
    ],
  },
  {
    id: 18,
    slug: 'module-18',
    title: 'TRADING PSYCHOLOGY',
    subtitle: 'Hissiyotlar boshqaruvi: FOMO va Revenge Trading',
    level: 4,
    description: "FOMO (o'tkazib yuborish qo'rquvi), Revenge Trading (qasd olish), Overtrading va kunlik zarar limiti.",
    objective: "FOMO (O'tkazib yuborish qo'rquvi), Revenge Trading (Bozordan qasd olish) va Overtrading muammolarini psixologik va tizimli bartaraf etish.",
    bestChannel: 'Uranus',
    bestVideo: 'Treyding Psixologiyasi va Hissiyotlarni o\'ldirish',
    lessons: [
      {
        id: 'm18-l1',
        moduleId: 18,
        lessonNumber: 1,
        title: 'Hissiyotlar boshqaruvi: FOMO va Revenge Trading',
        objective: "FOMO (O'tkazib yuborish qo'rquvi), Revenge Trading (Bozordan qasd olish) va Overtrading muammolarini psixologik va tizimli bartaraf etish.",
        mainVideo: {
          title: 'Treyding Psixologiyasi va Hissiyotlarni o\'ldirish',
          channel: 'Uranus',
          language: "O'zbekcha",
          duration: '22:30',
          date: '2023-yil',
          qualityScore: 95,
          youtubeUrl: 'https://www.youtube.com/watch?v=VdxhC7Dx2So',
          youtubeId: 'VdxhC7Dx2So',
        },
        analysis: {
          coveredTopics: [
            'FOMO (Fear of Missing Out) va o\'tib ketgan savdoni quvmaslik intizomi',
            'Stop loss urilgandan keyin alam ustida qayta savdo ochish (Revenge trading)',
            'Kunlik zarar limitini belgilash (Max Daily Loss)',
          ],
          missingTopics: ['Neyrobiologik meditatsiyalar'],
          warningsOrDubious: "Yo'q.",
        },
        whyThisVideo: [
          'Insoniy hissiyotlar strategiyani qanday barbod qilishini amalda tushuntiradi.',
        ],
        backupVideo: {
          title: 'Psixologiya va Intizom',
          channel: 'Sardor | Trader | Businessman',
          youtubeUrl: 'https://www.youtube.com/watch?v=QT6lRsW3DI4',
          youtubeId: 'QT6lRsW3DI4',
        },
        textbookConnection: {
          badges: [
            {
              type: 'PRACTICAL RULE',
              text: "Ketma-ket 2 marta stop loss urilsa, shu kuni MT5 platformasini yoping va savdoni to'xtating.",
            },
          ],
        },
        tasks: [
          'FOMO nima va u treyderni qanday xatoga majbur qiladi?',
          'Revenge Trading hosil bo\'lganda qanday amaliy qoidani qo\'llash kerak?',
        ],
        quizQuestions: [
          {
            id: 'q18-1',
            question: "FOMO (Fear of Missing Out) hissiyoti treyderni qanday asosiy xatoga majbur qiladi?",
            options: [
              "Narx allaqachon uzoqqa ketib bo'lganda, foydani o'tkazib yubormaslik ilinjida shoshilib eng yomon cho'qqida bozorga sakrash",
              "Jurnalni to'ldirishni unutish",
              "Kompaniya aksiyalarini sotib olish",
              "Yangi kompyuter sotib olish",
            ],
            correctOptionIndex: 0,
            explanation: "FOMO treyderni sabrsizlik bilan shoshilishga va qoidalarni chetlab o'tib kechikkan narxda savdoga kirishga majbur qiladi.",
          },
          {
            id: 'q18-2',
            question: "Ketma-ket 2 marta Stop Loss urilganda treyder qaysi qat'iy oltin qoidaga amal qilishi shart?",
            options: [
              "MT5 terminalini yopish, bozorga qasdma-qasd kirmaslik va shu kuni savdoni darhol to'xtatish",
              "Lotni 2 barobar oshirib darhol yangi buyruq ochish",
              "Barcha omonatni depozitga kiritish",
              "Boshqa brokerga o'tish",
            ],
            correctOptionIndex: 0,
            explanation: "Alam va emotsiya ostida qilingan keyingi savdolar (Revenge trading) deyarli doim butun depozitning yo'qolishi bilan yakunlanadi.",
          },
        ],
      },
    ],
  },
  {
    id: 19,
    slug: 'module-19',
    title: 'ENTRY MODEL (BOZORGA KIRISH MODELI)',
    subtitle: 'Setup, Invalidation va Confirmation shartlari',
    level: 4,
    description: "Structure Break + Order Block / Retest + Confirmation Candle konflyuensi va aniq kirish modeli.",
    objective: "O'zingizning aniq kirish modelingizni (Structure Break + Order Block / Retest + Confirmation Candle) yaratish.",
    bestChannel: 'Smart Money Uzbek',
    bestVideo: 'Aniq Entry Model va Strategiya',
    lessons: [
      {
        id: 'm19-l1',
        moduleId: 19,
        lessonNumber: 1,
        title: 'Setup, Invalidation va Confirmation shartlari',
        objective: "O'zingizning aniq kirish modelingizni (Structure Break + Order Block / Retest + Confirmation Candle) yaratish.",
        mainVideo: {
          title: 'Aniq Entry Model va Strategiya',
          channel: 'Smart Money Uzbek',
          language: "O'zbekcha",
          duration: '24:10',
          date: '2024-yil',
          qualityScore: 94,
          youtubeUrl: 'https://www.youtube.com/watch?v=Ih2pNigr67M',
          youtubeId: 'Ih2pNigr67M',
        },
        analysis: {
          coveredTopics: [
            'Setup va Trigger o\'rtasidagi farq',
            'Invalidation point (Strategiya qachon bekor bo\'lishi)',
            'Confluence (Bir nechta omillarning bir joyda mos kelishi)',
          ],
          missingTopics: [
            '100% kafolatlangan savdoga kirish signallari (chunki bunday narsa mavjud emas)',
          ],
          warningsOrDubious: "Yo'q.",
        },
        whyThisVideo: [
          'Bozorga tasodifiy his-tuyg\'u bilan emas, checklist asosida kirishni shakllantiradi.',
        ],
        backupVideo: {
          note: "Bu darsga mos zaxira o'zbekcha video topilmadi.",
        },
        textbookConnection: {
          badges: [
            {
              type: 'RULE',
              text: "Kirish modeli uchun kamida 3 ta tasdiq (Confluence) kerak: 1. HTF Key Zone (Demand/Support); 2. LTF Structure Change (CHoCH); 3. Risk/Reward kamida 1:3.",
            },
          ],
          notes: [
            "Invalidation Point — narx ushbu darajadan oshsa, tahlil mutlaqo o'z kuchini yo'qotadi va savdo g'oyasi bekor qilinadi.",
          ],
        },
        tasks: [
          'Invalidation Point (Invalidatsiya nuqtasi) nima?',
          'Barcha shartlar bajarilmasa, lekin narx tez ketayotgan bo\'lsa, kirish kerakmi?',
        ],
        quizQuestions: [
          {
            id: 'q19-1',
            question: "Tradingda 'Invalidation Point' (bekor bo'lish nuqtasi) nimani bildiradi?",
            options: [
              "Narx ushbu nuqtani buzib o'tsa, sizning butun savdo g'oyangiz va taxminingiz bekor bo'ladigan aniq mezon",
              "Bozor ochiladigan daqiqa",
              "Brokerning komissiya summasi",
              "Eng yuqori foyda sathi",
            ],
            correctOptionIndex: 0,
            explanation: "Savdoga kirishdan avval aynan qaysi nuqtada o'z fikringiz xato ekanligini bilish — professional treyderning belgisidir.",
          },
          {
            id: 'q19-2',
            question: "Barcha kirish shartlari hali to'liq shakllanmagan bo'lsa, ammo narx juda tez yuqoriga/pastga ketayotgan bo'lsa savdoga kirish kerakmi?",
            options: [
              "Yo'q! Checklist shartlari to'liq bajarilmaguncha hech qachon savdoga kirmaslik intizom talabidir",
              "Ha, darhol barcha pul bilan kirish kerak",
              "Bozor kutib turmaydi, shuning uchun shartlarni unuting",
              "Faqat kechki payt kirish mumkin",
            ],
            correctOptionIndex: 0,
            explanation: "Tizimli intizom barcha 3 konflyuens (HTF zona, LTF CHoCH, 1:3 RR) mos kelishini talab qiladi; shoshilish bu xato.",
          },
        ],
      },
    ],
  },
  {
    id: 20,
    slug: 'module-20',
    title: 'EXIT MODEL (BOZORDAN CHIQISH)',
    subtitle: 'Take Profit, Stop Loss va Breakeven strategiyasi',
    level: 4,
    description: "Bozordan o'z vaqtida chiqish, Take Profit ni mantiqiy darajalarga qo'yish, Breakeven va Partial Close san'ati.",
    objective: "Bozordan o'z vaqtida chiqish, Take Profit ni mantiqiy struktura nuqtalariga qo'yish mexanizmi hamda Partial Close (qisman yopish) ni o'rganish.",
    bestChannel: 'HBS HAMJAMIYATI',
    bestVideo: 'Take Profit va Stop Loss to\'g\'ri joylashtirish',
    lessons: [
      {
        id: 'm20-l1',
        moduleId: 20,
        lessonNumber: 1,
        title: 'Take Profit, Stop Loss va Breakeven strategiyasi',
        objective: "Bozordan o'z vaqtida chiqish, Take Profit ni mantiqiy struktura nuqtalariga qo'yish mexanizmi hamda Partial Close (qisman yopish) ni o'rganish.",
        mainVideo: {
          title: 'Take Profit va Stop Loss to\'g\'ri joylashtirish',
          channel: 'HBS HAMJAMIYATI',
          language: "O'zbekcha",
          duration: '13:45',
          date: '2024-yil',
          qualityScore: 91,
          youtubeUrl: 'https://www.youtube.com/watch?v=fou_OuEDYaI',
          youtubeId: 'fou_OuEDYaI',
        },
        analysis: {
          coveredTopics: [
            'SL ni strukturadan tashqariga qo\'yish',
            'TP ni qarama-qarshi likvidlik zonasiga qo\'yish',
            'Breakeven (Bezubitok) ga o\'tkazish shartlari',
            'Partial Close (Pozitsiyaning 50% qismini foydada yopish)',
          ],
          missingTopics: ['Trailing Stop avtomatlashtirish algoritmlari'],
          warningsOrDubious: "COMMON PRACTICE: Pozitsiya 1:1 yoki 1:2 R:R ga yetganda half-close va breakeven qilish xavfni nolgacha tushiradi.",
        },
        whyThisVideo: [
          'Ochko\'zlik sababli foydadagi savdoni zararga aylantirmaslikni o\'rgatadi.',
        ],
        backupVideo: {
          note: "Bu darsga mos zaxira o'zbekcha video topilmadi.",
        },
        textbookConnection: {
          badges: [
            {
              type: 'COMMON PRACTICE',
              text: "Pozitsiya 1:1 yoki 1:2 R:R ga yetganda half-close (50% yopish) va breakeven qilish xavfni nolgacha tushiradi.",
            },
          ],
          notes: [
            "Take Profit — bu siz xohlagan raqam emas, balki narx borib urilishi ehtimoli yuqori bo'lgan mantiqiy qarshilik darajasi.",
          ],
        },
        tasks: [
          'Partial Close (qisman yopish) qachon va nega amalga oshiriladi?',
          'Breakeven ga o\'tkazish savdoni nimadan himoya qiladi?',
        ],
        quizQuestions: [
          {
            id: 'q20-1',
            question: "Partial Close (pozitsiyani qisman yopish) qachon va nima uchun qo'llaniladi?",
            options: [
              "Narx 1:1 yoki 1:2 foydaga yetganda xavfni minimallashtirish va foydaning bir qismini kafolatlash uchun pozitsiyaning 50% ini yopish",
              "Bozor yopilishidan oldin barcha buyruqlarni bekor qilish",
              "Broker qo'shimcha garov so'raganda",
              "Faqat zarar qilganda",
            ],
            correctOptionIndex: 0,
            explanation: "Partial close qilish orqali siz daromadning bir qismini naqd qilasiz va qolgan qismini Breakeven ga qo'yib stresssiz saqlaysiz.",
          },
          {
            id: 'q20-2',
            question: "Stop Lossni Breakeven (bezubitok) darajasiga ko'chirish savdoni nimadan himoya qiladi?",
            options: [
              "Narx kutilmaganda orqaga qaytgan taqdirda ham depozitga ziyon yetmasligini (zararsiz nolga chiqishini) ta'minlaydi",
              "Faqat broker komissiyasini ko'paytiradi",
              "Pozitsiyani kattalashtiradi",
              "Hech qanday farq qilmaydi",
            ],
            correctOptionIndex: 0,
            explanation: "Breakeven — savdo kirish nuqtasiga stop lossni surish orqali xavfni butunlay nollashtirish usulidir.",
          },
        ],
      },
    ],
  },
  {
    id: 21,
    slug: 'module-21',
    title: 'BACKTESTING',
    subtitle: 'Tarixiy ma\'lumotlarda 100 ta savdo sinovi protokoli',
    level: 4,
    description: "TradingView Replay simulyatorida 100 ta savdo sinovi, 13 parametrli audit va statistik ustunlik (Edge) isboti.",
    objective: "TradingView yoki Soft4FX kabi simulyatorlarda o'z strategiyangizni o'tmishdagi 100 ta savdoda sinab, statistik ustunlikni (Edge) isbotlash.",
    bestChannel: 'Smart Money Uzbek',
    bestVideo: 'Backtest qilish metodikasi va TradingView simulyatori',
    lessons: [
      {
        id: 'm21-l1',
        moduleId: 21,
        lessonNumber: 1,
        title: 'Tarixiy ma\'lumotlarda 100 ta savdo sinovi protokoli',
        objective: "TradingView yoki Soft4FX kabi simulyatorlarda o'z strategiyangizni o'tmishdagi 100 ta savdoda sinab, statistik ustunlikni (Edge) isbotlash.",
        mainVideo: {
          title: 'Backtest qilish metodikasi va TradingView simulyatori',
          channel: 'Smart Money Uzbek',
          language: "O'zbekcha",
          duration: '26:30',
          date: '2024-yil',
          qualityScore: 95,
          youtubeUrl: 'https://www.youtube.com/watch?v=Ih2pNigr67M',
          youtubeId: 'Ih2pNigr67M',
        },
        analysis: {
          coveredTopics: [
            'Replay mode (Tarixni pleyer kabi qayta o\'ynatish)',
            '100 ta trade jamlash jadvali',
            'Win rate va Risk/Reward statistik tahlili',
          ],
          missingTopics: [
            '"Bu darsga 100% mos va sifatli o\'zbekcha video topilmadi" deb aytish mumkin bo\'lgan ba\'zi avtomatlashtirilgan koding dasturlari',
          ],
          warningsOrDubious: "HEURISTIC: Backtest dagi ruhiy holat va real bozordagi ruhiy holat har xil, ammo backtest strategiya mantiqan ishlayotganini tasdiqlaydi.",
        },
        whyThisVideo: [
          'Real pulni xavfga qo\'yishdan oldin o\'z strategiyangizga bo\'lgan ishonchni beradi.',
        ],
        backupVideo: {
          note: "Bu darsga mos zaxira o'zbekcha video topilmadi.",
        },
        textbookConnection: {
          badges: [
            {
              type: 'HEURISTIC',
              text: "Backtest dagi ruhiy holat va real bozordagi ruhiy holat har xil, ammo backtest strategiya mantiqan ishlayotganini tasdiqlaydi.",
            },
          ],
          notes: [
            "Har bir backtest savdosi uchun 13 ta parametr qayd etilishi shart: (Sana, Session, Timeframe, Setup, Entry, SL, TP, Risk, RR, Result, Screenshot, Mistake, Market Condition).",
          ],
        },
        tasks: [
          'Nima uchun kamida 100 ta trade backtest qilinishi kerak?',
          'Backtest natijasida olingan Win Rate real savdoda ham xuddi shunday saqlanadimi?',
        ],
        quizQuestions: [
          {
            id: 'q21-1',
            question: "Strategiyani sinashda nima uchun kamida 100 ta savdo (trade) backtest qilinishi shart?",
            options: [
              "Katta sonlar qonuni bo'yicha tasodifiylikni chiqarib tashlash va haqiqiy statistik ustunlikni (Edge) isbotlash uchun",
              "TradingView faqat 100 ta trade ga ruxsat bergani uchun",
              "Faqat sertifikat olish uchun",
              "100 ta raqami chiroyli ko'ringani uchun",
            ],
            correctOptionIndex: 0,
            explanation: "10-20 ta savdo shunchaki omad bo'lishi mumkin; faqat 100 ta intizomli sinov strategiyaning barqarorligini ko'rsatadi.",
          },
          {
            id: 'q21-2',
            question: "Darslikka ko'ra har bir backtest savdosida nechta muhim parametr (Sana, Session, Setup, RR, Screenshot va h.k.) qayd etilishi shart?",
            options: ['13 ta parametr', 'Faqat 2 ta', 'Hech qanday parametr kerak emas', '50 ta'],
            correctOptionIndex: 0,
            explanation: "PDFda aniq ko'rsatilgan: har bir savdo bo'yicha 13 ta parametr to'liq qayd etilishi shart.",
          },
        ],
      },
    ],
  },
];
