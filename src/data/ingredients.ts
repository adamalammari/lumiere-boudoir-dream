export interface Ingredient {
  id: string;
  name_ar: string;
  name_en: string;
  slug: string;
  description: string;
  benefits: string[];
  suitableFor: string[];
  image: string;
  category: string;
}

export const ingredients: Ingredient[] = [
  {
    id: "1",
    name_ar: "حمض الهيالورونيك",
    name_en: "Hyaluronic Acid",
    slug: "hyaluronic-acid",
    description: "جزيء طبيعي موجود في البشرة يمكنه حمل 1000 ضعف وزنه من الماء، مما يوفر ترطيباً عميقاً ويمنح البشرة مظهراً ممتلئاً وشاباً.",
    benefits: [
      "ترطيب عميق يدوم طويلاً",
      "يملأ الخطوط الدقيقة",
      "يعزز مرونة البشرة",
      "مناسب لجميع أنواع البشرة"
    ],
    suitableFor: ["جميع أنواع البشرة", "البشرة الجافة", "البشرة الناضجة"],
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400",
    category: "ترطيب"
  },
  {
    id: "2",
    name_ar: "الريتينول",
    name_en: "Retinol",
    slug: "retinol",
    description: "مشتق من فيتامين A، يعتبر المعيار الذهبي لمكافحة علامات الشيخوخة. يحفز تجديد الخلايا وإنتاج الكولاجين.",
    benefits: [
      "يقلل التجاعيد والخطوط",
      "يوحد لون البشرة",
      "يحارب حب الشباب",
      "ينعم ملمس البشرة"
    ],
    suitableFor: ["البشرة الناضجة", "البشرة ذات التصبغات", "البشرة المعرضة للحبوب"],
    image: "https://images.unsplash.com/photo-1617897903246-719242758050?w=400",
    category: "مكافحة الشيخوخة"
  },
  {
    id: "3",
    name_ar: "فيتامين سي",
    name_en: "Vitamin C",
    slug: "vitamin-c",
    description: "مضاد أكسدة قوي يحمي البشرة من الجذور الحرة ويفتح البشرة ويوحد لونها.",
    benefits: [
      "يضيء البشرة",
      "يقلل التصبغات",
      "يحمي من أضرار الشمس",
      "يحفز إنتاج الكولاجين"
    ],
    suitableFor: ["جميع أنواع البشرة", "البشرة الباهتة", "البشرة ذات التصبغات"],
    image: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=400",
    category: "إشراق"
  },
  {
    id: "4",
    name_ar: "النياسيناميد",
    name_en: "Niacinamide",
    slug: "niacinamide",
    description: "شكل من فيتامين B3 يعمل على تقليل المسام والتحكم بالزيوت وتحسين حاجز البشرة.",
    benefits: [
      "يصغر حجم المسام",
      "يتحكم بإفراز الزيوت",
      "يقوي حاجز البشرة",
      "يقلل الاحمرار"
    ],
    suitableFor: ["البشرة الدهنية", "البشرة المختلطة", "البشرة الحساسة"],
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400",
    category: "توازن"
  },
  {
    id: "5",
    name_ar: "زيت الأرغان",
    name_en: "Argan Oil",
    slug: "argan-oil",
    description: "زيت مغربي ثمين غني بالأحماض الدهنية وفيتامين E، يرطب ويغذي البشرة والشعر.",
    benefits: [
      "ترطيب عميق",
      "يغذي الشعر",
      "مضاد للأكسدة",
      "يحسن مرونة البشرة"
    ],
    suitableFor: ["البشرة الجافة", "الشعر التالف", "الأظافر الهشة"],
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400",
    category: "تغذية"
  },
  {
    id: "6",
    name_ar: "ماء الورد",
    name_en: "Rose Water",
    slug: "rose-water",
    description: "مستخلص طبيعي من بتلات الورد يهدئ ويرطب ويوازن البشرة مع رائحة ساحرة.",
    benefits: [
      "يهدئ التهيج",
      "يوازن pH البشرة",
      "ترطيب خفيف",
      "رائحة مهدئة"
    ],
    suitableFor: ["جميع أنواع البشرة", "البشرة الحساسة", "البشرة المتهيجة"],
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400",
    category: "تهدئة"
  },
  {
    id: "7",
    name_ar: "الكيراتين",
    name_en: "Keratin",
    slug: "keratin",
    description: "بروتين طبيعي موجود في الشعر يساعد على إصلاح التلف وتنعيم الشعر المجعد.",
    benefits: [
      "يرمم الشعر التالف",
      "ينعم الشعر المجعد",
      "يقوي بصيلات الشعر",
      "يضفي لمعاناً"
    ],
    suitableFor: ["الشعر التالف", "الشعر المجعد", "الشعر المصبوغ"],
    image: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=400",
    category: "إصلاح"
  },
  {
    id: "8",
    name_ar: "زبدة الشيا",
    name_en: "Shea Butter",
    slug: "shea-butter",
    description: "زبدة طبيعية غنية بالدهون والفيتامينات، توفر ترطيباً عميقاً وحماية للبشرة.",
    benefits: [
      "ترطيب مكثف",
      "يلين البشرة الجافة",
      "مضاد للالتهاب",
      "يحمي من العوامل البيئية"
    ],
    suitableFor: ["البشرة الجافة جداً", "الشفاه المتشققة", "الأيدي الخشنة"],
    image: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=400",
    category: "تغذية"
  }
];

export const getIngredientBySlug = (slug: string): Ingredient | undefined => {
  return ingredients.find(i => i.slug === slug);
};
