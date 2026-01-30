import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Shield, Lock, Eye, Database, Mail, UserCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Header />

      {/* Hero */}
      <section className="py-20 bg-secondary/30">
        <div className="luxury-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="w-20 h-20 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
              <Shield className="w-10 h-10 text-primary" />
            </div>
            <h1 className="luxury-heading text-4xl md:text-5xl mb-4">سياسة الخصوصية</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              نلتزم بحماية خصوصيتك وبياناتك الشخصية. تعرفي على كيفية جمعنا واستخدامنا وحمايتنا لمعلوماتك.
            </p>
            <p className="text-sm text-muted-foreground mt-4">آخر تحديث: يناير 2024</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="luxury-container max-w-4xl">
          <div className="space-y-12">
            {/* Section 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Database className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-semibold">المعلومات التي نجمعها</h2>
              </div>
              <div className="pr-13 space-y-4 text-muted-foreground leading-relaxed">
                <p>نجمع المعلومات التي تقدمينها لنا مباشرة عند:</p>
                <ul className="list-disc pr-6 space-y-2">
                  <li>إنشاء حساب على موقعنا</li>
                  <li>إتمام عملية شراء</li>
                  <li>الاشتراك في نشرتنا البريدية</li>
                  <li>التواصل معنا عبر نموذج الاتصال</li>
                  <li>المشاركة في استطلاعات الرأي أو المسابقات</li>
                </ul>
                <p>تشمل هذه المعلومات: الاسم، البريد الإلكتروني، رقم الهاتف، عنوان الشحن، ومعلومات الدفع.</p>
              </div>
            </motion.div>

            {/* Section 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Eye className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-semibold">كيف نستخدم معلوماتك</h2>
              </div>
              <div className="pr-13 space-y-4 text-muted-foreground leading-relaxed">
                <p>نستخدم المعلومات التي نجمعها للأغراض التالية:</p>
                <ul className="list-disc pr-6 space-y-2">
                  <li>معالجة وتنفيذ طلباتك</li>
                  <li>إرسال تأكيدات الطلب وتحديثات الشحن</li>
                  <li>الرد على استفساراتك وتقديم خدمة العملاء</li>
                  <li>إرسال العروض الترويجية والنشرات البريدية (بموافقتك)</li>
                  <li>تحسين موقعنا وتجربة التسوق</li>
                  <li>منع الاحتيال وحماية أمان الموقع</li>
                </ul>
              </div>
            </motion.div>

            {/* Section 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Lock className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-semibold">حماية بياناتك</h2>
              </div>
              <div className="pr-13 space-y-4 text-muted-foreground leading-relaxed">
                <p>نتخذ إجراءات أمنية صارمة لحماية معلوماتك الشخصية:</p>
                <ul className="list-disc pr-6 space-y-2">
                  <li>تشفير SSL لجميع البيانات المنقولة</li>
                  <li>تخزين آمن للبيانات على خوادم محمية</li>
                  <li>وصول محدود للموظفين المصرح لهم فقط</li>
                  <li>مراجعة دورية لإجراءات الأمان</li>
                  <li>عدم تخزين بيانات بطاقات الدفع على خوادمنا</li>
                </ul>
              </div>
            </motion.div>

            {/* Section 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <UserCheck className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-semibold">حقوقك</h2>
              </div>
              <div className="pr-13 space-y-4 text-muted-foreground leading-relaxed">
                <p>لديكِ الحق في:</p>
                <ul className="list-disc pr-6 space-y-2">
                  <li>الوصول إلى بياناتك الشخصية</li>
                  <li>تصحيح أي معلومات غير دقيقة</li>
                  <li>طلب حذف بياناتك</li>
                  <li>إلغاء الاشتراك في الرسائل التسويقية</li>
                  <li>نقل بياناتك إلى خدمة أخرى</li>
                </ul>
              </div>
            </motion.div>

            {/* Section 5 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-semibold">تواصلي معنا</h2>
              </div>
              <div className="pr-13 space-y-4 text-muted-foreground leading-relaxed">
                <p>إذا كان لديكِ أي أسئلة حول سياسة الخصوصية، يمكنك التواصل معنا:</p>
                <div className="bg-secondary/50 p-6 rounded-xl space-y-2">
                  <p><strong>البريد الإلكتروني:</strong> privacy@lumiere.com</p>
                  <p><strong>الهاتف:</strong> +966 50 000 0000</p>
                  <p><strong>العنوان:</strong> الرياض، المملكة العربية السعودية</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Privacy;
