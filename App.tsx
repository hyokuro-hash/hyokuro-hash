
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, 
  ArrowRight, 
  Users, 
  Target, 
  Zap, 
  BarChart3, 
  Languages,
  Globe,
  X,
  Menu,
  Trophy,
  Rocket,
  Youtube,
  Instagram,
  Construction
} from 'lucide-react';
import ThreeBackground from './components/ThreeBackground';
import Stats from './components/Stats';
import GlobalNetwork from './components/GlobalNetwork';
import { Creator, CaseStudy, Language } from './types';
import { translations } from './translations';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>(Language.KR);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isWipModalOpen, setIsWipModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const langMenuRef = useRef<HTMLDivElement>(null);
  const t = translations[lang];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleWipClick = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setIsWipModalOpen(true);
    setIsMobileMenuOpen(false);
  };

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const serviceIcons = [
    <Users className="w-6 h-6" />,
    <Target className="w-6 h-6" />,
    <Globe className="w-6 h-6" />,
    <BarChart3 className="w-6 h-6" />,
    <Languages className="w-6 h-6" />
  ];

  const creators: Creator[] = [
    { id: 'c-1', name: lang === Language.KR ? '지아' : 'JIA', category: t.creators.categories[1], followers: '1.9M', image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=800', platforms: ['youtube', 'instagram'] },
    { id: 'c-2', name: lang === Language.KR ? '카이' : 'KAI', category: t.creators.categories[2], followers: '6.0M', image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800', platforms: ['youtube', 'tiktok'] },
    { id: 'c-3', name: lang === Language.KR ? '마크' : 'MARK', category: t.creators.categories[3], followers: '5.3M', image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800', platforms: ['youtube', 'instagram', 'tiktok'] },
    { id: 'c-4', name: lang === Language.KR ? '소피아' : 'SOPHIA', category: t.creators.categories[4], followers: '8.4M', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800', platforms: ['instagram', 'tiktok'] },
    { id: 'c-5', name: lang === Language.KR ? '엘레나' : 'ELENA', category: t.creators.categories[4], followers: '2.5M', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=800', platforms: ['instagram', 'tiktok'] },
    { id: 'c-6', name: lang === Language.KR ? '진' : 'JIN', category: t.creators.categories[2], followers: '1.2M', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800', platforms: ['youtube'] },
    { id: 'c-7', name: lang === Language.KR ? '시에나' : 'SIENNA', category: t.creators.categories[1], followers: '3.8M', image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=800', platforms: ['instagram', 'youtube'] },
    { id: 'c-8', name: lang === Language.KR ? '레오' : 'LEO', category: t.creators.categories[5], followers: '4.1M', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800', platforms: ['youtube'] }
  ];

  const caseStudies: CaseStudy[] = [
    { id: '1', thumbnail: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=1200', brandLogo: 'SAMSUNG', campaignName: lang === Language.KR ? 'Galaxy Neo QLED 런칭' : 'Galaxy Neo QLED Launch', results: ['25M+ Views', '40% Pre-orders↑'] },
    { id: '2', thumbnail: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&q=80&w=1200', brandLogo: 'NETFLIX', campaignName: lang === Language.KR ? 'K-Wave 오리지널 시리즈' : 'K-Wave Original Series', results: ['120% Leads↑', '#1 Trending'] },
    { id: '3', thumbnail: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=1200', brandLogo: 'NIKE', campaignName: lang === Language.KR ? 'Move with 1886' : 'Move with 1886 Global', results: ['15M Reach', '22% Sales↑'] },
    { id: '4', thumbnail: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=1200', brandLogo: 'DYSON', campaignName: lang === Language.KR ? '디지털 에어 멀티플라이어' : 'Digital Air Multiplier', results: ['8.5M Views', '35% Conv.'] },
    { id: '5', thumbnail: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=1200', brandLogo: 'STARBUCKS', campaignName: lang === Language.KR ? '시즌 헤리티지 콜렉션' : 'Season Heritage Collection', results: ['500K Shares', '95% Positive'] },
    { id: '6', thumbnail: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200', brandLogo: 'HYUNDAI', campaignName: lang === Language.KR ? '아이오닉 6 글로벌 드라이브' : 'IONIQ 6 Global Drive', results: ['30M+ Impact', 'High-Tier Leads'] }
  ];

  return (
    <div className="min-h-screen overflow-x-hidden selection:bg-[#D4AF37] selection:text-white">
      {/* WIP Modal */}
      <AnimatePresence>
        {isWipModalOpen && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsWipModalOpen(false)} className="absolute inset-0 bg-[#0A1A2F]/80 backdrop-blur-sm" />
            <motion.div initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 20 }} className="relative bg-white rounded-[24px] md:rounded-[40px] p-6 md:p-16 max-w-lg w-full shadow-2xl text-center overflow-hidden border border-gray-100">
              <div className="absolute top-0 left-0 w-full h-1.5 md:h-2 bg-gradient-to-r from-[#1B3B6F] via-[#D4AF37] to-[#1B3B6F]" />
              <button onClick={() => setIsWipModalOpen(false)} className="absolute top-4 right-4 text-gray-400 hover:text-[#1B3B6F]"><X size={20} /></button>
              <div className="w-12 h-12 md:w-20 md:h-20 bg-[#F1F5F9] rounded-xl flex items-center justify-center mx-auto mb-4 text-[#D4AF37]"><Construction size={24} className="md:w-10 md:h-10" /></div>
              <h3 className="text-xl md:text-3xl font-bold text-[#1B3B6F] mb-3">{t.wip.title}</h3>
              <p className="text-xs md:text-base text-gray-500 mb-6 leading-relaxed">{t.wip.desc}</p>
              <motion.button whileTap={{ scale: 0.95 }} onClick={() => setIsWipModalOpen(false)} className="w-full bg-[#1B3B6F] text-white py-3.5 rounded-lg font-bold hover:bg-[#D4AF37] transition-all shadow-lg">{t.wip.confirm}</motion.button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{ opacity: 0, x: '100%' }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: '100%' }} className="fixed inset-0 z-[100] bg-white flex flex-col p-6 md:hidden">
            <div className="flex items-center justify-between mb-10">
               <span className="text-lg font-heading text-[#1B3B6F] font-bold">Adstream | <span className="text-[#D4AF37]">1886</span></span>
               <button onClick={() => setIsMobileMenuOpen(false)}><X size={28} className="text-[#1B3B6F]" /></button>
            </div>
            <div className="flex flex-col space-y-6 text-2xl font-bold text-[#1B3B6F]">
              {t.nav.map((item, i) => (
                <a key={i} href={`#${['services', 'creators', 'cases', 'apply'][i]}`} onClick={(e) => scrollToSection(e, ['services', 'creators', 'cases', 'apply'][i])}>{item}</a>
              ))}
            </div>
            <div className="mt-auto flex flex-col space-y-4">
               <button onClick={handleWipClick} className="w-full bg-[#1B3B6F] text-white py-4 rounded-xl font-bold shadow-lg">문의하기</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <nav className="fixed top-0 left-0 right-0 z-[90] bg-white/80 backdrop-blur-md border-b border-gray-100 h-16 md:h-20 flex items-center">
        <div className="max-w-7xl mx-auto px-4 md:px-6 w-full flex items-center justify-between">
          <button onClick={scrollToTop} className="text-xl md:text-2xl font-heading text-[#1B3B6F] font-bold">
            Adstream | <span className="font-serif-1886 text-[#D4AF37] ml-1">1886</span>
          </button>
          
          <div className="hidden md:flex items-center space-x-10 text-sm font-semibold text-[#1B3B6F]">
            {t.nav.map((item, i) => (
              <a key={i} href={`#${['services', 'creators', 'cases', 'apply'][i]}`} onClick={(e) => scrollToSection(e, ['services', 'creators', 'cases', 'apply'][i])} className="hover:text-[#D4AF37] transition-colors cursor-pointer">{item}</a>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative" ref={langMenuRef}>
              <button onClick={() => setIsLangOpen(!isLangOpen)} className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-gray-50 border border-gray-200 text-[#1B3B6F] text-xs font-bold">
                <Globe size={14} />
                <span>{lang}</span>
                <ChevronDown size={12} className={isLangOpen ? 'rotate-180' : ''} />
              </button>
              <AnimatePresence>
                {isLangOpen && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="absolute right-0 mt-2 w-32 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden">
                    {Object.values(Language).map((l) => (
                      <button key={l} onClick={() => { setLang(l); setIsLangOpen(false); }} className={`w-full px-4 py-2 text-left text-xs font-bold hover:bg-gray-50 ${lang === l ? 'text-[#D4AF37]' : 'text-[#1B3B6F]'}`}>{l}</button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <button onClick={() => setIsMobileMenuOpen(true)} className="md:hidden"><Menu size={24} className="text-[#1B3B6F]" /></button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-[100vh] flex items-center justify-center overflow-hidden bg-[#1B3B6F]">
        <ThreeBackground />
        <div className="relative z-10 text-center px-6 max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-[#D4AF37] font-bold tracking-[0.2em] mb-4 block uppercase text-xs">{t.hero.tag}</span>
            <h1 className="text-4xl md:text-7xl font-heading text-white mb-6 leading-tight font-black">
              {lang === Language.KR ? (
                <>근대 광고의 시작, <br /><span className="font-serif-1886 text-[#D4AF37] italic">1886</span> 디지털의 미래</>
              ) : (
                <>{t.hero.title.split('1886')[0]}<span className="font-serif-1886 text-[#D4AF37] italic">1886</span>{t.hero.title.split('1886')[1]}</>
              )}
            </h1>
            <p className="text-sm md:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">{t.hero.desc}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button onClick={(e) => scrollToSection(e, 'apply')} className="bg-[#D4AF37] text-white px-10 py-4 rounded-full font-bold shadow-xl hover:scale-105 transition-transform">{t.hero.btnApply}</button>
              <button onClick={handleWipClick} className="border-2 border-white text-white px-10 py-4 rounded-full font-bold hover:bg-white/10 transition-colors">{t.hero.btnContact}</button>
            </div>
          </motion.div>
        </div>
      </section>

      <Stats lang={lang} />

      {/* Services Section */}
      <section id="services" className="py-24 bg-gray-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#1B3B6F] mb-4">{t.services.title}</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">{t.services.desc}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.services.items.map((service, i) => (
              <motion.div key={i} whileHover={{ y: -10 }} className="bg-white p-10 rounded-[32px] shadow-lg border border-gray-100 transition-all duration-300">
                <div className="text-[#D4AF37] mb-8 p-4 bg-gray-50 w-fit rounded-2xl">{serviceIcons[i] || <Zap />}</div>
                <h3 className="text-2xl font-bold text-[#1B3B6F] mb-4">{service.title}</h3>
                <p className="text-gray-500 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <GlobalNetwork lang={lang} />

      {/* Creators Section */}
      <section id="creators" className="py-24 bg-white scroll-mt-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#1B3B6F] mb-4">{t.creators.title}</h2>
            <p className="text-gray-500">{t.creators.desc}</p>
          </div>
          
          {/* Mobile Horizontal Scroll Container */}
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-10 no-scrollbar -mx-6 px-6 md:mx-0 md:px-0 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-8 md:overflow-visible">
            {creators.map((creator) => (
              <motion.div 
                key={creator.id} 
                whileHover={{ y: -12 }} 
                className="flex-none w-[80vw] sm:w-[320px] md:w-auto snap-center bg-white rounded-[40px] overflow-hidden shadow-xl border border-gray-50 group"
              >
                <div className="h-72 overflow-hidden relative">
                  <img src={creator.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={creator.name} />
                  <div className="absolute top-5 right-5 bg-white/90 backdrop-blur px-4 py-1.5 rounded-full text-[10px] font-extrabold text-[#1B3B6F] shadow-sm uppercase tracking-wider">{creator.category}</div>
                </div>
                <div className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-[#1B3B6F] mb-1">{creator.name}</h3>
                  <p className="text-[#D4AF37] font-black text-sm mb-6 uppercase tracking-widest">{creator.followers} Followers</p>
                  <div className="flex justify-center space-x-4 text-gray-300">
                    {creator.platforms.includes('youtube') && <Youtube size={20} className="hover:text-[#FF0000] transition-colors cursor-pointer" />}
                    {creator.platforms.includes('instagram') && <Instagram size={20} className="hover:text-[#E4405F] transition-colors cursor-pointer" />}
                    {creator.platforms.includes('tiktok') && <Zap size={20} className="hover:text-black transition-colors cursor-pointer" />}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 md:mt-16 text-center">
            <button onClick={handleWipClick} className="px-8 py-3.5 border-2 border-[#1B3B6F] text-[#1B3B6F] font-bold rounded-full hover:bg-[#1B3B6F] hover:text-white transition-all">{t.creators.btnViewAll}</button>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="cases" className="py-24 bg-gray-50 scroll-mt-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-[#1B3B6F] mb-4">{t.cases.title}</h2>
              <p className="text-gray-500 text-lg">{t.cases.desc}</p>
            </div>
            <button onClick={handleWipClick} className="hidden md:flex items-center space-x-2 text-[#1B3B6F] font-bold group">
              <span className="group-hover:text-[#D4AF37] transition-colors">View Portfolio</span>
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>

          {/* Mobile Horizontal Scroll Container */}
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-10 no-scrollbar -mx-6 px-6 md:mx-0 md:px-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 md:overflow-visible">
            {caseStudies.map((item) => (
              <motion.div 
                key={item.id} 
                whileHover={{ y: -8 }} 
                className="flex-none w-[85vw] sm:w-[400px] md:w-auto snap-center group relative rounded-[48px] overflow-hidden h-96 shadow-2xl bg-black"
              >
                <img src={item.thumbnail} className="w-full h-full object-cover group-hover:scale-110 opacity-70 transition-transform duration-1000" alt={item.campaignName} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B3B6F] via-transparent to-transparent opacity-90" />
                <div className="absolute bottom-10 left-10 right-10 text-white">
                  <div className="flex items-center space-x-2 mb-3">
                    <Trophy size={16} className="text-[#D4AF37]" />
                    <span className="text-[10px] font-black tracking-[0.2em] uppercase text-[#D4AF37]">{item.brandLogo}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-6 leading-tight">{item.campaignName}</h3>
                  <div className="flex flex-wrap gap-3">
                    {item.results.map((res, i) => (
                      <span key={i} className="px-4 py-1.5 bg-white/20 backdrop-blur-xl rounded-full text-[10px] font-bold border border-white/20 uppercase tracking-wider">{res}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 md:hidden text-center">
             <button onClick={handleWipClick} className="flex items-center space-x-2 text-[#1B3B6F] font-bold mx-auto">
                <span>View Portfolio</span>
                <ArrowRight size={20} />
             </button>
          </div>
        </div>
      </section>

      {/* CTA / Apply Section */}
      <section id="apply" className="py-32 bg-[#1B3B6F] relative overflow-hidden scroll-mt-20">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#D4AF37]/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="w-24 h-24 bg-[#D4AF37] rounded-[32px] flex items-center justify-center mx-auto mb-10 shadow-3xl rotate-12">
              <Rocket size={48} className="text-white -rotate-12" />
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">{t.cta.title}</h2>
            <p className="text-white/70 text-lg md:text-xl mb-14 max-w-2xl mx-auto leading-relaxed">{t.cta.desc}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-5 sm:space-y-0 sm:space-x-8">
              <button onClick={handleWipClick} className="w-full sm:w-auto bg-[#D4AF37] text-white px-14 py-6 rounded-full font-bold text-xl shadow-2xl hover:scale-105 transition-transform">{t.cta.btnApply}</button>
              <button onClick={handleWipClick} className="w-full sm:w-auto bg-white/10 backdrop-blur-md text-white border-2 border-white/30 px-14 py-6 rounded-full font-bold text-xl hover:bg-white/20 transition-all">{t.cta.btnBrand}</button>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="bg-[#0A1120] text-white pt-24 pb-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
            <div className="lg:col-span-2">
              <button onClick={scrollToTop} className="text-3xl font-heading font-bold mb-8 block">Adstream | <span className="text-[#D4AF37]">1886</span></button>
              <p className="text-gray-400 max-w-md mb-10 text-lg leading-relaxed">{t.footer.desc}</p>
              <div className="flex space-x-8 text-gray-500">
                <Instagram className="cursor-pointer hover:text-[#D4AF37] transition-all transform hover:scale-110" />
                <Youtube className="cursor-pointer hover:text-[#D4AF37] transition-all transform hover:scale-110" />
                <Globe className="cursor-pointer hover:text-[#D4AF37] transition-all transform hover:scale-110" />
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-8 text-xs uppercase tracking-[0.3em] text-gray-500">{t.footer.company}</h4>
              <ul className="space-y-5 text-gray-400 font-bold">
                <li><a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="hover:text-[#D4AF37] transition-colors">{t.footer.companyLinks[1]}</a></li>
                <li><a href="#creators" onClick={(e) => scrollToSection(e, 'creators')} className="hover:text-[#D4AF37] transition-colors">{t.footer.companyLinks[2]}</a></li>
                <li><a href="#apply" onClick={(e) => scrollToSection(e, 'apply')} className="hover:text-[#D4AF37] transition-colors">{t.nav[3]}</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-8 text-xs uppercase tracking-[0.3em] text-gray-500">{t.footer.contact}</h4>
              <ul className="space-y-5 text-gray-400 text-sm">
                <li className="flex items-center space-x-3"><span className="text-[#D4AF37]">E</span> <span>contact@adstream1886.com</span></li>
                <li className="flex items-center space-x-3"><span className="text-[#D4AF37]">T</span> <span>+82 02-1886-2025</span></li>
                <li className="flex items-center space-x-3"><span className="text-[#D4AF37]">A</span> <span>Gangnam-daero, Seoul, Korea</span></li>
              </ul>
            </div>
          </div>
          <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold uppercase tracking-widest text-gray-600">
            <p>&copy; 2025 Adstream | 1886. {t.footer.rights}</p>
            <div className="flex space-x-10 mt-6 md:mt-0">
              <button onClick={handleWipClick} className="hover:text-[#D4AF37]">{t.footer.terms}</button>
              <button onClick={handleWipClick} className="hover:text-[#D4AF37]">{t.footer.privacy}</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
