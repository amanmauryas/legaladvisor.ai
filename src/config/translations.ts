interface Translation {
  [key: string]: {
    [key: string]: string;
  };
}

export const languages = [
  { code: 'en', name: 'English' },
  { code: 'hi', name: 'हिंदी (Hindi)' },
  { code: 'ko', name: '한국어 (Korean)' },
  { code: 'zh', name: '中文 (Chinese)' },
  { code: 'et', name: 'Eesti (Estonian)' }
];

export const translations: Translation = {
  en: {
    welcome: "Your AI-Powered Legal Advisor – Smart, Secure & Instant",
    getStarted: "Get Started",
    learnMore: "Learn More",
    askLegalQuestion: "Ask a legal question...",
    searchNow: "Search Now",
    home: "Home",
    dashboard: "Dashboard",
    legalServices: "Legal Services",
    aiAssistant: "AI Legal Assistant",
    documentGenerator: "Document Generator",
    consultLawyer: "Consult a Lawyer",
    pricing: "Simple, Transparent Pricing",
    blog: "Blog",
    futureUpdates: "Future Updates",
    signIn: "Sign In",
    register: "Register",
    choosePlan: "Choose the plan that best fits your legal needs",
    mo: "mo",
    yr: "yr",
    includedFeatures: "Included features",
    notIncluded: "Not included",
    // Dashboard translations
    activeCases: "Active Cases",
    recentDocuments: "Recent Documents",
    lawyerConsultations: "Lawyer Consultations",
    upcomingMeetings: "Upcoming Meetings",
    notifications: "Notifications",
    // Document Generator translations
    selectTemplate: "Select Template",
    generateDocument: "Generate Document",
    documentPreview: "Document Preview",
    downloadDocument: "Download Document",
    secureStorage: "Secure Storage"
  },
  hi: {
    welcome: "आपका AI-संचालित कानूनी सलाहकार – स्मार्ट, सुरक्षित और त्वरित",
    getStarted: "कानूनी सलाह प्राप्त करें",
    learnMore: "और जानें",
    askLegalQuestion: "एक कानूनी प्रश्न पूछें...",
    searchNow: "अभी खोजें",
    home: "होम",
    dashboard: "डैशबोर्ड",
    legalServices: "कानूनी सेवाएं",
    aiAssistant: "AI कानूनी सहायक",
    documentGenerator: "दस्तावेज़ जनरेटर",
    consultLawyer: "वकील से सलाह लें",
    pricing: "सरल, पारदर्शी मूल्य निर्धारण",
    blog: "ब्लॉग",
    futureUpdates: "भविष्य के अपडेट",
    signIn: "साइन इन करें",
    register: "रजिस्टर करें",
    choosePlan: "अपनी कानूनी जरूरतों के अनुसार योजना चुनें",
    mo: "माह",
    yr: "वर्ष",
    includedFeatures: "शामिल सुविधाएं",
    notIncluded: "शामिल नहीं",
    // Dashboard translations
    activeCases: "सक्रिय मामले",
    recentDocuments: "हाल के दस्तावेज़",
    lawyerConsultations: "वकील परामर्श",
    upcomingMeetings: "आगामी बैठकें",
    notifications: "सूचनाएं",
    // Document Generator translations
    selectTemplate: "टेम्पलेट चुनें",
    generateDocument: "दस्तावेज़ बनाएं",
    documentPreview: "दस्तावेज़ पूर्वावलोकन",
    downloadDocument: "दस्तावेज़ डाउनलोड करें",
    secureStorage: "सुरक्षित भंडारण"
  },
  ko: {
    welcome: "AI 기반 법률 고문 – 스마트하고 안전하며 즉각적인",
    getStarted: "법률 상담 시작하기",
    learnMore: "더 알아보기",
    askLegalQuestion: "법률 질문하기...",
    searchNow: "지금 검색",
    home: "홈",
    dashboard: "대시보드",
    legalServices: "법률 서비스",
    aiAssistant: "AI 법률 도우미",
    documentGenerator: "문서 생성기",
    consultLawyer: "변호사 상담",
    pricing: "심플하고 투명한 가격",
    blog: "블로그",
    futureUpdates: "향후 업데이트",
    signIn: "로그인",
    register: "회원가입",
    choosePlan: "귀하의 법률 요구 사항에 가장 적합한 플랜을 선택하세요",
    mo: "월",
    yr: "년",
    includedFeatures: "포함된 기능",
    notIncluded: "포함되지 않음",
    // Dashboard translations
    activeCases: "진행 중인 사건",
    recentDocuments: "최근 문서",
    lawyerConsultations: "변호사 상담",
    upcomingMeetings: "예정된 미팅",
    notifications: "알림",
    // Document Generator translations
    selectTemplate: "템플릿 선택",
    generateDocument: "문서 생성",
    documentPreview: "문서 미리보기",
    downloadDocument: "문서 다운로드",
    secureStorage: "보안 스토리지"
  },
  zh: {
    welcome: "您的AI驱动法律顾问 – 智能、安全、即时",
    getStarted: "立即获取法律建议",
    learnMore: "了解更多",
    askLegalQuestion: "提出法律问题...",
    searchNow: "立即搜索",
    home: "首页",
    dashboard: "仪表板",
    legalServices: "法律服务",
    aiAssistant: "AI法律助手",
    documentGenerator: "文档生成器",
    consultLawyer: "咨询律师",
    pricing: "简单透明的价格",
    blog: "博客",
    futureUpdates: "未来更新",
    signIn: "登录",
    register: "注册",
    choosePlan: "选择最适合您法律需求的计划",
    mo: "月",
    yr: "年",
    includedFeatures: "包含功能",
    notIncluded: "不包含",
    // Dashboard translations
    activeCases: "活跃案件",
    recentDocuments: "最近文档",
    lawyerConsultations: "律师咨询",
    upcomingMeetings: "即将到来的会议",
    notifications: "通知",
    // Document Generator translations
    selectTemplate: "选择模板",
    generateDocument: "生成文档",
    documentPreview: "文档预览",
    downloadDocument: "下载文档",
    secureStorage: "安全存储"
  },
  et: {
    welcome: "Teie AI-põhine õigusnõustaja – Nutikas, Turvaline ja Kohene",
    getStarted: "Alusta õigusnõustamist",
    learnMore: "Loe lähemalt",
    askLegalQuestion: "Esita õigusküsimus...",
    searchNow: "Otsi kohe",
    home: "Avaleht",
    dashboard: "Töölaud",
    legalServices: "Õigusteenused",
    aiAssistant: "AI õigusabi",
    documentGenerator: "Dokumendigeneraator",
    consultLawyer: "Konsulteeri juristiga",
    pricing: "Lihtne ja läbipaistev hinnakiri",
    blog: "Blogi",
    futureUpdates: "Tulevased uuendused",
    signIn: "Logi sisse",
    register: "Registreeru",
    choosePlan: "Vali oma õiguslikele vajadustele sobiv pakett",
    mo: "kuus",
    yr: "aastas",
    includedFeatures: "Sisalduvad funktsioonid",
    notIncluded: "Ei sisaldu",
    // Dashboard translations
    activeCases: "Aktiivsed juhtumid",
    recentDocuments: "Hiljutised dokumendid",
    lawyerConsultations: "Juristikonsultatsioonid",
    upcomingMeetings: "Tulevased kohtumised",
    notifications: "Teavitused",
    // Document Generator translations
    selectTemplate: "Vali mall",
    generateDocument: "Loo dokument",
    documentPreview: "Dokumendi eelvaade",
    downloadDocument: "Laadi dokument alla",
    secureStorage: "Turvaline salvestamine"
  }
};

