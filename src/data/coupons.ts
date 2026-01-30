export interface Coupon {
  code: string;
  discount: number;
  type: 'percentage' | 'fixed';
  minOrder: number;
  maxDiscount?: number;
  description: string;
  validUntil: string;
  isActive: boolean;
}

export const coupons: Coupon[] = [
  {
    code: "BEAUTY10",
    discount: 10,
    type: "percentage",
    minOrder: 200,
    maxDiscount: 100,
    description: "خصم 10% على طلبك الأول",
    validUntil: "2024-12-31",
    isActive: true
  },
  {
    code: "GLOW15",
    discount: 15,
    type: "percentage",
    minOrder: 350,
    maxDiscount: 150,
    description: "خصم 15% على مشترياتك",
    validUntil: "2024-12-31",
    isActive: true
  },
  {
    code: "LUMIERE20",
    discount: 20,
    type: "percentage",
    minOrder: 500,
    maxDiscount: 250,
    description: "خصم 20% للعملاء المميزين",
    validUntil: "2024-12-31",
    isActive: true
  },
  {
    code: "FREESHIP",
    discount: 30,
    type: "fixed",
    minOrder: 250,
    description: "شحن مجاني",
    validUntil: "2024-12-31",
    isActive: true
  },
  {
    code: "SKINCARE25",
    discount: 25,
    type: "percentage",
    minOrder: 400,
    maxDiscount: 200,
    description: "خصم خاص على منتجات العناية بالبشرة",
    validUntil: "2024-06-30",
    isActive: true
  }
];

export const validateCoupon = (code: string, orderTotal: number): { valid: boolean; coupon?: Coupon; message: string } => {
  const coupon = coupons.find(c => c.code.toUpperCase() === code.toUpperCase());
  
  if (!coupon) {
    return { valid: false, message: "كود الخصم غير صحيح" };
  }
  
  if (!coupon.isActive) {
    return { valid: false, message: "كود الخصم غير فعال" };
  }
  
  if (new Date(coupon.validUntil) < new Date()) {
    return { valid: false, message: "كود الخصم منتهي الصلاحية" };
  }
  
  if (orderTotal < coupon.minOrder) {
    return { valid: false, message: `الحد الأدنى للطلب ${coupon.minOrder} ر.س` };
  }
  
  return { valid: true, coupon, message: "تم تطبيق الكود بنجاح!" };
};

export const calculateDiscount = (coupon: Coupon, orderTotal: number): number => {
  if (coupon.type === "fixed") {
    return coupon.discount;
  }
  
  const discount = (orderTotal * coupon.discount) / 100;
  
  if (coupon.maxDiscount) {
    return Math.min(discount, coupon.maxDiscount);
  }
  
  return discount;
};
