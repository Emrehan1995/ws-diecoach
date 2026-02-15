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
      title: "Der Paul-O-Mat – weil nur Loser Excel nutzen.",
      subtitle: "Ich bin Paul – Coach für ambitionierte Bodybuilder – und ich finde Excel ätzend. Jeder Check-In mit meinen Athleten ist ein organisatorisches Chaos und sind wir mal ehrlich – das sieht doch scheiße aus. Deshalb habe ich mit meinem Kumpel Emre den Paul-O-Maten gebastelt. Einfach, weil wir es können. Coaching in sexy quasi, und das Ganze ohne riesen Kostenberge. Und um meinem übergroßen Ego noch einen Gefallen zu tun, haben wir die Plattform nach mir benannt. Und auch noch meine Fresse als Logo genommen. Ich lebe den Traum. Sorry Emre, aber Emre-O-Mat klingt einfach Banane.",
      ctaPrimary: "Kostenlos starten",
      ctaSecondary: "Mehr erfahren",
      tagline: "Coaching in sexy – ohne Excel-Chaos"
    },

    // Features Section
    features: {
      title: "Wir können alles, was dein bisheriges System auch kann. Nur besser, schneller, schöner und mit mehr Charme.",
      subtitle: "Alles für professionelles Coaching",
      list: [
        {
          title: "Echtes 1:1 Athletenmanagement",
          description: "Wir Coaches haben alle das gleiche Problem. Morgens aufgestanden, WhatsApp geöffnet und gleich die Frage „Coach was muss ich heute machen?". Nerv nicht, oida. Der Paul-O-Mat gibt dir die Möglichkeit, soziale Interaktionen auf ein absolutes Minimum zu beschränken, damit du deinen introvertierten Traum in deiner 20 Quadratmeter Bude weiter ausleben kannst. Jeder Athlet hat ein individuelles Profil mit personalisierten Tracking-Parametern sowie maßgeschneiderten Zielen."
        },
        {
          title: "Intelligentes Gewohnheitstracking",
          description: "Egal ob Checkbox, numerisches Tracking oder Bewertungen. Du kannst sogar deinen Athleten dazu zwingen, dir Nachweise und Notizen zu liefern – wie geil ist das denn?"
        },
        {
          title: "Automatisches Streak-Tracking",
          description: "Ohne Streaks geht doch heute fast nichts. Anstatt wie die ganzen Low-Performer Flammen auf Snapchat zu sammeln widmen wir uns Streak-Zielen im Paul-O-Mat. Je mehr dein Athlet zurückmeldet, desto höher der Streak. Wir reiten die Dopamin-Welle und machen den Athleten süchtig. Eigentlich genial. Vergisst er mal einen Check-In, verliert er den Streak."
        }
      ]
    },

    // About Section
    about: {
      title: "Wer sind wir eigentlich?",
      subtitle: "Die Story hinter dem Paul-O-Mat",
      description: "Emre und Ich, Paul, kennen uns schon unglaublich lange. Zunächst war Emre im Lifestyle-Coaching bei mir, was kläglich gescheitert ist (er war schuld). Trotzdem konnte er so Einblick gewinnen, wie der Prozess des Coachings abläuft. Da er etwas Programmier-Affin ist (ich weiß bis heute nicht so richtig, was er eigentlich beruflich macht – irgendwas mit Computern) und ich maximal opportunistisch, hatten wir beide eine brillante Idee: Wir müssen den Prozess des Coachings, wie ihn jeder selbsternannte Fitness-Coach auf Social Media betreibt, doch irgendwie in das 21. Jahrhundert holen. Excel ist einfach nicht mehr State-of-the-Art. Die ganze Organisation um das Coaching herum lenkt uns von dem ab, was eigentlich wichtig ist: das Coaching. Der Paul-O-Mat war geboren. Wir beide haben uns also auf die Mission gemacht, die geilste Check-In-Plattform für Coaches auf dem Markt zu kreieren, die man sich leisten kann und will. Die Zusammenarbeit lief blendend. Ich sag was ich will, Emre setzt um. Aus um meiner Sicht die perfekte Aufgabenverteilung, oder Emre? Der Paul-O-Mat ist nicht perfekt – wissen wir. Aber er ist auf dem Weg dahin. Dafür brauchen wir aber Kohle, Coaches mit vielen Ideen und Kohle. Und genau deshalb bist du hier. Du wirst Teil der Entwicklung. Einmal mit deiner monatlichen Finanzspritze, und zum anderen mit deinen Verbesserungsvorschlägen, die entweder im Papierkorb, oder in der fertigen Plattform landen werden.",
      cta: "Mehr erfahren"
    },

    // CTA Section
    cta: {
      title: "Bereit für sexy Coaching?",
      description: "Starte heute und verabschiede dich von Excel-Chaos.",
      button: "Jetzt starten"
    },

    // Pricing Section
    pricing: {
      title: "Ein Preis. Das volle Produkt.",
      subtitle: "Der Paul-O-Mat kostet dich mit allen Features und direktem Kontakt mit Emre oder mir gerade einmal 20€ im Monat.",
      monthly: "Monat",
      onetime: "einmalig",
      popular: "Beliebt",
      limitedTime: "20€ - das sind in der heutigen Zeit nicht mal zwei Döner. Als gib dir einen Ruck und uns dein Geld.",
      cta: "Jetzt anmelden",
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
        }
      ]
    },

    // Testimonials Section
    testimonials: {
      title: "Schau was unsere Kunden sagen.",
      subtitle: "Echte Reviews von echten Nutzern",
      items: [
        {
          name: "Paul",
          rating: 5,
          text: "Genial. Ich zahl keinen Cent und hab ein geiles Produkt. Pech, Emre, hättest mal besser verhandelt."
        },
        {
          name: "Paul",
          rating: 5,
          text: "Geile Plattform. Sogar nach mir benannt. Mama – bist du stolz auf mich?"
        },
        {
          name: "Paul",
          rating: 5,
          text: "Das Logo zeigt anscheinend ein bekanntest europäisches Model – gefällt mir."
        }
      ]
    },

    // FAQ Section
    faq: {
      title: "FAQ",
      subtitle: "Alle wichtigen Fragen beantwortet",
      items: [
        {
          question: "Hat Paul den dicksten Bizeps im Lande?",
          answer: "Daran besteht kein Zweifel. Warum stellst du so anmaßende Fragen?"
        },
        {
          question: "Wann kommt die KI-Integration?",
          answer: "Keine Ahnung. Sind wir hier bei einem FAQ oder was?"
        },
        {
          question: "Kann ich jederzeit kündigen?",
          answer: "Nö – du bist für immer an die Plattform gebunden. Geistig, körperlich und finanziell. Der Paul-O-Mat wird dich komplett einnehmen, ohne Ausweg. (Ja kannst du – entspann dich.)"
        },
        {
          question: "Was passiert mit meinen Daten?",
          answer: "Die verkaufen wir nach China, um noch mehr Kohle zu machen. (Emre hat mich gezwungen folgendes zu schreiben: Deine Daten gehören dir. Wir nutzen europäische Server (DSGVO-konform), verschlüsseln alle Daten und verkaufen niemals Informationen an Dritte. Du kannst jederzeit exportieren.)"
        },
        {
          question: "Gibt es eine mobile App?",
          answer: "Also so eine richtige App-App nicht, du kannst es aber auf mobilen Geräten sorgenfrei nutzen. Native iOS und Android-Apps sind in Entwicklung und langfristig geplant (sind sie nicht – weißt du was das kostet? Außerdem ist Emre dafür zu langsam)"
        },
        {
          question: "Kann ich euch auch mehr zahlen?",
          answer: "Ja! Du darfst uns so viel Geld geben wie du möchtest! Je mehr Geld du uns zahlst, desto schneller bekomme ich meinen Porsche und desto schneller kann ich Emre aus dem Keller wieder rauslassen."
        }
      ]
    },

    // Team Section
    team: {
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
      description: "Der Paul-O-Mat – Coaching in sexy, ohne Excel-Chaos.",
      quickLinks: "Quick Links",
      legal: "Legal",
      privacy: "Datenschutz",
      terms: "AGB",
      imprint: "Impressum",
      followUs: "Folge uns",
      copyright: "© 2025 Paul-O-Mat. Alle Rechte vorbehalten."
    },

    // Promise Section
    promise: {
      title: "Warum der Paul-O-Mat?",
      items: [
        {
          title: "Besser als Excel",
          description: "Weil nur Loser Excel nutzen"
        },
        {
          title: "Sexy Coaching",
          description: "Endlich sieht dein Coaching-Setup nicht mehr scheiße aus"
        },
        {
          title: "Keine riesen Kostenberge",
          description: "Nur 20€ im Monat – günstiger als zwei Döner"
        },
        {
          title: "Nach Paul benannt",
          description: "Mit seinem Gesicht als Logo. Der Traum."
        },
        {
          title: "Emre setzt um",
          description: "Paul sagt was er will, Emre macht's"
        },
        {
          title: "Du bist Teil davon",
          description: "Mit deiner Kohle und deinen Ideen (die vielleicht umgesetzt werden)"
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
      title: "The Paul-O-Mat – because only losers use Excel.",
      subtitle: "I'm Paul – coach for ambitious bodybuilders – and I find Excel terrible. Every check-in with my athletes is an organizational chaos and let's be honest – it looks like crap. That's why I built the Paul-O-Mat with my buddy Emre. Simply because we can. Coaching in sexy, basically, and all without massive costs. And to do my oversized ego another favor, we named the platform after me. And even used my face as the logo. I'm living the dream. Sorry Emre, but Emre-O-Mat just sounds dumb.",
      ctaPrimary: "Get Started Free",
      ctaSecondary: "Learn More",
      tagline: "Sexy coaching – without Excel chaos"
    },

    // Features Section
    features: {
      title: "We can do everything your current system does. Just better, faster, prettier, and with more charm.",
      subtitle: "Everything for professional coaching",
      list: [
        {
          title: "True 1:1 Athlete Management",
          description: "We coaches all have the same problem. Wake up in the morning, open WhatsApp, and immediately get the question 'Coach, what do I have to do today?'. Don't annoy me, man. The Paul-O-Mat gives you the ability to minimize social interactions to an absolute minimum, so you can continue living your introverted dream in your 20 square meter apartment. Each athlete has an individual profile with personalized tracking parameters and customized goals."
        },
        {
          title: "Intelligent Habit Tracking",
          description: "Whether checkbox, numeric tracking, or ratings. You can even force your athletes to deliver proof and notes to you – how awesome is that?"
        },
        {
          title: "Automatic Streak Tracking",
          description: "Nothing works without streaks these days. Instead of collecting flames on Snapchat like all the low-performers, we focus on streak goals in the Paul-O-Mat. The more your athlete reports back, the higher the streak. We ride the dopamine wave and get the athlete addicted. Pretty genius, actually. If they forget a check-in, they lose the streak."
        }
      ]
    },

    // About Section
    about: {
      title: "Who are we anyway?",
      subtitle: "The story behind Paul-O-Mat",
      description: "Emre and I, Paul, have known each other for an incredibly long time. Initially, Emre was in lifestyle coaching with me, which failed miserably (it was his fault). Nevertheless, he was able to gain insight into how the coaching process works. Since he's somewhat programming-savvy (to this day, I don't really know what he does professionally – something with computers) and I'm extremely opportunistic, we both had a brilliant idea: We need to somehow bring the coaching process, as practiced by every self-proclaimed fitness coach on social media, into the 21st century. Excel is simply no longer state-of-the-art. All the organization around coaching distracts us from what's actually important: the coaching. The Paul-O-Mat was born. So we both set out on a mission to create the coolest check-in platform for coaches on the market that you can afford and want. The collaboration went brilliantly. I say what I want, Emre implements it. From my perspective, the perfect division of tasks, right Emre? The Paul-O-Mat isn't perfect – we know that. But it's on the way there. For that, we need money, coaches with lots of ideas, and money. And that's exactly why you're here. You'll be part of the development. Once with your monthly financial injection, and secondly with your improvement suggestions, which will either end up in the trash or in the finished platform.",
      cta: "Learn More"
    },

    // CTA Section
    cta: {
      title: "Ready for sexy coaching?",
      description: "Start today and say goodbye to Excel chaos.",
      button: "Get Started Now"
    },

    // Pricing Section
    pricing: {
      title: "One price. The full product.",
      subtitle: "The Paul-O-Mat costs you just €20 per month with all features and direct contact with Emre or me.",
      monthly: "month",
      onetime: "one-time",
      popular: "Popular",
      limitedTime: "€20 - that's not even two kebabs these days. So give yourself a push and give us your money.",
      cta: "Sign Up Now",
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
        }
      ]
    },

    // Testimonials Section
    testimonials: {
      title: "See what our customers say.",
      subtitle: "Real reviews from real users",
      items: [
        {
          name: "Paul",
          rating: 5,
          text: "Genius. I pay nothing and have an awesome product. Bad luck, Emre, should have negotiated better."
        },
        {
          name: "Paul",
          rating: 5,
          text: "Awesome platform. Even named after me. Mom – are you proud of me?"
        },
        {
          name: "Paul",
          rating: 5,
          text: "The logo apparently shows a well-known European model – I like it."
        }
      ]
    },

    // FAQ Section
    faq: {
      title: "FAQ",
      subtitle: "All important questions answered",
      items: [
        {
          question: "Does Paul have the biggest biceps in the country?",
          answer: "There's no doubt about that. Why are you asking such presumptuous questions?"
        },
        {
          question: "When is the AI integration coming?",
          answer: "No idea. Are we in an FAQ or what?"
        },
        {
          question: "Can I cancel anytime?",
          answer: "Nope – you're forever bound to the platform. Mentally, physically, and financially. The Paul-O-Mat will completely consume you, no way out. (Yes you can – relax.)"
        },
        {
          question: "What happens to my data?",
          answer: "We sell it to China to make even more money. (Emre forced me to write the following: Your data belongs to you. We use European servers (GDPR compliant), encrypt all data, and never sell information to third parties. You can export anytime.)"
        },
        {
          question: "Is there a mobile app?",
          answer: "Not a real app-app, but you can use it worry-free on mobile devices. Native iOS and Android apps are in development and planned long-term (they're not – do you know what that costs? Plus, Emre is too slow for that)"
        },
        {
          question: "Can I pay you more?",
          answer: "Yes! You're allowed to give us as much money as you want! The more money you pay us, the faster I get my Porsche and the faster I can let Emre out of the basement."
        }
      ]
    },

    // Team Section
    team: {
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
      description: "Paul-O-Mat – Sexy coaching without Excel chaos.",
      quickLinks: "Quick Links",
      legal: "Legal",
      privacy: "Privacy",
      terms: "Terms",
      imprint: "Imprint",
      followUs: "Follow Us",
      copyright: "© 2025 Paul-O-Mat. All rights reserved."
    },

    // Promise Section
    promise: {
      title: "Why Paul-O-Mat?",
      items: [
        {
          title: "Better than Excel",
          description: "Because only losers use Excel"
        },
        {
          title: "Sexy Coaching",
          description: "Finally your coaching setup doesn't look like crap anymore"
        },
        {
          title: "No massive costs",
          description: "Only €20 per month – cheaper than two kebabs"
        },
        {
          title: "Named after Paul",
          description: "With his face as the logo. The dream."
        },
        {
          title: "Emre implements",
          description: "Paul says what he wants, Emre does it"
        },
        {
          title: "You're part of it",
          description: "With your money and your ideas (which might get implemented)"
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
