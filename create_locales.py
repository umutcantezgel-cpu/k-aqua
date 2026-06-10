import os
import json

locales = {
  "de": {
    "Navigation": {
      "home": "Startseite",
      "products": "Produkte",
      "solutions": "Lösungen",
      "about": "Über uns",
      "service": "Service",
      "news": "News",
      "career": "Karriere",
      "contact": "Kontakt"
    },
    "Footer": {
      "description": "Führend in der Wasserversorgung. Hochwertige PP-R/PP-RCT Rohre und Formteile.",
      "explore": "Entdecken",
      "products": "Produkte",
      "solutions": "Lösungen",
      "references": "Referenzen",
      "career": "Karriere",
      "contact": "Kontakt",
      "legal": "Rechtliches",
      "imprint": "Impressum",
      "privacyPolicy": "Datenschutzerklärung",
      "allRightsReserved": "Alle Rechte vorbehalten.",
      "gdpr": "Strikte Einhaltung der DSGVO/GDPR"
    },
    "CTASection": {
      "heading": "Bereit für Ihr nächstes Projekt?",
      "text": "Kontaktieren Sie uns für eine unverbindliche Beratung und erfahren Sie, wie unsere Lösungen Ihre Anforderungen perfekt erfüllen.",
      "buttonText": "Jetzt Kontakt aufnehmen"
    },
    "FAQSection": {
      "title": "Häufig gestellte Fragen"
    },
    "HeroSection": {
      "title": "Willkommen bei K-Aqua",
      "subtitle": "Ihr Partner für zukunftssichere Wassertechnologie",
      "ctaText": "Jetzt anfragen"
    }
  },
  "en": {
    "Navigation": {
      "home": "Home",
      "products": "Products",
      "solutions": "Solutions",
      "about": "About Us",
      "service": "Service",
      "news": "News",
      "career": "Career",
      "contact": "Contact"
    },
    "Footer": {
      "description": "Leading in Water Supply. High-quality PP-R/PP-RCT pipes and fittings.",
      "explore": "Explore",
      "products": "Products",
      "solutions": "Solutions",
      "references": "References",
      "career": "Career",
      "contact": "Contact",
      "legal": "Legal",
      "imprint": "Imprint",
      "privacyPolicy": "Privacy Policy",
      "allRightsReserved": "All rights reserved.",
      "gdpr": "Strict adherence to DSGVO/GDPR"
    },
    "CTASection": {
      "heading": "Ready for your next project?",
      "text": "Contact us for a non-binding consultation and find out how our solutions perfectly meet your requirements.",
      "buttonText": "Contact us now"
    },
    "FAQSection": {
      "title": "Frequently Asked Questions"
    },
    "HeroSection": {
      "title": "Welcome to K-Aqua",
      "subtitle": "Your partner for future-proof water technology",
      "ctaText": "Inquire now"
    }
  },
  "fr": {
    "Navigation": {
      "home": "Accueil",
      "products": "Produits",
      "solutions": "Solutions",
      "about": "À propos",
      "service": "Service",
      "news": "Actualités",
      "career": "Carrière",
      "contact": "Contact"
    },
    "Footer": {
      "description": "Leader de l'approvisionnement en eau. Tuyaux et raccords PP-R/PP-RCT de haute qualité.",
      "explore": "Explorer",
      "products": "Produits",
      "solutions": "Solutions",
      "references": "Références",
      "career": "Carrière",
      "contact": "Contact",
      "legal": "Légal",
      "imprint": "Mentions légales",
      "privacyPolicy": "Politique de confidentialité",
      "allRightsReserved": "Tous droits réservés.",
      "gdpr": "Strict respect du RGPD"
    },
    "CTASection": {
      "heading": "Prêt pour votre prochain projet ?",
      "text": "Contactez-nous pour une consultation sans engagement et découvrez comment nos solutions répondent parfaitement à vos exigences.",
      "buttonText": "Contactez-nous maintenant"
    },
    "FAQSection": {
      "title": "Foire aux questions"
    },
    "HeroSection": {
      "title": "Bienvenue chez K-Aqua",
      "subtitle": "Votre partenaire pour une technologie de l'eau d'avenir",
      "ctaText": "Demander maintenant"
    }
  },
  "es": {
    "Navigation": {
      "home": "Inicio",
      "products": "Productos",
      "solutions": "Soluciones",
      "about": "Sobre nosotros",
      "service": "Servicios",
      "news": "Noticias",
      "career": "Carrera",
      "contact": "Contacto"
    },
    "Footer": {
      "description": "Líder en suministro de agua. Tuberías y accesorios PP-R/PP-RCT de alta calidad.",
      "explore": "Explorar",
      "products": "Productos",
      "solutions": "Soluciones",
      "references": "Referencias",
      "career": "Carrera",
      "contact": "Contacto",
      "legal": "Legal",
      "imprint": "Aviso legal",
      "privacyPolicy": "Política de privacidad",
      "allRightsReserved": "Todos los derechos reservados.",
      "gdpr": "Estricto cumplimiento del RGPD"
    },
    "CTASection": {
      "heading": "¿Listo para tu próximo proyecto?",
      "text": "Contáctanos para una consulta sin compromiso y descubre cómo nuestras soluciones cumplen perfectamente con tus requisitos.",
      "buttonText": "Contáctanos ahora"
    },
    "FAQSection": {
      "title": "Preguntas frecuentes"
    },
    "HeroSection": {
      "title": "Bienvenido a K-Aqua",
      "subtitle": "Tu socio para tecnología de agua del futuro",
      "ctaText": "Solicitar ahora"
    }
  },
  "it": {
    "Navigation": {
      "home": "Home",
      "products": "Prodotti",
      "solutions": "Soluzioni",
      "about": "Chi siamo",
      "service": "Servizi",
      "news": "Notizie",
      "career": "Carriera",
      "contact": "Contatti"
    },
    "Footer": {
      "description": "Leader nell'approvvigionamento idrico. Tubi e raccordi PP-R/PP-RCT di alta qualità.",
      "explore": "Esplora",
      "products": "Prodotti",
      "solutions": "Soluzioni",
      "references": "Referenze",
      "career": "Carriera",
      "contact": "Contatti",
      "legal": "Legale",
      "imprint": "Note legali",
      "privacyPolicy": "Informativa sulla privacy",
      "allRightsReserved": "Tutti i diritti riservati.",
      "gdpr": "Rigoroso rispetto del GDPR"
    },
    "CTASection": {
      "heading": "Pronto per il tuo prossimo progetto?",
      "text": "Contattaci per una consulenza senza impegno e scopri come le nostre soluzioni soddisfano perfettamente le tue esigenze.",
      "buttonText": "Contattaci ora"
    },
    "FAQSection": {
      "title": "Domande frequenti"
    },
    "HeroSection": {
      "title": "Benvenuti in K-Aqua",
      "subtitle": "Il tuo partner per una tecnologia idrica all'avanguardia",
      "ctaText": "Richiedi ora"
    }
  },
  "tr": {
    "Navigation": {
      "home": "Ana Sayfa",
      "products": "Ürünler",
      "solutions": "Çözümler",
      "about": "Hakkımızda",
      "service": "Hizmetler",
      "news": "Haberler",
      "career": "Kariyer",
      "contact": "İletişim"
    },
    "Footer": {
      "description": "Su tedarikinde lider. Yüksek kaliteli PP-R/PP-RCT boru ve ek parçaları.",
      "explore": "Keşfet",
      "products": "Ürünler",
      "solutions": "Çözümler",
      "references": "Referanslar",
      "career": "Kariyer",
      "contact": "İletişim",
      "legal": "Yasal",
      "imprint": "Künye",
      "privacyPolicy": "Gizlilik Politikası",
      "allRightsReserved": "Tüm hakları saklıdır.",
      "gdpr": "KVKK/GDPR'ye tam uyum"
    },
    "CTASection": {
      "heading": "Sonraki projeniz için hazır mısınız?",
      "text": "Gereksinimlerinizi mükemmel şekilde karşılayan çözümlerimizi öğrenmek için ücretsiz danışmanlık hizmetimizden yararlanın.",
      "buttonText": "Şimdi iletişime geçin"
    },
    "FAQSection": {
      "title": "Sıkça Sorulan Sorular"
    },
    "HeroSection": {
      "title": "K-Aqua'ya Hoş Geldiniz",
      "subtitle": "Geleceğe hazır su teknolojileri için partneriniz",
      "ctaText": "Hemen bilgi alın"
    }
  },
  "pl": {
    "Navigation": {
      "home": "Strona główna",
      "products": "Produkty",
      "solutions": "Rozwiązania",
      "about": "O nas",
      "service": "Usługi",
      "news": "Aktualności",
      "career": "Kariera",
      "contact": "Kontakt"
    },
    "Footer": {
      "description": "Lider w zaopatrzeniu w wodę. Wysokiej jakości rury i złączki PP-R/PP-RCT.",
      "explore": "Odkryj",
      "products": "Produkty",
      "solutions": "Rozwiązania",
      "references": "Referencje",
      "career": "Kariera",
      "contact": "Kontakt",
      "legal": "Kwestie prawne",
      "imprint": "Nota prawna",
      "privacyPolicy": "Polityka prywatności",
      "allRightsReserved": "Wszelkie prawa zastrzeżone.",
      "gdpr": "Ścisłe przestrzeganie RODO/GDPR"
    },
    "CTASection": {
      "heading": "Gotowy na kolejny projekt?",
      "text": "Skontaktuj się z nami w sprawie niezobowiązującej konsultacji i dowiedz się, jak nasze rozwiązania idealnie spełniają Twoje wymagania.",
      "buttonText": "Skontaktuj się z nami"
    },
    "FAQSection": {
      "title": "Często zadawane pytania"
    },
    "HeroSection": {
      "title": "Witamy w K-Aqua",
      "subtitle": "Twój partner w zakresie przyszłościowych technologii wodnych",
      "ctaText": "Zapytaj teraz"
    }
  },
  "ru": {
    "Navigation": {
      "home": "Главная",
      "products": "Продукты",
      "solutions": "Решения",
      "about": "О нас",
      "service": "Услуги",
      "news": "Новости",
      "career": "Карьера",
      "contact": "Контакты"
    },
    "Footer": {
      "description": "Лидер в водоснабжении. Высококачественные трубы и фитинги PP-R/PP-RCT.",
      "explore": "Изучить",
      "products": "Продукты",
      "solutions": "Решения",
      "references": "Проекты",
      "career": "Карьера",
      "contact": "Контакты",
      "legal": "Правовая информация",
      "imprint": "Реквизиты",
      "privacyPolicy": "Политика конфиденциальности",
      "allRightsReserved": "Все права защищены.",
      "gdpr": "Строгое соблюдение GDPR"
    },
    "CTASection": {
      "heading": "Готовы к следующему проекту?",
      "text": "Свяжитесь с нами для бесплатной консультации и узнайте, как наши решения могут идеально удовлетворить ваши требования.",
      "buttonText": "Связаться с нами"
    },
    "FAQSection": {
      "title": "Часто задаваемые вопросы"
    },
    "HeroSection": {
      "title": "Добро пожаловать в K-Aqua",
      "subtitle": "Ваш партнер в области перспективных водных технологий",
      "ctaText": "Отправить запрос"
    }
  },
  "ar": {
    "Navigation": {
      "home": "الرئيسية",
      "products": "المنتجات",
      "solutions": "الحلول",
      "about": "من نحن",
      "service": "الخدمات",
      "news": "الأخبار",
      "career": "الوظائف",
      "contact": "اتصل بنا"
    },
    "Footer": {
      "description": "رواد في إمدادات المياه. أنابيب ووصلات PP-R/PP-RCT عالية الجودة.",
      "explore": "استكشف",
      "products": "المنتجات",
      "solutions": "الحلول",
      "references": "المراجع",
      "career": "الوظائف",
      "contact": "اتصل بنا",
      "legal": "قانوني",
      "imprint": "بيانات النشر",
      "privacyPolicy": "سياسة الخصوصية",
      "allRightsReserved": "جميع الحقوق محفوظة.",
      "gdpr": "الالتزام الصارم بقانون حماية البيانات (GDPR)"
    },
    "CTASection": {
      "heading": "مستعد لمشروعك القادم؟",
      "text": "اتصل بنا للحصول على استشارة غير ملزمة واكتشف كيف تلبي حلولنا متطلباتك بشكل مثالي.",
      "buttonText": "اتصل بنا الآن"
    },
    "FAQSection": {
      "title": "الأسئلة الشائعة"
    },
    "HeroSection": {
      "title": "مرحباً بكم في K-Aqua",
      "subtitle": "شريكك لتكنولوجيا المياه المستقبلية",
      "ctaText": "استفسر الآن"
    }
  },
  "zh": {
    "Navigation": {
      "home": "首页",
      "products": "产品",
      "solutions": "解决方案",
      "about": "关于我们",
      "service": "服务",
      "news": "新闻",
      "career": "职业",
      "contact": "联系我们"
    },
    "Footer": {
      "description": "供水领域的领导者。高质量的PP-R/PP-RCT管道和管件。",
      "explore": "探索",
      "products": "产品",
      "solutions": "解决方案",
      "references": "成功案例",
      "career": "职业",
      "contact": "联系我们",
      "legal": "法律信息",
      "imprint": "版本说明",
      "privacyPolicy": "隐私政策",
      "allRightsReserved": "版权所有。",
      "gdpr": "严格遵守GDPR法规"
    },
    "CTASection": {
      "heading": "准备好开始您的下一个项目了吗？",
      "text": "请联系我们进行免费咨询，了解我们的解决方案如何完美满足您的需求。",
      "buttonText": "立即联系我们"
    },
    "FAQSection": {
      "title": "常见问题"
    },
    "HeroSection": {
      "title": "欢迎来到 K-Aqua",
      "subtitle": "您未来水技术的合作伙伴",
      "ctaText": "立即咨询"
    }
  }
}

for locale, messages in locales.items():
    os.makedirs(f"/Users/umurey/Downloads/k-aqua-main/messages/{locale}", exist_ok=True)
    with open(f"/Users/umurey/Downloads/k-aqua-main/messages/{locale}/Global.json", "w", encoding="utf-8") as f:
        json.dump(messages, f, ensure_ascii=False, indent=2)

print("Created JSONs successfully")
