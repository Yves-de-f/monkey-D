export type Locale = 'zh' | 'en';

export type ServiceItem = {
  code: string;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  image: string;
  href: Record<Locale, string>;
  category: 'machine' | 'solution';
  featured?: boolean;
};

export const services: ServiceItem[] = [
  {
    code: 'LD—3000',
    title: {
      zh: '自動雙面貼標機',
      en: 'Automatic Double-Sided Labeling Machine',
    },
    description: {
      zh: '自動雙面貼標機LD3000是款可一機雙用，以在同一時間在產品或容器的兩側貼標..',
      en: 'The LD3000 automatic double-sided labeling machine is a dual-purpose machine that simultaneously applies labels to both sides of a product or container. It can apply..',
    },
    image: '/images/items/LD3000.png',
    href: {
      zh: '/service.html?serviceId=auto-machine&subItemId=LD3000',
      en: '/service_en.html?serviceId=auto-machine&subItemId=LD3000',
    },
    category: 'machine',
    featured: true,
  },
  {
    code: 'LR—4000',
    title: {
      zh: '自動圓瓶貼標機',
      en: 'Automatic Round Bottle Labeling Machine',
    },
    description: {
      zh: '自動圓瓶貼標機以步進馬達驅動搭載微電腦動控制系統可快速貼各種圓型瓶罐..',
      en: 'Powered by a stepper motor and equipped with a microcomputer-controlled system, this automatic round bottle labeling machine can quickly label a variety of round..',
    },
    image: '/images/items/LR4000.png',
    href: {
      zh: '/service.html?serviceId=auto-machine&subItemId=LR4000',
      en: '/service_en.html?serviceId=auto-machine&subItemId=LR4000',
    },
    category: 'machine',
  },
  {
    code: 'LT—3000',
    title: {
      zh: '自動貼標機（上貼）',
      en: 'Automatic Flat-type Labeling Machine',
    },
    description: {
      zh: '自動貼標機LT3000是一款可用在各領域產業的袋子、盒子、瓶罐、容器等產品..',
      en: 'The LT3000 automatic labeler can be utilized in various industries for labeling bags, boxes, bottles, cans, and containers. It applies sticker labels to flat surfaces, tops, or..',
    },
    image: '/images/items/LT3000.png',
    href: {
      zh: '/service.html?serviceId=auto-machine&subItemId=LT3000',
      en: '/service_en.html?serviceId=auto-machine&subItemId=LT3000',
    },
    category: 'machine',
  },
  {
    code: 'LR—1100',
    title: {
      zh: '半自動圓瓶貼標機／桌上型立式圓貼機',
      en: 'Tabletop Round Bottle Labeling Machine',
    },
    description: {
      zh: '桌上型圓瓶貼標機是一台靈活多功能的機種，可應用於各式直立圓瓶、罐裝與圓柱狀產品..',
      en: 'This tabletop round bottle labeling machine is a flexible and versatile machine suitable for a variety of upright round bottles, cans, and cylindrical products. It offers..',
    },
    image: '/images/items/LR1100.png',
    href: {
      zh: '/service.html?serviceId=auto-machine&subItemId=LR1100',
      en: '/service_en.html?serviceId=auto-machine&subItemId=LR1100',
    },
    category: 'machine',
  },
  {
    code: 'FC—1050',
    title: {
      zh: '桌上型全自動充填封蓋貼標產線',
      en: 'Tabletop Fully Automatic Filling, Capping, and Labeling Production Line',
    },
    description: {
      zh: '專為中小產能與有限生產空間而設計，例如高端醫藥製劑、實驗室環境、新品開發或中型規模產線，都能靈活應用。..',
      en: 'This machine boasts a compact tabletop design that occupies minimal space, yet offers the efficiency and precision of an automated vertical round bottle labeler..',
    },
    image: '/images/items/FC1050.png',
    href: {
      zh: '/service.html?serviceId=auto-machine&subItemId=FC1050',
      en: '/service_en.html?serviceId=auto-machine&subItemId=FC1050',
    },
    category: 'machine',
  },
  {
    code: 'PR—01',
    title: { zh: '商用貼紙', en: 'Commercial Labels' },
    description: {
      zh: '正峰憑藉超過30年的專業印刷經驗，為各行各業提供高品質的商用標籤印刷服務。我們擁有先進的印刷設備與多樣化的材質選擇，無論是食品飲料、醫藥保健、日化用品或電子產業，都能依據您的產品特性與使用環境，量身打造最適合的標籤方案。',
      en: "With over 30 years of professional printing experience, Jhengfong provides high-quality commercial label printing services for a wide range of industries. We boast advanced printing equipment and a diverse selection of materials. Whether you're targeting food and beverage, healthcare, daily chemicals, or electronics, we can tailor labeling solutions to your product characteristics and usage environments..",
    },
    image: '/images/P1/P1-other-4.png',
    href: {
      zh: '/service.html?serviceId=sticker-printing&subItemId=sticker',
      en: '/service_en.html?serviceId=sticker-printing&subItemId=sticker',
    },
    category: 'solution',
    featured: true,
  },
  {
    code: 'HF—02',
    title: { zh: '手工代貼', en: 'Hand-Labeling Service' },
    description: {
      zh: '在某些情況下，產品數量固定，但規模尚未大到需要使用貼標機，這時候最適合的就是手工代貼..',
      en: "In some cases, when the product quantity is fixed but the scale isn't large enough to require a labeling machine, hand-labeling is the most suitable option..",
    },
    image: '/images/P1/P1-other-1.png',
    href: {
      zh: '/service.html?serviceId=sticker-printing&subItemId=handmade',
      en: '/service_en.html?serviceId=sticker-printing&subItemId=handmade',
    },
    category: 'solution',
  },
  {
    code: 'CR—100K',
    title: {
      zh: '無塵室印刷／代工檢驗',
      en: 'Cleanroom Printing & OEM Service',
    },
    description: {
      zh: '正峰擁有 Class 100,000 等級無塵室，並通過 ISO 9001 品質管理認證，能提供專業的無塵室組裝與加工代工服務..',
      en: 'Jhengfong operates a Class 100,000 cleanroom and is ISO 9001 certified. We provide professional cleanroom printing, inspection, assembly, and other OEM services..',
    },
    image: '/images/P1/P1-other-2.png',
    href: {
      zh: '/service.html?serviceId=cleanroom&subItemId=cleanroom',
      en: '/service_en.html?serviceId=cleanroom&subItemId=cleanroom',
    },
    category: 'solution',
  },
  {
    code: 'BC—04',
    title: { zh: '標籤條碼機', en: 'Barcode Printer' },
    description: {
      zh: '我們提供高效能條碼機解決方案，適用於產品標籤、倉儲物流、零售與出貨管理..',
      en: 'We offer high-performance barcode printer solutions for product labeling, warehousing and logistics, retail, and shipping management. Our diverse models..',
    },
    image: '/images/P1/P1-other-3.png',
    href: {
      zh: '/service.html?serviceId=barcode-machine&subItemId=label-barcode',
      en: '/service_en.html?serviceId=barcode-machine&subItemId=label-barcode',
    },
    category: 'solution',
  },
];

