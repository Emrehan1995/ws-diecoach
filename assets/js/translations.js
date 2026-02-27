// Paul-O-Mat - Bilingual Translations (DE/EN)
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
      title: "Der Paul-O-Mat – Coaching ohne Excel-Chaos",
      subtitle: "Ich bin Paul – Coach für ambitionierte Bodybuilder – und ich finde Excel ätzend. Jeder Check-In mit meinen Athleten ist organisatorisches Chaos. Deshalb haben Emre und ich den Paul-O-Maten gebaut. Coaching in jazzy quasi, ohne dass es dich ein Vermögen kostet. Und um meinem übergroßen Ego einen Gefallen zu tun, haben wir die Plattform nach mir benannt. Sogar mein Gesicht als Logo. Ich lebe den Traum. Emre-O-Mat hätte aber auch nicht so gut geklungen, oder?",
      ctaPrimary: "Für Beta bewerben",
      ctaSecondary: "Mehr erfahren",
      tagline: "Coaching in jazzy – ohne Excel-Chaos"
    },

    // Features Section
    features: {
      title: "Alles, was dein bisheriges System kann. Nur besser, schneller, schöner und mit mehr Charme.",
      subtitle: "Alles für professionelles Coaching",
      list: [
        {
          title: "Echtes 1:1 Athletenmanagement",
          description: "Kennst du das? Morgens WhatsApp aufgemacht und sofort die Frage: 'Coach, was muss ich heute machen?' Der Paul-O-Mat organisiert das für dich. Jeder Athlet bekommt sein individuelles Profil mit personalisierten Tracking-Parametern und maßgeschneiderten Zielen. So hast du mehr Zeit fürs eigentliche Coaching – und weniger Chaos in deinem Postfach."
        },
        {
          title: "Intelligentes Gewohnheitstracking",
          description: "Ob Checkbox, numerisches Tracking oder Bewertungen – du entscheidest, wie deine Athleten ihre Fortschritte festhalten. Nachweise und Notizen inklusive. Alles an einem Ort, immer verfügbar."
        },
        {
          title: "Automatisches Streak-Tracking",
          description: "Streaks funktionieren. Im Paul-O-Mat sammeln deine Athleten keine Snapchat-Flammen, sondern echte Check-In-Streaks. Je konsequenter dein Athlet zurückmeldet, desto höher der Streak. Das motiviert – und wenn mal ein Check-In vergessen wird, geht der Streak verloren. Einfaches Prinzip, große Wirkung."
        }
      ]
    },

    // About Section
    about: {
      title: "Wer sind wir eigentlich?",
      subtitle: "Die Story hinter dem Paul-O-Mat",
      description: "Emre und ich, Paul, kennen uns schon ewig. Emre war mal im Lifestyle-Coaching bei mir und konnte so miterleben, wie der Coaching-Prozess wirklich abläuft – mit all dem organisatorischen Chaos. Da Emre programmieren kann (irgendwas mit Computern halt) und ich als Coach wusste, was wir brauchen, hatten wir beide die Idee: Wir müssen Coaching in das 21. Jahrhundert holen. Excel ist einfach nicht mehr zeitgemäß. Die ganze Organisation lenkt vom Wesentlichen ab – dem eigentlichen Coaching. Also haben wir uns zusammengesetzt und den Paul-O-Mat gebaut. Unsere Mission: Die beste Check-In-Plattform für Coaches, die bezahlbar ist und Spaß macht. Die Zusammenarbeit funktioniert super – ich bringe die Coach-Perspektive ein, Emre setzt es technisch um. Der Paul-O-Mat ist noch nicht perfekt, das wissen wir. Aber er ist auf dem Weg dahin. Und genau deshalb bist du hier. Du wirst Teil der Entwicklung. Mit deinem Feedback hilfst du uns, die Plattform noch besser zu machen. Gemeinsam bauen wir das Tool, das Coaches wirklich brauchen.",
      cta: "Mehr erfahren",
      stat: {
        years: "01",
        wehave: "Wir haben",
        experience: "Jahr Erfahrung"
      }
    },

    // CTA Section
    cta: {
      title: "Bereit für jazzy Coaching?",
      description: "Bewirb dich jetzt für das Beta-Programm und werde Teil unserer Community.",
      button: "Für Beta bewerben"
    },

    // Pricing Section
    pricing: {
      badge: "Beta Programm",
      title: "Werde Teil unserer Beta-Community",
      subtitle: "Sichere dir jetzt 3 Monate kostenlosen Zugang zum Paul-O-Mat. Alles was wir dafür brauchen: Dein ehrliches Feedback.",
      monthly: "Monat",
      onetime: "einmalig",
      popular: "Beliebt",
      limitedTime: "Limitierte Plätze",
      limitedTimeDescription: "Wir suchen Coaches, die den Paul-O-Mat mit uns weiterentwickeln wollen. Du bekommst vollen Zugang, wir bekommen wertvolles Feedback. Fair, oder?",
      cta: "Jetzt anmelden",
      betaCta: "Für Beta bewerben",
      tiers: [
        {
          name: "Paul-O-Mat",
          price: "20",
          priceLabel: "€20",
          period: "Monat",
          description: "Das volle Produkt. Alle Features. Direkter Kontakt.",
          features: [
            "Alle Features inklusive",
            "Unbegrenzte Athleten",
            "Direkter Kontakt mit Paul & Emre",
            "Alle zukünftigen Updates",
            "Gewohnheits-Tracking & Streaks",
            "Individuelles Athletenmanagement"
          ]
        },
        {
          name: "Beta Programm",
          price: "0",
          priceLabel: "Kostenlos",
          period: "3 Monate",
          badge: "Limitierte Plätze",
          description: "Erhalte vollen Zugang zur Plattform. Wir stellen dir in einem persönlichen Demo-Call alles vor. Im Gegenzug: Dein ehrliches Feedback hilft uns besser zu werden.",
          contactEmail: "paul.wurche.coaching@gmail.com",
          features: [
            "Alle Features inklusive",
            "Unbegrenzte Athleten",
            "Persönlicher Demo-Call mit uns",
            "Direkter Draht zu Paul & Emre",
            "3 Monate komplett kostenlos",
            "Gewohnheits-Tracking & Streaks",
            "Früher Zugang zu neuen Features"
          ]
        }
      ]
    },

    // Testimonials Section
    testimonials: {
      title: "Hier könnte dein Feedback stehen.",
      subtitle: "Als Beta-Tester hilfst du uns, die Plattform zu verbessern",
      items: [
        {
          name: "Dein Name?",
          rating: 5,
          text: "Als einer unserer ersten Beta-Tester bekommst du die Chance, den Paul-O-Mat mitzugestalten. Dein Feedback landet nicht im Papierkorb, sondern direkt in der Entwicklung."
        },
        {
          name: "Auch du?",
          rating: 5,
          text: "Wir suchen Coaches, die ehrlich sagen, was funktioniert und was nicht. Keine geschönten Reviews – sondern echtes Feedback, das uns weiterbringt."
        },
        {
          name: "Vielleicht du?",
          rating: 5,
          text: "Bewirb dich jetzt für das Beta-Programm und sei dabei, wenn wir die beste Coaching-Plattform bauen. 3 Monate kostenlos. Kein Risiko. Nur ehrliches Feedback."
        }
      ]
    },

    // FAQ Section
    faq: {
      title: "FAQ",
      subtitle: "Alle wichtigen Fragen beantwortet",
      items: [
        {
          question: "Wie funktioniert das Beta-Programm?",
          answer: "Du bewirbst dich über die Warteliste, wir schauen uns dein Profil an und melden uns bei dir. Dann vereinbaren wir einen Demo-Call, stellen dir alles vor und du bekommst 3 Monate vollen Zugang. Kostenlos. Im Gegenzug freuen wir uns über dein ehrliches Feedback."
        },
        {
          question: "Was kostet der Paul-O-Mat nach der Beta-Phase?",
          answer: "Gute Frage! Das klären wir gerade noch. Für Beta-Tester wird es auf jeden Fall faire Konditionen geben. Du erfährst rechtzeitig Bescheid, bevor die kostenlosen 3 Monate enden."
        },
        {
          question: "Kann ich jederzeit aufhören?",
          answer: "Klar. Es gibt keine Mindestlaufzeit und keine versteckten Kosten. Während der Beta-Phase ist sowieso alles kostenlos. Wenn's dir nicht gefällt, kannst du jederzeit aussteigen."
        },
        {
          question: "Was passiert mit meinen Daten?",
          answer: "Deine Daten gehören dir. Wir nutzen europäische Server (DSGVO-konform), verschlüsseln alle Daten und verkaufen niemals Informationen an Dritte. Du kannst deine Daten jederzeit exportieren."
        },
        {
          question: "Gibt es eine mobile App?",
          answer: "Der Paul-O-Mat funktioniert im Browser auf allen Geräten – also auch mobil. Native iOS und Android Apps sind langfristig geplant, aber aktuell fokussieren wir uns darauf, die Web-Version richtig gut zu machen."
        },
        {
          question: "Wie viel Feedback wird von mir erwartet?",
          answer: "Kein Stress. Nutze die Plattform einfach ganz normal für dein Coaching. Wenn dir was auffällt – super oder nicht so super – sag uns Bescheid. Es gibt keine Pflichten oder Abgabetermine. Ehrliches Feedback in deinem Tempo reicht uns völlig."
        }
      ]
    },

    // Team Section
    team: {
      badge: "Unser Team",
      title: "Unser Team",
      subtitle: "Die Menschen hinter dem Paul-O-Mat",
      members: [
        {
          name: "Emrehan",
          role: "Co-Founder (Der mit den Computern)"
        },
        {
          name: "Paul",
          role: "Co-Founder (Das europäische Model)"
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
      description: "Der Paul-O-Mat – Coaching in jazzy, ohne Excel-Chaos.",
      quickLinks: "Quick Links",
      legal: "Legal",
      privacy: "Datenschutz",
      terms: "AGB",
      imprint: "Impressum",
      followUs: "Folge uns",
      copyright: "© 2026 Paul-O-Mat. Alle Rechte vorbehalten."
    },

    // Promise Section
    promise: {
      title: "Warum der Paul-O-Mat?",
      items: [
        {
          title: "Schluss mit Excel-Chaos",
          description: "Endlich eine moderne Lösung für dein Coaching"
        },
        {
          title: "Coaching in jazzy",
          description: "Professionell, übersichtlich und einfach zu bedienen"
        },
        {
          title: "Faire Preise",
          description: "Beta-Tester bekommen 3 Monate kostenlos"
        },
        {
          title: "Von Coaches für Coaches",
          description: "Paul bringt die Praxis-Erfahrung, Emre die Technik"
        },
        {
          title: "Gemeinsam entwickelt",
          description: "Dein Feedback fließt direkt in die Entwicklung ein"
        },
        {
          title: "Transparent & ehrlich",
          description: "Wir sind noch nicht perfekt, arbeiten aber daran"
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
      title: "The Paul-O-Mat – Coaching Without Excel Chaos",
      subtitle: "I'm Paul – coach for ambitious bodybuilders – and I find Excel terrible. Every check-in with my athletes is organizational chaos. That's why Emre and I built the Paul-O-Mat. Coaching in jazzy, basically, without costing you a fortune. And to do my oversized ego a favor, we named the platform after me. Even used my face as the logo. I'm living the dream. Emre-O-Mat wouldn't have sounded as good anyway, right?",
      ctaPrimary: "Apply for Beta",
      ctaSecondary: "Learn More",
      tagline: "Jazzy coaching – without Excel chaos"
    },

    // Features Section
    features: {
      title: "Everything your current system does. Just better, faster, prettier, and with more charm.",
      subtitle: "Everything for professional coaching",
      list: [
        {
          title: "True 1:1 Athlete Management",
          description: "Sound familiar? Wake up, open WhatsApp, and immediately get: 'Coach, what do I have to do today?' The Paul-O-Mat organizes this for you. Each athlete gets their individual profile with personalized tracking parameters and customized goals. More time for actual coaching – less chaos in your inbox."
        },
        {
          title: "Intelligent Habit Tracking",
          description: "Whether checkbox, numeric tracking, or ratings – you decide how your athletes track their progress. Proof and notes included. Everything in one place, always available."
        },
        {
          title: "Automatic Streak Tracking",
          description: "Streaks work. In the Paul-O-Mat, your athletes don't collect Snapchat flames – they build real check-in streaks. The more consistent your athlete reports back, the higher the streak. Motivating stuff. Miss a check-in? Streak resets. Simple principle, powerful results."
        }
      ]
    },

    // About Section
    about: {
      title: "Who are we anyway?",
      subtitle: "The story behind Paul-O-Mat",
      description: "Emre and I, Paul, have known each other forever. Emre was once in lifestyle coaching with me and got to experience the coaching process firsthand – with all its organizational chaos. Since Emre can code (something with computers) and I knew what we needed as a coach, we had the idea: We need to bring coaching into the 21st century. Excel just isn't cutting it anymore. All the organization distracts from what matters – the actual coaching. So we sat down together and built the Paul-O-Mat. Our mission: The best check-in platform for coaches that's affordable and fun to use. The collaboration works great – I bring the coach perspective, Emre handles the technical implementation. The Paul-O-Mat isn't perfect yet, we know that. But it's getting there. And that's exactly why you're here. You'll be part of the development. Your feedback helps us make the platform even better. Together, we're building the tool that coaches actually need.",
      cta: "Learn More",
      stat: {
        years: "01",
        wehave: "We have",
        experience: "Year of experience"
      }
    },

    // CTA Section
    cta: {
      title: "Ready for jazzy coaching?",
      description: "Apply now for the beta program and become part of our community.",
      button: "Apply for Beta"
    },

    // Pricing Section
    pricing: {
      badge: "Beta Program",
      title: "Become Part of Our Beta Community",
      subtitle: "Get 3 months of free access to the Paul-O-Mat. All we need in return: Your honest feedback.",
      monthly: "month",
      onetime: "one-time",
      popular: "Popular",
      limitedTime: "Limited Spots",
      limitedTimeDescription: "We're looking for coaches who want to help us develop the Paul-O-Mat. You get full access, we get valuable feedback. Fair deal, right?",
      cta: "Sign Up Now",
      betaCta: "Apply for Beta",
      tiers: [
        {
          name: "Paul-O-Mat",
          price: "20",
          priceLabel: "€20",
          period: "month",
          description: "The full product. All features. Direct contact.",
          features: [
            "All features included",
            "Unlimited athletes",
            "Direct contact with Paul & Emre",
            "All future updates",
            "Habit tracking & streaks",
            "Individual athlete management"
          ]
        },
        {
          name: "Beta Program",
          price: "0",
          priceLabel: "Free",
          period: "3 months",
          badge: "Limited Spots",
          description: "Get full access to the platform. We'll introduce everything in a personal demo call. In return: Your honest feedback helps us improve.",
          contactEmail: "paul.wurche.coaching@gmail.com",
          features: [
            "All features included",
            "Unlimited athletes",
            "Personal demo call with us",
            "Direct line to Paul & Emre",
            "3 months completely free",
            "Habit tracking & streaks",
            "Early access to new features"
          ]
        }
      ]
    },

    // Testimonials Section
    testimonials: {
      title: "Your Feedback Could Be Here.",
      subtitle: "As a beta tester, you help us improve the platform",
      items: [
        {
          name: "Your Name?",
          rating: 5,
          text: "As one of our first beta testers, you get the chance to shape the Paul-O-Mat. Your feedback won't end up in the trash – it goes straight into development."
        },
        {
          name: "You Too?",
          rating: 5,
          text: "We're looking for coaches who honestly tell us what works and what doesn't. No sugar-coated reviews – just real feedback that moves us forward."
        },
        {
          name: "Maybe You?",
          rating: 5,
          text: "Apply now for the beta program and be there when we build the best coaching platform. 3 months free. No risk. Just honest feedback."
        }
      ]
    },

    // FAQ Section
    faq: {
      title: "FAQ",
      subtitle: "All important questions answered",
      items: [
        {
          question: "How does the beta program work?",
          answer: "You apply through the waitlist, we review your profile and get in touch. Then we schedule a demo call, show you everything, and you get 3 months of full access. Free. In return, we appreciate your honest feedback."
        },
        {
          question: "What will the Paul-O-Mat cost after beta?",
          answer: "Good question! We're still figuring that out. Beta testers will definitely get fair conditions. You'll know well in advance before the free 3 months end."
        },
        {
          question: "Can I stop anytime?",
          answer: "Sure. No minimum contract, no hidden costs. During the beta phase, everything is free anyway. If you don't like it, you can exit anytime."
        },
        {
          question: "What happens to my data?",
          answer: "Your data belongs to you. We use European servers (GDPR compliant), encrypt all data, and never sell information to third parties. You can export your data anytime."
        },
        {
          question: "Is there a mobile app?",
          answer: "The Paul-O-Mat works in your browser on all devices – including mobile. Native iOS and Android apps are planned long-term, but we're currently focused on making the web version really good."
        },
        {
          question: "How much feedback is expected from me?",
          answer: "No pressure. Just use the platform normally for your coaching. If you notice something – great or not so great – let us know. No obligations or deadlines. Honest feedback at your pace is totally fine with us."
        }
      ]
    },

    // Team Section
    team: {
      badge: "Our Team",
      title: "Our Team",
      subtitle: "The people behind Paul-O-Mat",
      members: [
        {
          name: "Emrehan",
          role: "Co-Founder (The computer guy)"
        },
        {
          name: "Paul",
          role: "Co-Founder (The European model)"
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
      description: "Paul-O-Mat – Jazzy coaching without Excel chaos.",
      quickLinks: "Quick Links",
      legal: "Legal",
      privacy: "Privacy",
      terms: "Terms",
      imprint: "Imprint",
      followUs: "Follow Us",
      copyright: "© 2026 Paul-O-Mat. All rights reserved."
    },

    // Promise Section
    promise: {
      title: "Why Paul-O-Mat?",
      items: [
        {
          title: "No More Excel Chaos",
          description: "Finally a modern solution for your coaching"
        },
        {
          title: "Coaching in Jazzy",
          description: "Professional, clear, and easy to use"
        },
        {
          title: "Fair Pricing",
          description: "Beta testers get 3 months free"
        },
        {
          title: "By Coaches for Coaches",
          description: "Paul brings the practical experience, Emre the tech"
        },
        {
          title: "Developed Together",
          description: "Your feedback flows directly into development"
        },
        {
          title: "Transparent & Honest",
          description: "We're not perfect yet, but we're working on it"
        }
      ]
    }
  }
};

// Language Switcher Logic with URL Routing
class LanguageSwitcher {
  constructor() {
    // Check URL parameter first, then always default to 'de' (German)
    this.currentLang = this.getLangFromURL() || 'de';
    console.log('[LanguageSwitcher] Initializing with language:', this.currentLang);
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
    console.log('[LanguageSwitcher] Language toggle button found:', !!langToggle);
    if (langToggle) {
      langToggle.addEventListener('click', () => {
        console.log('[LanguageSwitcher] Button clicked!');
        this.switchLanguage();
      });
      langToggle.textContent = translations[this.currentLang].nav.language;
      console.log('[LanguageSwitcher] Button text set to:', langToggle.textContent);
    } else {
      console.error('[LanguageSwitcher] Language toggle button NOT found!');
    }
  }

  switchLanguage() {
    console.log('[LanguageSwitcher] Switching from', this.currentLang);
    this.currentLang = this.currentLang === 'de' ? 'en' : 'de';
    console.log('[LanguageSwitcher] Switched to', this.currentLang);
    // Language preference is not saved - always defaults to German on page load
    document.documentElement.lang = this.currentLang;
    this.updateURL(this.currentLang);
    this.updateContent();

    // Update toggle button text
    const langToggle = document.getElementById('languageToggle');
    if (langToggle) {
      langToggle.textContent = translations[this.currentLang].nav.language;
      console.log('[LanguageSwitcher] Button text updated to:', langToggle.textContent);
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
  console.log('[LanguageSwitcher] DOM loaded, creating LanguageSwitcher instance');
  window.languageSwitcher = new LanguageSwitcher();
  console.log('[LanguageSwitcher] Instance created:', window.languageSwitcher);
});
