export interface Product {
  id: string;
  name_ar: string;
  name_en: string;
  slug: string;
  category: string;
  categorySlug: string;
  price: number;
  originalPrice?: number;
  size: string;
  skinType: string[];
  usage: 'day' | 'night' | 'both';
  freeFrom: string[];
  scentOptions?: string[];
  colorOptions?: { name: string; hex: string }[];
  rating: number;
  reviewsCount: number;
  ingredients: string[];
  howToUse: string;
  description: string;
  images: string[];
  badges: {
    vegan: boolean;
    crueltyFree: boolean;
    tested: boolean;
  };
  isNew: boolean;
  isBestSeller: boolean;
  benefits: string[];
}

export const products: Product[] = [
  // Skincare - Serums
  {
    id: "1",
    name_ar: "سيروم الريتينول المتقدم",
    name_en: "Advanced Retinol Serum",
    slug: "advanced-retinol-serum",
    category: "العناية بالبشرة",
    categorySlug: "skincare",
    price: 320,
    originalPrice: 380,
    size: "30ml",
    skinType: ["عادية", "جافة", "مختلطة"],
    usage: "night",
    freeFrom: ["البارابين", "الكبريتات", "العطور الصناعية"],
    rating: 4.9,
    reviewsCount: 234,
    ingredients: ["ريتينول 0.5%", "حمض الهيالورونيك", "فيتامين E", "زيت الجوجوبا", "نياسيناميد"],
    howToUse: "يُوضع 2-3 قطرات على البشرة النظيفة مساءً. تجنبي منطقة العين. استخدمي واقي الشمس صباحاً.",
    description: "سيروم مركّز بالريتينول النقي لتجديد خلايا البشرة وتقليل التجاعيد والخطوط الدقيقة. تركيبة متطورة تعمل طوال الليل.",
    images: [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600",
      "https://images.unsplash.com/photo-1617897903246-719242758050?w=600",
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=600"
    ],
    badges: { vegan: true, crueltyFree: true, tested: true },
    isNew: false,
    isBestSeller: true,
    benefits: ["يقلل التجاعيد", "يوحد لون البشرة", "يجدد الخلايا"]
  },
  {
    id: "2",
    name_ar: "سيروم فيتامين سي المضيء",
    name_en: "Vitamin C Brightening Serum",
    slug: "vitamin-c-brightening-serum",
    category: "العناية بالبشرة",
    categorySlug: "skincare",
    price: 280,
    size: "30ml",
    skinType: ["جميع أنواع البشرة"],
    usage: "day",
    freeFrom: ["البارابين", "السيليكون"],
    rating: 4.8,
    reviewsCount: 189,
    ingredients: ["فيتامين سي 15%", "فيتامين E", "حمض الفيروليك", "ماء الورد"],
    howToUse: "يُوضع صباحاً على البشرة النظيفة قبل المرطب وواقي الشمس.",
    description: "سيروم مضيء غني بفيتامين سي المستقر لإشراقة فورية وحماية من التصبغات.",
    images: [
      "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=600",
      "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=600"
    ],
    badges: { vegan: true, crueltyFree: true, tested: true },
    isNew: true,
    isBestSeller: true,
    benefits: ["إشراقة فورية", "يفتح البشرة", "مضاد للأكسدة"]
  },
  {
    id: "3",
    name_ar: "سيروم حمض الهيالورونيك المكثف",
    name_en: "Intensive Hyaluronic Acid Serum",
    slug: "intensive-hyaluronic-serum",
    category: "العناية بالبشرة",
    categorySlug: "skincare",
    price: 250,
    size: "30ml",
    skinType: ["جافة", "عادية"],
    usage: "both",
    freeFrom: ["الكحول", "البارابين"],
    rating: 4.7,
    reviewsCount: 156,
    ingredients: ["حمض الهيالورونيك 2%", "فيتامين B5", "الصبار", "الجلسرين"],
    howToUse: "يُوضع على بشرة رطبة صباحاً ومساءً. يُتبع بالمرطب.",
    description: "ترطيب عميق يدوم 72 ساعة مع حمض الهيالورونيك متعدد الأوزان الجزيئية.",
    images: [
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=600",
      "https://images.unsplash.com/photo-1617897903246-719242758050?w=600"
    ],
    badges: { vegan: true, crueltyFree: true, tested: true },
    isNew: false,
    isBestSeller: true,
    benefits: ["ترطيب عميق", "يملأ الخطوط", "بشرة ممتلئة"]
  },
  // Skincare - Creams
  {
    id: "4",
    name_ar: "كريم الليل المجدد",
    name_en: "Regenerating Night Cream",
    slug: "regenerating-night-cream",
    category: "العناية بالبشرة",
    categorySlug: "skincare",
    price: 380,
    size: "50ml",
    skinType: ["جافة", "عادية", "ناضجة"],
    usage: "night",
    freeFrom: ["البارابين", "المعادن الثقيلة"],
    rating: 4.9,
    reviewsCount: 201,
    ingredients: ["ريتينول", "ببتيدات", "زبدة الشيا", "زيت الأرغان", "فيتامين E"],
    howToUse: "يُوزع بلطف على الوجه والرقبة مساءً بعد السيروم.",
    description: "كريم ليلي فاخر يعمل على تجديد البشرة أثناء النوم لتستيقظي ببشرة مشرقة وناعمة.",
    images: [
      "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=600",
      "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600"
    ],
    badges: { vegan: false, crueltyFree: true, tested: true },
    isNew: false,
    isBestSeller: true,
    benefits: ["يجدد الخلايا", "يغذي بعمق", "يشد البشرة"]
  },
  {
    id: "5",
    name_ar: "كريم النهار بالحماية الشمسية",
    name_en: "Day Cream with SPF 50",
    slug: "day-cream-spf50",
    category: "العناية بالبشرة",
    categorySlug: "skincare",
    price: 290,
    size: "50ml",
    skinType: ["جميع أنواع البشرة"],
    usage: "day",
    freeFrom: ["البارابين", "الأوكسي بنزون"],
    rating: 4.6,
    reviewsCount: 178,
    ingredients: ["أكسيد الزنك", "فيتامين E", "نياسيناميد", "حمض الهيالورونيك"],
    howToUse: "يُوضع كخطوة أخيرة في روتين الصباح. يُعاد تطبيقه كل ساعتين عند التعرض للشمس.",
    description: "حماية شاملة من أشعة UVA/UVB مع ترطيب خفيف لا يترك أثراً أبيض.",
    images: [
      "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600",
      "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=600"
    ],
    badges: { vegan: true, crueltyFree: true, tested: true },
    isNew: true,
    isBestSeller: false,
    benefits: ["حماية SPF 50", "ترطيب خفيف", "مضاد للشيخوخة"]
  },
  {
    id: "6",
    name_ar: "كريم العين المكافح للهالات",
    name_en: "Anti-Dark Circles Eye Cream",
    slug: "anti-dark-circles-eye-cream",
    category: "العناية بالبشرة",
    categorySlug: "skincare",
    price: 220,
    size: "15ml",
    skinType: ["جميع أنواع البشرة"],
    usage: "both",
    freeFrom: ["العطور", "البارابين"],
    rating: 4.5,
    reviewsCount: 145,
    ingredients: ["كافيين", "فيتامين K", "ببتيدات", "ريتينول خفيف"],
    howToUse: "يُربت بلطف حول منطقة العين صباحاً ومساءً.",
    description: "تركيبة متخصصة لمحاربة الهالات السوداء والانتفاخ مع تقليل الخطوط الدقيقة.",
    images: [
      "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=600"
    ],
    badges: { vegan: true, crueltyFree: true, tested: true },
    isNew: false,
    isBestSeller: false,
    benefits: ["يخفف الهالات", "يقلل الانتفاخ", "يشد المنطقة"]
  },
  // Skincare - Cleansers
  {
    id: "7",
    name_ar: "غسول الوجه الرغوي اللطيف",
    name_en: "Gentle Foaming Cleanser",
    slug: "gentle-foaming-cleanser",
    category: "العناية بالبشرة",
    categorySlug: "skincare",
    price: 150,
    size: "200ml",
    skinType: ["جميع أنواع البشرة"],
    usage: "both",
    freeFrom: ["الكبريتات", "البارابين", "الصابون"],
    rating: 4.7,
    reviewsCount: 312,
    ingredients: ["ماء الورد", "خلاصة البابونج", "الجلسرين", "فيتامين E"],
    howToUse: "يُرغى مع الماء ويُدلك على الوجه بحركات دائرية ثم يُشطف.",
    description: "غسول يومي لطيف ينظف البشرة بعمق دون تجفيفها أو إزالة زيوتها الطبيعية.",
    images: [
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600",
      "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600"
    ],
    badges: { vegan: true, crueltyFree: true, tested: true },
    isNew: false,
    isBestSeller: true,
    benefits: ["تنظيف لطيف", "يحافظ على الترطيب", "خالي من الصابون"]
  },
  {
    id: "8",
    name_ar: "زيت التنظيف المذيب للمكياج",
    name_en: "Makeup Dissolving Cleansing Oil",
    slug: "makeup-dissolving-oil",
    category: "العناية بالبشرة",
    categorySlug: "skincare",
    price: 180,
    size: "150ml",
    skinType: ["جميع أنواع البشرة"],
    usage: "night",
    freeFrom: ["المعادن الثقيلة", "البارابين"],
    rating: 4.8,
    reviewsCount: 198,
    ingredients: ["زيت الجوجوبا", "زيت اللوز", "فيتامين E", "خلاصة الكاميليا"],
    howToUse: "يُدلك على البشرة الجافة ثم يُضاف الماء لتكوين مستحلب ويُشطف.",
    description: "زيت فاخر يذيب المكياج المقاوم للماء والشوائب بلطف دون ترك بقايا دهنية.",
    images: [
      "https://images.unsplash.com/photo-1617897903246-719242758050?w=600"
    ],
    badges: { vegan: true, crueltyFree: true, tested: true },
    isNew: false,
    isBestSeller: false,
    benefits: ["يزيل المكياج المقاوم للماء", "لا يسد المسام", "يغذي البشرة"]
  },
  // Skincare - Masks
  {
    id: "9",
    name_ar: "ماسك الطين المنقي",
    name_en: "Purifying Clay Mask",
    slug: "purifying-clay-mask",
    category: "العناية بالبشرة",
    categorySlug: "skincare",
    price: 160,
    size: "100ml",
    skinType: ["دهنية", "مختلطة"],
    usage: "both",
    freeFrom: ["البارابين", "السيليكون"],
    rating: 4.6,
    reviewsCount: 167,
    ingredients: ["طين الكاولين", "فحم منشط", "زيت شجرة الشاي", "الصبار"],
    howToUse: "يُوضع طبقة متوسطة على الوجه، يُترك 10-15 دقيقة ثم يُشطف.",
    description: "ماسك عميق التنقية يسحب الشوائب والزيوت الزائدة ويضيق المسام.",
    images: [
      "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=600"
    ],
    badges: { vegan: true, crueltyFree: true, tested: true },
    isNew: false,
    isBestSeller: false,
    benefits: ["ينقي المسام", "يتحكم بالزيوت", "ينعم البشرة"]
  },
  {
    id: "10",
    name_ar: "ماسك الترطيب العميق",
    name_en: "Deep Hydration Mask",
    slug: "deep-hydration-mask",
    category: "العناية بالبشرة",
    categorySlug: "skincare",
    price: 190,
    size: "75ml",
    skinType: ["جافة", "عادية"],
    usage: "both",
    freeFrom: ["البارابين", "الكحول"],
    rating: 4.8,
    reviewsCount: 143,
    ingredients: ["حمض الهيالورونيك", "زبدة الشيا", "فيتامين E", "زيت الأفوكادو"],
    howToUse: "يُوضع طبقة سميكة ويُترك 15-20 دقيقة أو طوال الليل للترطيب المكثف.",
    description: "ماسك كريمي فاخر يغمر البشرة بالترطيب المكثف لإنعاش البشرة المتعبة.",
    images: [
      "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=600"
    ],
    badges: { vegan: false, crueltyFree: true, tested: true },
    isNew: true,
    isBestSeller: false,
    benefits: ["ترطيب 48 ساعة", "يهدئ البشرة", "إشراقة فورية"]
  },
  // Makeup - Lipsticks
  {
    id: "11",
    name_ar: "أحمر شفاه مخملي",
    name_en: "Velvet Matte Lipstick",
    slug: "velvet-matte-lipstick",
    category: "المكياج",
    categorySlug: "makeup",
    price: 120,
    size: "3.5g",
    skinType: ["جميع أنواع البشرة"],
    usage: "both",
    freeFrom: ["البارابين", "الرصاص"],
    colorOptions: [
      { name: "روز نود", hex: "#C4A484" },
      { name: "بيري ريد", hex: "#8B0000" },
      { name: "كورال بينك", hex: "#FF6F61" },
      { name: "ماوف", hex: "#915F6D" },
      { name: "نيود بيج", hex: "#E8C4A8" }
    ],
    rating: 4.7,
    reviewsCount: 423,
    ingredients: ["زبدة الشيا", "فيتامين E", "زيت الجوجوبا", "شمع العسل"],
    howToUse: "يُوضع مباشرة على الشفاه من أنبوب أو بفرشاة. يمكن وضع طبقات للون أغمق.",
    description: "أحمر شفاه مخملي بتركيبة مرطبة طويلة الثبات ولون غني يدوم 8 ساعات.",
    images: [
      "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=600",
      "https://images.unsplash.com/photo-1591360236480-4dbb22f0f5ea?w=600"
    ],
    badges: { vegan: false, crueltyFree: true, tested: true },
    isNew: false,
    isBestSeller: true,
    benefits: ["ثبات 8 ساعات", "مرطب", "لون غني"]
  },
  {
    id: "12",
    name_ar: "ملمع شفاه لامع",
    name_en: "Glossy Lip Gloss",
    slug: "glossy-lip-gloss",
    category: "المكياج",
    categorySlug: "makeup",
    price: 90,
    size: "6ml",
    skinType: ["جميع أنواع البشرة"],
    usage: "both",
    freeFrom: ["البارابين"],
    colorOptions: [
      { name: "كريستال", hex: "#FFF0F5" },
      { name: "بيتش", hex: "#FFDAB9" },
      { name: "روز", hex: "#FFB6C1" },
      { name: "بيري", hex: "#DE5D83" }
    ],
    rating: 4.5,
    reviewsCount: 287,
    ingredients: ["زيت جوز الهند", "فيتامين E", "زيت الأرغان"],
    howToUse: "يُوضع وحده أو فوق أحمر الشفاه للمعان إضافي.",
    description: "ملمع شفاه لامع بلمسة غير لزجة يضفي لمعاناً طبيعياً وترطيباً فورياً.",
    images: [
      "https://images.unsplash.com/photo-1591360236480-4dbb22f0f5ea?w=600"
    ],
    badges: { vegan: true, crueltyFree: true, tested: true },
    isNew: true,
    isBestSeller: false,
    benefits: ["لمعان فائق", "غير لزج", "مرطب"]
  },
  // Makeup - Face
  {
    id: "13",
    name_ar: "كريم أساس مخملي",
    name_en: "Velvet Skin Foundation",
    slug: "velvet-skin-foundation",
    category: "المكياج",
    categorySlug: "makeup",
    price: 180,
    size: "30ml",
    skinType: ["جميع أنواع البشرة"],
    usage: "day",
    freeFrom: ["البارابين", "الزيوت المعدنية"],
    colorOptions: [
      { name: "بورسلين", hex: "#FFF5EE" },
      { name: "فانيلا", hex: "#F5DEB3" },
      { name: "ساند", hex: "#DEB887" },
      { name: "كراميل", hex: "#D2691E" },
      { name: "موكا", hex: "#8B4513" }
    ],
    rating: 4.8,
    reviewsCount: 356,
    ingredients: ["حمض الهيالورونيك", "فيتامين E", "نياسيناميد", "SPF 15"],
    howToUse: "يُوزع بإسفنجة أو فرشاة من منتصف الوجه للخارج. يُبنى للتغطية المطلوبة.",
    description: "كريم أساس فاخر بتغطية متوسطة قابلة للبناء ولمسة نهائية ساتان طبيعية.",
    images: [
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600"
    ],
    badges: { vegan: true, crueltyFree: true, tested: true },
    isNew: false,
    isBestSeller: true,
    benefits: ["تغطية طبيعية", "يدوم 12 ساعة", "مرطب"]
  },
  {
    id: "14",
    name_ar: "بودرة الإضاءة الماسية",
    name_en: "Diamond Glow Highlighter",
    slug: "diamond-glow-highlighter",
    category: "المكياج",
    categorySlug: "makeup",
    price: 140,
    size: "8g",
    skinType: ["جميع أنواع البشرة"],
    usage: "both",
    freeFrom: ["البارابين", "التالك"],
    colorOptions: [
      { name: "شامبين", hex: "#F7E7CE" },
      { name: "روز غولد", hex: "#B76E79" },
      { name: "بيرل", hex: "#FDEEF4" }
    ],
    rating: 4.9,
    reviewsCount: 198,
    ingredients: ["ميكا طبيعية", "فيتامين E", "زيت الجوجوبا"],
    howToUse: "يُوضع على عظام الخد والأنف وفوق الشفاه بفرشاة مروحة.",
    description: "هايلايتر بودرة ناعم يمنح إشراقة ماسية طبيعية دون جليتر ظاهر.",
    images: [
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600"
    ],
    badges: { vegan: true, crueltyFree: true, tested: true },
    isNew: false,
    isBestSeller: true,
    benefits: ["إشراقة طبيعية", "يمتزج بسهولة", "يدوم طويلاً"]
  },
  {
    id: "15",
    name_ar: "بلاش كريمي",
    name_en: "Cream Blush",
    slug: "cream-blush",
    category: "المكياج",
    categorySlug: "makeup",
    price: 110,
    size: "5g",
    skinType: ["جميع أنواع البشرة"],
    usage: "both",
    freeFrom: ["البارابين"],
    colorOptions: [
      { name: "بيتش", hex: "#FFCBA4" },
      { name: "روز", hex: "#E8B4B8" },
      { name: "بيري", hex: "#C9A0DC" },
      { name: "كورال", hex: "#FF7F50" }
    ],
    rating: 4.6,
    reviewsCount: 234,
    ingredients: ["زبدة الشيا", "فيتامين E", "زيت الأرغان"],
    howToUse: "يُربت بالأصابع أو إسفنجة على تفاحة الخد ويُدمج للخارج.",
    description: "بلاش كريمي يمنح توهجاً طبيعياً صحياً يدوم طوال اليوم.",
    images: [
      "https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=600"
    ],
    badges: { vegan: true, crueltyFree: true, tested: true },
    isNew: true,
    isBestSeller: false,
    benefits: ["توهج طبيعي", "مرطب", "سهل الدمج"]
  },
  // Makeup - Eyes
  {
    id: "16",
    name_ar: "باليت ظلال العيون الفاخرة",
    name_en: "Luxe Eyeshadow Palette",
    slug: "luxe-eyeshadow-palette",
    category: "المكياج",
    categorySlug: "makeup",
    price: 280,
    size: "12 ألوان",
    skinType: ["جميع أنواع البشرة"],
    usage: "both",
    freeFrom: ["البارابين", "التالك"],
    rating: 4.9,
    reviewsCount: 445,
    ingredients: ["ميكا", "فيتامين E", "زيت الجوجوبا"],
    howToUse: "تُستخدم الألوان الفاتحة كقاعدة والداكنة للتحديد. تُمزج بفرشاة نظيفة.",
    description: "باليت فاخرة بـ 12 لون من الماتي والشيمر بتصبغ عالي وامتزاج سلس.",
    images: [
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600",
      "https://images.unsplash.com/photo-1583241800698-e8ab01830a07?w=600"
    ],
    badges: { vegan: true, crueltyFree: true, tested: true },
    isNew: false,
    isBestSeller: true,
    benefits: ["تصبغ عالي", "12 لون متناسق", "يدوم طويلاً"]
  },
  {
    id: "17",
    name_ar: "ماسكارا الحجم المكثف",
    name_en: "Volume Intense Mascara",
    slug: "volume-intense-mascara",
    category: "المكياج",
    categorySlug: "makeup",
    price: 130,
    size: "12ml",
    skinType: ["جميع أنواع البشرة"],
    usage: "both",
    freeFrom: ["البارابين"],
    colorOptions: [
      { name: "أسود داكن", hex: "#000000" },
      { name: "بني غامق", hex: "#3D2314" }
    ],
    rating: 4.7,
    reviewsCount: 567,
    ingredients: ["شمع كرنوبا", "فيتامين E", "كيراتين"],
    howToUse: "يُوضع من الجذور للأطراف بحركات متعرجة. تُكرر للمزيد من الحجم.",
    description: "ماسكارا تمنح حجماً دراماتيكياً وتفصيلاً مثالياً دون تكتل.",
    images: [
      "https://images.unsplash.com/photo-1599733594230-6b823276abcc?w=600"
    ],
    badges: { vegan: false, crueltyFree: true, tested: true },
    isNew: false,
    isBestSeller: true,
    benefits: ["حجم مضاعف", "بدون تكتل", "يدوم 24 ساعة"]
  },
  {
    id: "18",
    name_ar: "قلم تحديد العيون السائل",
    name_en: "Precision Liquid Eyeliner",
    slug: "precision-liquid-eyeliner",
    category: "المكياج",
    categorySlug: "makeup",
    price: 95,
    size: "1ml",
    skinType: ["جميع أنواع البشرة"],
    usage: "both",
    freeFrom: ["البارابين"],
    colorOptions: [
      { name: "أسود", hex: "#000000" },
      { name: "بني", hex: "#4A3728" }
    ],
    rating: 4.8,
    reviewsCount: 389,
    ingredients: ["ماء", "أكريليت", "فحم نباتي"],
    howToUse: "يُرسم خط رفيع قرب الرموش ويُوسع تدريجياً للمظهر المطلوب.",
    description: "آيلاينر سائل برأس فرشاة دقيق لرسم خطوط حادة أو ناعمة بسهولة.",
    images: [
      "https://images.unsplash.com/photo-1583241800698-e8ab01830a07?w=600"
    ],
    badges: { vegan: true, crueltyFree: true, tested: true },
    isNew: false,
    isBestSeller: false,
    benefits: ["دقة عالية", "مقاوم للماء", "لون مكثف"]
  },
  // Hair Care
  {
    id: "19",
    name_ar: "شامبو الترطيب العميق",
    name_en: "Deep Moisture Shampoo",
    slug: "deep-moisture-shampoo",
    category: "العناية بالشعر",
    categorySlug: "hair",
    price: 120,
    size: "300ml",
    skinType: ["شعر جاف", "شعر متضرر"],
    usage: "both",
    freeFrom: ["الكبريتات", "البارابين", "السيليكون"],
    rating: 4.6,
    reviewsCount: 234,
    ingredients: ["زيت الأرغان", "كيراتين", "فيتامين E", "زبدة الشيا"],
    howToUse: "يُوضع على شعر مبلل ويُدلك فروة الرأس ثم يُشطف جيداً.",
    description: "شامبو خالي من الكبريتات يرطب الشعر الجاف والمتضرر بعمق.",
    images: [
      "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=600"
    ],
    badges: { vegan: true, crueltyFree: true, tested: true },
    isNew: false,
    isBestSeller: false,
    benefits: ["ترطيب عميق", "إصلاح التلف", "نعومة فائقة"]
  },
  {
    id: "20",
    name_ar: "بلسم الترميم المكثف",
    name_en: "Intensive Repair Conditioner",
    slug: "intensive-repair-conditioner",
    category: "العناية بالشعر",
    categorySlug: "hair",
    price: 130,
    size: "300ml",
    skinType: ["شعر متضرر", "شعر مصبوغ"],
    usage: "both",
    freeFrom: ["السيليكون", "البارابين"],
    rating: 4.7,
    reviewsCount: 198,
    ingredients: ["كيراتين", "زيت الأفوكادو", "بروتين القمح", "فيتامين B5"],
    howToUse: "يُوضع على الأطوال والأطراف بعد الشامبو، يُترك 2-3 دقائق ثم يُشطف.",
    description: "بلسم إصلاحي يرمم الشعر المتضرر ويعيد له حيويته ولمعانه.",
    images: [
      "https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=600"
    ],
    badges: { vegan: true, crueltyFree: true, tested: true },
    isNew: false,
    isBestSeller: true,
    benefits: ["إصلاح مكثف", "فك التشابك", "لمعان صحي"]
  },
  {
    id: "21",
    name_ar: "زيت الشعر الذهبي",
    name_en: "Golden Hair Oil",
    slug: "golden-hair-oil",
    category: "العناية بالشعر",
    categorySlug: "hair",
    price: 160,
    size: "100ml",
    skinType: ["جميع أنواع الشعر"],
    usage: "both",
    freeFrom: ["السيليكون", "البارابين"],
    rating: 4.9,
    reviewsCount: 312,
    ingredients: ["زيت الأرغان", "زيت اللوز", "زيت جوز الهند", "فيتامين E"],
    howToUse: "يُوضع على الأطراف الرطبة أو الجافة. يمكن استخدامه كماسك قبل الغسل.",
    description: "زيت شعر فاخر متعدد الاستخدامات يغذي ويلمّع ويحمي من الحرارة.",
    images: [
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=600"
    ],
    badges: { vegan: true, crueltyFree: true, tested: true },
    isNew: true,
    isBestSeller: true,
    benefits: ["تغذية عميقة", "لمعان ذهبي", "حماية حرارية"]
  },
  {
    id: "22",
    name_ar: "ماسك الشعر بالكيراتين",
    name_en: "Keratin Hair Mask",
    slug: "keratin-hair-mask",
    category: "العناية بالشعر",
    categorySlug: "hair",
    price: 180,
    size: "250ml",
    skinType: ["شعر متضرر", "شعر مجعد"],
    usage: "both",
    freeFrom: ["البارابين", "الفورمالديهايد"],
    rating: 4.8,
    reviewsCount: 187,
    ingredients: ["كيراتين", "بروتين الحرير", "زيت الأرغان", "فيتامين E"],
    howToUse: "يُوضع على شعر نظيف رطب، يُترك 10-15 دقيقة ثم يُشطف.",
    description: "ماسك مكثف بالكيراتين لإعادة بناء الشعر التالف وتنعيمه بشكل احترافي.",
    images: [
      "https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=600"
    ],
    badges: { vegan: false, crueltyFree: true, tested: true },
    isNew: false,
    isBestSeller: false,
    benefits: ["إعادة بناء", "نعومة حريرية", "تقوية"]
  },
  // Perfumes
  {
    id: "23",
    name_ar: "عطر الورد الدمشقي",
    name_en: "Damask Rose Eau de Parfum",
    slug: "damask-rose-perfume",
    category: "العطور",
    categorySlug: "perfume",
    price: 450,
    originalPrice: 520,
    size: "50ml",
    skinType: ["جميع أنواع البشرة"],
    usage: "both",
    freeFrom: ["الكحول الإيثيلي"],
    scentOptions: ["الورد الدمشقي"],
    rating: 4.9,
    reviewsCount: 156,
    ingredients: ["ورد دمشقي", "مسك أبيض", "عود", "عنبر"],
    howToUse: "يُرش على نقاط النبض: الرقبة، المعصم، خلف الأذن.",
    description: "عطر شرقي فاخر يجمع بين عبق الورد الدمشقي الأصيل ودفء العود والمسك.",
    images: [
      "https://images.unsplash.com/photo-1541643600914-78b084683601?w=600",
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=600"
    ],
    badges: { vegan: true, crueltyFree: true, tested: false },
    isNew: false,
    isBestSeller: true,
    benefits: ["ثبات 12 ساعة", "عطر أنثوي", "فاخر"]
  },
  {
    id: "24",
    name_ar: "عطر الياسمين الليلي",
    name_en: "Night Jasmine Parfum",
    slug: "night-jasmine-perfume",
    category: "العطور",
    categorySlug: "perfume",
    price: 420,
    size: "50ml",
    skinType: ["جميع أنواع البشرة"],
    usage: "night",
    freeFrom: [],
    scentOptions: ["الياسمين الليلي"],
    rating: 4.8,
    reviewsCount: 134,
    ingredients: ["ياسمين سامباك", "توبيروز", "صندل", "فانيلا"],
    howToUse: "يُرش بخاخة إلى ثلاث على نقاط النبض.",
    description: "عطر ساحر بأريج الياسمين المسائي الغامض مع قاعدة دافئة من الصندل والفانيلا.",
    images: [
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=600"
    ],
    badges: { vegan: true, crueltyFree: true, tested: false },
    isNew: true,
    isBestSeller: false,
    benefits: ["عطر مسائي", "أنيق وغامض", "طويل الأمد"]
  },
  {
    id: "25",
    name_ar: "عطر الفانيلا والعود",
    name_en: "Vanilla Oud Elixir",
    slug: "vanilla-oud-elixir",
    category: "العطور",
    categorySlug: "perfume",
    price: 550,
    size: "75ml",
    skinType: ["جميع أنواع البشرة"],
    usage: "both",
    freeFrom: [],
    scentOptions: ["الفانيلا والعود"],
    rating: 4.9,
    reviewsCount: 89,
    ingredients: ["عود كمبودي", "فانيلا مدغشقر", "عنبر رمادي", "مسك"],
    howToUse: "يُرش على الملابس والبشرة لثبات أطول.",
    description: "إكسير فاخر يجمع بين دفء الفانيلا المخملية وعمق العود الكمبودي الأصيل.",
    images: [
      "https://images.unsplash.com/photo-1541643600914-78b084683601?w=600"
    ],
    badges: { vegan: true, crueltyFree: true, tested: false },
    isNew: false,
    isBestSeller: true,
    benefits: ["ثبات استثنائي", "رائحة فريدة", "عطر يونيسيكس"]
  },
  {
    id: "26",
    name_ar: "عطر الحمضيات المنعش",
    name_en: "Fresh Citrus Splash",
    slug: "fresh-citrus-splash",
    category: "العطور",
    categorySlug: "perfume",
    price: 280,
    size: "100ml",
    skinType: ["جميع أنواع البشرة"],
    usage: "day",
    freeFrom: [],
    scentOptions: ["الحمضيات"],
    rating: 4.5,
    reviewsCount: 167,
    ingredients: ["برغموت", "ليمون", "نيرولي", "مسك أبيض"],
    howToUse: "يُرش بسخاء للانتعاش طوال اليوم.",
    description: "عطر منعش خفيف بلمسة حمضية مثالي للاستخدام اليومي والصباحي.",
    images: [
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=600"
    ],
    badges: { vegan: true, crueltyFree: true, tested: false },
    isNew: false,
    isBestSeller: false,
    benefits: ["انتعاش فوري", "مثالي للصباح", "خفيف وأنيق"]
  },
  // Tools
  {
    id: "27",
    name_ar: "فرشاة كابوكي للبودرة",
    name_en: "Kabuki Powder Brush",
    slug: "kabuki-powder-brush",
    category: "أدوات التجميل",
    categorySlug: "tools",
    price: 85,
    size: "قطعة واحدة",
    skinType: ["جميع أنواع البشرة"],
    usage: "both",
    freeFrom: [],
    rating: 4.7,
    reviewsCount: 234,
    ingredients: [],
    howToUse: "تُغمس في البودرة وتُنفض الزيادة ثم تُوزع بحركات دائرية.",
    description: "فرشاة كابوكي كثيفة بشعيرات ناعمة لتوزيع مثالي للبودرة والبرونزر.",
    images: [
      "https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=600"
    ],
    badges: { vegan: true, crueltyFree: true, tested: false },
    isNew: false,
    isBestSeller: false,
    benefits: ["توزيع متساوي", "شعيرات ناعمة", "متينة"]
  },
  {
    id: "28",
    name_ar: "إسفنجة المكياج الوردية",
    name_en: "Pink Beauty Blender",
    slug: "pink-beauty-blender",
    category: "أدوات التجميل",
    categorySlug: "tools",
    price: 45,
    size: "قطعة واحدة",
    skinType: ["جميع أنواع البشرة"],
    usage: "both",
    freeFrom: [],
    rating: 4.8,
    reviewsCount: 567,
    ingredients: [],
    howToUse: "تُبلل ثم تُعصر. تُستخدم بالربت لتوزيع الأساس والكونسيلر.",
    description: "إسفنجة مكياج مرنة تمنح تغطية خالية من العيوب ولمسة نهائية طبيعية.",
    images: [
      "https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=600"
    ],
    badges: { vegan: true, crueltyFree: true, tested: false },
    isNew: false,
    isBestSeller: true,
    benefits: ["تغطية مثالية", "خالية من اللاتكس", "سهلة التنظيف"]
  },
  {
    id: "29",
    name_ar: "مجموعة فرش المكياج الاحترافية",
    name_en: "Professional Brush Set",
    slug: "professional-brush-set",
    category: "أدوات التجميل",
    categorySlug: "tools",
    price: 320,
    size: "12 قطعة",
    skinType: ["جميع أنواع البشرة"],
    usage: "both",
    freeFrom: [],
    rating: 4.9,
    reviewsCount: 178,
    ingredients: [],
    howToUse: "تُستخدم كل فرشاة حسب غرضها. تُنظف بانتظام بمنظف الفرش.",
    description: "مجموعة فرش احترافية شاملة لجميع خطوات المكياج مع حقيبة أنيقة.",
    images: [
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600"
    ],
    badges: { vegan: true, crueltyFree: true, tested: false },
    isNew: true,
    isBestSeller: false,
    benefits: ["12 فرشاة", "شعيرات فاخرة", "حقيبة مرفقة"]
  },
  {
    id: "30",
    name_ar: "رولر الوجه الكوارتز الوردي",
    name_en: "Rose Quartz Face Roller",
    slug: "rose-quartz-roller",
    category: "أدوات التجميل",
    categorySlug: "tools",
    price: 140,
    size: "قطعة واحدة",
    skinType: ["جميع أنواع البشرة"],
    usage: "both",
    freeFrom: [],
    rating: 4.6,
    reviewsCount: 289,
    ingredients: [],
    howToUse: "يُبرّد في الثلاجة ثم يُمرر على الوجه من الداخل للخارج بحركات لطيفة.",
    description: "رولر من الكوارتز الوردي الطبيعي لتدليك الوجه وتحسين الدورة الدموية.",
    images: [
      "https://images.unsplash.com/photo-1590439471364-192aa70c0b53?w=600"
    ],
    badges: { vegan: true, crueltyFree: true, tested: false },
    isNew: false,
    isBestSeller: true,
    benefits: ["تقليل الانتفاخ", "تحسين الدورة الدموية", "استرخاء"]
  },
  // More Skincare Products
  {
    id: "31",
    name_ar: "تونر ماء الورد المنعش",
    name_en: "Rose Water Refreshing Toner",
    slug: "rose-water-toner",
    category: "العناية بالبشرة",
    categorySlug: "skincare",
    price: 95,
    size: "200ml",
    skinType: ["جميع أنواع البشرة"],
    usage: "both",
    freeFrom: ["الكحول", "البارابين"],
    rating: 4.7,
    reviewsCount: 312,
    ingredients: ["ماء الورد", "الجلسرين", "حمض الهيالورونيك", "خلاصة البابونج"],
    howToUse: "يُرش أو يُوزع بقطنة على البشرة النظيفة قبل السيروم.",
    description: "تونر منعش بماء الورد النقي يوازن البشرة ويحضرها لباقي الروتين.",
    images: [
      "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600"
    ],
    badges: { vegan: true, crueltyFree: true, tested: true },
    isNew: false,
    isBestSeller: true,
    benefits: ["توازن pH", "ترطيب خفيف", "تهدئة"]
  },
  {
    id: "32",
    name_ar: "مقشر الأحماض اللطيف",
    name_en: "Gentle Acid Exfoliant",
    slug: "gentle-acid-exfoliant",
    category: "العناية بالبشرة",
    categorySlug: "skincare",
    price: 175,
    size: "100ml",
    skinType: ["عادية", "دهنية", "مختلطة"],
    usage: "night",
    freeFrom: ["البارابين", "الكحول"],
    rating: 4.6,
    reviewsCount: 198,
    ingredients: ["AHA 5%", "BHA 2%", "نياسيناميد", "الصبار"],
    howToUse: "يُوضع مساءً 2-3 مرات أسبوعياً على بشرة نظيفة. يُتبع بواقي شمس صباحاً.",
    description: "مقشر كيميائي لطيف بالأحماض ينقي المسام ويحسن ملمس البشرة.",
    images: [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600"
    ],
    badges: { vegan: true, crueltyFree: true, tested: true },
    isNew: true,
    isBestSeller: false,
    benefits: ["تنقية المسام", "توحيد اللون", "تجديد الخلايا"]
  },
  {
    id: "33",
    name_ar: "كريم اليدين المغذي",
    name_en: "Nourishing Hand Cream",
    slug: "nourishing-hand-cream",
    category: "العناية بالبشرة",
    categorySlug: "skincare",
    price: 65,
    size: "75ml",
    skinType: ["جميع أنواع البشرة"],
    usage: "both",
    freeFrom: ["البارابين"],
    scentOptions: ["الورد", "اللافندر", "بدون عطر"],
    rating: 4.5,
    reviewsCount: 423,
    ingredients: ["زبدة الشيا", "زيت اللوز", "فيتامين E", "الجلسرين"],
    howToUse: "يُوزع على اليدين حسب الحاجة.",
    description: "كريم يدين غني يرطب ويحمي من الجفاف بتركيبة سريعة الامتصاص.",
    images: [
      "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=600"
    ],
    badges: { vegan: true, crueltyFree: true, tested: true },
    isNew: false,
    isBestSeller: false,
    benefits: ["ترطيب فوري", "غير دهني", "حماية"]
  },
  // More Makeup
  {
    id: "34",
    name_ar: "كونسيلر التغطية الكاملة",
    name_en: "Full Coverage Concealer",
    slug: "full-coverage-concealer",
    category: "المكياج",
    categorySlug: "makeup",
    price: 95,
    size: "8ml",
    skinType: ["جميع أنواع البشرة"],
    usage: "both",
    freeFrom: ["البارابين"],
    colorOptions: [
      { name: "فير", hex: "#FAEBD7" },
      { name: "لايت", hex: "#F5DEB3" },
      { name: "ميديم", hex: "#DEB887" },
      { name: "تان", hex: "#D2691E" }
    ],
    rating: 4.7,
    reviewsCount: 345,
    ingredients: ["حمض الهيالورونيك", "فيتامين C", "كافيين"],
    howToUse: "يُوضع تحت العين وعلى العيوب بالربت حتى يمتزج.",
    description: "كونسيلر بتغطية عالية يخفي الهالات والعيوب مع لمسة نهائية طبيعية.",
    images: [
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600"
    ],
    badges: { vegan: true, crueltyFree: true, tested: true },
    isNew: false,
    isBestSeller: true,
    benefits: ["تغطية عالية", "يدوم طويلاً", "مرطب"]
  },
  {
    id: "35",
    name_ar: "بودرة التثبيت الشفافة",
    name_en: "Translucent Setting Powder",
    slug: "translucent-setting-powder",
    category: "المكياج",
    categorySlug: "makeup",
    price: 120,
    size: "10g",
    skinType: ["جميع أنواع البشرة"],
    usage: "both",
    freeFrom: ["التالك", "البارابين"],
    rating: 4.8,
    reviewsCount: 289,
    ingredients: ["نشا الذرة", "ميكا", "فيتامين E"],
    howToUse: "تُوضع بفرشاة أو إسفنجة فوق الأساس للتثبيت.",
    description: "بودرة تثبيت شفافة تمتص الزيوت وتثبت المكياج دون إضافة لون.",
    images: [
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600"
    ],
    badges: { vegan: true, crueltyFree: true, tested: true },
    isNew: false,
    isBestSeller: true,
    benefits: ["تثبيت 12 ساعة", "لا تترك لوناً", "تتحكم بالزيوت"]
  },
  {
    id: "36",
    name_ar: "قلم الحواجب الطبيعي",
    name_en: "Natural Brow Pencil",
    slug: "natural-brow-pencil",
    category: "المكياج",
    categorySlug: "makeup",
    price: 75,
    size: "0.3g",
    skinType: ["جميع أنواع البشرة"],
    usage: "both",
    freeFrom: ["البارابين"],
    colorOptions: [
      { name: "بني فاتح", hex: "#8B7355" },
      { name: "بني متوسط", hex: "#6B4423" },
      { name: "بني داكن", hex: "#3D2314" },
      { name: "رمادي بني", hex: "#696969" }
    ],
    rating: 4.6,
    reviewsCount: 234,
    ingredients: ["شمع كرنوبا", "زيت جوز الهند"],
    howToUse: "يُرسم بخطوط دقيقة تحاكي الشعر الطبيعي ثم تُدمج بالفرشاة.",
    description: "قلم حواجب رفيع لرسم شعيرات دقيقة وطبيعية مع فرشاة مدمجة.",
    images: [
      "https://images.unsplash.com/photo-1583241800698-e8ab01830a07?w=600"
    ],
    badges: { vegan: false, crueltyFree: true, tested: true },
    isNew: false,
    isBestSeller: false,
    benefits: ["مظهر طبيعي", "سهل الاستخدام", "يدوم طويلاً"]
  },
  // More Hair Care
  {
    id: "37",
    name_ar: "سيروم الأطراف المتقصفة",
    name_en: "Split End Repair Serum",
    slug: "split-end-repair-serum",
    category: "العناية بالشعر",
    categorySlug: "hair",
    price: 95,
    size: "50ml",
    skinType: ["شعر متضرر"],
    usage: "both",
    freeFrom: ["السيليكون الثقيل"],
    rating: 4.5,
    reviewsCount: 167,
    ingredients: ["زيت الأرغان", "كيراتين", "فيتامين E"],
    howToUse: "يُوضع على الأطراف الجافة أو الرطبة.",
    description: "سيروم يلتصق بالأطراف المتقصفة ويحميها من المزيد من التلف.",
    images: [
      "https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=600"
    ],
    badges: { vegan: true, crueltyFree: true, tested: true },
    isNew: false,
    isBestSeller: false,
    benefits: ["إصلاح الأطراف", "حماية", "لمعان"]
  },
  {
    id: "38",
    name_ar: "سبراي الحماية الحرارية",
    name_en: "Heat Protection Spray",
    slug: "heat-protection-spray",
    category: "العناية بالشعر",
    categorySlug: "hair",
    price: 85,
    size: "200ml",
    skinType: ["جميع أنواع الشعر"],
    usage: "both",
    freeFrom: ["الكحول"],
    rating: 4.7,
    reviewsCount: 278,
    ingredients: ["بروتين القمح", "فيتامين E", "سيليكون خفيف"],
    howToUse: "يُرش على الشعر الرطب أو الجاف قبل استخدام أدوات التصفيف الحرارية.",
    description: "سبراي يحمي الشعر حتى 230 درجة مئوية ويضفي لمعاناً صحياً.",
    images: [
      "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=600"
    ],
    badges: { vegan: true, crueltyFree: true, tested: true },
    isNew: true,
    isBestSeller: false,
    benefits: ["حماية حتى 230°", "يسهل التصفيف", "لا يثقل الشعر"]
  },
  // More Perfumes
  {
    id: "39",
    name_ar: "عطر البتلات البيضاء",
    name_en: "White Petals Eau de Toilette",
    slug: "white-petals-edt",
    category: "العطور",
    categorySlug: "perfume",
    price: 320,
    size: "75ml",
    skinType: ["جميع أنواع البشرة"],
    usage: "day",
    freeFrom: [],
    scentOptions: ["البتلات البيضاء"],
    rating: 4.6,
    reviewsCount: 145,
    ingredients: ["زنبق الوادي", "فريزيا", "مسك أبيض", "خشب الأرز"],
    howToUse: "يُرش على نقاط النبض للانتعاش طوال اليوم.",
    description: "عطر نهاري رقيق بأريج الزهور البيضاء المنعشة والرومانسية.",
    images: [
      "https://images.unsplash.com/photo-1541643600914-78b084683601?w=600"
    ],
    badges: { vegan: true, crueltyFree: true, tested: false },
    isNew: false,
    isBestSeller: false,
    benefits: ["منعش", "رومانسي", "مثالي للنهار"]
  },
  {
    id: "40",
    name_ar: "عطر العنبر الملكي",
    name_en: "Royal Amber Parfum",
    slug: "royal-amber-parfum",
    category: "العطور",
    categorySlug: "perfume",
    price: 580,
    size: "50ml",
    skinType: ["جميع أنواع البشرة"],
    usage: "night",
    freeFrom: [],
    scentOptions: ["العنبر الملكي"],
    rating: 4.9,
    reviewsCount: 98,
    ingredients: ["عنبر رمادي", "زعفران", "عود", "فانيلا", "مسك"],
    howToUse: "يُوضع بحذر - قطرة واحدة كافية. مثالي للمناسبات الخاصة.",
    description: "عطر ملكي فاخر بتركيز عالي يجمع بين ندرة العنبر ودفء الزعفران.",
    images: [
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=600"
    ],
    badges: { vegan: true, crueltyFree: true, tested: false },
    isNew: true,
    isBestSeller: true,
    benefits: ["تركيز عالي", "ثبات استثنائي", "للمناسبات"]
  },
  // More Tools
  {
    id: "41",
    name_ar: "مرآة الإضاءة LED",
    name_en: "LED Makeup Mirror",
    slug: "led-makeup-mirror",
    category: "أدوات التجميل",
    categorySlug: "tools",
    price: 180,
    size: "قطعة واحدة",
    skinType: ["جميع أنواع البشرة"],
    usage: "both",
    freeFrom: [],
    rating: 4.8,
    reviewsCount: 156,
    ingredients: [],
    howToUse: "تُشغل الإضاءة ويُستخدم الوجه المكبر للتفاصيل الدقيقة.",
    description: "مرآة مكياج بإضاءة LED طبيعية وتكبير 5x للتطبيق المثالي.",
    images: [
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600"
    ],
    badges: { vegan: true, crueltyFree: true, tested: false },
    isNew: false,
    isBestSeller: true,
    benefits: ["إضاءة طبيعية", "تكبير 5x", "قابلة للشحن"]
  },
  {
    id: "42",
    name_ar: "ملقط الحواجب الذهبي",
    name_en: "Gold Precision Tweezers",
    slug: "gold-precision-tweezers",
    category: "أدوات التجميل",
    categorySlug: "tools",
    price: 55,
    size: "قطعة واحدة",
    skinType: ["جميع أنواع البشرة"],
    usage: "both",
    freeFrom: [],
    rating: 4.6,
    reviewsCount: 234,
    ingredients: [],
    howToUse: "يُمسك بالشعرة من الجذر ويُسحب بحركة سريعة في اتجاه نمو الشعر.",
    description: "ملقط حواجب بطلاء ذهبي ورأس مائل للدقة القصوى.",
    images: [
      "https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=600"
    ],
    badges: { vegan: true, crueltyFree: true, tested: false },
    isNew: false,
    isBestSeller: false,
    benefits: ["دقة عالية", "متينة", "سهلة الاستخدام"]
  },
  // Sets and Collections
  {
    id: "43",
    name_ar: "مجموعة العناية الكاملة",
    name_en: "Complete Skincare Set",
    slug: "complete-skincare-set",
    category: "العناية بالبشرة",
    categorySlug: "skincare",
    price: 750,
    originalPrice: 950,
    size: "5 قطع",
    skinType: ["جميع أنواع البشرة"],
    usage: "both",
    freeFrom: ["البارابين", "الكبريتات"],
    rating: 4.9,
    reviewsCount: 89,
    ingredients: [],
    howToUse: "تُستخدم المنتجات بالترتيب: منظف، تونر، سيروم، كريم نهار، كريم ليل.",
    description: "مجموعة متكاملة للعناية اليومية تحتوي على 5 منتجات أساسية بحجم كامل.",
    images: [
      "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=600",
      "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600"
    ],
    badges: { vegan: true, crueltyFree: true, tested: true },
    isNew: true,
    isBestSeller: true,
    benefits: ["توفير 21%", "روتين كامل", "علبة هدايا"]
  },
  {
    id: "44",
    name_ar: "طقم الشفاه المثالي",
    name_en: "Perfect Lips Kit",
    slug: "perfect-lips-kit",
    category: "المكياج",
    categorySlug: "makeup",
    price: 180,
    originalPrice: 230,
    size: "3 قطع",
    skinType: ["جميع أنواع البشرة"],
    usage: "both",
    freeFrom: ["البارابين"],
    colorOptions: [
      { name: "مجموعة النود", hex: "#C4A484" },
      { name: "مجموعة الوردي", hex: "#FFB6C1" },
      { name: "مجموعة البيري", hex: "#8B0000" }
    ],
    rating: 4.7,
    reviewsCount: 156,
    ingredients: [],
    howToUse: "يُوضع قلم التحديد أولاً ثم أحمر الشفاه ثم الملمع للمعان.",
    description: "طقم شفاه يحتوي على قلم تحديد وأحمر شفاه وملمع بألوان متناسقة.",
    images: [
      "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=600"
    ],
    badges: { vegan: true, crueltyFree: true, tested: true },
    isNew: false,
    isBestSeller: false,
    benefits: ["3 منتجات", "ألوان متناسقة", "توفير"]
  },
  // Additional Products
  {
    id: "45",
    name_ar: "سيروم النياسيناميد",
    name_en: "Niacinamide Serum",
    slug: "niacinamide-serum",
    category: "العناية بالبشرة",
    categorySlug: "skincare",
    price: 165,
    size: "30ml",
    skinType: ["دهنية", "مختلطة"],
    usage: "both",
    freeFrom: ["البارابين", "العطور"],
    rating: 4.8,
    reviewsCount: 287,
    ingredients: ["نياسيناميد 10%", "زنك", "حمض الهيالورونيك"],
    howToUse: "يُوضع بعد التنظيف صباحاً ومساءً قبل المرطب.",
    description: "سيروم يقلل المسام ويتحكم بالزيوت ويحسن ملمس البشرة.",
    images: [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600"
    ],
    badges: { vegan: true, crueltyFree: true, tested: true },
    isNew: false,
    isBestSeller: true,
    benefits: ["يصغر المسام", "يتحكم بالزيوت", "يوحد اللون"]
  },
  {
    id: "46",
    name_ar: "بلسم الشفاه المرطب",
    name_en: "Hydrating Lip Balm",
    slug: "hydrating-lip-balm",
    category: "العناية بالبشرة",
    categorySlug: "skincare",
    price: 45,
    size: "15g",
    skinType: ["جميع أنواع البشرة"],
    usage: "both",
    freeFrom: ["البارابين", "البترولاتوم"],
    scentOptions: ["الفانيلا", "الورد", "بدون نكهة"],
    rating: 4.6,
    reviewsCount: 456,
    ingredients: ["زبدة الشيا", "شمع العسل", "فيتامين E", "زيت جوز الهند"],
    howToUse: "يُوضع على الشفاه حسب الحاجة.",
    description: "بلسم شفاه غني يرطب ويحمي الشفاه الجافة طوال اليوم.",
    images: [
      "https://images.unsplash.com/photo-1591360236480-4dbb22f0f5ea?w=600"
    ],
    badges: { vegan: false, crueltyFree: true, tested: true },
    isNew: false,
    isBestSeller: false,
    benefits: ["ترطيب عميق", "حماية", "ملمس ناعم"]
  },
  {
    id: "47",
    name_ar: "مثبت المكياج",
    name_en: "Makeup Setting Spray",
    slug: "makeup-setting-spray",
    category: "المكياج",
    categorySlug: "makeup",
    price: 95,
    size: "100ml",
    skinType: ["جميع أنواع البشرة"],
    usage: "both",
    freeFrom: ["الكحول"],
    rating: 4.7,
    reviewsCount: 312,
    ingredients: ["ماء الورد", "جلسرين", "خلاصة الشاي الأخضر"],
    howToUse: "يُرش على بعد 20 سم من الوجه بعد الانتهاء من المكياج.",
    description: "سبراي يثبت المكياج حتى 16 ساعة ويمنحه لمسة منعشة.",
    images: [
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600"
    ],
    badges: { vegan: true, crueltyFree: true, tested: true },
    isNew: true,
    isBestSeller: false,
    benefits: ["ثبات 16 ساعة", "منعش", "يعزز الإشراق"]
  },
  {
    id: "48",
    name_ar: "جل الحواجب الشفاف",
    name_en: "Clear Brow Gel",
    slug: "clear-brow-gel",
    category: "المكياج",
    categorySlug: "makeup",
    price: 65,
    size: "8ml",
    skinType: ["جميع أنواع البشرة"],
    usage: "both",
    freeFrom: ["البارابين"],
    rating: 4.5,
    reviewsCount: 198,
    ingredients: ["ألياف طبيعية", "فيتامين E"],
    howToUse: "يُمشط للأعلى وللخارج لتثبيت الحواجب في مكانها.",
    description: "جل شفاف يثبت الحواجب ويمنحها مظهراً طبيعياً مرتباً.",
    images: [
      "https://images.unsplash.com/photo-1583241800698-e8ab01830a07?w=600"
    ],
    badges: { vegan: true, crueltyFree: true, tested: true },
    isNew: false,
    isBestSeller: false,
    benefits: ["تثبيت طبيعي", "شفاف", "يدوم طويلاً"]
  },
  {
    id: "49",
    name_ar: "لوشن الجسم الحريري",
    name_en: "Silky Body Lotion",
    slug: "silky-body-lotion",
    category: "العناية بالبشرة",
    categorySlug: "skincare",
    price: 110,
    size: "250ml",
    skinType: ["جميع أنواع البشرة"],
    usage: "both",
    freeFrom: ["البارابين"],
    scentOptions: ["الورد والفانيلا", "جوز الهند", "اللافندر"],
    rating: 4.7,
    reviewsCount: 234,
    ingredients: ["زبدة الشيا", "زيت اللوز", "فيتامين E", "حمض الهيالورونيك"],
    howToUse: "يُوزع على الجسم بعد الاستحمام لترطيب مثالي.",
    description: "لوشن جسم خفيف سريع الامتصاص يترك البشرة ناعمة كالحرير.",
    images: [
      "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=600"
    ],
    badges: { vegan: true, crueltyFree: true, tested: true },
    isNew: false,
    isBestSeller: true,
    benefits: ["ترطيب 24 ساعة", "سريع الامتصاص", "رائحة فاخرة"]
  },
  {
    id: "50",
    name_ar: "رذاذ الشعر اللامع",
    name_en: "Shine Hair Mist",
    slug: "shine-hair-mist",
    category: "العناية بالشعر",
    categorySlug: "hair",
    price: 75,
    size: "100ml",
    skinType: ["جميع أنواع الشعر"],
    usage: "both",
    freeFrom: ["الكحول"],
    rating: 4.6,
    reviewsCount: 167,
    ingredients: ["زيت الأرغان", "فيتامين E", "بروتين الحرير"],
    howToUse: "يُرش على الشعر الجاف من مسافة 30 سم للمعان فوري.",
    description: "رذاذ خفيف يمنح الشعر لمعاناً صحياً دون أن يثقله.",
    images: [
      "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=600"
    ],
    badges: { vegan: true, crueltyFree: true, tested: true },
    isNew: true,
    isBestSeller: false,
    benefits: ["لمعان فوري", "خفيف", "رائحة جميلة"]
  },
  {
    id: "51",
    name_ar: "زيت الاستحمام الفاخر",
    name_en: "Luxury Bath Oil",
    slug: "luxury-bath-oil",
    category: "العناية بالبشرة",
    categorySlug: "skincare",
    price: 145,
    size: "200ml",
    skinType: ["جافة", "عادية"],
    usage: "both",
    freeFrom: ["البارابين", "الكبريتات"],
    scentOptions: ["الورد", "اللافندر", "الياسمين"],
    rating: 4.8,
    reviewsCount: 123,
    ingredients: ["زيت اللوز", "زيت الجوجوبا", "فيتامين E", "زيوت عطرية"],
    howToUse: "يُضاف كمية قليلة إلى ماء الاستحمام الدافئ.",
    description: "زيت استحمام فاخر يحول الاستحمام لتجربة سبا مرطبة ومعطرة.",
    images: [
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=600"
    ],
    badges: { vegan: true, crueltyFree: true, tested: true },
    isNew: false,
    isBestSeller: false,
    benefits: ["تجربة سبا", "ترطيب عميق", "استرخاء"]
  },
  {
    id: "52",
    name_ar: "برايمر الترطيب",
    name_en: "Hydrating Primer",
    slug: "hydrating-primer",
    category: "المكياج",
    categorySlug: "makeup",
    price: 135,
    size: "30ml",
    skinType: ["جافة", "عادية"],
    usage: "day",
    freeFrom: ["البارابين", "السيليكون"],
    rating: 4.7,
    reviewsCount: 234,
    ingredients: ["حمض الهيالورونيك", "فيتامين E", "جلسرين", "خلاصة الورد"],
    howToUse: "يُوضع بعد المرطب وقبل كريم الأساس.",
    description: "برايمر مرطب يملس البشرة ويطيل ثبات المكياج مع إشراقة صحية.",
    images: [
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600"
    ],
    badges: { vegan: true, crueltyFree: true, tested: true },
    isNew: false,
    isBestSeller: true,
    benefits: ["يملس البشرة", "إشراقة", "يطيل ثبات المكياج"]
  },
  {
    id: "53",
    name_ar: "شامبو الحجم والكثافة",
    name_en: "Volume & Thickness Shampoo",
    slug: "volume-thickness-shampoo",
    category: "العناية بالشعر",
    categorySlug: "hair",
    price: 125,
    size: "300ml",
    skinType: ["شعر ناعم", "شعر خفيف"],
    usage: "both",
    freeFrom: ["الكبريتات", "البارابين"],
    rating: 4.5,
    reviewsCount: 178,
    ingredients: ["بيوتين", "كافيين", "بروتين القمح", "خلاصة الخيزران"],
    howToUse: "يُوضع على شعر مبلل، يُدلك ويُشطف. يُكرر إذا لزم.",
    description: "شامبو يمنح الشعر الخفيف حجماً وكثافة ملحوظة من الجذور.",
    images: [
      "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=600"
    ],
    badges: { vegan: true, crueltyFree: true, tested: true },
    isNew: false,
    isBestSeller: false,
    benefits: ["حجم ملحوظ", "تقوية", "خفيف"]
  },
  {
    id: "54",
    name_ar: "كريم البرونزر",
    name_en: "Cream Bronzer",
    slug: "cream-bronzer",
    category: "المكياج",
    categorySlug: "makeup",
    price: 115,
    size: "8g",
    skinType: ["جميع أنواع البشرة"],
    usage: "both",
    freeFrom: ["البارابين"],
    colorOptions: [
      { name: "صن كيسد", hex: "#D2691E" },
      { name: "غولدن", hex: "#CD853F" }
    ],
    rating: 4.6,
    reviewsCount: 156,
    ingredients: ["زبدة الشيا", "فيتامين E", "زيت جوز الهند"],
    howToUse: "يُوضع بالأصابع أو فرشاة على المناطق المعرضة للشمس طبيعياً.",
    description: "برونزر كريمي يمنح سمرة طبيعية مشرقة تدوم طوال اليوم.",
    images: [
      "https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=600"
    ],
    badges: { vegan: true, crueltyFree: true, tested: true },
    isNew: true,
    isBestSeller: false,
    benefits: ["سمرة طبيعية", "سهل الدمج", "مرطب"]
  },
  {
    id: "55",
    name_ar: "مجموعة السفر الصغيرة",
    name_en: "Travel Size Set",
    slug: "travel-size-set",
    category: "العناية بالبشرة",
    categorySlug: "skincare",
    price: 195,
    size: "5 قطع صغيرة",
    skinType: ["جميع أنواع البشرة"],
    usage: "both",
    freeFrom: ["البارابين"],
    rating: 4.8,
    reviewsCount: 234,
    ingredients: [],
    howToUse: "مثالية للسفر والتجربة.",
    description: "مجموعة أحجام سفر من أكثر منتجاتنا مبيعاً في حقيبة أنيقة.",
    images: [
      "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600"
    ],
    badges: { vegan: true, crueltyFree: true, tested: true },
    isNew: false,
    isBestSeller: true,
    benefits: ["مثالية للسفر", "تجربة المنتجات", "حقيبة مرفقة"]
  },
  {
    id: "56",
    name_ar: "عطر الزهور الشرقية",
    name_en: "Oriental Florals Perfume",
    slug: "oriental-florals-perfume",
    category: "العطور",
    categorySlug: "perfume",
    price: 390,
    size: "50ml",
    skinType: ["جميع أنواع البشرة"],
    usage: "both",
    freeFrom: [],
    scentOptions: ["الزهور الشرقية"],
    rating: 4.7,
    reviewsCount: 112,
    ingredients: ["ورد طائفي", "توبيروز", "عود", "مسك"],
    howToUse: "يُرش على نقاط النبض.",
    description: "عطر يجمع بين جمال الزهور الشرقية وعمق العود في تناغم آسر.",
    images: [
      "https://images.unsplash.com/photo-1541643600914-78b084683601?w=600"
    ],
    badges: { vegan: true, crueltyFree: true, tested: false },
    isNew: false,
    isBestSeller: false,
    benefits: ["أنثوي وشرقي", "ثبات ممتاز", "فريد"]
  },
  {
    id: "57",
    name_ar: "منظف فرش المكياج",
    name_en: "Brush Cleanser",
    slug: "brush-cleanser",
    category: "أدوات التجميل",
    categorySlug: "tools",
    price: 55,
    size: "150ml",
    skinType: ["جميع أنواع البشرة"],
    usage: "both",
    freeFrom: [],
    rating: 4.7,
    reviewsCount: 289,
    ingredients: ["كحول طبيعي", "زيت شجرة الشاي", "صبار"],
    howToUse: "يُرش على الفرش ويُمسح بمنديل نظيف. للتنظيف العميق يُغسل بالماء.",
    description: "منظف سريع لفرش المكياج يزيل البكتيريا وبقايا المكياج.",
    images: [
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600"
    ],
    badges: { vegan: true, crueltyFree: true, tested: false },
    isNew: false,
    isBestSeller: false,
    benefits: ["تنظيف سريع", "مضاد للبكتيريا", "يحافظ على الفرش"]
  },
  {
    id: "58",
    name_ar: "سيروم الببتيدات المضاد للشيخوخة",
    name_en: "Anti-Aging Peptide Serum",
    slug: "anti-aging-peptide-serum",
    category: "العناية بالبشرة",
    categorySlug: "skincare",
    price: 350,
    size: "30ml",
    skinType: ["ناضجة", "عادية", "جافة"],
    usage: "both",
    freeFrom: ["البارابين", "العطور"],
    rating: 4.9,
    reviewsCount: 145,
    ingredients: ["ببتيدات متعددة", "حمض الهيالورونيك", "فيتامين C", "ريسفيراترول"],
    howToUse: "يُوضع صباحاً ومساءً بعد التنظيف وقبل المرطب.",
    description: "سيروم متقدم بالببتيدات يحارب علامات الشيخوخة ويشد البشرة بشكل ملحوظ.",
    images: [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600"
    ],
    badges: { vegan: true, crueltyFree: true, tested: true },
    isNew: true,
    isBestSeller: false,
    benefits: ["يشد البشرة", "يملأ التجاعيد", "إشراقة شبابية"]
  },
  {
    id: "59",
    name_ar: "بخاخ تثبيت الشعر الخفيف",
    name_en: "Light Hold Hair Spray",
    slug: "light-hold-hair-spray",
    category: "العناية بالشعر",
    categorySlug: "hair",
    price: 85,
    size: "250ml",
    skinType: ["جميع أنواع الشعر"],
    usage: "both",
    freeFrom: ["الكحول الجاف"],
    rating: 4.5,
    reviewsCount: 198,
    ingredients: ["بوليمرات مرنة", "فيتامين E", "بانثينول"],
    howToUse: "يُرش على الشعر من مسافة 30 سم بعد التصفيف.",
    description: "بخاخ تثبيت خفيف يحافظ على التسريحة مع حركة طبيعية.",
    images: [
      "https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=600"
    ],
    badges: { vegan: true, crueltyFree: true, tested: true },
    isNew: false,
    isBestSeller: false,
    benefits: ["تثبيت مرن", "لا يترك بقايا", "حركة طبيعية"]
  },
  {
    id: "60",
    name_ar: "كريم الأساس المضيء",
    name_en: "Glow Skin Foundation",
    slug: "glow-skin-foundation",
    category: "المكياج",
    categorySlug: "makeup",
    price: 195,
    size: "30ml",
    skinType: ["جافة", "عادية"],
    usage: "day",
    freeFrom: ["البارابين", "السيليكون الثقيل"],
    colorOptions: [
      { name: "فير", hex: "#FFF5EE" },
      { name: "لايت", hex: "#F5DEB3" },
      { name: "ميديم", hex: "#DEB887" },
      { name: "تان", hex: "#D2691E" },
      { name: "ديب", hex: "#8B4513" }
    ],
    rating: 4.8,
    reviewsCount: 267,
    ingredients: ["حمض الهيالورونيك", "فيتامين C", "جسيمات مضيئة دقيقة"],
    howToUse: "يُوزع بإسفنجة أو فرشاة للحصول على إشراقة طبيعية.",
    description: "كريم أساس مضيء يمنح تغطية متوسطة مع توهج صحي من الداخل.",
    images: [
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600"
    ],
    badges: { vegan: true, crueltyFree: true, tested: true },
    isNew: true,
    isBestSeller: false,
    benefits: ["إشراقة طبيعية", "تغطية قابلة للبناء", "مرطب"]
  }
];

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find(p => p.slug === slug);
};

export const getProductsByCategory = (categorySlug: string): Product[] => {
  return products.filter(p => p.categorySlug === categorySlug);
};

export const getBestSellers = (): Product[] => {
  return products.filter(p => p.isBestSeller);
};

export const getNewProducts = (): Product[] => {
  return products.filter(p => p.isNew);
};

export const searchProducts = (query: string): Product[] => {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(p => 
    p.name_ar.includes(query) ||
    p.name_en.toLowerCase().includes(lowercaseQuery) ||
    p.description.includes(query) ||
    p.benefits.some(b => b.includes(query))
  );
};