export const copy = {
  zh: {
    metaTitle: '正峰印刷整合服務｜貼標設備、商用標籤與印刷整合',
    metaDescription:
      '正峰以超過三十年的印刷經驗，提供自動貼標機租售、商用標籤、無塵室印刷、條碼機與整合服務。',
    brand: '正峰服務',
    menu: '選單',
    close: '收合',
    languageLabel: 'English',
    languageHref: '/index_en.html',
    nav: [
      ['關於正峰', '#about'],
      ['設備與服務', '#services'],
      ['詢問專案', '#contact'],
      ['聯絡資訊', '#footer-trigger'],
    ],
    heroKicker: 'PRINT × LABEL × AUTOMATION',
    heroTitle: ['正峰專業自動貼標機租賃', '印刷整合服務'],
    heroDeck:
      '從一張標籤到一條產線，正峰把印刷經驗、貼標設備與技術支援整合成真正能運作的解決方案。',
    heroPrimary: '瀏覽服務',
    heroSecondary: '提出需求',
    heroCaption: ['INTEGRATED PRINTING'],
    tags: [
      {
        label: '自動貼標機',
        href: '/service.html?serviceId=auto-machine',
        featured: true,
        tone: 'signal',
      },
      {
        label: '商用標籤',
        href: '/service.html?serviceId=sticker-printing',
        featured: true,
        tone: 'orange',
      },
      {
        label: '條碼整合',
        href: '/service.html?serviceId=barcode-machine',
        featured: false,
        tone: 'neutral',
      },
      {
        label: '無塵室',
        href: '/service.html?serviceId=cleanroom',
        featured: false,
        tone: 'neutral',
      },
    ],
    aboutEyebrow: '02 / ABOUT',
    aboutCategory: '正峰服務',
    aboutTitle: '三十年印刷經驗，現在為整條工作流程服務。',
    aboutLead: '一張標籤不只是產品的外衣，也是品牌、資訊與生產效率交會的地方。',
    aboutBody: [
      '“ 正峰以超過三十年的專業印刷經驗，秉持對品質的堅持與對細節的熱忱，陪伴無數品牌一同成長。我們深信，一張標籤不只是產品的外衣，更是品牌精神的展現。因此，正峰致力於提供穩定、高效的自動貼標整合服務，並以專業印刷技術打造多樣化、高品質的標籤，讓每一件產品在市場上都能綻放最亮眼的形象。',
      '我們以嚴謹的態度守護每一道流程，並透過無塵室生產環境，滿足高潔淨度的製造需求。我們同時結合條碼機整合應用，協助企業提升管理與追溯的效率，讓每一個細節都更精準。正峰相信，印刷不僅是技術，更是一種讓品牌被看見的力量。 ”',
    ],
    statYears: '30+',
    statYearsLabel: '年產業經驗',
    statScope: '04',
    statScopeLabel: '大整合服務',
    machineEyebrow: '03 / MACHINES',
    machineCategory: '自動貼標機租賃與買賣',
    machineTitle: '貼標設備不是單一機器，而是產線節拍的一部分。',
    machineDeck:
      '無需購置昂貴設備，即可輕鬆享有穩定、高效的自動化貼標效能。歡迎與我們聯繫，讓自動化為您的產線注入新動能。',
    solutionEyebrow: '04 / SOLUTIONS',
    solutionCategory: '印刷整合方案',
    solutionTitle: '把印刷、加工與資料管理接成一條線。',
    solutionDeck:
      '從商用印刷貼紙服務到無塵室印刷/檢驗，再到條碼機整合，正峰以多元服務一次滿足，幫助企業輕鬆完成標籤管理的一站式方案。',
    readMore: '查看規格',
    contactEyebrow: '05 / PROJECT INQUIRY',
    contactCategory: '詢問表單.',
    contactTitle: '帶著產品、產量或一個尚未成形的問題來找我們。',
    contactDeck:
      '請留下您的需求與聯絡方式，我們將在最短時間內回覆，並為您提供最合適的解決方案。',
    fields: {
      name: '姓名／公司',
      phone: '電話',
      email: '電子郵件',
      service: '需求類型',
      message: '專案說明',
      submit: '送出詢問',
      select: '請選擇',
    },
    options: ['自動貼標機', '商用印刷貼紙', '無塵室', '條碼機', '其他'],
    formPending: '資料傳送中…',
    formSuccess: '已收到你的詢問，我們會盡快回覆。',
    formError: '目前無法送出，請稍後再試或直接來信。',
    footerOpen: '聯絡資訊',
    footerClose: '關閉',
    footerTitle: '正峰印刷整合服務',
    footerSections: ['網站', '服務', '聯絡'],
    footerLinks: [
      ['關於正峰', '#about'],
      ['設備與服務', '#services'],
      ['詢問專案', '#contact'],
      ['自動貼標機', '/service.html?serviceId=auto-machine'],
      ['商用標籤', '/service.html?serviceId=sticker-printing'],
      ['耗材', '/consumables.html'],
    ],
    telLabel: '電話',
    timeLabel: '服務時間',
    timeValue: '週一至週五 08:00—17:30',
  },
  en: {
    metaTitle:
      'Jhengfong Printing Solutions | Labeling, Printing & Integration',
    metaDescription:
      'Thirty years of printing expertise across labeling equipment, commercial labels, cleanroom printing, barcode systems and integrated support.',
    brand: 'JHENGFONG',
    menu: 'Menu',
    close: 'Close',
    languageLabel: '繁體中文',
    languageHref: '/index.html',
    nav: [
      ['About', '#about'],
      ['Machines & services', '#services'],
      ['Start a project', '#contact'],
      ['Contact', '#footer-trigger'],
    ],
    heroKicker: 'PRINT × LABEL × AUTOMATION',
    heroTitle: [
      'Jhengfong Professional Automatic Labeling Machine Rental',
      'Printing Integration Services',
    ],
    heroDeck:
      'From a single label to an entire line, Jhengfong combines print expertise, labeling equipment and technical support into solutions that work.',
    heroPrimary: 'Explore services',
    heroSecondary: 'Start a project',
    heroCaption: ['INTEGRATED PRINTING'],
    tags: [
      {
        label: 'Labeling machines',
        href: '/service_en.html?serviceId=auto-machine',
        featured: true,
        tone: 'signal',
      },
      {
        label: 'Commercial labels',
        href: '/service_en.html?serviceId=sticker-printing',
        featured: true,
        tone: 'orange',
      },
      {
        label: 'Barcode systems',
        href: '/service_en.html?serviceId=barcode-machine',
        featured: false,
        tone: 'neutral',
      },
      {
        label: 'Cleanroom',
        href: '/service_en.html?serviceId=cleanroom',
        featured: false,
        tone: 'neutral',
      },
    ],
    aboutEyebrow: '02 / ABOUT',
    aboutCategory: 'Jhengfong SOLUTION',
    aboutTitle:
      'Thirty years in print, now working across the entire production flow.',
    aboutLead:
      'A label is where brand, information and production efficiency meet.',
    aboutBody: [
      '“ With over 30 years of experience in the printing industry, Jhengfong SOLUTION has grown alongside countless brands, driven by a passion for quality and attention to detail. We believe that every label is more than just packaging — it’s a reflection of a brand’s story and identity. That’s why we are dedicated to providing reliable and efficient automatic labeling solutions, along with professional custom printing services that help every product shine in the market.',
      'Jhengfong upholds the highest standards throughout every step of the process. Our cleanroom facilities ensure high-purity manufacturing, while our barcode system integration enhances efficiency and traceability for our clients. At Jhengfong, we believe printing is not only about precision — it’s about giving brands the power to be seen. ”',
    ],
    statYears: '30+',
    statYearsLabel: 'years of experience',
    statScope: '04',
    statScopeLabel: 'integrated disciplines',
    machineEyebrow: '03 / MACHINES',
    machineCategory: 'Automatic Labeling Machine Rental and Sales',
    machineTitle:
      'A labeler is not an isolated machine. It is part of your production rhythm.',
    machineDeck:
      'Enjoy stable and efficient automated labeling performance without the need to purchase expensive equipment. Contact us and let automation bring new momentum to your production line.',
    solutionEyebrow: '04 / SOLUTIONS',
    solutionCategory: 'Printing Integration Solutions',
    solutionTitle: 'Printing, finishing and data—connected as one workflow.',
    solutionDeck:
      'From commercial label printing services to cleanroom printing & OEM services, and even barcode printer integration, Jhengfong offers a comprehensive suite of services, providing businesses with a one-stop solution for label management.',
    readMore: 'View details',
    contactEyebrow: '05 / PROJECT INQUIRY',
    contactCategory: 'form.',
    contactTitle:
      'Bring us a product, a volume target, or a problem that is not fully defined yet.',
    contactDeck:
      'Please leave your needs and contact information, we will respond as soon as possible and provide you with the most suitable solution.',
    fields: {
      name: 'Name / company',
      phone: 'Phone',
      email: 'Email',
      service: 'Service',
      message: 'Project notes',
      submit: 'Send inquiry',
      select: 'Select one',
    },
    options: [
      'Automatic labeling machine',
      'Commercial labels',
      'Cleanroom',
      'Barcode printer',
      'Other',
    ],
    formPending: 'Sending…',
    formSuccess: 'Thanks—your inquiry has been received.',
    formError:
      'Unable to send right now. Please try again or email us directly.',
    footerOpen: 'Contact',
    footerClose: 'Close',
    footerTitle: 'Jhengfong Printing Solutions',
    footerSections: ['Index', 'Services', 'Contact'],
    footerLinks: [
      ['About', '#about'],
      ['Machines & services', '#services'],
      ['Start a project', '#contact'],
      ['Labeling machines', '/service_en.html?serviceId=auto-machine'],
      ['Commercial labels', '/service_en.html?serviceId=sticker-printing'],
      ['Consumables', '/consumables_en.html'],
    ],
    telLabel: 'Telephone',
    timeLabel: 'Studio hours',
    timeValue: 'Mon—Fri 08:00—17:30',
  },
} as const;
