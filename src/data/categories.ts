export interface Category {
  id: string;
  name_ar: string;
  name_en: string;
  slug: string;
  description: string;
  image: string;
  icon: string;
  productCount: number;
}

export const categories: Category[] = [
  {
    id: "1",
    name_ar: "العناية بالبشرة",
    name_en: "Skincare",
    slug: "skincare",
    description: "اكتشفي مجموعتنا الفاخرة من سيرومات وكريمات وأقنعة للبشرة المثالية",
    image: "https://images.unsplash.com/photo-1570194065650-d99fb4b38b15?w=800",
    icon: "✨",
    productCount: 25
  },
  {
    id: "2",
    name_ar: "المكياج",
    name_en: "Makeup",
    slug: "makeup",
    description: "ألوان وتركيبات فاخرة لإطلالة لا تُنسى",
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800",
    icon: "💄",
    productCount: 20
  },
  {
    id: "3",
    name_ar: "العناية بالشعر",
    name_en: "Hair Care",
    slug: "hair",
    description: "شامبو وبلسم وعلاجات لشعر صحي ولامع",
    image: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=800",
    icon: "💇‍♀️",
    productCount: 10
  },
  {
    id: "4",
    name_ar: "العطور",
    name_en: "Perfumes",
    slug: "perfume",
    description: "عطور شرقية وغربية فاخرة تدوم طويلاً",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800",
    icon: "🌸",
    productCount: 8
  },
  {
    id: "5",
    name_ar: "أدوات التجميل",
    name_en: "Beauty Tools",
    slug: "tools",
    description: "فرش وأدوات احترافية لتطبيق مكياج مثالي",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800",
    icon: "🪞",
    productCount: 8
  }
];

export const getCategoryBySlug = (slug: string): Category | undefined => {
  return categories.find(c => c.slug === slug);
};
