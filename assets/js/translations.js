// Die Coach - Bilingual Translations (DE/EN)
const translations = {
  de: {
    // Navbar
    nav: {
      home: "Home",
      about: "Über uns",
      pricing: "Preise",
      team: "Team",
      contact: "Kontakt",
      blog: "Blog",
      language: "EN" // Shows opposite language
    },

    // Hero Section
    hero: {
      title: "Hochleistungs-Coaching, persönlich geliefert",
      subtitle: "Die Coach ist eine Premium-Coaching-App, entwickelt für die 1:1-Beziehung zwischen Coach und Athlet. Keine Massenprodukte, keine Standardlösungen – nur individuelles, kompromissloses Coaching.",
      ctaPrimary: "Kostenlos starten",
      ctaSecondary: "Mehr erfahren",
      tagline: "Für die 1:1-Beziehung gebaut, nicht für die Masse"
    },

    // Features Section
    features: {
      title: "Kernfunktionen",
      subtitle: "Alles, was du für exzellentes 1:1-Coaching brauchst",
      list: [
        {
          title: "Echtes 1:1 Athletenmanagement",
          description: "Jeder Athlet bekommt deine ungeteilte digitale Aufmerksamkeit. Individuelle Profile, personalisierte Gewohnheiten, maßgeschneiderte Ziele – keine Standardlösungen."
        },
        {
          title: "Intelligentes Gewohnheits-Tracking",
          description: "Drei Gewohnheitstypen: Checkbox, numerisches Tracking und Bewertungen. Flexible Frequenzziele mit optionalen Nachweisen und Notizen für volle Verantwortlichkeit."
        },
        {
          title: "Automatisches Streak-Tracking",
          description: "Visuelles Streak-Tracking, das motiviert ohne Spielerei. Aktuelle und Allzeit-Rekorde auf einen Blick mit datenbasierten Einblicken in Konsistenzmuster."
        },
        {
          title: "Präzise Zielsetzung",
          description: "Tägliche Kalorien- und Makroziele mit intelligenter Validierung. Zeitgebundene Ziele mit klaren Meilensteinen, die wirklich zum großen Ganzen des Athleten passen."
        },
        {
          title: "Funktioniert mit deinem Setup",
          description: "Füge Hard-Links zu externen Ressourcen direkt in der App hinzu. Die Coach integriert sich in dein System, nicht umgekehrt. Dein Workflow, deine Regeln."
        },
        {
          title: "KI-gestützte Einblicke",
          description: "Tiefe KI-Integration für Coach- und Athleten-Seite. Intelligente Mustererkennung über Gewohnheitsdaten mit proaktiven Alerts und Empfehlungen. (Coming Soon)"
        }
      ]
    },

    // About Section
    about: {
      title: "Was ist Die Coach?",
      subtitle: "Unsere Philosophie",
      description: "Hochleistungs-Coaching bedeutet nicht Templates und Automatisierung – es geht um tiefe, persönliche Verbindung. Jeder Athlet ist anders. Jedes Ziel ist einzigartig. Die Coach gibt dir die Werkzeuge, diesen individuellen Fokus zu bewahren, auch wenn dein Kader wächst.",
      cta: "Mehr erfahren"
    },

    // CTA Section
    cta: {
      title: "Bereit, deine Coaching-Praxis zu revolutionieren?",
      description: "Starte heute und erlebe, wie einfach individuelles Hochleistungs-Coaching sein kann.",
      button: "Jetzt starten"
    },

    // Pricing Section
    pricing: {
      title: "Preise",
      subtitle: "Faire, transparente Preisgestaltung für jeden Coach",
      monthly: "Monat",
      onetime: "einmalig",
      popular: "Beliebt",
      limitedTime: "Für limitierte Zeit",
      cta: "Kostenlos anmelden",
      tiers: [
        {
          name: "Free",
          price: "0",
          priceLabel: "Kostenlos",
          description: "Für limitierte Zeit",
          features: [
            "Bis zu 5 Athleten",
            "Unbegrenzte Gewohnheiten & Ziele",
            "Streak-Tracking",
            "Basis-Support",
            "Mobile App Zugang"
          ]
        },
        {
          name: "Professional",
          price: "50",
          priceLabel: "€50",
          period: "Monat",
          description: "Perfekt für etablierte Coaches",
          features: [
            "Bis zu 50 Athleten",
            "Alle Free Features",
            "Erweiterte Analysen",
            "Prioritäts-Support",
            "Gewohnheits-Vorlagen",
            "Export-Funktionen"
          ]
        },
        {
          name: "Lifetime",
          price: "200",
          priceLabel: "€200",
          period: "einmalig",
          description: "Für ernsthafte Coaching-Profis",
          features: [
            "Unbegrenzt Athleten",
            "Alle Professional Features",
            "Lebenslanger Zugang",
            "Dedizierter Support",
            "Früher Zugang zu neuen Features",
            "Prioritäts-Feature-Requests"
          ]
        }
      ]
    },

    // FAQ Section
    faq: {
      title: "Häufig gestellte Fragen",
      subtitle: "Alle Antworten, die du brauchst",
      items: [
        {
          question: "Wie schnell kann ich starten?",
          answer: "Du kannst in weniger als 5 Minuten loslegen. Registriere dich, lade deinen ersten Athleten ein und beginne sofort mit dem Tracking. Kein komplexes Setup, keine steile Lernkurve."
        },
        {
          question: "Welche Integrationen unterstützt Die Coach?",
          answer: "Die Coach funktioniert mit deinem bestehenden Workflow. Du kannst Links zu externen Tools (Google Sheets, Notion, Trainerize, etc.) direkt in Athleten-Profilen hinterlegen. Weitere native Integrationen folgen."
        },
        {
          question: "Kann ich jederzeit kündigen?",
          answer: "Ja, absolut. Keine Vertragsbindung, keine versteckten Gebühren. Du kannst jederzeit mit einem Klick kündigen. Deine Daten bleiben 30 Tage lang verfügbar."
        },
        {
          question: "Gibt es eine mobile App?",
          answer: "Ja! Die Coach ist vollständig responsiv und funktioniert perfekt auf allen Geräten. Native iOS und Android Apps sind in Entwicklung."
        },
        {
          question: "Was passiert mit meinen Daten?",
          answer: "Deine Daten gehören dir. Wir nutzen europäische Server (DSGVO-konform), verschlüsseln alle Daten und verkaufen niemals Informationen an Dritte. Du kannst jederzeit exportieren."
        },
        {
          question: "Wann kommt die KI-Integration?",
          answer: "Die KI-Features sind aktuell in der Beta-Phase und werden Q2 2025 für alle Premium-Nutzer verfügbar. Sie werden Muster erkennen, Empfehlungen geben und proaktive Insights liefern."
        }
      ]
    },

    // Team Section
    team: {
      title: "Unser Team",
      subtitle: "Die Menschen hinter Die Coach",
      members: [
        {
          name: "Emrehan",
          role: "Co-Founder"
        },
        {
          name: "Paul",
          role: "Co-Founder"
        }
      ]
    },

    // Contact Section
    contact: {
      title: "Kontakt",
      subtitle: "Fragen? Wir sind für dich da",
      formName: "Dein Name",
      formEmail: "Deine E-Mail",
      formMessage: "Deine Nachricht",
      formButton: "Nachricht senden",
      email: "paul.wurche.coaching@gmail.com"
    },

    // Footer
    footer: {
      description: "Premium-Coaching-App für echte 1:1-Betreuung. Individuell statt industriell.",
      quickLinks: "Quick Links",
      legal: "Legal",
      privacy: "Datenschutz",
      terms: "AGB",
      imprint: "Impressum",
      followUs: "Folge uns",
      copyright: "© 2025 Die Coach. Alle Rechte vorbehalten."
    },

    // Promise Section (can be added to about or separate)
    promise: {
      title: "Unser Versprechen",
      items: [
        {
          title: "Individuell statt industriell",
          description: "Jede Funktion für 1:1-Coaching-Exzellenz entwickelt"
        },
        {
          title: "Beste UX am Markt",
          description: "Clean, schnell, intuitiv – wir optimieren jede Interaktion"
        },
        {
          title: "Einfachstes Setup",
          description: "Starte in Minuten, nicht Stunden"
        },
        {
          title: "Faire Preise",
          description: "Keine Enterprise-Fallen, keine versteckten Gebühren"
        },
        {
          title: "Flexibilität zuerst",
          description: "Dein Workflow, deine Regeln – wir passen uns an"
        },
        {
          title: "KI, die wirklich hilft",
          description: "Tiefe Intelligenz für beide Seiten der Coaching-Beziehung"
        }
      ]
    }
  },

  en: {
    // Navbar
    nav: {
      home: "Home",
      about: "About",
      pricing: "Pricing",
      team: "Team",
      contact: "Contact",
      blog: "Blog",
      language: "DE" // Shows opposite language
    },

    // Hero Section
    hero: {
      title: "High-performance coaching, personally delivered",
      subtitle: "Die Coach is a premium coaching app built for the 1:1 relationship between coach and athlete. No mass solutions, no standardization – just individual, uncompromising coaching.",
      ctaPrimary: "Get Started Free",
      ctaSecondary: "Learn More",
      tagline: "Built for the 1:1, not the 1:1000"
    },

    // Features Section
    features: {
      title: "Core Features",
      subtitle: "Everything you need for exceptional 1:1 coaching",
      list: [
        {
          title: "True 1:1 Athlete Management",
          description: "Each athlete gets your undivided digital attention. Individual profiles, personalized habits, custom goals – no cookie-cutter approaches."
        },
        {
          title: "Intelligent Habit Tracking",
          description: "Three habit types: checkbox, numeric tracking, and ratings. Flexible frequency targets with optional proof uploads and notes for full accountability."
        },
        {
          title: "Automatic Streak Tracking",
          description: "Visual streak tracking that motivates without gimmicks. Current and all-time records at a glance with data-driven insights into consistency patterns."
        },
        {
          title: "Precision Goal Setting",
          description: "Daily calorie and macro targets with smart validation. Time-bound objectives with clear milestones that actually align with the athlete's bigger picture."
        },
        {
          title: "Works With Your Setup",
          description: "Add hard links to external resources directly in the app. Die Coach integrates into your system, not the other way around. Your workflow, your rules."
        },
        {
          title: "AI-Powered Insights",
          description: "Deep AI integration for both coach and athlete side. Intelligent pattern recognition across habit data with proactive alerts and recommendations. (Coming Soon)"
        }
      ]
    },

    // About Section
    about: {
      title: "What is Die Coach?",
      subtitle: "Our Philosophy",
      description: "High-performance coaching isn't about templates and automation – it's about deep, personal connection. Every athlete is different. Every goal is unique. Die Coach gives you the tools to maintain that individual focus, even as your roster grows.",
      cta: "Learn More"
    },

    // CTA Section
    cta: {
      title: "Ready to Transform Your Coaching Practice?",
      description: "Start today and experience how simple individual high-performance coaching can be.",
      button: "Get Started Now"
    },

    // Pricing Section
    pricing: {
      title: "Pricing",
      subtitle: "Fair, transparent pricing for every coach",
      monthly: "month",
      onetime: "one-time",
      popular: "Popular",
      limitedTime: "For Limited Time",
      cta: "Sign Up Free",
      tiers: [
        {
          name: "Free",
          price: "0",
          priceLabel: "Free",
          description: "For Limited Time",
          features: [
            "Up to 5 athletes",
            "Unlimited habits & goals",
            "Streak tracking",
            "Basic support",
            "Mobile app access"
          ]
        },
        {
          name: "Professional",
          price: "50",
          priceLabel: "€50",
          period: "month",
          description: "Perfect for established coaches",
          features: [
            "Up to 50 athletes",
            "All Free features",
            "Advanced analytics",
            "Priority support",
            "Habit templates",
            "Export functions"
          ]
        },
        {
          name: "Lifetime",
          price: "200",
          priceLabel: "€200",
          period: "one-time",
          description: "For serious coaching professionals",
          features: [
            "Unlimited athletes",
            "All Professional features",
            "Lifetime access",
            "Dedicated support",
            "Early access to new features",
            "Priority feature requests"
          ]
        }
      ]
    },

    // FAQ Section
    faq: {
      title: "Frequently Asked Questions",
      subtitle: "All the answers you need",
      items: [
        {
          question: "How quickly can I get started?",
          answer: "You can be up and running in less than 5 minutes. Sign up, invite your first athlete, and start tracking immediately. No complex setup, no steep learning curve."
        },
        {
          question: "What integrations does Die Coach support?",
          answer: "Die Coach works with your existing workflow. You can add links to external tools (Google Sheets, Notion, Trainerize, etc.) directly in athlete profiles. More native integrations coming soon."
        },
        {
          question: "Can I cancel anytime?",
          answer: "Yes, absolutely. No contracts, no hidden fees. You can cancel with one click at any time. Your data remains available for 30 days."
        },
        {
          question: "Is there a mobile app?",
          answer: "Yes! Die Coach is fully responsive and works perfectly on all devices. Native iOS and Android apps are in development."
        },
        {
          question: "What happens to my data?",
          answer: "Your data belongs to you. We use European servers (GDPR compliant), encrypt all data, and never sell information to third parties. You can export anytime."
        },
        {
          question: "When is the AI integration coming?",
          answer: "AI features are currently in beta and will be available to all Premium users in Q2 2025. They will recognize patterns, provide recommendations, and deliver proactive insights."
        }
      ]
    },

    // Team Section
    team: {
      title: "Our Team",
      subtitle: "The people behind Die Coach",
      members: [
        {
          name: "Emrehan",
          role: "Co-Founder"
        },
        {
          name: "Paul",
          role: "Co-Founder"
        }
      ]
    },

    // Contact Section
    contact: {
      title: "Contact",
      subtitle: "Questions? We're here for you",
      formName: "Your Name",
      formEmail: "Your Email",
      formMessage: "Your Message",
      formButton: "Send Message",
      email: "paul.wurche.coaching@gmail.com"
    },

    // Footer
    footer: {
      description: "Premium coaching app for true 1:1 relationships. Individual over industrial.",
      quickLinks: "Quick Links",
      legal: "Legal",
      privacy: "Privacy",
      terms: "Terms",
      imprint: "Imprint",
      followUs: "Follow Us",
      copyright: "© 2025 Die Coach. All rights reserved."
    },

    // Promise Section
    promise: {
      title: "Our Promise",
      items: [
        {
          title: "Individual Over Industrial",
          description: "Every feature designed for 1:1 coaching excellence"
        },
        {
          title: "Best UX on the Market",
          description: "Clean, fast, intuitive – we obsess over every interaction"
        },
        {
          title: "Easiest Setup",
          description: "Get started in minutes, not hours"
        },
        {
          title: "Fair Pricing",
          description: "No enterprise gotchas, no hidden fees"
        },
        {
          title: "Flexibility First",
          description: "Your workflow, your rules – we adapt to you"
        },
        {
          title: "AI That Actually Helps",
          description: "Deep intelligence for both sides of the coaching relationship"
        }
      ]
    }
  }
};

