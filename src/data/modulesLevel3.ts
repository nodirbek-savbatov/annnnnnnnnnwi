import { Module } from '../types/course';

export const level3Modules: Module[] = [
  {
    id: 12,
    slug: 'module-12',
    title: 'TECHNICAL ANALYSIS',
    subtitle: 'Grafik patternlar va klassik tahlil',
    level: 3,
    description: "Double Top/Bottom, Head & Shoulders, Uchburchaklar, Bayroqlar va ularning real bozordagi ishonchlilik darajasi.",
    objective: "Double Top/Bottom, Head & Shoulders kabi klasik tahlil patternlarini va ularning real bozordagi ishonchlilik darajasini baholash.",
    bestChannel: 'Uranus',
    bestVideo: 'Texnik Tahlil (Technical Analysis) asoslari',
    lessons: [
      {
        id: 'm12-l1',
        moduleId: 12,
        lessonNumber: 1,
        title: 'Grafik patternlar va Klassik Tahlil',
        objective: "Double Top/Bottom, Head & Shoulders kabi klasik tahlil patternlarini va ularning real bozordagi ishonchlilik darajasini baholash.",
        mainVideo: {
          title: 'Texnik Tahlil (Technical Analysis) asoslari',
          channel: 'Uranus',
          language: "O'zbekcha",
          duration: '20:15',
          date: '2023-yil',
          qualityScore: 87,
          youtubeUrl: 'https://www.youtube.com/watch?v=VdxhC7Dx2So',
          youtubeId: 'VdxhC7Dx2So',
        },
        analysis: {
          coveredTopics: [
            'Head and Shoulders (Bosh va elkalar) figuralari',
            'Double Top va Double Bottom',
            'Triangles (Uchburchaklar) va Flags (Bayroqlar)',
          ],
          missingTopics: [
            "Patternlar nega tez-tez soxta signal berishi (Likvidlik nuqtai nazaridan)",
          ],
          warningsOrDubious: "HEURISTIC: Klassik patternlar 100% ishlamaydi. Ularni faqat kontekst va bozor strukturasi bilan birga qo'llash kerak.",
        },
        whyThisVideo: [
          'Klassik grafik shakllarini chizish va o\'qishni sodda o\'rgatadi.',
        ],
        backupVideo: {
          title: 'Grafik Figuralar va Analiz',
          channel: 'Feruzbek Aliev',
          youtubeUrl: 'https://www.youtube.com/watch?v=W7Sp6Ko6YZU',
          youtubeId: 'W7Sp6Ko6YZU',
        },
        textbookConnection: {
          badges: [
            {
              type: 'HEURISTIC',
              text: "Klassik patternlar 100% ishlamaydi. Ularni faqat kontekst va bozor strukturasi bilan birga qo'llash kerak.",
            },
          ],
          notes: [
            "Pattern bu — tarixdagi narx psixologiyasining vizual shakli.",
          ],
        },
        tasks: [
          'Head and Shoulders figurasida bozorga kirish uchun qaysi chiziq (Neckline / Boyun chizig\'i) buzilishi kerak?',
        ],
        quizQuestions: [
          {
            id: 'q12-1',
            question: "Head and Shoulders (Bosh va yelkalar) teskari o'girilish figurasida tasdiqlangan savdoga kirish uchun qaysi chiziq sinishi kerak?",
            options: [
              "Neckline (Bo'yin chizig'i)",
              "Faqat o'ng yelka cho'qqisi",
              "Boshning eng yuqori nuqtasi",
              "Vertikal tayanch",
            ],
            correctOptionIndex: 0,
            explanation: "Neckline (bo'yin chizig'i) buzilib, uning ostida sham yopilishi yoki retest berilishi klassik tasdiq hisoblanadi.",
          },
          {
            id: 'q12-2',
            question: "Klassik grafik patternlarning (Double Top, Head and Shoulders) zamonaviy XAUUSD bozoridagi asosiy xususiyati nima?",
            options: [
              "Ular har doim ham 100% ishlamaydi, chunki yirik o'yinchilar ularning ostidagi likvidlikni sweep qiladi; shuning uchun kontekst va SMC kerak",
              "Ular 100% mutlaq kafolat beradi",
              "Faqat tunda ishlaydi",
              "XAUUSD da umuman qo'llanmaydi",
            ],
            correctOptionIndex: 0,
            explanation: "Klassik shakllar ko'pchilik treyderlar tomonidan bir xil ko'rilgani uchun likvidlik tuzog'i bo'lib xizmat qilishi mumkin, shuning uchun bozor strukturasi bilan uyg'unlashtirilishi shart.",
          },
        ],
      },
    ],
  },
  {
    id: 13,
    slug: 'module-13',
    title: 'INDICATORS',
    subtitle: 'RSI, Moving Average va ularning cheklovlari',
    level: 3,
    description: "Indikatorlarning lagging (kechikuvchi) tabiati, Overbought/Oversold illyuziyasi va tasdiqlovchi vosita qoidalari.",
    objective: "Indikatorlar faqat narx ortidan ergashuvchi (lagging) yordamchi vosita ekanini anglashingiz va RSI hamda Moving Average (MA) dan to'g'ri foydalanish.",
    bestChannel: 'HBS HAMJAMIYATI',
    bestVideo: 'Indikatorlar haqida HAQIQAT (RSI, MA)',
    lessons: [
      {
        id: 'm13-l1',
        moduleId: 13,
        lessonNumber: 1,
        title: 'RSI, Moving Average va ularning cheklovlari',
        objective: "Indikatorlar faqat narx ortidan ergashuvchi (lagging) yordamchi vosita ekanini anglashingiz va RSI hamda Moving Average (MA) dan to'g'ri foydalanish.",
        mainVideo: {
          title: 'Indikatorlar haqida HAQIQAT (RSI, MA)',
          channel: 'HBS HAMJAMIYATI',
          language: "O'zbekcha",
          duration: '15:30',
          date: '2024-yil',
          qualityScore: 92,
          youtubeUrl: 'https://www.youtube.com/watch?v=fou_OuEDYaI',
          youtubeId: 'fou_OuEDYaI',
        },
        analysis: {
          coveredTopics: [
            'RSI (Relative Strength Index) Overbought / Oversold tushunchalari',
            'Moving Average (Harakatlanuvchi o\'rtacha) va Trend tasdig\'i',
            'Indikatorlarning asosiy xatosi (Narx shakllanib bo\'lgach signal berishi)',
          ],
          missingTopics: [
            "Robotlar va sehrli indicator sozlamalari (chunki bunday narsa yo'q)",
          ],
          warningsOrDubious: "FACT: Indikator narxni bashorat qilmaydi, u faqat o'tgan narxlarning matematik hisobini ko'rsatadi.",
        },
        whyThisVideo: [
          '"Sehrli indikator" qidirayotgan boshlovchilar illuziyasini yo\'q qiladi.',
          'Indikatorni faqat ikkilamchi tasdiq (confluence) sifatida ishlatishni o\'rgatadi.',
        ],
        backupVideo: {
          note: "Bu darsga mos zaxira o'zbekcha video topilmadi.",
        },
        textbookConnection: {
          badges: [
            {
              type: 'FACT',
              text: "Indikator narxni bashorat qilmaydi, u faqat o'tgan narxlarning matematik hisobini ko'rsatadi.",
            },
          ],
          notes: [
            "Birinchi o'rinda Price Action va Structure, indikator esa faqat oxirgi tasdiqlovchi vosita.",
          ],
        },
        tasks: [
          'Nima uchun indikatorlar "Lagging" (orqada qoluvchi) deb ataladi?',
          'RSI 70 dan yuqoriga chiqsa, bu darhol SELL qilish kerak deganimi? (Yo\'q, bu kuchli uptrend signali ham bo\'lishi mumkin).',
        ],
        quizQuestions: [
          {
            id: 'q13-1',
            question: "Nima uchun texnik indikatorlar 'Lagging' (kechikuvchi) vositalar deb ataladi?",
            options: [
              "Chunki ular kelajakni emas, faqat o'tib ketgan shamlarning narx matematik formulasini hisoblab ko'rsatadi",
              "Chunki internet sekin ishlaydi",
              "Chunki brokerlar ularni kechiktiradi",
              "Chunki faqat kechalari ishlaydi",
            ],
            correctOptionIndex: 0,
            explanation: "Har qanday indikator narxdan keyin harakatlanadi, narx indikator ortidan emas.",
          },
          {
            id: 'q13-2',
            question: "RSI indikatori 70 dan yuqoriga (Overbought) ko'tarilsa, bu darhol SELL qilish kerakligini anglatadimi?",
            options: [
              "Yo'q! Bu kuchli uptrend davom etayotganining belgisi ham bo'lishi mumkin, darhol qarshi savdo ochish xavfli",
              "Ha, 100% barcha mablag' bilan sotish kerak",
              "Grafikni yopish kerak",
              "Broker hisobni to'xtatadi",
            ],
            correctOptionIndex: 0,
            explanation: "Kuchli trend paytida RSI uzoq vaqt 70 dan yuqorida qolishi mumkin; unga qarshi shoshilib sell qilish hisobni tugatishi mumkin.",
          },
        ],
      },
    ],
  },
  {
    id: 14,
    slug: 'module-14',
    title: 'XAUUSD GA XOS TRADING',
    subtitle: 'Oltin (Gold) xususiyatlari, Volatillik va Sessiyalar',
    level: 3,
    description: "Oltin (XAUUSD) ning yuqori tezligi, ATR, London va Nyu-York sessiyalari va Asian Sweep harakati.",
    objective: "XAUUSD aktivining yuqori volatilligi, kunlik yurish diapazoni (ATR), Asian/London/New York sessiyalaridagi xulq-atvorini o'rganish.",
    bestChannel: 'Sardor | Trader | Businessman',
    bestVideo: 'Gold (XAUUSD) savdosi sirlari va xususiyatlari',
    lessons: [
      {
        id: 'm14-l1',
        moduleId: 14,
        lessonNumber: 1,
        title: 'Oltin (Gold) xususiyatlari, Volatillik va Sessiyalar',
        objective: "XAUUSD aktivining yuqori volatilligi, kunlik yurish diapazoni (ATR), Asian/London/New York sessiyalaridagi xulq-atvorini o'rganish.",
        mainVideo: {
          title: 'Gold (XAUUSD) savdosi sirlari va xususiyatlari',
          channel: 'Sardor | Trader | Businessman',
          language: "O'zbekcha",
          duration: '12:40',
          date: '2026-yil',
          qualityScore: 94,
          youtubeUrl: 'https://www.youtube.com/watch?v=QT6lRsW3DI4',
          youtubeId: 'QT6lRsW3DI4',
        },
        analysis: {
          coveredTopics: [
            'XAUUSD ning yuqori tezligi va spred hajmi',
            'London (12:00-16:00 TShV) va New York (17:00-22:00 TShV) sessiyalaridagi asosiy harakatlar',
            'Osiyo sessiyasidagi konsolidatsiya va uning buzilishi (Asian Sweep)',
          ],
          missingTopics: ['Oltinning fiziki zaxiralari tahlili'],
          warningsOrDubious: "Oltinda stop-loss siz savdo qilish halokatli ekani alohida ta'kidlangan.",
        },
        whyThisVideo: [
          'Aynan XAUUSD instrumenti bo\'yicha amaliy maslahatlar berilgan.',
          'Qaysi soatlarda Oltin eng ko\'p harakat qilishini tushuntiradi.',
        ],
        backupVideo: {
          note: "Bu darsga mos zaxira o'zbekcha video topilmadi.",
        },
        textbookConnection: {
          badges: [
            {
              type: 'FACT',
              text: "XAUUSD valyutalarga nisbatan 2-3 baravar tezroq va kengroq pips diapazonida harakat qiladi. Risk har doim pastroq lot bilan ushlanishi kerak.",
            },
          ],
          notes: [
            "London sessiyasi: 12:00 - 16:00 TShV",
            "New York sessiyasi: 17:00 - 22:00 TShV",
            "Asian Sweep: Osiyo sessiyasi chegaralarini erta tongda buzib, London ochilishida qarama-qarshi kuchli harakat boshlanishi",
          ],
        },
        tasks: [
          'Oltin uchun eng likvid va harakatli savdo sessiyalari qaysilar?',
          'Nega XAUUSD da boshqa valyuta juftliklariga qaraganda lot hajmi kichikroq olinishi kerak?',
        ],
        quizQuestions: [
          {
            id: 'q14-1',
            question: "XAUUSD uchun eng yuqori likvidlik va asosiy harakatlar sodir bo'ladigan asosiy sessiyalar qaysilar?",
            options: [
              "London (12:00-16:00 TShV) va New York (17:00-22:00 TShV)",
              "Faqat tunda Tinch okeani sessiyasi",
              "Shanba va yakshanba kunlari",
              "Faqat ertalab 06:00 dan 08:00 gacha",
            ],
            correctOptionIndex: 0,
            explanation: "London va Nyu-York sessiyalari va ayniqsa ularning ustma-ust tushgan soatlarida Oltin eng katta hajm va harakatni namoyish qiladi.",
          },
          {
            id: 'q14-2',
            question: "Nega XAUUSD bo'yicha savdo ochishda EURUSD kabi valyutalarga nisbatan ehtiyotkorroq va pastroq lot tanlanishi shart?",
            options: [
              "Oltinning kunlik diapazoni (ATR) va pip harakat tezligi oddiy valyutalarga qaraganda 2-3 barobar kengroq va tezkor",
              "Chunki brokerlar oltinni taqiqlaydi",
              "Chunki oltinga spred mavjud emas",
              "Faqat bayramlarda shunday",
            ],
            correctOptionIndex: 0,
            explanation: "Oltin bir kunda 200-500 pips bemalol harakat qilishi mumkin; agar lot moslashtirilmasa, hisob tezda yo'qotilishi mumkin.",
          },
        ],
      },
    ],
  },
  {
    id: 15,
    slug: 'module-15',
    title: 'FUNDAMENTAL ANALYSIS',
    subtitle: 'Makroiqtisodiyot, DXY va Oltin korrelyatsiyasi',
    level: 3,
    description: "AQSh Dollari indeksi (DXY), foiz stavkalari, inflyatsiya va Safe-Haven aktivi xususiyatlari.",
    objective: "AQSh Dollari indeksi (DXY), inflyatsiya, Markaziy banklar foiz stavkalari va Oltin narxi o'rtasidagi teskari korrelyatsiyani anglash.",
    bestChannel: 'Muhammad Ali | Treyding',
    bestVideo: 'Fundamental Analiz va DXY (AQSh dollari)',
    lessons: [
      {
        id: 'm15-l1',
        moduleId: 15,
        lessonNumber: 1,
        title: 'Makroiqtisodiyot, DXY va Oltin korrelyatsiyasi',
        objective: "AQSh Dollari indeksi (DXY), inflyatsiya, Markaziy banklar foiz stavkalari va Oltin narxi o'rtasidagi teskari korrelyatsiyani anglash.",
        mainVideo: {
          title: 'Fundamental Analiz va DXY (AQSh dollari)',
          channel: 'Muhammad Ali | Treyding',
          language: "O'zbekcha",
          duration: '18:20',
          date: '2023-yil',
          qualityScore: 89,
          youtubeUrl: 'https://www.youtube.com/watch?v=8mWniIB2oz8',
          youtubeId: '8mWniIB2oz8',
        },
        analysis: {
          coveredTopics: [
            'Fundamental analiz nima?',
            'DXY (Dollar indeksi) oshsa, XAUUSD tushishi mantiqi (Teskari korrelyatsiya)',
            'Inflyatsiya va Oltinning "Boshpana aktiv" (Safe-haven asset) roli',
          ],
          missingTopics: [
            "Bond Yields (AQSh g'aznachilik obligatsiyalari daromadliligi) va Oltin bog'liqligi",
          ],
          warningsOrDubious: "UNCERTAIN: Korrelyatsiya har doim ham 100% ishlamasligi mumkin (geosiyosiy urushlar paytida DXY ham, Oltin ham birga oshishi mumkin).",
        },
        whyThisVideo: [
          'Texnik va fundamental analizning o\'zaro bog\'liqligini o\'rgatadi.',
        ],
        backupVideo: {
          note: "Bu darsga mos zaxira o'zbekcha video topilmadi.",
        },
        textbookConnection: {
          badges: [
            {
              type: 'UNCERTAIN',
              text: "Korrelyatsiya har doim ham 100% ishlamasligi mumkin (geosiyosiy urushlar yoki kutilmagan krizislarda DXY ham, Oltin ham birga oshishi mumkin).",
            },
          ],
          notes: [
            "Oltin dollar bilan narxlanadi (XAU/USD). Shuning uchun Dollar kuchaysa, Oltin nisbatan arzonlashadi.",
          ],
        },
        tasks: [
          'DXY (AQSh Dollari Indeksi) keskin ko\'tarilsa, odatda XAUUSD narxida nima kuzatiladi?',
          'Qaysi holatlarda Dollar ham, Oltin ham bir vaqtning o\'zida qimmatlashishi mumkin (Geosiyosiy xavf/Urushlar)?',
        ],
        quizQuestions: [
          {
            id: 'q15-1',
            question: "Normal bozor sharoitida AQSh Dollari indeksi (DXY) keskin ko'tarilsa, XAUUSD narxida odatda nima sodir bo'ladi?",
            options: [
              "XAUUSD narxi tushadi (Teskari korrelyatsiya)",
              "XAUUSD ham tengma-teng oshadi",
              "Bozor umuman qimirlamaydi",
              "AQSh hukumati oltin sotishni to'xtatadi",
            ],
            correctOptionIndex: 0,
            explanation: "Oltin dollarda narxlangani sababli (XAU/USD), dollar qiymati kuchayganda oltin narxi odatda pastlaydi.",
          },
          {
            id: 'q15-2',
            question: "Qaysi vaziyatda ham AQSh Dollari (DXY), ham Oltin narxi bir vaqtning o'zida birgalikda o'sishi mumkin?",
            options: [
              "Geosiyosiy urushlar, xalqaro xavfsizlik inqirozlari va favqulodda xavf davrida (Safe-Haven qochishi)",
              "Faqat juma kuni kechqurun",
              "Hech qachon bunday bo'lishi mumkin emas",
              "Faqat yangi yil bayramida",
            ],
            correctOptionIndex: 0,
            explanation: "Global urushlar yoki og'ir krizislarda investorlar o'z mablag'larini eng xavfsiz aktivlar — naqd dollar va oltinga birdek yo'naltiradilar.",
          },
        ],
      },
    ],
  },
  {
    id: 16,
    slug: 'module-16',
    title: 'ECONOMIC NEWS',
    subtitle: 'Muhim iqtisodiy yangiliklar: NFP, CPI, FOMC',
    level: 3,
    description: "ForexFactory iqtisodiy kalendari, Red Folder yangiliklari, spred kengayishi va yangilik lahzasida risk nazorati.",
    objective: "Investing.com yoki ForexFactory da iqtisodiy kalendarni o'qish hamda NFP, CPI, PCE va FOMC kabi xabarlar chiqqan daqiqalarda savdo risklarini boshqarish.",
    bestChannel: 'Feruzbek Aliev',
    bestVideo: 'Yangiliklar bilan savdo qilish va ForexFactory',
    lessons: [
      {
        id: 'm16-l1',
        moduleId: 16,
        lessonNumber: 1,
        title: 'Muhim iqtisodiy yangiliklar: NFP, CPI, FOMC',
        objective: "Investing.com yoki ForexFactory da iqtisodiy kalendarni o'qish hamda NFP, CPI, PCE va FOMC kabi xabarlar chiqqan daqiqalarda savdo risklarini boshqarish.",
        mainVideo: {
          title: 'Yangiliklar bilan savdo qilish va ForexFactory',
          channel: 'Feruzbek Aliev',
          language: "O'zbekcha",
          duration: '21:40',
          date: '2023-yil',
          qualityScore: 93,
          youtubeUrl: 'https://www.youtube.com/watch?v=W7Sp6Ko6YZU',
          youtubeId: 'W7Sp6Ko6YZU',
        },
        analysis: {
          coveredTopics: [
            'Red Folder (Qizil papka) — yuqori ta\'sirli yangiliklar',
            'CPI (Inflyatsiya) va NFP (Bandlik statistikasi)',
            'Yangilik paytidagi Spred kengayishi va Slippage (Sarg\'ish/sirpanish) xavfi',
          ],
          missingTopics: [
            'Yangilik lahzasida qimorga o\'xshab buyruq ochish targ\'ib qilinmagan (Bu to\'g\'ri)',
          ],
          warningsOrDubious: "FACT: Yangilik chiqqan birinchi 5-15 daqiqada savdo ochish o'ta yuqori riskli va kutilmagan spred kengayishiga olib keladi.",
        },
        whyThisVideo: [
          'Yangilik vaqtida portlab ketadigan hisoblarning oldini olish intizomini o\'rgatadi.',
        ],
        backupVideo: {
          title: 'Iqtisodiy kalendar va NFP',
          channel: 'HBS HAMJAMIYATI',
          youtubeUrl: 'https://www.youtube.com/watch?v=fou_OuEDYaI',
          youtubeId: 'fou_OuEDYaI',
        },
        textbookConnection: {
          badges: [
            {
              type: 'RULE',
              text: "Boshlovchilar uchun muhim news (CPI, NFP, FOMC) chiqishidan 15 daqiqa oldin va 15 daqiqa keyin savdoga kirmaslik tavsiya etiladi.",
            },
          ],
          notes: [
            "Red Folder yangiliklari: CPI, NFP, FOMC stavka qarorlari, PCE, GDP.",
            "Slippage: Yangilik soniyasida narx sakrashi tufayli stop loss belgilangan narxdan ancha yomon narxda yopilishi xavfi.",
          ],
        },
        tasks: [
          'Qizil papkali yangiliklar nimani anglatadi?',
          'Yangilik vaqtida Slippage (sirpanish) tufayli Stop Loss o\'z vaqtida yopilmasligi mumkinmi?',
        ],
        quizQuestions: [
          {
            id: 'q16-1',
            question: "ForexFactory kalendaridagi 'Red Folder' (Qizil papka) belgisi nimani anglatadi?",
            options: [
              "Bozorga eng kuchli ta'sir qiluvchi yuqori volatillikli iqtisodiy yangilik",
              "Bozor yopilishini bildiradi",
              "Hech qanday ahamiyatga ega emas",
              "Faqat banklar uchun mo'ljallangan sir",
            ],
            correctOptionIndex: 0,
            explanation: "Qizil papkali xabarlar (CPI, NFP, FOMC) e'lon qilinganda narx soniyalar ichida yuzlab punktlarga sakrashi mumkin.",
          },
          {
            id: 'q16-2',
            question: "Yangilik chiqish vaqtida Stop Loss belgilangan bo'lsa ham nima uchun katta zarar yuz berishi mumkin?",
            options: [
              "Slippage (sirpanish) yuz berib, likvidlik yo'qligi sababli SL belgilangan narxdan ancha pastda yopilishi mumkin",
              "Broker kompyuterini o'chirib qo'ygani uchun",
              "Chunki MT5 ishlamay qoladi",
              "Faqat dushanba kunlari shunday bo'ladi",
            ],
            correctOptionIndex: 0,
            explanation: "Kuchli sakrash paytida oraliq narxlarda xaridor bo'lmasa, buyruq eng birinchi mavjud yomon narxda ijro etiladi (Slippage).",
          },
        ],
      },
    ],
  },
];
