import { Module } from '../types/course';

export const level5Modules: Module[] = [
  {
    id: 22,
    slug: 'module-22',
    title: 'TRADING JOURNAL',
    subtitle: 'Savdo jurnalini yuritish va xatolarni tahlil qilish',
    level: 5,
    description: "Notion yoki Excel da savdolarni qayd etish, psixologik holat va oylik tahlil o'tkazish intizomi.",
    objective: "Notion yoki Excel da har bir amaliy savdoni skrinshot va izohlar bilan qayd etib borish mexanizmini yo'lga qo'yish.",
    bestChannel: 'Feruzbek Aliev',
    bestVideo: 'Trading Journal yuritish va Notion shabloni',
    lessons: [
      {
        id: 'm22-l1',
        moduleId: 22,
        lessonNumber: 1,
        title: 'Savdo jurnalini yuritish va xatolarni tahlil qilish',
        objective: "Notion yoki Excel da har bir amaliy savdoni skrinshot va izohlar bilan qayd etib borish mexanizmini yo'lga qo'yish.",
        mainVideo: {
          title: 'Trading Journal yuritish va Notion shabloni',
          channel: 'Feruzbek Aliev',
          language: "O'zbekcha",
          duration: '15:00',
          date: '2023-yil',
          qualityScore: 92,
          youtubeUrl: 'https://www.youtube.com/watch?v=W7Sp6Ko6YZU',
          youtubeId: 'W7Sp6Ko6YZU',
        },
        analysis: {
          coveredTopics: [
            'Trading Journal shakllantirish',
            'Har bir savdodan keyin xatolarni va psixologik holatni yozish',
            'Oylik tahlil o\'tkazish',
          ],
          missingTopics: ['Yo\'q'],
          warningsOrDubious: "Yo'q.",
        },
        whyThisVideo: [
          'Yozib borilmagan narsani yaxshilab bo\'lmaydi. Jurnal — treyderning ko\'zgusi.',
        ],
        backupVideo: {
          note: "Bu darsga mos zaxira o'zbekcha video topilmadi.",
        },
        textbookConnection: {
          badges: [
            {
              type: 'FACT',
              text: "Jurnal yuritmaydigan treyder bir xil xatolarni yillab takrorlayveradi.",
            },
          ],
        },
        tasks: [
          'Trading Journal ga kiritilishi shart bo\'lgan 3 ta eng muhim ustun qaysilar?',
        ],
        quizQuestions: [
          {
            id: 'q22-1',
            question: "Trading Journal (Savdo jurnali) nima uchun professional treyderning eng muhim ko'zgusi hisoblanadi?",
            options: [
              "O'z xatolarini tizimli tahlil qilish, emotsional triggerlarni aniqlash va xatolarni takrorlamaslik uchun",
              "Soliq organlariga ko'rsatish uchun",
              "Broker talab qilgani uchun",
              "Faqat maqtanish uchun",
            ],
            correctOptionIndex: 0,
            explanation: "Jurnal yuritilmasa, treyder nima uchun yutqazayotganini tushunmaydi va xuddi o'sha xatoni doim takrorlaydi.",
          },
          {
            id: 'q22-2',
            question: "Savdo jurnaliga kiritilishi shart bo'lgan eng muhim 3 jihat qaysilar?",
            options: [
              "Kirish sababi (Setup), his-tuyg'ular holati (psixologiya) va qilingan xatolar tahlili (Mistake audit)",
              "Faqat dollar summasi",
              "Faqat dushanba kungi ob-havo",
              "Broker nomi va kompyuter modeli",
            ],
            correctOptionIndex: 0,
            explanation: "Qaror qabul qilish sababi, intizom va psixologik holat jurnalning eng qimmatli ustunlaridir.",
          },
        ],
      },
    ],
  },
  {
    id: 23,
    slug: 'module-23',
    title: 'DEMO TRADING',
    subtitle: 'Demo hisobda real intizom bilan savdo qilish',
    level: 5,
    description: "Virtual mablag'ga real puldek mas'uliyat bilan qarash, $100-$500 lik balans va 1-3 oy davomida sinov.",
    objective: "Demo hisobdagi virtual pullarga xuddi o'z real pulingiz kabi mas'uliyat bilan qarash va strategiyani jonli bozorda 1-3 oy davomida sinash.",
    bestChannel: 'Uranus',
    bestVideo: 'Demo hisobda to\'g\'ri ishlash qoidalari',
    lessons: [
      {
        id: 'm23-l1',
        moduleId: 23,
        lessonNumber: 1,
        title: 'Demo hisobda real intizom bilan savdo qilish',
        objective: "Demo hisobdagi virtual pullarga xuddi o'z real pulingiz kabi mas'uliyat bilan qarash va strategiyani jonli bozorda 1-3 oy davomida sinash.",
        mainVideo: {
          title: 'Demo hisobda to\'g\'ri ishlash qoidalari',
          channel: 'Uranus',
          language: "O'zbekcha",
          duration: '11:20',
          date: '2023-yil',
          qualityScore: 90,
          youtubeUrl: 'https://www.youtube.com/watch?v=VdxhC7Dx2So',
          youtubeId: 'VdxhC7Dx2So',
        },
        analysis: {
          coveredTopics: [
            'Demo hisob balandligini real imkoniyatga mos tanlash ($100,000 emas, real soladigan $100-$500)',
            'Demoda o\'yin o\'ynamaslik, lotlarni oshirmaslik',
            'Kamida 30-50 ta intizomli trade bajarish',
          ],
          missingTopics: [
            'Real pul hayajonini demoda 100% his qilib bo\'lmaydi',
          ],
          warningsOrDubious: "Yo'q.",
        },
        whyThisVideo: [
          '$100,000 lik demo hisob ochib, noto\'g\'ri ko\'nikma orttirish xatosini to\'xtatadi.',
        ],
        backupVideo: {
          note: "Bu darsga mos zaxira o'zbekcha video topilmadi.",
        },
        textbookConnection: {
          badges: [
            {
              type: 'RULE',
              text: "Demoda intizom saqlay olmagan treyder real hisobda zudlik bilan depozitini yo'qotadi.",
            },
          ],
        },
        tasks: [
          'Nima uchun demo hisob balandligi real depozitingiz hajmiga teng bo\'lishi kerak?',
        ],
        quizQuestions: [
          {
            id: 'q23-1',
            question: "Nima uchun boshlovchi treyder $100,000 lik xayoliy demo hisob ochmasligi kerak?",
            options: [
              "Chunki bu noto'g'ri risk hissi va yengiltaklikni shakllantiradi; demo hisob real kiritiladigan mablag'ga ($100-$500) teng bo'lishi shart",
              "Chunki broker $100,000 ga ruxsat bermaydi",
              "Chunki internet tezligi yetmaydi",
              "Faqat bayramlarda mumkin",
            ],
            correctOptionIndex: 0,
            explanation: "Ulkan virtual hisobda yo'qotish og'riqsiz tuyuladi va odam qimorbozlikka o'rganib qoladi. Real summaga mos hisob esa intizomni tarbiyalaydi.",
          },
          {
            id: 'q23-2',
            question: "Real hisobga o'tishdan oldin demoda kamida qancha muddat barqaror savdo qilish tavsiya etiladi?",
            options: ['1 - 3 oy (kamida 30-50 ta intizomli trade)', 'Atigi 2 kun', '1 soat', 'Hech qancha kerak emas'],
            correctOptionIndex: 0,
            explanation: "Jonli bozor sharoitida kamida 1-3 oy intizomni saqlab ko'rsatish zarur.",
          },
        ],
      },
    ],
  },
  {
    id: 24,
    slug: 'module-24',
    title: 'STRATEGIYANI STATISTIK BAHOLASH',
    subtitle: 'Expectancy, Profit Factor va Max Drawdown hisoblari',
    level: 5,
    description: "Matematik kutilayotgan foyda (Expectancy), Profit Factor va Maksimal pasayish (Drawdown) formulalari.",
    objective: "Savdo natijalaringizni matematik formulalar orqali tahlil qilib, strategiyangizning uzoq muddatli daromad keltirish qobiliyatini (Expectancy) baholash.",
    bestChannel: 'HBS HAMJAMIYATI',
    bestVideo: 'Strategiya statistikasini baholash va Expectancy',
    lessons: [
      {
        id: 'm24-l1',
        moduleId: 24,
        lessonNumber: 1,
        title: 'Expectancy, Profit Factor va Max Drawdown hisoblari',
        objective: "Savdo natijalaringizni matematik formulalar orqali tahlil qilib, strategiyangizning uzoq muddatli daromad keltirish qobiliyatini (Expectancy) baholash.",
        hasCalculator: 'expectancy',
        mainVideo: {
          title: 'Strategiya statistikasini baholash va Expectancy',
          channel: 'HBS HAMJAMIYATI',
          language: "O'zbekcha",
          duration: '16:00',
          date: '2024-yil',
          qualityScore: 91,
          youtubeUrl: 'https://www.youtube.com/watch?v=fou_OuEDYaI',
          youtubeId: 'fou_OuEDYaI',
        },
        analysis: {
          coveredTopics: [
            'Profit Factor (Umumiy Foyda / Umumiy Zarar)',
            'Expectancy (Kutilayotgan matematik foyda)',
            'Maximum Drawdown (Maksimal depozit tushib ketishi)',
          ],
          missingTopics: ['Sharp Ratio hisob-kitoblari'],
          warningsOrDubious: "Bu darsning qolgan murakkab statistik formulalar qismi bo'yicha 100% mos va sifatli o'zbekcha video topilmadi, asosiy qismi qamrab olingan.",
        },
        whyThisVideo: [
          'Savdoga his-tuyg\'ular bilan emas, sovuq matematik raqamlar bilan qarashni o\'rgatadi.',
        ],
        backupVideo: {
          note: "Bu darsga mos zaxira o'zbekcha video topilmadi.",
        },
        textbookConnection: {
          badges: [
            {
              type: 'FORMULA',
              text: "Expectancy = (Win Rate × Avg Win) - (Loss Rate × Avg Loss)",
            },
          ],
          formula: "Expectancy = (Win Rate × Avg Win) - (Loss Rate × Avg Loss)\nProfit Factor = Total Profit / Total Loss",
          formulaExplanation: "Agar Expectancy musbat (> 0) bo'lsa, strategiya matematik jihatdan foydalidir. Profit Factor > 1.5 sog'lom tizim belgisidir.",
        },
        tasks: [
          'Profit Factor 1.5 dan yuqori bo\'lsa, bu strategiya haqida nimani anglatadi?',
          'Maximum Drawdown nima va u nega 15-20% dan oshmasligi kerak?',
        ],
        quizQuestions: [
          {
            id: 'q24-1',
            question: "Agar bir tizimning Expectancy (kutilayotgan matematik natijasi) noldan katta (> 0) bo'lsa, bu nimani isbotlaydi?",
            options: [
              "Strategiya uzoq muddatda matematik jihatdan foyda keltiradi (Statistik ustunlik mavjud)",
              "Tizim zarar keltiradi",
              "Broker hisobni yopadi",
              "Hech qanday ma'no bermaydi",
            ],
            correctOptionIndex: 0,
            explanation: "Musbat Expectancy har bir amalga oshirilgan savdodan o'rtacha ijobiy daromad kutilishini bildiradi.",
          },
          {
            id: 'q24-2',
            question: "Sog'lom va barqaror hisobda Maximum Drawdown (maksimal pasayish) necha foizdan oshmasligi talab etiladi?",
            options: ['15-20% dan oshmasligi kerak', '80% gacha ruxsat', '100% gacha ruxsat', 'Drawdown umuman mavjud emas'],
            correctOptionIndex: 0,
            explanation: "20% dan ortiq pasayishdan so'ng hisobni qayta tiklash matematik jihatdan ancha qiyinlashadi, shuning uchun risk 15-20% bilan cheklanadi.",
          },
        ],
      },
    ],
  },
  {
    id: 25,
    slug: 'module-25',
    title: 'REAL HISOBGA O\'TISHDAN OLDINGI CHECKLIST',
    subtitle: 'Yakuniy audit va Intizom shartnomasi',
    level: 5,
    description: "25 ta qat'iy audit talablari, xavfsiz kapital qoidasi va jonli hisobga o'tish tekshiruvi.",
    objective: "Real pul bilan savdo qilishga tayyorlik darajasini 25 ta qat'iy talab va checklist bo'yicha tekshirish.",
    bestChannel: 'Sardor | Trader | Businessman',
    bestVideo: 'Real hisobga o\'tishdan oldin bilishingiz shart bo\'lgan narsalar',
    lessons: [
      {
        id: 'm25-l1',
        moduleId: 25,
        lessonNumber: 1,
        title: 'Yakuniy audit va Intizom shartnomasi',
        objective: "Real pul bilan savdo qilishga tayyorlik darajasini 25 ta qat'iy talab va checklist bo'yicha tekshirish.",
        hasChecklist: true,
        mainVideo: {
          title: 'Real hisobga o\'tishdan oldin bilishingiz shart bo\'lgan narsalar',
          channel: 'Sardor | Trader | Businessman',
          language: "O'zbekcha",
          duration: '10:50',
          date: '2026-yil',
          qualityScore: 96,
          youtubeUrl: 'https://www.youtube.com/watch?v=QT6lRsW3DI4',
          youtubeId: 'QT6lRsW3DI4',
        },
        analysis: {
          coveredTopics: [
            'Real hisobga o\'tish shartlari',
            'Yo\'qotishga tayyor bo\'lgan pul bilan savdo qilish (Xavfsiz kapital)',
            'Shaxsiy savdo rejasiga (Trading Plan) 100% rioya qilish',
          ],
          missingTopics: ['Yo\'q'],
          warningsOrDubious: "Yo'q. Muallif real pul yo'qotish xavfini ochiq va do'stona ogohlantiradi.",
        },
        whyThisVideo: [
          'Kursning eng so\'nggi va eng mas\'uliyatli bosqichi uchun sovuqqon eslatma.',
          'Havayilandiruvchi yolg\'on umidlarni yo\'qotadi.',
        ],
        backupVideo: {
          note: "Bu darsga mos zaxira o'zbekcha video topilmadi.",
        },
        textbookConnection: {
          badges: [
            {
              type: 'RULE',
              text: "Real hisobga faqatgina barcha 25 ta audit talablari to'liq qanoatlantirilganda va oilaviy ehtiyojlarga zarar keltirmaydigan erkin kapital bilan o'tiladi.",
            },
          ],
          notes: [
            "Checklistdan parcha (PDF):",
            "1. Backtestda 100 ta savdo bajarilganmi? [ ]",
            "2. Demoda kamida 2 oy barqaror muvaffaqiyat bormi? [ ]",
            "3. Risk per trade har doim 1-2% dan oshmaydimi? [ ]",
            "4. Har bir savdo jurnalda qayd etiladimi? [ ]",
          ],
        },
        tasks: [
          'Real hisobga kiritilayotgan pul oilaviy byudjetga yoki hayotiy ehtiyojlarga zarar yetkazmaydigan erkin pul bo\'lishi shartmi?',
          'Agar intizom buzilsa, real savdodan yana demoga qaytish to\'g\'rimi?',
        ],
        quizQuestions: [
          {
            id: 'q25-1',
            question: "Real hisobga kiritilayotgan savdo kapitali qanday pul bo'lishi shart?",
            options: [
              "Yo'qotilgan taqdirda ham oilaviy byudjetga, shaxsiy hayotga va ruhiy xotirjamlikka aslo ziyon yetkazmaydigan sof erkin mablag'",
              "Qarz yoki kreditga olingan pul",
              "Uy-joy yoki o'qish to'lovi uchun ajratilgan pul",
              "Boshqa odamlarning omonati",
            ],
            correctOptionIndex: 0,
            explanation: "Kredit yoki zaruriy ehtiyoj pullari bilan savdo qilish — kafolatlangan ruhiy stress va depozit yo'qotilishiga olib keladi.",
          },
          {
            id: 'q25-2',
            question: "Agar real savdoda intizom buzilsa va ketma-ket xatolar boshlansa, to'g'ri qadam nima?",
            options: [
              "Real savdoni zudlik bilan to'xtatib, yana qayta demo hisobga va tahlilga qaytish",
              "Yana pul solib qasd olish",
              "Stop lossni olib tashlash",
              "Barcha pullarni bitta savdoga tikish",
            ],
            correctOptionIndex: 0,
            explanation: "Intizom buzilishi favqulodda holat hisoblanadi; kapitalni asrash uchun darhol demoga qaytib xatolar jurnali tahlil qilinishi shart.",
          },
        ],
      },
    ],
  },
];