export interface Country {
  code: string;
  name: string;
  language: string;
  flag: string;
  currencySymbol: string;
  currencyCode: string;
  exchangeRate: number; // Rate relative to USD
}

export const countries: Country[] = [
  { 
    code: 'IN', 
    name: 'India', 
    language: 'hi', 
    flag: '🇮🇳',
    currencySymbol: '₹',
    currencyCode: 'INR',
    exchangeRate: 83.16 // 1 USD = 83.16 INR
  },
  { 
    code: 'US', 
    name: 'United States', 
    language: 'en', 
    flag: '🇺🇸',
    currencySymbol: '$',
    currencyCode: 'USD',
    exchangeRate: 1 // Base currency
  },
  { 
    code: 'GB', 
    name: 'United Kingdom', 
    language: 'en', 
    flag: '🇬🇧',
    currencySymbol: '£',
    currencyCode: 'GBP',
    exchangeRate: 0.79 // 1 USD = 0.79 GBP
  },
  { 
    code: 'KR', 
    name: 'South Korea', 
    language: 'ko', 
    flag: '🇰🇷',
    currencySymbol: '₩',
    currencyCode: 'KRW',
    exchangeRate: 1337.76 // 1 USD = 1337.76 KRW
  },
  { 
    code: 'EU', 
    name: 'European Union', 
    language: 'en', 
    flag: '🇪🇺',
    currencySymbol: '€',
    currencyCode: 'EUR',
    exchangeRate: 0.92 // 1 USD = 0.92 EUR
  },
  { 
    code: 'CN', 
    name: 'China', 
    language: 'zh', 
    flag: '🇨🇳',
    currencySymbol: '¥',
    currencyCode: 'CNY',
    exchangeRate: 7.19 // 1 USD = 7.19 CNY
  },
  { 
    code: 'EE', 
    name: 'Estonia', 
    language: 'et', 
    flag: '🇪🇪',
    currencySymbol: '€',
    currencyCode: 'EUR',
    exchangeRate: 0.92 // 1 USD = 0.92 EUR
  }
];
