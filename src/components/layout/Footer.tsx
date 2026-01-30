import { Link } from 'react-router-dom';
import { Instagram, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary/30 border-t border-border/50 mt-20">
      <div className="luxury-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-display font-semibold">Lumière Beauty</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              نؤمن بأن الجمال الحقيقي ينبع من العناية بالنفس. منتجاتنا مصنوعة بحب وعناية لتمنحك إشراقة طبيعية تدوم.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <span className="text-xs text-muted-foreground">🐰 Cruelty Free</span>
              <span className="text-xs text-muted-foreground">👩‍⚕️ Dermatologist Tested</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">روابط سريعة</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/shop" className="text-sm text-muted-foreground hover:text-primary transition-colors">المتجر</Link>
              <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">من نحن</Link>
              <Link to="/beauty-guide" className="text-sm text-muted-foreground hover:text-primary transition-colors">دليل الجمال</Link>
              <Link to="/ingredients" className="text-sm text-muted-foreground hover:text-primary transition-colors">مكوناتنا</Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">تواصلي معنا</Link>
            </nav>
          </div>

          {/* Policies */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">السياسات</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">سياسة الخصوصية</Link>
              <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">الشروط والأحكام</Link>
              <Link to="/returns" className="text-sm text-muted-foreground hover:text-primary transition-colors">سياسة الاسترجاع</Link>
            </nav>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">تواصلي معنا</h4>
            <div className="flex flex-col gap-3">
              <a href="mailto:hello@lumiere.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                hello@lumiere.com
              </a>
              <a href="tel:+966500000000" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                +966 50 000 0000
              </a>
              <a href="#" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-4 h-4" />
                @lumierebeauty
              </a>
            </div>
            <div className="pt-4">
              <p className="text-sm text-muted-foreground mb-2">اشتركي في نشرتنا البريدية</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="بريدك الإلكتروني"
                  className="flex-1 px-4 py-2 text-sm bg-background border border-border rounded-full focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
                <button className="px-4 py-2 bg-primary text-primary-foreground text-sm rounded-full hover:opacity-90 transition-opacity">
                  اشتراك
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 mt-12 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Lumière Beauty. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
