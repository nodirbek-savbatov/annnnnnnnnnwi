import { Module } from '../types/course';

export const level2Modules: Module[] = [
  {
    id: 4,
    slug: 'module-4',
    title: 'CANDLESTICK (YAPON SHAMCHALARI)',
    subtitle: 'OHLC anatomiyasi va bozor psixologiyasi',
    level: 2,
    description: "Sham tanasi, soyasi (wick), xaridorlar va sotuvchilar bosimi, Pinbar va Engulfing modellari.",
    objective: "Yapon shamchalaridagi Open, High, Low, Close (OHLC) qiymatlarini o'qish, sham tanasi (body) va soyasi (wick) orqali xaridorlar hamda sotuvchilar kurashini tushunish.",
    bestChannel: 'Feruzbek Aliev',
    bestVideo: 'Candlesticks (Yapon shamchalari) darsligi',
    lessons: [
      {
        id: 'm4-l1',
        moduleId: 4,
        lessonNumber: 1,
        title: 'Yapon shamchalari anatomiyasi va o\'qilishi',
        objective: "Yapon shamchalaridagi Open, High, Low, Close (OHLC) qiymatlarini o'qish, sham tanasi (body) va soyasi (wick) orqali xaridorlar hamda sotuvchilar kurashini tushunish.",
        mainVideo: {
          title: 'Candlesticks (Yapon shamchalari) darsligi',
          channel: 'Feruzbek Aliev',
          language: "O'zbekcha",
          duration: '19:30',
          date: '2023-yil',
          qualityScore: 94,
          youtubeUrl: 'https://www.youtube.com/watch?v=W7Sp6Ko6YZU',
          youtubeId: 'W7Sp6Ko6YZU',
        },
        analysis: {
          coveredTopics: [
            'OHLC mantiqiy tuzilishi',
            'Bullish va Bearish shamlar',
            'Uzun soya (wick) nimani anglatishi (Rejection / Narx rad etilishi)',
            'Pinbar va Engulfing patterlarining bozor mantiqiy ma\'nosi',
          ],
          missingTopics: [
            'Faqat shamlarga tayanib savdo qilish oqibatlari (kontekstsiz shamlar ishlamaydi)',
          ],
          warningsOrDubious: "HEURISTIC: Sham patternlari yakkalangan holda emas, faqat muhim darajalarda (Support/Resistance/Supply/Demand) ma'noga ega.",
        },
        whyThisVideo: [
          'Sham formatsiyasining ortidagi psixologiyani (sotuvchilar va xaridorlar bosimini) tushuntiradi.',
        ],
        backupVideo: {
          title: 'Yapon shamchalari va analiz',
          channel: 'HBS HAMJAMIYATI',
          youtubeUrl: 'https://www.youtube.com/watch?v=fou_OuEDYaI',
          youtubeId: 'fou_OuEDYaI',
        },
        textbookConnection: {
          badges: [
            {
              type: 'HEURISTIC',
              text: "Sham patternlari yakkalangan holda emas, faqat muhim darajalarda (Support/Resistance/Supply/Demand) ma'noga ega.",
            },
          ],
          notes: [
            "Shamning yuqori soyasi — xaridorlar narxni yuqoriga surishga urinib, sotuvchilar tomonidan qaytarilganini ko'rsatadi.",
          ],
        },
        tasks: [
          "Shamning yuqori soyasi (Upper Wick) juda uzun bo'lsa, bu hududda kimlar kuchli bo'lgan?",
          "Engulfing (Yutib yuboruvchi sham) nimani anglatadi?",
        ],
        quizQuestions: [
          {
            id: 'q4-1',
            question: "Shamning yuqori soyasi (Upper Wick) juda uzun bo'lsa, bu nimalardan dalolat beradi?",
            options: [
              "Xaridorlar narxni ko'targan, ammo sotuvchilar agressiv bosim bilan narxni pastga qaytargan (Rejection)",
              "Faqat xaridorlar to'liq nazoratda",
              "Bozor umuman harakatsiz to'xtab qolgan",
              "Spred nolga teng bo'lgan",
            ],
            correctOptionIndex: 0,
            explanation: "Uzun yuqori soya yuqori narxlar darajasida kuchli sotuv bosimi (rejection) yuz berganini bildiradi.",
          },
          {
            id: 'q4-2',
            question: "Engulfing (yutib yuboruvchi) sham patternining bozor ma'nosi nima?",
            options: [
              "Oldingi sham tanasini to'liq qoplab oluvchi yangi sham qarama-qarshi kuchning ustun kelganini bildiradi",
              "Bozor harakati to'xtaganini bildiradi",
              "Bitta doji hosil bo'lganini bildiradi",
              "Hech qanday ma'noga ega emas",
            ],
            correctOptionIndex: 0,
            explanation: "Engulfing shami oldingi shamning butun narx doirasini yutib yuborib, kuch yangi tomonga o'tganini namoyish qiladi.",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    slug: 'module-5',
    title: 'TIMEFRAME (VAQT ORALIQLARI)',
    subtitle: 'Multi-Timeframe Analysis iyerarxiyasi',
    level: 2,
    description: "HTF (D1, H4) va LTF (M15, M5) o'rtasidagi iyerarxiya, trend moslashuvi va optimal kirish nuqtalari.",
    objective: "Katta vaqt oraliqlari (HTF: D1, H4) va kichik vaqt oraliqlari (LTF: M15, M5) o'rtasidagi iyerarxiyani hamda bozor yo'nalishini to'g'ri aniqlashni o'rganish.",
    bestChannel: 'Smart Money Uzbek',
    bestVideo: 'Timeframe va Multi Timeframe Analiz',
    lessons: [
      {
        id: 'm5-l1',
        moduleId: 5,
        lessonNumber: 1,
        title: "Multi-Timeframe Analysis (Ko'p vaqt oralig'ida tahlil)",
        objective: "Katta vaqt oraliqlari (HTF: D1, H4) va kichik vaqt oraliqlari (LTF: M15, M5) o'rtasidagi iyerarxiyani hamda bozor yo'nalishini to'g'ri aniqlashni o'rganish.",
        mainVideo: {
          title: 'Timeframe va Multi Timeframe Analiz',
          channel: 'Smart Money Uzbek',
          language: "O'zbekcha",
          duration: '15:40',
          date: '2024-yil',
          qualityScore: 91,
          youtubeUrl: 'https://www.youtube.com/watch?v=Ih2pNigr67M',
          youtubeId: 'Ih2pNigr67M',
        },
        analysis: {
          coveredTopics: [
            'HTF (Higher Timeframe) — bozorning umumiy yo\'nalishi (Trend)',
            'LTF (Lower Timeframe) — bozorga kirish nuqtasi (Entry point)',
            'Timeframe alignment (Vaqt oraliqlarining mos kelishi)',
          ],
          missingTopics: [
            'M1 taymfreymida shovqin va soxta signallarni filtrlash',
          ],
          warningsOrDubious: "Yo'q.",
        },
        whyThisVideo: [
          'Kichik taymfreymda trendga qarshi savdo qilish xatolarini ochib beradi.',
          'H4 da yo\'nalish aniqlab, M15 da kirish modelini namoyish etadi.',
        ],
        backupVideo: {
          note: "Bu darsga mos sifatli o'zbekcha zaxira video topilmadi.",
        },
        textbookConnection: {
          badges: [
            {
              type: 'FACT',
              text: "Katta taymfreymdagi darajalar (HTF) har doim kichik taymfreymdagi (LTF) darajalardan ustunroq kuchga ega.",
            },
          ],
        },
        tasks: [
          'HTF va LTF mos ravishda qanday maqsadlarda ishlatiladi?',
          'D1 trendi ko\'tariluvchi bo\'lsa, M5 dagi tushuvchi harakat nima hisoblanadi (Retracement / Korrektsiya)?',
        ],
        quizQuestions: [
          {
            id: 'q5-1',
            question: "HTF (katta taymfreym) va LTF (kichik taymfreym) qanday vazifalarni bajaradi?",
            options: [
              "HTF — umumiy trend yo'nalishini belgilaydi, LTF — aniq kirish nuqtasini topish uchun",
              "HTF — darhol buyruq ochish, LTF — trendni belgilash uchun",
              "Ikkalasi ham bir xil maqsadga xizmat qiladi",
              "LTF har doim HTF darajalarini bekor qiladi",
            ],
            correctOptionIndex: 0,
            explanation: "Treyder HTF (masalan H4/D1) orqali asosiy bozor yo'nalishini ko'radi, LTF (M15/M5) orqali kichik stop-loss bilan kirish nuqtasini belgilaydi.",
          },
          {
            id: 'q5-2',
            question: "D1 trendi ko'tariluvchi (bullish) bo'lsa, M5 dagi tushuvchi qisqa harakat nima hisoblanadi?",
            options: [
              "Katta trendga nisbatan ichki Retracement (korreksiya)",
              "Yangi global tushuvchi davr",
              "Bozorning tugashi",
              "Soxta grafik",
            ],
            correctOptionIndex: 0,
            explanation: "Katta trend ko'tarilayotganda kichik oraliqdagi tushish harakatlari faqat chuqur korreksiya (pullback) bo'lib, unga qarshi shoshilib savdo ochish xavflidir.",
          },
        ],
      },
    ],
  },
  {
    id: 6,
    slug: 'module-6',
    title: 'MARKET STRUCTURE',
    subtitle: 'HH, HL, LH, LL va BOS / CHoCH mantiqi',
    level: 2,
    description: "Bozor strukturasi: Trend to'lqinlari, Break of Structure va Change of Character hodisalarini aniqlash.",
    objective: "Bozor harakatidagi Higher High (HH), Higher Low (HL), Lower High (LH), Lower Low (LL) nuqtalarini ajratish hamda Break of Structure (BOS) va Change of Character (CHoCH) hodisalarini tushunish.",
    bestChannel: 'Smart Money Uzbek',
    bestVideo: "Market Structure (Bozor strukturasi) 0 dan",
    lessons: [
      {
        id: 'm6-l1',
        moduleId: 6,
        lessonNumber: 1,
        title: 'Bozor strukturasi: HH, HL, LH, LL va BOS/CHoCH',
        objective: "Bozor harakatidagi Higher High (HH), Higher Low (HL), Lower High (LH), Lower Low (LL) nuqtalarini ajratish hamda Break of Structure (BOS) va Change of Character (CHoCH) hodisalarini tushunish.",
        chartType: 'structure',
        mainVideo: {
          title: "Market Structure (Bozor strukturasi) 0 dan",
          channel: 'Smart Money Uzbek',
          language: "O'zbekcha",
          duration: '25:10',
          date: '2024-yil',
          qualityScore: 96,
          youtubeUrl: 'https://www.youtube.com/watch?v=Ih2pNigr67M',
          youtubeId: 'Ih2pNigr67M',
        },
        analysis: {
          coveredTopics: [
            "Ko'tariluvchi (Bullish) va tushuvchi (Bearish) struktura",
            'Internal vs External Structure (Ichki va tashqi struktura)',
            "BOS (Break of Structure) va CHoCH (Trend o'zgarishi)",
            'Valid HH va HL nuqtalarini belgilash shartlari',
          ],
          missingTopics: [
            "Inducement va Liquidity sweep bilan soxta BOS'larni ajratish (Module 11 da o'tiladi)",
          ],
          warningsOrDubious: "Struktura eng muhim poydevor. Videodagi qoidalar xalqaro Smart Money Concept (SMC) standartlariga to'liq mos keladi.",
        },
        whyThisVideo: [
          'Har bir structura nuqtasiga grafikda aniq va tushunarli misollar keltirilgan.',
          "Trend qachon haqiqatan o'zgarganini (CHoCH) aniq ko'rsatib beradi.",
        ],
        backupVideo: {
          title: 'Bozor strukturasi va trendlar',
          channel: 'Uranus',
          youtubeUrl: 'https://www.youtube.com/watch?v=VdxhC7Dx2So',
          youtubeId: 'VdxhC7Dx2So',
        },
        textbookConnection: {
          badges: [
            {
              type: 'RULE',
              text: "Uptrendda har doim HL (Higher Low) saqlanib turishi va yangi HH (Higher High) yorib o'tilishi shart. HL buzilsa = CHoCH.",
            },
          ],
          chartPrompt: "[CHART KERAK: XAUUSD H4. Uptrend: HH → HL → HH → HL. Oxirgi HL buzilishi = CHoCH (Bearish reversal indicator)].",
        },
        tasks: [
          'Uptrend davom etishi uchun narx qaysi nuqtani buzib o\'tishi kerak (HH)?',
          'CHoCH va BOS o\'rtasidagi asosiy farq nima?',
        ],
        quizQuestions: [
          {
            id: 'q6-1',
            question: "Ko'tariluvchi trendda (Uptrend) davomiylik tasdig'i bo'lishi uchun narx qaysi nuqtani buzib o'tishi kerak?",
            options: ['Oldingi HH (Higher High)', 'Oldingi HL (Higher Low)', 'Konsolidatsiya markazini', 'Nol narxini'],
            correctOptionIndex: 0,
            explanation: "Uptrendda narx har safar oldingi eng yuqori nuqtani (HH) buzib o'tib yangi yuqori nuqta hosil qilishi kerak — bu BOS (Break of Structure) deb ataladi.",
          },
          {
            id: 'q6-2',
            question: "BOS va CHoCH o'rtasidagi asosiy fundamental farq nimada?",
            options: [
              "BOS — joriy trendning davom etishini bildiradi; CHoCH esa oxirgi muhim tayanch nuqta buzilib, trend yo'nalishi o'zgarganini bildiradi",
              "BOS faqat tushuvchi bozorda, CHoCH esa faqat ko'tariluvchi bozorda bo'ladi",
              "CHoCH indikator hisoblanadi, BOS esa shamcha turi",
              "Ikkisi bitta narsa va farqi yo'q",
            ],
            correctOptionIndex: 0,
            explanation: "Break of Structure trendning o'z yo'lida davom etishi, Change of Character esa trend o'zgarishi signalidir.",
          },
        ],
      },
    ],
  },
  {
    id: 7,
    slug: 'module-7',
    title: 'TREND VA RANGE',
    subtitle: 'Yo\'nalishli vs yonlama harakat (Consolidation)',
    level: 2,
    description: "Bozorning 2 xil asosiy holati: Trendli impuls va Range (Sideways) zonalarida savdo intizomi.",
    objective: "Bozorning 2 xil asosiy holatini: Trend (yo'nalishli harakat) va Range/Consolidation (yonlama harakat) holatlarini farqlash.",
    bestChannel: 'Feruzbek Aliev',
    bestVideo: 'Trend va Range tushunchasi',
    lessons: [
      {
        id: 'm7-l1',
        moduleId: 7,
        lessonNumber: 1,
        title: 'Trendli va konsolidatsiya (Range) bozorlari',
        objective: "Bozorning 2 xil asosiy holatini: Trend (yo'nalishli harakat) va Range/Consolidation (yonlama harakat) holatlarini farqlash.",
        mainVideo: {
          title: 'Trend va Range tushunchasi',
          channel: 'Feruzbek Aliev',
          language: "O'zbekcha",
          duration: '16:20',
          date: '2023-yil',
          qualityScore: 89,
          youtubeUrl: 'https://www.youtube.com/watch?v=W7Sp6Ko6YZU',
          youtubeId: 'W7Sp6Ko6YZU',
        },
        analysis: {
          coveredTopics: [
            'Uptrend va Downtrend xususiyatlari',
            'Range (Sideways market) va undagi narx chegaralari (High/Low)',
            'Qachon savdo qilmaslik kerak (Range markazida trade qilish xatosi)',
          ],
          missingTopics: ['Range ichidagi Wyckoff akumulyatsiyasi'],
          warningsOrDubious: "Yo'q.",
        },
        whyThisVideo: [
          'Range ichida tartibsiz savdo qilib pul yo\'qotishning oldini oladi.',
        ],
        backupVideo: {
          note: "Bu darsga mos sifatli o'zbekcha zaxira video topilmadi.",
        },
        textbookConnection: {
          badges: [
            {
              type: 'COMMON PRACTICE',
              text: "Rangeda bozor bo'lganda faqat chegaralardan (Support/Resistance) yoki Range breakout bo'lgandan keyin savdo qilinadi.",
            },
          ],
        },
        tasks: [
          'Bozor vaqtining necha foizi Range (konsolidatsiya) holatida bo\'ladi (taxminan 70% )?',
          'Range o\'rtasida savdo ochish nega xavfli?',
        ],
        quizQuestions: [
          {
            id: 'q7-1',
            question: "Statistik ma'lumotlarga ko'ra, moliya bozori o'z vaqtining taxminan necha foizini Range (konsolidatsiya) holatida o'tkazadi?",
            options: ['Taxminan 70%', 'Taxminan 10%', '100%', 'Atigi 5%'],
            correctOptionIndex: 0,
            explanation: "Bozor vaqtining 70% atrofida tor yoki keng yo'lakda (range) harakatlanadi, faqat 30% vaqtida aniq impulsiv trend bo'ladi.",
          },
          {
            id: 'q7-2',
            question: "Range (konsolidatsiya) zonasining o'rtasida yangi savdo ochish nima uchun xavfli?",
            options: [
              "Chunki bu yerda narx ikkala tomonga ham teng ehtimollik bilan tebranadi va stop-loss urilish xavfi juda yuqori",
              "Chunki broker ruxsat bermaydi",
              "Chunki narx doimo to'xtab qoladi",
              "Faqat bayram kunlari xavfli",
            ],
            correctOptionIndex: 0,
            explanation: "Range chegaralarida emas, aynan uning o'rtasida savdoga kirish — tasodifiy tanga tashlash bilan teng.",
          },
        ],
      },
    ],
  },
  {
    id: 8,
    slug: 'module-8',
    title: 'SUPPORT & RESISTANCE',
    subtitle: 'Qo\'llab-quvvatlash, Qarshilik va Flip zonalar',
    level: 2,
    description: "Darajalarni chiziq emas, HUDUD (Zone) sifatida chizish, reaksiyalarni baholash va Flip zonalar mexanikasi.",
    objective: "Bozordagi Support (Qo'llab-quvvatlash) va Resistance (Qarshilik) darajalari hamda zonalarni to'g'ri chizish va reaksiyalarni baholash.",
    bestChannel: 'HBS HAMJAMIYATI',
    bestVideo: "Support va Resistance darajalarini to'g'ri chizish",
    lessons: [
      {
        id: 'm8-l1',
        moduleId: 8,
        lessonNumber: 1,
        title: "Qo'llab-quvvatlash va Qarshilik hududlari",
        objective: "Bozordagi Support (Qo'llab-quvvatlash) va Resistance (Qarshilik) darajalari hamda zonalarni to'g'ri chizish va reaksiyalarni baholash.",
        mainVideo: {
          title: "Support va Resistance darajalarini to'g'ri chizish",
          channel: 'HBS HAMJAMIYATI',
          language: "O'zbekcha",
          duration: '14:15',
          date: '2024-yil',
          qualityScore: 93,
          youtubeUrl: 'https://www.youtube.com/watch?v=fou_OuEDYaI',
          youtubeId: 'fou_OuEDYaI',
        },
        analysis: {
          coveredTopics: [
            'Support va Resistance tushunchasi',
            'Darajani bitta chiziq emas, HUDUD (Zone) sifatida chizish muhimligi',
            'Support/Resistance almashinuvi (Flip zone: Support sobiq Resistancega aylanishi)',
          ],
          missingTopics: [
            "Darajalarning necha marta ushlangani ularni kuchli qilmasligi (aksincha, ko'p tegish darajani zaiflashtiradi)",
          ],
          warningsOrDubious: "FACT: Narx darajaga qanchalik ko'p tegsa, undagi orderlar shunchalik ko'p bajariladi va daraja ZAIFLASHADI (ba'zi xato kitoblarda 'kuchayadi' deyiladi, bu soxta manba).",
        },
        whyThisVideo: [
          "Grafikda ingichka chiziq o'rniga zonalarni chizishni urg'ulaydi.",
          'Real grafik misollaridan foydalanilgan.',
        ],
        backupVideo: {
          title: 'SNR va Price Action',
          channel: 'Uranus',
          youtubeUrl: 'https://www.youtube.com/watch?v=VdxhC7Dx2So',
          youtubeId: 'VdxhC7Dx2So',
        },
        textbookConnection: {
          badges: [
            {
              type: 'FACT',
              text: "Narx darajaga qanchalik ko'p tegsa, undagi orderlar shunchalik ko'p bajariladi va daraja ZAIFLASHADI.",
            },
          ],
          notes: [
            "Support — xaridorlar faollashgan va narx tushishdan to'xtagan hudud.",
            "Resistance — sotuvchilar bosim o'tkazgan hudud.",
          ],
        },
        tasks: [
          'Support buzilib pastga ketganidan so\'ng, qaytib kelganda u nima vazifasini o\'taydi (Resistance)?',
          'Nima uchun darajani chiziq emas, zona deb qarash kerak?',
        ],
        quizQuestions: [
          {
            id: 'q8-1',
            question: "Support darajasi pastga qarab yorib o'tilsa, narx unga qayta ko'tarilganda bu sobiq sath qanday vazifani bajaradi?",
            options: ['Resistance (Qarshilik)', 'Yana Support bo\'lib qoladi', 'Hech qanday ro\'l o\'ynamaydi', 'Darhol yangi trend'],
            correctOptionIndex: 0,
            explanation: "Flip zone qoidasiga ko'ra buzib o'tilgan Support darajasi kelgusida Resistance bo'lib xizmat qiladi.",
          },
          {
            id: 'q8-2',
            question: "Narx bir sathga 4-5 marta qayta-qayta tegishi haqidagi haqiqat qanday?",
            options: [
              "Darajadagi buyurtmalar tugab, u ZAIFLASHADI va yaqinda buzib o'tilish ehtimoli ortadi",
              "Har tekkanda daraja yanada toshdek qattiq bo'ladi",
              "Daraja yo'qolib ketadi",
              "Spred kengayadi",
            ],
            correctOptionIndex: 0,
            explanation: "Har bir tegilganda o'sha yerdagi limit buyurtmalar qanoatlantiriladi va daraja yorib o'tish uchun himoyasiz bo'lib qoladi.",
          },
        ],
      },
    ],
  },
  {
    id: 9,
    slug: 'module-9',
    title: 'SUPPLY & DEMAND',
    subtitle: 'Order Block va Imbalance (Fair Value Gap)',
    level: 2,
    description: "Institutsional bank buyurtmalari, Order Block va FVG (Imbalance) shakllanishi.",
    objective: "Institutsional ishtirokchilar (banklar) buyurtmalari joylashgan Supply (Taklif) va Demand (Talab) zonalarini va Order Block (OB) strukturasini aniqlash.",
    bestChannel: 'Smart Money Uzbek',
    bestVideo: 'Supply va Demand (Talab va Taklif zonalari)',
    lessons: [
      {
        id: 'm9-l1',
        moduleId: 9,
        lessonNumber: 1,
        title: 'Talab va Taklif zonalari (Order Block)',
        objective: "Institutsional ishtirokchilar (banklar) buyurtmalari joylashgan Supply (Taklif) va Demand (Talab) zonalarini va Order Block (OB) strukturasini aniqlash.",
        chartType: 'supply_demand',
        mainVideo: {
          title: 'Supply va Demand (Talab va Taklif zonalari)',
          channel: 'Smart Money Uzbek',
          language: "O'zbekcha",
          duration: '21:00',
          date: '2024-yil',
          qualityScore: 95,
          youtubeUrl: 'https://www.youtube.com/watch?v=Ih2pNigr67M',
          youtubeId: 'Ih2pNigr67M',
        },
        analysis: {
          coveredTopics: [
            'Supply va Demand mexanikasi',
            'Order Block (Agressiv harakatdan oldingi oxirgi qarama-qarshi sham)',
            'Imbalance (FVG — Fair Value Gap) va uning zonaga bog\'liqligi',
          ],
          missingTopics: ['Barcha shamlarni Order Block deb belgilash xatosi'],
          warningsOrDubious: "Faqat Imbalance hosil qilgan va strukturani buzgan (BOS qilgan) Order Block haqiqiy hisoblanadi.",
        },
        whyThisVideo: [
          'Oddiy Support/Resistance va Supply/Demand o\'rtasidagi farqni ilmiy ochib bergan.',
          'XAUUSD uchun juda mos kelsa keladigan SMC konsepsiyasini o\'rgatadi.',
        ],
        backupVideo: {
          note: "Bu darsga mos sifatli o'zbekcha zaxira video topilmadi.",
        },
        textbookConnection: {
          badges: [
            {
              type: 'RULE',
              text: "Faqat Imbalance (FVG) hosil qilgan va strukturani buzgan (BOS) Order Block haqiqiy hisoblanadi.",
            },
          ],
          chartPrompt: "[CHART KERAK: XAUUSD H1. Agressiv impulsiv o'sishdan oldingi bear sham = Demand Order Block. Narx unga qaytganda (mitigation) Buy reaksiya].",
        },
        tasks: [
          'Order Block valid bo\'lishi uchun qanday 2 ta asosiy shart bajarilishi kerak (Imbalance va BOS)?',
          'Supply zone qaysi nuqtada joylashadi?',
        ],
        quizQuestions: [
          {
            id: 'q9-1',
            question: "Order Block (OB) haqiqiy va ishonchli bo'lishi uchun qaysi ikkita asosiy shart bajarilishi kerak?",
            options: [
              "Narx undan keyin Imbalance (FVG) hosil qilishi va strukturani buzishi (BOS)",
              "Faqat sham rangi qizil bo'lishi kerak",
              "RSI 50 dan yuqori bo'lishi kerak",
              "Hafta oxirida hosil bo'lishi kerak",
            ],
            correctOptionIndex: 0,
            explanation: "SMC qoidalariga ko'ra, haqiqiy institutlar izi bo'lgan Order Block ortidan bozor muvozanati buzilishi (Imbalance) va struktura buzilishi (BOS) yuz berishi shart.",
          },
          {
            id: 'q9-2',
            question: "Narx Demand Order Block ga qaytib kelib uni yumshatish (mitigation) jarayonida nima kutiladi?",
            options: [
              "Xaridorlar reaksiyasi va yuqoriga kuchli impuls",
              "Bozorning bir zumda yopilishi",
              "Narxning to'g'ridan-to'g'ri tubsiz tushishi",
              "Faqat sideways davom etishi",
            ],
            correctOptionIndex: 0,
            explanation: "Mitigation paytida banklar o'zlarining qoldiq xarid buyurtmalarini to'ldirib, narxni qayta yuqoriga yo'naltiradilar.",
          },
        ],
      },
    ],
  },
  {
    id: 10,
    slug: 'module-10',
    title: 'BREAKOUT VA RETEST',
    subtitle: 'Haqiqiy buzilish vs Soxta Fakeout intizomi',
    level: 2,
    description: "Darajalarning buzilishi, sham tanasining darajadan tashqarida yopilishi va Retest intizomi.",
    objective: "Haqiqiy Breakout (Buzilish) va Soxta Breakout (Fakeout/Liquidity Sweep) ni ajrata olish hamda Retest nuqtasida xavfsiz savdoga kirish.",
    bestChannel: 'Feruzbek Aliev',
    bestVideo: 'Breakout va Retest strategiyasi',
    lessons: [
      {
        id: 'm10-l1',
        moduleId: 10,
        lessonNumber: 1,
        title: 'Darajalarning buzilishi va Retest mexanikasi',
        objective: "Haqiqiy Breakout (Buzilish) va Soxta Breakout (Fakeout/Liquidity Sweep) ni ajrata olish hamda Retest nuqtasida xavfsiz savdoga kirish.",
        chartType: 'breakout_retest',
        mainVideo: {
          title: 'Breakout va Retest strategiyasi',
          channel: 'Feruzbek Aliev',
          language: "O'zbekcha",
          duration: '17:50',
          date: '2023-yil',
          qualityScore: 90,
          youtubeUrl: 'https://www.youtube.com/watch?v=W7Sp6Ko6YZU',
          youtubeId: 'W7Sp6Ko6YZU',
        },
        analysis: {
          coveredTopics: [
            'Breakout tasdiqlanishi (Sham tanasi darajadan tashqarida yopilishi)',
            'Retest kutish intizomi (Breakout paytida quvmaslik)',
            'Fakeout (Soxta breakout) belgilari',
          ],
          missingTopics: [
            "XAUUSD dagi spred va yuqori volatillik sababli yuzaga keladigan tezkor soyalar tahlili",
          ],
          warningsOrDubious: "Yo'q.",
        },
        whyThisVideo: [
          'Treyderlarning eng katta xatosi — impuls paytida narx ortidan quvish ekanligini to\'g\'ri ko\'rsatadi.',
        ],
        backupVideo: {
          title: 'Breakout va Retest',
          channel: 'HBS HAMJAMIYATI',
          youtubeUrl: 'https://www.youtube.com/watch?v=fou_OuEDYaI',
          youtubeId: 'fou_OuEDYaI',
        },
        textbookConnection: {
          badges: [
            {
              type: 'RULE',
              text: "Hech qachon breakout bo'layotgan zahoti kirma. Narx darajaga qaytib kelishini (Retest) va tasdiqlovchi sham berishini kut.",
            },
          ],
        },
        tasks: [
          'Haqiqiy breakout bo\'lganini sham tanasi yopilishidan qanday aniqlash mumkin?',
          'Nima uchun breakout ortidan darhol sakrash xavfli?',
        ],
        quizQuestions: [
          {
            id: 'q10-1',
            question: "Haqiqiy breakout (yorib o'tish) ni shamcha orqali qanday tasdiqlash mumkin?",
            options: [
              "Sham tanasi (Body) darajadan to'liq tashqarida yopilishi bilan",
              "Faqat ingichka soya (wick) teshib o'tishi bilan",
              "Bozor ochilishi bilanoq",
              "Indikator rangi o'zgarganda",
            ],
            correctOptionIndex: 0,
            explanation: "Agar sham faqat soyasi bilan teshib o'tib qaytib yopilsa, bu soxta manevr (fakeout) bo'ladi. Haqiqiy yorib o'tishda sham tanasi qat'iy ravishda darajadan tashqarida yopiladi.",
          },
          {
            id: 'q10-2',
            question: "Breakout sodir bo'layotgan lahzada impuls ortidan quvib savdo ochmaslikning sababi nima?",
            options: [
              "Narx tezda orqaga qaytib retest qiladi yoki fakeout bo'lib stop lossga uriladi",
              "Spred nolga tushadi",
              "Kompaniya foydasi kamayadi",
              "Grafik to'xtab qoladi",
            ],
            correctOptionIndex: 0,
            explanation: "Professional intizom — xotirjamlik bilan retest kutish va tasdiqlovchi signal bilan kamroq xavf ostida kirishdir.",
          },
        ],
      },
    ],
  },
  {
    id: 11,
    slug: 'module-11',
    title: 'LIQUIDITY (LIKVIDLIK)',
    subtitle: 'Bozor yoqilg\'isi: Buy-side, Sell-side va Liquidity Sweep',
    level: 2,
    description: "Likvidlik ovlari, Equal Highs (EQH), Equal Lows (EQL), Trendline Liquidity va Reversal harakat.",
    objective: "Bozorda likvidlik (Stop Loss'lar toplangan joylar) qayerda joylashishini va yirik o'yinchilar narxni ushbu zonalarga yo'naltirish mexanizmini anglash.",
    bestChannel: 'Smart Money Uzbek',
    bestVideo: "Liquidity (Likvidlik) nima? SMC Darsligi",
    lessons: [
      {
        id: 'm11-l1',
        moduleId: 11,
        lessonNumber: 1,
        title: "Bozor yoqilg'isi: Liquidity tushunchasi va turlari",
        objective: "Bozorda likvidlik (Stop Loss'lar toplangan joylar) qayerda joylashishini va yirik o'yinchilar narxni ushbu zonalarga yo'naltirish mexanizmini anglash.",
        chartType: 'liquidity',
        mainVideo: {
          title: "Liquidity (Likvidlik) nima? SMC Darsligi",
          channel: 'Smart Money Uzbek',
          language: "O'zbekcha",
          duration: '28:00',
          date: '2024-yil',
          qualityScore: 97,
          youtubeUrl: 'https://www.youtube.com/watch?v=Ih2pNigr67M',
          youtubeId: 'Ih2pNigr67M',
        },
        analysis: {
          coveredTopics: [
            'Buy-side va Sell-side Liquidity',
            'Equal Highs (EQH) va Equal Lows (EQL)',
            'Liquidity Sweep (Likvidlikni yig\'ib olish) va reversal harakat',
            'Trendline Liquidity',
          ],
          missingTopics: ['Inducement va Session Liquidity chalkashliklari'],
          warningsOrDubious: "FACT: Bozor narxi indikatordan emas, LIKVIDLIKDAN harakatlanadi. Likvidlik — bu bozor yoqilg'isi.",
        },
        whyThisVideo: [
          'Nega tez-tez sizning Stop Loss\'ingiz urilib, keyin narx siz o\'ylagan yo\'nalishga ketishini mantiqiy tushuntirib beradi.',
          'XAUUSD da likvidlik ovini grafikda ko\'rsatadi.',
        ],
        backupVideo: {
          note: "Bu darsga mos zaxira o'zbekcha video topilmadi.",
        },
        textbookConnection: {
          badges: [
            {
              type: 'FACT',
              text: "Bozor narxi indikatordan emas, LIKVIDLIKDAN harakatlanadi. Likvidlik — bu bozor yoqilg'isi.",
            },
          ],
          notes: [
            "Agar siz bozorda likvidlik qayerdaligini bilmasangiz, demak, SIZ o'zingiz bozordagi likvidliksiz (sizning SL'ingizni yeyishadi).",
          ],
        },
        tasks: [
          'Equal Highs (Teng cho\'qqilar) tepasida treyderlarning qanday orderlari joylashgan bo\'ladi (Buy Stop / Stop Loss)?',
          'Liquidity Sweep bo\'lgandan so\'ng narx reaksiyasi qanday bo\'ladi?',
        ],
        quizQuestions: [
          {
            id: 'q11-1',
            question: "Equal Highs (teng cho'qqilar) ustida odatda qanday buyurtmalar to'plangan bo'ladi?",
            options: [
              "Sotuvchilarning Stop Losslari va breakout treyderlarning Buy Stop orderlari",
              "Hech qanday buyurtma bo'lmaydi",
              "Faqat broker komissiyasi",
              "Limit sell orderlari",
            ],
            correctOptionIndex: 0,
            explanation: "Teng cho'qqilar ustida ulkan miqdorda Buy-side Liquidity to'planadi; banklar o'zlarining katta Sell pozitsiyalarini to'ldirish uchun narxni o'sha tomonga olib boradilar.",
          },
          {
            id: 'q11-2',
            question: "Liquidity Sweep (likvidlikni yig'ib olish) hodisasi sodir bo'lgandan so'ng narx qanday odatiy harakatni amalga oshiradi?",
            options: [
              "Tez va tajovuzkor ravishda teskari tomonga (reversal) buriladi",
              "Bir xil darajada muzlab qoladi",
              "Cheksiz davom etadi",
              "Faqat 1 pip yuradi",
            ],
            correctOptionIndex: 0,
            explanation: "Likvidlik olingach, 'yoqilg'i' to'planadi va narx darhol rejalashtirilgan asl yo'nalishiga shiddat bilan buriladi.",
          },
        ],
      },
    ],
  },
];
