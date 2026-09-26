import { useState, useEffect } from 'react';
import { translations } from './data/translations';
import { TopBar } from './components/TopBar';
import { mockTopBarItems } from './data/topbarData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { WhyUs } from './components/WhyUs';
import { About } from './components/About';
import { InstagramFeed } from './components/InstagramFeed';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingCTA } from './components/FloatingCTA';
import { PrivacyPolicyPage } from './components/PrivacyPolicyPage';
import { BlogPage } from './components/Blog/BlogPage';
import { BlogPostPage } from './components/Blog/BlogPostPage';
import { ImagePopup } from './components/ImagePopup';

type AppView = 'home' | 'privacy' | 'blog' | 'blog-post';

export default function App() {
  const [lang, setLang] = useState<'pl' | 'en'>('pl');
  const [prefilledCategory, setPrefilledCategory] = useState<string>('');
  const [prefilledMessage, setPrefilledMessage] = useState<string>('');
  const [isTopBarVisible, setIsTopBarVisible] = useState(true);
  const [currentView, setCurrentView] = useState<AppView>('home');
  const [activeBlogSlug, setActiveBlogSlug] = useState<string>('');

  const tr = translations[lang];

  // Helper do parsowania URL i hasha
  const parseCurrentUrl = (): { view: AppView; slug?: string } => {
    const path = window.location.pathname;
    const hash = window.location.hash;

    if (path === '/polityka-prywatnosci' || hash === '#polityka-prywatnosci') {
      return { view: 'privacy' };
    }

    // Blog post slug detection: /blog/jak-zaprojektowac... or #blog/jak-zaprojektowac...
    if (path.startsWith('/blog/')) {
      const slug = path.replace('/blog/', '').replace('/', '');
      if (slug) return { view: 'blog-post', slug };
    }
    if (hash.startsWith('#blog/')) {
      const slug = hash.replace('#blog/', '');
      if (slug) return { view: 'blog-post', slug };
    }

    // Blog list: /blog or #blog
    if (path === '/blog' || hash === '#blog') {
      return { view: 'blog' };
    }

    return { view: 'home' };
  };

  useEffect(() => {
    // Initial view parse
    const initial = parseCurrentUrl();
    setCurrentView(initial.view);
    if (initial.slug) setActiveBlogSlug(initial.slug);

    const isDismissed = sessionStorage.getItem('werkmebel_topbar_dismissed');
    if (isDismissed) {
      setIsTopBarVisible(false);
    }

    const handleUrlChange = () => {
      const parsed = parseCurrentUrl();
      setCurrentView(parsed.view);
      if (parsed.slug) setActiveBlogSlug(parsed.slug);
      window.scrollTo({ top: 0, behavior: 'instant' });
    };

    window.addEventListener('popstate', handleUrlChange);
    window.addEventListener('hashchange', handleUrlChange);
    return () => {
      window.removeEventListener('popstate', handleUrlChange);
      window.removeEventListener('hashchange', handleUrlChange);
    };
  }, []);

  const navigateTo = (view: AppView, slug?: string) => {
    setCurrentView(view);
    if (view === 'blog-post' && slug) {
      setActiveBlogSlug(slug);
      window.location.hash = `blog/${slug}`;
    } else if (view === 'blog') {
      window.location.hash = 'blog';
    } else if (view === 'privacy') {
      window.location.hash = 'polityka-prywatnosci';
    } else {
      window.location.hash = '';
      if (window.location.pathname !== '/') {
        window.history.pushState({}, '', '/');
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (id: string) => {
    if (currentView !== 'home') {
      navigateTo('home');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 120);
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceTitle: string) => {
    setPrefilledCategory(serviceTitle.includes('Kuchni') ? 'Kuchnia' : 'Nowy projekt / wycena');
    setPrefilledMessage(`Dzień dobry, interesuje mnie realizacja w zakresie: "${serviceTitle}". Proszę o kontakt w sprawie wstępnych ustaleń.`);
    scrollTo('contact');
  };

  const handleSelectProjectForQuote = (projectTitle: string) => {
    setPrefilledCategory('Nowy projekt / wycena');
    setPrefilledMessage(`Dzień dobry, podoba mi się Wasza realizacja "${projectTitle}". Chciał(a)bym dowiedzieć się o możliwość i szacunkowy koszt wykonania podobnego projektu.`);
    scrollTo('contact');
  };

  // 1. Widok: Pojedynczy artykuł bloga
  if (currentView === 'blog-post') {
    return (
      <BlogPostPage
        slug={activeBlogSlug}
        onBackToBlog={() => navigateTo('blog')}
        onBackToHome={() => navigateTo('home')}
        onSelectPost={(slug) => navigateTo('blog-post', slug)}
        onQuoteRequest={() => {
          setPrefilledCategory('Nowy projekt / wycena');
          setPrefilledMessage('Dzień dobry, czytałem Państwa poradnik na blogu i chciałbym skonsultować projekt mebli.');
          scrollTo('contact');
        }}
      />
    );
  }

  // 2. Widok: Lista wpisów bloga
  if (currentView === 'blog') {
    return (
      <BlogPage
        onBackToHome={() => navigateTo('home')}
        onSelectPost={(slug) => navigateTo('blog-post', slug)}
      />
    );
  }

  // 3. Widok: Polityka Prywatności
  if (currentView === 'privacy') {
    return <PrivacyPolicyPage onBackToHome={() => navigateTo('home')} />;
  }

  // 4. Widok główny: Landing Page
  return (
    <div className="min-h-full flex flex-col selection:bg-[#c8a96e] selection:text-black">
      {/* Górny pasek ogłoszeń */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <TopBar
          items={mockTopBarItems}
          onScrollTo={scrollTo}
          onDismissChange={(dismissed) => setIsTopBarVisible(!dismissed)}
        />
      </div>

      {/* Nawigacja główna ze wsparciem linku Blog */}
      <Navbar
        tr={tr}
        lang={lang}
        hasTopBar={isTopBarVisible}
        onToggleLang={() => setLang(lang === 'pl' ? 'en' : 'pl')}
        onScrollTo={scrollTo}
        onOpenBlog={() => navigateTo('blog')}
      />

      {/* Główna treść */}
      <main className="flex-1">
        <Hero tr={tr} onScrollTo={scrollTo} />
        <Services tr={tr} lang={lang} onSelectService={handleSelectService} />
        <Portfolio tr={tr} lang={lang} onSelectProjectForQuote={handleSelectProjectForQuote} />
        <WhyUs tr={tr} />
        <About tr={tr} />
        <InstagramFeed tr={tr} />
        <Contact
          tr={tr}
          prefilledCategory={prefilledCategory}
          prefilledMessage={prefilledMessage}
        />
      </main>

      {/* Stopka z linkami do Bloga i Polityki Prywatności */}
      <Footer
        tr={tr}
        onOpenPrivacy={() => navigateTo('privacy')}
        onOpenBlog={() => navigateTo('blog')}
      />

{/* Pływający przycisk CTA */}
      <FloatingCTA
        label={tr.floating}
        onClick={() => scrollTo('contact')}
      />

      {/* Nasz nowy Pop-up */}
      <ImagePopup />
    </div>
  );
}