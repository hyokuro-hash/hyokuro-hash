
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
  CheckCircle2,
  Instagram,
  Youtube,
  Twitter,
  Linkedin,
  Facebook,
  Globe,
  ChevronLeft,
  ChevronRight,
  Construction,
  X,
  History,
  Menu
} from 'lucide-react';
import ThreeBackground from './components/ThreeBackground';
import Stats from './components/Stats';
import GlobalNetwork from './components/GlobalNetwork';
import { COLORS } from './constants';
import { Creator, CaseStudy, Language } from './types';
import { translations } from './translations';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>(Language.KR);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [is3DActive, setIs3DActive] = useState(true);
  const [isWipModalOpen, setIsWipModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const langMenuRef = useRef<HTMLDivElement>(null);
  
  const t = translations[lang];

  useEffect(() => {
    setSelectedCategory(t.creators.categories[0]);
  }, [lang, t.creators.categories]);

  // Close language menu when clicking outside
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

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth * 0.8 : scrollLeft + clientWidth * 0.8;
      scrollContainerRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const serviceIcons = [
    <Users className="w-5 h-5 md:w-6 md:h-6" />,
    <Target className="w-5 h-5 md:w-6 md:h-6" />,
    <Globe className="w-5 h-5 md:w-6 md:h-6" />,
    <BarChart3 className="w-5 h-5 md:w-6 md:h-6" />,
    <Languages className="w-5 h-5 md:w-6 md:h-6" />
  ];

  const creators: Creator[] = [
    { id: 'c-1', name: lang === Language.KR ? '지아' : (lang === Language.JP ? 'ジア' : (lang === Language.CN ? '智雅' : (lang === Language.VI ? 'Gia' : 'JIA'))), category: t.creators.categories[1], followers: '1.9M', image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=800', platforms: ['youtube', 'instagram'] },
    { id: 'c-2', name: lang === Language.KR ? '카이' : (lang === Language.JP ? 'カイ' : (lang === Language.CN ? '凯' : (lang === Language.VI ? 'Khải' : 'KAI'))), category: t.creators.categories[2], followers: '6.0M', image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800', platforms: ['youtube', 'tiktok'] },
    { id: 'c-3', name: lang === Language.KR ? '마크' : (lang === Language.JP ? 'マーク' : (lang === Language.CN ? '马克' : (lang === Language.VI ? 'Mark' : 'MARK'))), category: t.creators.categories[3], followers: '5.3M', image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800', platforms: ['youtube', 'instagram', 'tiktok'] },
    { id: 'c-4', name: lang === Language.KR ? '소피아' : (lang === Language.JP ? 'ソフィア' : (lang === Language.CN ? '苏菲亚' : (lang === Language.VI ? 'Sophia' : 'SOPHIA'))), category: t.creators.categories[4], followers: '8.4M', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800', platforms: ['instagram', 'tiktok'] },
    { id: 'c-5', name: lang === Language.KR ? '민수' : (lang === Language.JP ? 'ミンス' : (lang === Language.CN ? '民秀' : (lang === Language.VI ? 'Minh Tú' : 'MINSU'))), category: t.creators.categories[5], followers: '9.7M', image: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&q=80&w=800', platforms: ['youtube', 'instagram'] },
    { id: 'c-6', name: lang === Language.KR ? '벨라' : (lang === Language.JP ? 'ベラ' : (lang === Language.CN ? '贝拉' : (lang === Language.VI ? 'Bella' : 'BELLA'))), category: t.creators.categories[1], followers: '3.6M', image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=800', platforms: ['youtube', 'instagram', 'tiktok'] },
    { id: 'c-7', name: lang === Language.KR ? '레오' : (lang === Language.JP ? 'レオ' : (lang === Language.CN ? '里奥' : (lang === Language.VI ? 'Leo' : 'LEO'))), category: t.creators.categories[2], followers: '7.2M', image: 'https://images.unsplash.com/photo-1533130061792-64b345e4a833?auto=format&fit=crop&q=80&w=800', platforms: ['youtube'] },
    { id: 'c-8', name: lang === Language.KR ? '준' : (lang === Language.JP ? 'ジュン' : (lang === Language.CN ? '俊' : (lang === Language.VI ? 'Tuấn' : 'JUN'))), category: t.creators.categories[3], followers: '9.5M', image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800', platforms: ['youtube', 'instagram'] }
  ];

  const caseStudies: CaseStudy[] = [
    { id: '1', thumbnail: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=1200', brandLogo: 'SAMSUNG', campaignName: lang === Language.KR ? 'Galaxy Neo QLED 런칭' : (lang === Language.JP ? 'Galaxy Neo QLED ローン치' : (lang === Language.CN ? 'Galaxy Neo QLED 发布' : (lang === Language.VI ? 'Ra mắt Galaxy Neo QLED' : 'Galaxy Neo QLED Launch'))), results: [lang === Language.KR ? '조회수 2.5천만+' : (lang === Language.JP ? '視聴数 2500万+' : (lang === Language.CN ? '播放量 2500万+' : (lang === Language.VI ? '25Tr+ Lượt xem' : '25M+ Views'))), lang === Language.KR ? '예약 40%↑' : (lang === Language.JP ? '予約 40%↑' : (lang === Language.CN ? '预订 40%↑' : (lang === Language.VI ? 'Đơn hàng 40%↑' : '40% Pre-orders↑')))] },
    { id: '2', thumbnail: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&q=80&w=1200', brandLogo: 'NETFLIX', campaignName: lang === Language.KR ? 'K-Wave 오리지널 시리즈' : (lang === Language.JP ? 'K-Wave オリジナルシリーズ' : (lang === Language.CN ? 'K-Wave 原创系列' : (lang === Language.VI ? 'Series K-Wave gốc' : 'K-Wave Original Series'))), results: [lang === Language.KR ? '유도 120%↑' : (lang === Language.JP ? '誘導 120%↑' : (lang === Language.CN ? '引流 120%↑' : (lang === Language.VI ? 'Dẫn dắt 120%↑' : '120% Leads↑'))), lang === Language.KR ? '트렌딩 1위' : (lang === Language.JP ? 'トレンド1位' : (lang === Language.CN ? '热榜第1' : (lang === Language.VI ? 'Top 1 Trending' : 'Ranked #1 Trending')))] },
    { id: '3', thumbnail: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=1200', brandLogo: 'NIKE ASIA', campaignName: lang === Language.KR ? '디지털 마라톤 2024' : (lang === Language.JP ? 'デジタルマラソン 2024' : (lang === Language.CN ? '数字马拉松 2024' : (lang === Language.VI ? 'Digital Marathon 2024' : 'Digital Marathon 2024'))), results: [lang === Language.KR ? '언급 300%↑' : (lang === Language.JP ? 'メンション 300%↑' : (lang === Language.CN ? '提及其 300%↑' : (lang === Language.VI ? 'Nhắc tới 300%↑' : '300% Mentions↑'))), lang === Language.KR ? '긍정 98%' : (lang === Language.JP ? '肯定的 98%' : (lang === Language.CN ? '好评率 98%' : (lang === Language.VI ? 'Tích cực 98%' : '98% Positive')))] },
    { id: '4', thumbnail: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1200', brandLogo: 'DYSON', campaignName: lang === Language.KR ? '에어랩 바이럴 챌린지' : (lang === Language.JP ? 'エアラップ バイラルチャレンジ' : (lang === Language.CN ? 'Airwrap 病毒式挑战' : (lang === Language.VI ? 'Airwrap Viral Challenge' : 'Airwrap Viral Challenge'))), results: [lang === Language.KR ? '전환 15%' : (lang === Language.JP ? 'コンバージョン 15%' : (lang === Language.CN ? '转化率 15%' : (lang === Language.VI ? 'Chuyển đổi 15%' : '15% Conv.'))), lang === Language.KR ? '바이럴 5천건' : (lang === Language.JP ? 'バイラル 5000件' : (lang === Language.CN ? '病毒式传播 5000件' : (lang === Language.VI ? '5K+ Bài viết viral' : '5K+ Viral Posts')))] },
    { id: '5', thumbnail: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200', brandLogo: 'HYUNDAI', campaignName: lang === Language.KR ? '아이오닉 6 글로벌' : (lang === Language.JP ? 'IONIQ 6 グローバル' : (lang === Language.CN ? 'IONIQ 6 全球' : (lang === Language.VI ? 'IONIQ 6 Toàn cầu' : 'IONIQ 6 Global'))), results: [lang === Language.KR ? '시승 2만건+' : (lang === Language.JP ? '試乗 2万件+' : (lang === Language.CN ? '试驾 2万次+' : (lang === Language.VI ? '20K+ Lượt chạy thử' : '20K+ Test Drives'))), lang === Language.KR ? '가치 50억' : (lang === Language.JP ? 'メディア価値 5億円' : (lang === Language.CN ? '媒体价值 2500万' : (lang === Language.VI ? 'Giá trị 4Tr USD' : '$4M Media Value')))] },
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
              <button onClick={() => setIsWipModalOpen(false)} className="absolute top-4 right-4 md:top-6 md:right-6 text-gray-400 hover:text-[#1B3B6F] transition-colors"><X size={20} className="md:w-6 md:h-6" /></button>
              <div className="w-12 h-12 md:w-20 md:h-20 bg-[#F1F5F9] rounded-xl md:rounded-3xl flex items-center justify-center mx-auto mb-4 md:mb-8 text-[#D4AF37]"><Construction size={24} className="md:w-10 md:h-10" /></div>
              <h3 className="text-xl md:text-3xl font-bold text-[#1B3B6F] mb-3 md:mb-4">{t.wip.title}</h3>
              <p className="text-xs md:text-base text-gray-500 mb-6 md:mb-10 leading-relaxed">{t.wip.desc}</p>
              <motion.button whileTap={{ scale: 0.95 }} onClick={() => setIsWipModalOpen(false)} className="w-full bg-[#1B3B6F] text-white py-3.5 md:py-5 rounded-lg md:rounded-2xl font-bold hover:bg-[#D4AF37] transition-all shadow-lg text-sm md:text-base">{t.wip.confirm}</motion.button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{ opacity: 0, x: '100%' }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: '100%' }} transition={{ type: 'spring', damping: 25, stiffness: 200 }} className="fixed inset-0 z-[100] bg-white flex flex-col p-6 md:hidden">
            <div className="flex items-center justify-between mb-10">
               <span className="text-lg font-heading text-[#1B3B6F] font-bold tracking-tight">Adstream | <span className="text-[#D4AF37]">1886</span></span>
               <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 -mr-2"><X size={28} className="text-[#1B3B6F]" /></button>
            </div>
            <div className="flex flex-col space-y-6 text-2xl font-bold text-[#1B3B6F]">
              {t.nav.map((item, i) => (
                <motion.a key={i} whileTap={{ x: 10 }} href={`#${['services', 'creators', 'cases', 'apply'][i]}`} onClick={(e) => scrollToSection(e, ['services', 'creators', 'cases', 'apply'][i])}>{item}</motion.a>
              ))}
            </div>
            
            {/* Mobile Language Selection */}
            <div className="mt-8 flex flex-wrap gap-3 border-t border-gray-100 pt-8">
               <button 
                onClick={() => { setLang(Language.KR); setIsMobileMenuOpen(false); }}
                className={`flex-1 min-w-[40%] py-3 rounded-xl font-bold transition-all ${lang === Language.KR ? 'bg-[#1B3B6F] text-white shadow-lg' : 'bg-gray-50 text-gray-400'}`}
               >
                 한국어
               </button>
               <button 
                onClick={() => { setLang(Language.EN); setIsMobileMenuOpen(false); }}
                className={`flex-1 min-w-[40%] py-3 rounded-xl font-bold transition-all ${lang === Language.EN ? 'bg-[#1B3B6F] text-white shadow-lg' : 'bg-gray-50 text-gray-400'}`}
               >
                 English
               </button>
               <button 
                onClick={() => { setLang(Language.JP); setIsMobileMenuOpen(false); }}
                className={`flex-1 min-w-[40%] py-3 rounded-xl font-bold transition-all ${lang === Language.JP ? 'bg-[#1B3B6F] text-white shadow-lg' : 'bg-gray-50 text-gray-400'}`}
               >
                 日本語
               </button>
               <button 
                onClick={() => { setLang(Language.CN); setIsMobileMenuOpen(false); }}
                className={`flex-1 min-w-[40%] py-3 rounded-xl font-bold transition-all ${lang === Language.CN ? 'bg-[#1B3B6F] text-white shadow-lg' : 'bg-gray-50 text-gray-400'}`}
               >
                 简体中文
               </button>
               <button 
                onClick={() => { setLang(Language.VI); setIsMobileMenuOpen(false); }}
                className={`flex-1 min-w-[40%] py-3 rounded-xl font-bold transition-all ${lang === Language.VI ? 'bg-[#1B3B6F] text-white shadow-lg' : 'bg-gray-50 text-gray-400'}`}
               >
                 Tiếng Việt
               </button>
            </div>

            <div className="mt-auto flex flex-col space-y-4">
               <motion.button whileTap={{ scale: 0.98 }} onClick={handleWipClick} className="w-full bg-[#1B3B6F] text-white py-4 rounded-xl font-bold text-base shadow-lg">
                {lang === Language.KR ? '문의하기' : (lang === Language.JP ? 'お問い合わせ' : (lang === Language.CN ? '联系我们' : (lang === Language.VI ? 'Liên hệ' : 'Contact Us')))}
               </motion.button>
               <div className="flex justify-center space-x-8 text-gray-400 py-4">
                  <Instagram className="cursor-pointer" /> <Youtube className="cursor-pointer" /> <Twitter className="cursor-pointer" />
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <nav className="fixed top-0 left-0 right-0 z-[90] bg-white/80 backdrop-blur-md border-b border-gray-100 h-14 md:h-20 flex items-center">
        <div className="max-w-7xl mx-auto px-4 md:px-6 w-full flex items-center justify-between">
          <button onClick={scrollToTop} className="text-lg md:text-2xl font-heading text-[#1B3B6F] flex items-center shrink-0 font-bold">
            Adstream | <span className="font-serif-1886 text-[#D4AF37] ml-1 md:ml-2">1886</span>
          </button>
          
          <div className="hidden md:flex items-center space-x-10 text-sm font-semibold text-[#1B3B6F]">
            {t.nav.map((item, i) => (
              <a key={i} href={`#${['services', 'creators', 'cases', 'apply'][i]}`} onClick={(e) => scrollToSection(e, ['services', 'creators', 'cases', 'apply'][i])} className="hover:text-[#D4AF37] transition-colors">{item}</a>
            ))}
          </div>

          <div className="flex items-center space-x-2 md:space-x-6">
            {/* Custom Language Switcher */}
            <div className="relative" ref={langMenuRef}>
              <button 
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center space-x-2 px-3 md:px-4 py-2 rounded-full bg-gray-50 border border-gray-200 hover:border-[#D4AF37] hover:bg-white transition-all duration-300 group shadow-sm"
              >
                <Globe size={16} className={`text-gray-400 group-hover:text-[#D4AF37] transition-colors ${isLangOpen ? 'text-[#D4AF37]' : ''}`} />
                <span className="text-[11px] md:text-[13px] font-black text-[#1B3B6F]">{lang}</span>
                <ChevronDown size={14} className={`text-gray-400 transition-transform duration-300 ${isLangOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {isLangOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute right-0 mt-3 w-40 md:w-52 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden py-2"
                  >
                    <button 
                      onClick={() => { setLang(Language.KR); setIsLangOpen(false); }}
                      className={`w-full px-5 py-3 md:py-4 text-left flex items-center justify-between transition-colors hover:bg-gray-50 ${lang === Language.KR ? 'bg-gray-50/50' : ''}`}
                    >
                      <span className={`text-xs md:text-sm font-bold ${lang === Language.KR ? 'text-[#D4AF37]' : 'text-[#1B3B6F]'}`}>한국어 (KR)</span>
                      {lang === Language.KR && <CheckCircle2 size={14} className="text-[#D4AF37]" />}
                    </button>
                    <button 
                      onClick={() => { setLang(Language.EN); setIsLangOpen(false); }}
                      className={`w-full px-5 py-3 md:py-4 text-left flex items-center justify-between transition-colors hover:bg-gray-50 ${lang === Language.EN ? 'bg-gray-50/50' : ''}`}
                    >
                      <span className={`text-xs md:text-sm font-bold ${lang === Language.EN ? 'text-[#D4AF37]' : 'text-[#1B3B6F]'}`}>English (EN)</span>
                      {lang === Language.EN && <CheckCircle2 size={14} className="text-[#D4AF37]" />}
                    </button>
                    <button 
                      onClick={() => { setLang(Language.JP); setIsLangOpen(false); }}
                      className={`w-full px-5 py-3 md:py-4 text-left flex items-center justify-between transition-colors hover:bg-gray-50 ${lang === Language.JP ? 'bg-gray-50/50' : ''}`}
                    >
                      <span className={`text-xs md:text-sm font-bold ${lang === Language.JP ? 'text-[#D4AF37]' : 'text-[#1B3B6F]'}`}>日本語 (JP)</span>
                      {lang === Language.JP && <CheckCircle2 size={14} className="text-[#D4AF37]" />}
                    </button>
                    <button 
                      onClick={() => { setLang(Language.CN); setIsLangOpen(false); }}
                      className={`w-full px-5 py-3 md:py-4 text-left flex items-center justify-between transition-colors hover:bg-gray-50 ${lang === Language.CN ? 'bg-gray-50/50' : ''}`}
                    >
                      <span className={`text-xs md:text-sm font-bold ${lang === Language.CN ? 'text-[#D4AF37]' : 'text-[#1B3B6F]'}`}>简体中文 (CN)</span>
                      {lang === Language.CN && <CheckCircle2 size={14} className="text-[#D4AF37]" />}
                    </button>
                    <button 
                      onClick={() => { setLang(Language.VI); setIsLangOpen(false); }}
                      className={`w-full px-5 py-3 md:py-4 text-left flex items-center justify-between transition-colors hover:bg-gray-50 ${lang === Language.VI ? 'bg-gray-50/50' : ''}`}
                    >
                      <span className={`text-xs md:text-sm font-bold ${lang === Language.VI ? 'text-[#D4AF37]' : 'text-[#1B3B6F]'}`}>Tiếng Việt (VI)</span>
                      {lang === Language.VI && <CheckCircle2 size={14} className="text-[#D4AF37]" />}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button onClick={handleWipClick} className="hidden sm:block bg-[#1B3B6F] text-white px-5 md:px-8 py-2.5 md:py-3 rounded-full text-xs md:text-sm font-bold hover:bg-[#D4AF37] transition-all transform hover:scale-105 shadow-md">
              {lang === Language.KR ? '문의하기' : (lang === Language.JP ? 'お問い合わせ' : (lang === Language.CN ? '咨询' : (lang === Language.VI ? 'Liên hệ' : 'Inquiry')))}
            </button>
            <button onClick={() => setIsMobileMenuOpen(true)} className="md:hidden p-2 -mr-2 text-[#1B3B6F]">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[100svh] flex items-center justify-center overflow-hidden bg-[#1B3B6F]">
        {is3DActive && <ThreeBackground />}
        <div className="absolute top-16 md:top-24 right-4 md:right-8 z-20 flex items-center space-x-2 bg-white/10 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20 scale-75 md:scale-100">
          <span className="text-[9px] text-white uppercase tracking-wider font-bold">3D BG</span>
          <button onClick={() => setIs3DActive(!is3DActive)} className={`w-7 h-3.5 rounded-full transition-colors relative ${is3DActive ? 'bg-[#D4AF37]' : 'bg-gray-400'}`}>
            <div className={`absolute top-0.5 left-0.5 w-2.5 h-2.5 bg-white rounded-full transition-transform ${is3DActive ? 'translate-x-3.5' : 'translate-x-0'}`} />
          </button>
        </div>
        <div className="relative z-10 text-center px-6 max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-[#D4AF37] font-bold tracking-[0.2em] mb-4 md:mb-6 block uppercase text-[9px] md:text-sm">{t.hero.tag}</span>
            <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-heading text-white mb-6 md:mb-8 leading-[1.15] md:leading-tight font-black tracking-tight">
              {lang === Language.KR ? (
                <>근대 광고의 시작, <br className="sm:hidden" /> <span className="font-serif-1886 text-[#D4AF37] italic">1886</span> 디지털의 미래</>
              ) : (lang === Language.JP ? (
                <>近代広告の始まり、 <br className="sm:hidden" /> <span className="font-serif-1886 text-[#D4AF37] italic">1886</span> デジタルの未来</>
              ) : (lang === Language.CN ? (
                <>近代广告的起源, <br className="sm:hidden" /> <span className="font-serif-1886 text-[#D4AF37] italic">1886</span> 数字化的未来</>
              ) : (lang === Language.VI ? (
                <>Khởi đầu quảng cáo hiện đại, <br className="sm:hidden" /> <span className="font-serif-1886 text-[#D4AF37] italic">1886</span> tương lai số</>
              ) : (
                <>Heritage of <span className="font-serif-1886 text-[#D4AF37] italic">1886</span>, <br className="sm:hidden" /> Future of Digital</>
              ))))}
            </h1>
            <p className="text-xs sm:text-base md:text-xl text-white/80 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed px-2 md:px-4">
              {t.hero.desc}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-6 px-6">
              <motion.button whileTap={{ scale: 0.95 }} onClick={handleWipClick} className="w-full sm:w-auto bg-[#D4AF37] text-white px-8 md:px-12 py-3.5 md:py-5 rounded-full text-sm md:text-lg font-bold shadow-xl">{t.hero.btnApply}</motion.button>
              <motion.button whileTap={{ scale: 0.95 }} onClick={handleWipClick} className="w-full sm:w-auto border-2 border-white text-white px-8 md:px-12 py-3.5 md:py-5 rounded-full text-sm md:text-lg font-bold">{t.hero.btnContact}</motion.button>
            </div>
          </motion.div>
        </div>
        <motion.button onClick={(e) => scrollToSection(e, 'philosophy')} animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2.5 }} className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 text-white/40 hover:text-white"><ChevronDown size={24} className="md:w-7 md:h-7" /></motion.button>
      </section>

      {/* Philosophy, GlobalNetwork, etc modules remain unchanged but will react to translations[lang] */}
      <Stats lang={lang} />
      <section id="philosophy" className="py-12 md:py-24 bg-[#E3F2FD]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl md:text-4xl font-bold text-[#1B3B6F] mb-6 md:mb-8 text-left">{t.philosophy.title}</h2>
            <div className="space-y-5 md:space-y-8 text-left">
              {t.philosophy.items.map((item, i) => (
                <div key={i} className="flex items-start space-x-4 md:space-x-6">
                  <div className={`w-9 h-9 md:w-12 md:h-12 flex-shrink-0 rounded-lg md:rounded-xl flex items-center justify-center font-bold text-[10px] md:text-sm ${i === 0 ? 'bg-[#0A1A2F] text-[#D4AF37] italic font-serif-1886' : i === 1 ? 'bg-[#1B3B6F] text-white' : 'bg-[#D4AF37] text-white'}`}>
                    {i === 0 ? '1886' : i === 1 ? 'Ad' : 'St'}
                  </div>
                  <div>
                    <h3 className="text-base md:text-xl font-bold text-[#1B3B6F] mb-1 md:mb-2">{item.title}</h3>
                    <p className="text-xs md:text-base text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative mt-4 lg:mt-0 max-w-[280px] md:max-w-md mx-auto lg:max-w-none">
            <div className="aspect-square bg-white rounded-full shadow-2xl flex items-center justify-center p-4 md:p-12 overflow-hidden border-4 md:border-8 border-white">
              <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800" alt="Philosophy" className="rounded-full w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-2 -right-2 md:-bottom-8 md:-right-8 w-24 h-24 md:w-48 md:h-48 bg-[#D4AF37] rounded-full flex items-center justify-center text-white text-center p-3 md:p-4 shadow-xl text-[10px] md:text-base font-bold leading-tight">{t.philosophy.badge}</div>
          </motion.div>
        </div>
      </section>

      <GlobalNetwork lang={lang} />
      
      {/* Footer and other sections will use the localized strings automatically */}
      <footer className="bg-[#2D3748] text-white pt-12 md:pt-24 pb-8 md:pb-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 mb-10 md:mb-16">
          <div className="text-left">
            <button onClick={scrollToTop} className="text-lg md:text-2xl font-heading mb-4 md:mb-6 block font-bold">Adstream | <span className="text-[#D4AF37]">1886</span></button>
            <p className="text-gray-400 text-[10px] md:text-sm leading-relaxed mb-6">{t.footer.desc}</p>
            <div className="flex space-x-5">
              <Instagram onClick={handleWipClick} className="w-5 h-5 cursor-pointer hover:text-[#D4AF37]" />
              <Youtube onClick={handleWipClick} className="w-5 h-5 cursor-pointer hover:text-[#D4AF37]" />
              <Twitter onClick={handleWipClick} className="w-5 h-5 cursor-pointer hover:text-[#D4AF37]" />
            </div>
          </div>
          <div className="text-left hidden sm:block">
            <h4 className="font-bold mb-6 uppercase tracking-widest text-[10px] text-gray-500">{t.footer.company}</h4>
            <ul className="space-y-3 text-[11px] md:text-sm text-gray-400">
              <li><button onClick={handleWipClick}>{t.footer.companyLinks[0]}</button></li>
              <li><button onClick={(e) => scrollToSection(e, 'services')}>{t.footer.companyLinks[1]}</button></li>
              <li><button onClick={(e) => scrollToSection(e, 'creators')}>{t.footer.companyLinks[2]}</button></li>
            </ul>
          </div>
          <div className="text-left">
            <h4 className="font-bold mb-5 md:mb-6 uppercase tracking-widest text-[9px] md:text-[10px] text-gray-500">{t.footer.contact}</h4>
            <ul className="space-y-3 text-[11px] md:text-sm text-gray-400">
              <li>contact@adstream1886.com</li>
              <li>+82 02-1234-5678</li>
              <li>{lang === Language.KR ? '서울 특별시 강남구 테헤란로 1886' : (lang === Language.JP ? '東京都渋谷区道玄坂 1886' : (lang === Language.CN ? '北京市朝阳区建国路 1886' : (lang === Language.VI ? 'Quận 1, TP. Hồ Chí Minh' : '1886 Teheran-ro, Gangnam-gu, Seoul')))}</li>
            </ul>
          </div>
          <div className="text-left">
            <h4 className="font-bold mb-5 md:mb-6 uppercase tracking-widest text-[9px] md:text-[10px] text-gray-500">{t.footer.newsletter}</h4>
            <form onSubmit={(e) => { e.preventDefault(); handleWipClick(); }} className="flex bg-white/5 rounded-full p-0.5 border border-white/10">
              <input type="email" placeholder="Email" className="bg-transparent border-none focus:ring-0 px-3 py-1.5 flex-grow text-[11px] md:text-sm" />
              <button className="bg-[#D4AF37] text-white px-4 md:px-5 py-1.5 rounded-full text-[10px] md:text-xs font-bold">{t.footer.subscribe}</button>
            </form>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[9px] md:text-[10px] text-gray-500 gap-4">
          <div>&copy; 2025 Adstream | 1886. {t.footer.rights}</div>
          <div className="flex space-x-6 md:space-x-8">
            <button onClick={handleWipClick}>{t.footer.terms}</button>
            <button onClick={handleWipClick}>{t.footer.privacy}</button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
