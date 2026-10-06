import { Module } from '../types/course';

export const level1Modules: Module[] = [
  {
    id: 1,
    slug: 'module-1',
    title: 'FOREX VA XAUUSD ASOSLARI',
    subtitle: 'Valyuta va tovarlar bozori poydevori',
    level: 1,
    description: "Forex bozori mexanikasi, valyuta juftliklari, XAUUSD oltin aktivi, lot va pip hisob-kitoblari.",
    objective: "Forex bozori qanday ishlashi, valyutalar va tovarlar juftligi tushunchasi hamda XAUUSD (Oltin) aktivining moliya bozoridagi o'rnini anglab yetish.",
    bestChannel: 'Feruzbek Aliev',
    bestVideo: 'TRADINGNI NIMADAN BOSHLASH KERAK?',
    lessons: [
      {
        id: 'm1-l1',
        moduleId: 1,
        lessonNumber: 1,
        title: 'Valyuta juftliklari va XAUUSD (Oltin) bozori',
        objective: "Forex bozori qanday ishlashi, valyutalar va tovarlar juftligi tushunchasi hamda XAUUSD (Oltin) aktivining moliya bozoridagi o'rnini anglab yetish.",
        mainVideo: {
          title: 'TRADINGNI NIMADAN BOSHLASH KERAK?',
          channel: 'Feruzbek Aliev',
          language: "O'zbekcha",
          duration: '27:17',
          date: '30-Noyabr, 2023-yil',
          qualityScore: 92,
          youtubeUrl: 'https://www.youtube.com/watch?v=W7Sp6Ko6YZU',
          youtubeId: 'W7Sp6Ko6YZU',
        },
        analysis: {
          coveredTopics: [
            'Forex va Valyuta savdosi asoslari',
            'Bazaviy va kotirovka qilinayotgan valyuta tushunchasi',
            'Lot, Pip va Point tushunchalari',
            'Brokerlar va bozor ishtirokchilari',
          ],
          missingTopics: [
            "XAUUSD (Oltin) uchun xos bo'lgan spred va sessiya xususiyatlari",
          ],
          warningsOrDubious: "Video boshlang'ich tushunchalar uchun juda sifatli, hech qanday soxta va'dalar yo'q.",
        },
        whyThisVideo: [
          'Poydevor bilim: Valyuta bozori va instrumentlar qanday kotirovka qilinishini batafsil tushuntiradi.',
          "Pip va Lot mexanikasi: Pip va Lot o'rtasidagi farqni real raqamlar bilan ko'rsatadi.",
          "Akademik tartib: Ma'lumotlar chalkashmasdan, ketma-ket taqdim etilgan.",
        ],
        backupVideo: {
          title: "Treydingni 0 dan to'g'ri o'rganish",
          channel: 'HBS HAMJAMIYATI',
          youtubeUrl: 'https://www.youtube.com/watch?v=fou_OuEDYaI',
          youtubeId: 'fou_OuEDYaI',
          whenToUse: "Qisqaroq (8 daqiqalik) va loqaydliksiz, faqat asosiy tushunchalarni takrorlab olish uchun.",
        },
        textbookConnection: {
          badges: [
            {
              type: 'FACT',
              text: "XAUUSD da XAU — oltin unsiya, USD — AQSh dollari ekanligini, 1 lot XAUUSD = 100 unsiya oltin ekanligini yodda tuting.",
            },
          ],
          beforeText: "Avval: XAUUSD da XAU — oltin unsiya, USD — AQSh dollari ekanligini, 1 lot XAUUSD = 100 unsiya oltin ekanligini yodda tuting.",
          afterText: "Videoni ko'rib, Lot va Pip hisob-kitobini o'rganing. Keyin: Amaliy hisob-kitob topshirig'ini bajaring.",
        },
        tasks: [
          "Base Currency (Bazaviy valyuta) va Quote Currency (Kotirovka valyutasi) o'rtasidagi farq nima?",
          "XAUUSD kotirovkasida qaysi biri bazaviy aktiv hisoblanadi?",
        ],
        quizQuestions: [
          {
            id: 'q1-1',
            question: "XAUUSD kotirovkasida qaysi biri bazaviy (Base Currency) aktiv hisoblanadi?",
            options: [
              "XAU (Oltin unsiyasi)",
              "USD (AQSh Dollari)",
              "Ikkisi ham teng",
              "Bozor brokeri",
            ],
            correctOptionIndex: 0,
            explanation: "XAUUSD da birinchi turgan aktiv — XAU (Oltin) bazaviy aktiv hisoblanadi, USD esa kotirovka valyutasi bo'lib, 1 unsiya oltinning dollardagi qiymatini bildiradi.",
          },
          {
            id: 'q1-2',
            question: "Standart 1 lot XAUUSD savdosida necha unsiya oltin nazarda tutiladi?",
            options: [
              "10 unsiya",
              "50 unsiya",
              "100 unsiya oltin",
              "1000 unsiya",
            ],
            correctOptionIndex: 2,
            explanation: "XAUUSD bo'yicha 1 standart lot 100 unsiya oltinga teng hisoblanadi.",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    slug: 'module-2',
    title: 'METATRADER 5 (MT5)',
    subtitle: 'Terminalni professional sozlash va boshqarish',
    level: 1,
    description: "MT5 terminalida hisob ochish, chart sozlamalari, XAUUSD instrumentini qo'shish va taymfreymlar.",
    objective: "MT5 dasturida demo hisob ochish, XAUUSD grafikini qo'shish, vaqt intervallarini o'zgartirish va grafik ranglarini professional ko'rinishga keltirish.",
    bestChannel: 'Uranus',
    bestVideo: 'MetaTrader 5 nima va undan foydalanish',
    lessons: [
      {
        id: 'm2-l1',
        moduleId: 2,
        lessonNumber: 1,
        title: "MT5 platformasini o'rnatish va sozlash",
        objective: "MT5 dasturida demo hisob ochish, XAUUSD grafikini qo'shish, vaqt intervallarini o'zgartirish va grafik ranglarini professional ko'rinishga keltirish.",
        mainVideo: {
          title: 'MetaTrader 5 nima va undan foydalanish',
          channel: 'Uranus',
          language: "O'zbekcha",
          duration: '18:45',
          date: '2023-yil',
          qualityScore: 90,
          youtubeUrl: 'https://www.youtube.com/watch?v=VdxhC7Dx2So',
          youtubeId: 'VdxhC7Dx2So',
        },
        analysis: {
          coveredTopics: [
            'MT5 kompyuter va telefonga yuklash',
            'Demo hisob ochish',
            "Simvollar ro'yxatidan XAUUSD ni topish va chartga chiqarish",
            'Grafik vositalari va taymfreymlarni o\'zgartirish',
          ],
          missingTopics: [
            "Murakkab algoritmik indicatorlarni o'rnatish",
          ],
          warningsOrDubious: "Video texnik qo'llanma hisoblanadi, xavfli savdo signallari va da'volar yo'q.",
        },
        whyThisVideo: [
          "Dastur interfeysi qadamma-qadam ko'rsatilgan.",
          "Telefon va kompyuter versiyalari uchun ko'rsatmalarga ega.",
        ],
        backupVideo: {
          note: "Bu darsga 100% mos va sifatli muqobil o'zbekcha zaxira video topilmadi.",
        },
        textbookConnection: {
          badges: [
            {
              type: 'COMMON PRACTICE',
              text: "Grafikdagi ortiqcha panellarni tozalash va qulay shablon (template) yaratib saqlab qo'yish intizomli tahlil uchun shart.",
            },
          ],
          beforeText: "Darslikdagi MT5 tugmalari vazifasi bilan tanishing.",
          afterText: "Videoga qarab o'zingizning MT5 platformangizni sozlang.",
        },
        tasks: [
          "MT5 da XAUUSD grafikini oching va uning taymfreymini H1 ga o'tkazing.",
          "Chartda Grid (Setka) ni o'chirish tugmasi qaysi (Shortkey)?",
        ],
        quizQuestions: [
          {
            id: 'q2-1',
            question: "MT5 terminalida chartdagi Grid (setka)ni yoqish/o'chirish uchun qaysi klaviatura tugmasi (shortkey) ishlatiladi?",
            options: ['Ctrl + G', 'Ctrl + H', 'Alt + F4', 'Ctrl + T'],
            correctOptionIndex: 0,
            explanation: "MT5 da Ctrl + G tugmasi grafik setkasini yashirish yoki ko'rsatish uchun xizmat qiladi.",
          },
          {
            id: 'q2-2',
            question: "H1 taymfreymidagi bitta shamcha (candle) qancha vaqt oralig'ini ifodalaydi?",
            options: ['1 daqiqa', '1 soat', '4 soat', '1 kun'],
            correctOptionIndex: 1,
            explanation: "H1 (Hour 1) taymfreymida har bir shamcha to'liq 1 soatlik narx harakatini aks ettiradi.",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    slug: 'module-3',
    title: 'ORDERLAR VA BOZOR MEXANIKASI',
    subtitle: 'Market, Limit, Stop orderlar va likvidlik iste\'moli',
    level: 1,
    description: "Bozorga zudlik bilan kirish va kechiktirilgan buyruqlar, Spread, Swap hamda komissiya tushunchasi.",
    objective: "Bozorga darhol kirish (Market Order) hamda kechiktirilgan buyruqlar (Buy Limit, Sell Limit, Buy Stop, Sell Stop) mantiqiy farqlarini anglash.",
    bestChannel: 'Habibullo Saidimronov',
    bestVideo: "Order turlari va ularni to'g'ri o'rnatish",
    lessons: [
      {
        id: 'm3-l1',
        moduleId: 3,
        lessonNumber: 1,
        title: 'Order turlari: Market, Limit va Stop Orderlar',
        objective: "Bozorga darhol kirish (Market Order) hamda kechiktirilgan buyruqlar (Buy Limit, Sell Limit, Buy Stop, Sell Stop) mantiqiy farqlarini anglash.",
        mainVideo: {
          title: "Order turlari va ularni to'g'ri o'rnatish",
          channel: 'Habibullo Saidimronov',
          language: "O'zbekcha",
          duration: '22:10',
          date: '13-Noyabr, 2024-yil',
          qualityScore: 88,
          youtubeUrl: 'https://www.youtube.com/watch?v=Ih2pNigr67M',
          youtubeId: 'Ih2pNigr67M',
        },
        analysis: {
          coveredTopics: [
            'Market Order (Ayni vaqtdagi narxda kirish)',
            'Limit Orderlar (Arzonroq sotib olish yoki qimmatroq sotish)',
            'Stop Orderlar (Breakout da savdoga kirish)',
            'Spread, Swap va Commission tushunchalari',
          ],
          missingTopics: [
            "OCO (One Cancels the Other) kabi murakkab institutsional orderlar",
          ],
          warningsOrDubious: "Yo'q.",
        },
        whyThisVideo: [
          'Limit va Stop orderlar orasidagi chalkashlikni oydinlashtiradi.',
          "MT5 panelida amaliy ravishda buyruq joylashtirib ko'rsatilgan.",
        ],
        backupVideo: {
          note: "Bu darsga 100% mos zaxira o'zbekcha video topilmadi.",
        },
        textbookConnection: {
          badges: [
            {
              type: 'FACT',
              text: "Limit orderlar bozorda likvidlikni ta'minlaydi (Maker), Market orderlar esa likvidlikni iste'mol qiladi (Taker).",
            },
          ],
          notes: [
            "Buy Limit — joriy narxdan pastroqqa qo'yiladi.",
            "Buy Stop — joriy narxdan yuqoriroqqa qo'yiladi (Breakout).",
          ],
        },
        tasks: [
          "Narx $2,500 da turibdi. Narx $2,490 ga tushib qayta ko'tarilishini kutayotgan bo'lsangiz, qaysi order qo'yiladi?",
          "Buy Stop order joriy narxdan yuqoriga qo'yiladimi yoki pastgami?",
        ],
        quizQuestions: [
          {
            id: 'q3-1',
            question: "Narx $2,500 da turibdi. Narx $2,490 ga tushib, so'ngra qayta ko'tarilishini kutayotgan bo'lsangiz, qaysi order joylashtiriladi?",
            options: ['Buy Limit', 'Buy Stop', 'Sell Limit', 'Market Sell'],
            correctOptionIndex: 0,
            explanation: "Joriy narxdan pastroq narxda arzonroq sotib olish uchun Buy Limit orderi ishlatiladi.",
          },
          {
            id: 'q3-2',
            question: "Buy Stop order joriy narxdan qayerga joylashtiriladi?",
            options: [
              "Joriy narxdan yuqoriga (narx ko'tarilib darajani buzib o'tganda kirish uchun)",
              "Joriy narxdan pastga",
              "Aynan ayni daqiqadagi narxga",
              "Bozor yopilgan vaqtda",
            ],
            correctOptionIndex: 0,
            explanation: "Stop orderlar narx ma'lum darajani buzib o'tib (breakout) harakatni davom ettirishini kutganda joriy narxdan yuqoriga (Buy Stop) qo'yiladi.",
          },
        ],
      },
    ],
  },
];
