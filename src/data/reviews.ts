import { products, Product } from './products';

export interface Review {
  id: string;
  productId: string;
  customerName: string;
  rating: number;
  title: string;
  comment: string;
  date: string;
  verified: boolean;
  helpful: number;
  skinType?: string;
}

export const reviews: Review[] = [
  {
    id: "r1",
    productId: "1",
    customerName: "سارة المحمد",
    rating: 5,
    title: "نتائج مذهلة!",
    comment: "لاحظت فرقاً واضحاً في بشرتي بعد أسبوعين فقط. التجاعيد الصغيرة أصبحت أقل وضوحاً وبشرتي أكثر إشراقاً.",
    date: "2024-01-15",
    verified: true,
    helpful: 24,
    skinType: "مختلطة"
  },
  {
    id: "r2",
    productId: "1",
    customerName: "نورة العتيبي",
    rating: 5,
    title: "أفضل سيروم استخدمته",
    comment: "تركيبة رائعة ولا تسبب أي تهيج. أنصح به بشدة لكل من تريد بشرة شابة.",
    date: "2024-01-10",
    verified: true,
    helpful: 18
  },
  {
    id: "r3",
    productId: "2",
    customerName: "لمياء الشمري",
    rating: 5,
    title: "إشراقة فورية",
    comment: "من أول استخدام لاحظت الفرق! بشرتي أصبحت مضيئة وموحدة اللون.",
    date: "2024-01-12",
    verified: true,
    helpful: 32
  },
  {
    id: "r4",
    productId: "11",
    customerName: "هند الراشد",
    rating: 4,
    title: "لون جميل جداً",
    comment: "اللون رائع والثبات ممتاز. فقط أتمنى لو كان أكثر ترطيباً.",
    date: "2024-01-08",
    verified: true,
    helpful: 15
  },
  {
    id: "r5",
    productId: "23",
    customerName: "ريم الفهد",
    rating: 5,
    title: "عطر أحلامي",
    comment: "رائحة فاخرة وأنثوية جداً. أتلقى إطراءات كثيرة عليه. الثبات مذهل!",
    date: "2024-01-05",
    verified: true,
    helpful: 45
  },
  {
    id: "r6",
    productId: "13",
    customerName: "دانة السعيد",
    rating: 5,
    title: "تغطية مثالية",
    comment: "أخيراً وجدت كريم أساس يناسب بشرتي! التغطية طبيعية واللون مطابق تماماً.",
    date: "2024-01-03",
    verified: true,
    helpful: 28
  },
  {
    id: "r7",
    productId: "21",
    customerName: "منى العسيري",
    rating: 5,
    title: "شعري أصبح كالحرير",
    comment: "زيت رائع! شعري أصبح ناعماً ولامعاً من أول استخدام.",
    date: "2024-01-01",
    verified: true,
    helpful: 22
  },
  {
    id: "r8",
    productId: "4",
    customerName: "غادة المالكي",
    rating: 5,
    title: "كريم ليلي ممتاز",
    comment: "أستيقظ ببشرة ناعمة ومرطبة. رائحته خفيفة وجميلة.",
    date: "2023-12-28",
    verified: true,
    helpful: 19
  }
];

export const getReviewsByProductId = (productId: string): Review[] => {
  return reviews.filter(r => r.productId === productId);
};

export const getTopReviews = (limit: number = 5): Review[] => {
  return [...reviews].sort((a, b) => b.helpful - a.helpful).slice(0, limit);
};

export interface ReviewWithProduct extends Review {
  product: Product | undefined;
}

export const getTopReviewsWithProducts = (limit: number = 5): ReviewWithProduct[] => {
  const topReviews = [...reviews].sort((a, b) => b.helpful - a.helpful).slice(0, limit);
  return topReviews.map(review => ({
    ...review,
    product: products.find(p => p.id === review.productId)
  }));
};
