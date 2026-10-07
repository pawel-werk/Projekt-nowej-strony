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

// IMPORTY SEKCJI WYPRZEDAŻY I ZESPOŁU
import { SalePage } from './components/Sale/SalePage';
import { SaleBanner } from './components/Sale/SaleBanner';
import { TeamPage } from './components/TeamPage';

type AppView = 'home' | 'privacy' | 'blog' | 'blog-post' | 'sale' | 'team';

export default function App() {
  const [lang, setLang] = useState<'pl' | 'en'>('pl');
  const [prefilledCategory, setPrefilledCategory] = useState<string>('');
  const [prefilledMessage, setPrefilledMessage] = useState<string>('');
  const [isTopBarVisible, setIsTopBarVisible] = useState(true);
  const [currentView, setCurrentView] = useState<AppView>('home');
  const [activeBlogSlug, setActiveBlogSlug] = useState<string>('');

  const tr = translations[lang];

  //