// Language Switcher Logic with URL Routing
class LanguageSwitcher {
  constructor() {
    // Check URL parameter first, then localStorage, default to 'de'
    this.currentLang = this.getLangFromURL() || localStorage.getItem('language') || 'de';
    this.init();
  }

  getLangFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const lang = urlParams.get('lang');
    return (lang === 'de' || lang === 'en') ? lang : null;
  }

  updateURL(lang) {
    const url = new URL(window.location);
    url.searchParams.set('lang', lang);
    window.history.pushState({}, '', url);
  }

  init() {
    // Set initial language
    document.documentElement.lang = this.currentLang;
    this.updateContent();

    // Update URL if not present
    if (!this.getLangFromURL()) {
      this.updateURL(this.currentLang);
    }

    // Add event listener to language toggle button
    const langToggle = document.getElementById('languageToggle');
    if (langToggle) {
      langToggle.addEventListener('click', () => this.switchLanguage());
      langToggle.textContent = translations[this.currentLang].nav.language;
    }
  }

  switchLanguage() {
    this.currentLang = this.currentLang === 'de' ? 'en' : 'de';
    localStorage.setItem('language', this.currentLang);
    document.documentElement.lang = this.currentLang;
    this.updateURL(this.currentLang);
    this.updateContent();

    // Update toggle button text
    const langToggle = document.getElementById('languageToggle');
    if (langToggle) {
      langToggle.textContent = translations[this.currentLang].nav.language;
    }
  }

  updateContent() {
    const t = translations[this.currentLang];

    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const keys = element.getAttribute('data-i18n').split('.');
      let value = t;

      // Navigate through nested object
      for (const key of keys) {
        value = value?.[key];
      }

      if (value !== undefined) {
        element.textContent = value;
      }
    });

    // Update all elements with data-i18n-placeholder attribute
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
      const keys = element.getAttribute('data-i18n-placeholder').split('.');
      let value = t;

      for (const key of keys) {
        value = value?.[key];
      }

      if (value !== undefined) {
        element.placeholder = value;
      }
    });
  }

  getCurrentLang() {
    return this.currentLang;
  }
}

// Initialize language switcher when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  window.languageSwitcher = new LanguageSwitcher();
});
