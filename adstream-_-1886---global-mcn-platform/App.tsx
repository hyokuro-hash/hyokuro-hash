
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
import { COLORS, CATEGORIES } from './constants';
import { Creator, CaseStudy, Language } from './types';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('크리에이터 지원');
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [is3DActive, setIs3DActive] = useState(true);
  const [isWipModalOpen, setIsWipModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const scrollContainerRef = useRef<HTMLDivElement>(null);

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

  const services = [
    { title: '크리에이터 관리', desc: '체계적인 매니지먼트와 커리어 가이드', icon: <Users className="w-5 h-5 md:w-6 md:h-6" /> },
    { title: '광고 매칭', desc: '브랜드와 크리에이터의 최적 결합', icon: <Target className="w-5 h-5 md:w-6 md:h-6" /> },
    { title: '글로벌 확장', desc: '해외 시장 진출을 위한 로컬라이징', icon: <Globe className="w-5 h-5 md:w-6 md:h-6" /> },
    { title: '수익 관리', desc: '투명하고 효율적인 정산 시스템', icon: <BarChart3 className="w-5 h-5 md:w-6 md:h-6" /> },
    { title: '번역 & 통역', desc: '6개 국어 전문 번역 서비스 제공', icon: <Languages className="w-5 h-5 md:w-6 md:h-6" /> },
  ];

  const creators: Creator[] = [
    { id: 'c-1', name: '지아 (JIA)', category: '뷰티', followers: '1.9M', image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=800', platforms: ['youtube', 'instagram'] },
    { id: 'c-2', name: '카이 (KAI)', category: '게임', followers: '6.0M', image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800', platforms: ['youtube', 'tiktok'] },
    { id: 'c-3', name: '마크 (MARK)', category: '푸드', followers: '5.3M', image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800', platforms: ['youtube', 'instagram', 'tiktok'] },
    { id: 'c-4', name: '소피아 (SOPHIA)', category: '라이프스타일', followers: '8.4M', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800', platforms: ['instagram', 'tiktok'] },
    { id: 'c-5', name: '민수 (MINSU)', category: '테크', followers: '9.7M', image: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&q=80&w=800', platforms: ['youtube', 'instagram'] },
    { id: 'c-6', name: '벨라 (BELLA)', category: '뷰티', followers: '3.6M', image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=800', platforms: ['youtube', 'instagram', 'tiktok'] },
    { id: 'c-7', name: '레오 (LEO)', category: '게임', followers: '7.2M', image: 'https://images.unsplash.com/photo-1533130061792-64b345e4a833?auto=format&fit=crop&q=80&w=800', platforms: ['youtube'] },
    { id: 'c-8', name: '준 (JUN)', category: '푸드', followers: '9.5M', image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800', platforms: ['youtube', 'instagram'] }
  ];

  const caseStudies: CaseStudy[] = [
    { id: '1', thumbnail: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=1200', brandLogo: 'SAMSUNG', campaignName: 'Galaxy Neo QLED Launch', results: ['조회수 2.5천만+', '예약 40%↑'] },
    { id: '2', thumbnail: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&q=80&w=1200', brandLogo: 'NETFLIX', campaignName: 'K-Wave Original Series', results: ['유도 120%↑', '트렌딩 1위'] },
    { id: '3', thumbnail: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=1200', brandLogo: 'NIKE ASIA', campaignName: 'Digital Marathon 2024', results: ['언급 300%↑', '긍정 98%'] },
    { id: '4', thumbnail: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1200', brandLogo: 'DYSON', campaignName: 'Airwrap Viral Challenge', results: ['전환 15%', '바이럴 5천건'] },
    { id: '5', thumbnail: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200', brandLogo: 'HYUNDAI', campaignName: 'IONIQ 6 Global', results: ['시승 2만건+', '가치 50억'] },
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
              <h3 className="text-xl md:text-3xl font-bold text-[#1B3B6F] mb-3 md:mb-4">작업 중인 기능입니다</h3>
              <p className="text-xs md:text-base text-gray-500 mb-6 md:mb-10 leading-relaxed">현재 해당 페이지는 더 나은 경험을 위해 고도화 작업 중에 있습니다. 빠른 시일 내에 완성된 모습을 보여드리겠습니다.</p>
              <motion.button whileTap={{ scale: 0.95 }} onClick={() => setIsWipModalOpen(false)} className="w-full bg-[#1B3B6F] text-white py-3.5 md:py-5 rounded-lg md:rounded-2xl font-bold hover:bg-[#D4AF37] transition-all shadow-lg text-sm md:text-base">확인했습니다</motion.button>
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
              {['서비스', '크리에이터', '성공사례', '지원하기'].map((item, i) => (
                <motion.a key={i} whileTap={{ x: 10 }} href={`#${['services', 'creators', 'cases', 'apply'][i]}`} onClick={(e) => scrollToSection(e, ['services', 'creators', 'cases', 'apply'][i])}>{item}</motion.a>
              ))}
            </div>
            <div className="mt-auto flex flex-col space-y-4">
               <motion.button whileTap={{ scale: 0.98 }} onClick={handleWipClick} className="w-full bg-[#1B3B6F] text-white py-4 rounded-xl font-bold text-base shadow-lg">문의하기</motion.button>
               <div className="flex justify-center space-x-8 text-gray-400 py-4">
                  <Instagram /> <Youtube /> <Twitter />
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
            {['서비스', '크리에이터', '성공사례', '지원하기'].map((item, i) => (
              <a key={i} href={`#${['services', 'creators', 'cases', 'apply'][i]}`} onClick={(e) => scrollToSection(e, ['services', 'creators', 'cases', 'apply'][i])} className="hover:text-[#D4AF37] transition-colors">{item}</a>
            ))}
          </div>

          <div className="flex items-center space-x-1 md:space-x-4">
            <select className="bg-transparent text-[10px] md:text-sm font-bold border-none outline-none focus:ring-0 cursor-pointer hidden sm:block" onChange={() => handleWipClick()}>
              <option>KR</option>
              <option>EN</option>
            </select>
            <button onClick={handleWipClick} className="hidden sm:block bg-[#1B3B6F] text-white px-5 md:px-6 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-bold hover:bg-[#D4AF37] transition-all transform hover:scale-105">
              문의하기
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
            <span className="text-[#D4AF37] font-bold tracking-[0.2em] mb-4 md:mb-6 block uppercase text-[9px] md:text-sm">Empowering Your Digital Heritage</span>
            <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-heading text-white mb-6 md:mb-8 leading-[1.15] md:leading-tight font-black tracking-tight">
              근대 광고의 시작, <br className="sm:hidden" />
              <span className="font-serif-1886 text-[#D4AF37] italic">1886</span> 디지털의 미래
            </h1>
            <p className="text-xs sm:text-base md:text-xl text-white/80 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed px-2 md:px-4">
              광고가 흐르듯, 크리에이터와 브랜드를 자연스럽게 연결합니다. <br className="hidden md:block" />
              Adstream | 1886은 데이터와 감성을 결합한 글로벌 MCN의 표준입니다.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-6 px-6">
              <motion.button whileTap={{ scale: 0.95 }} onClick={handleWipClick} className="w-full sm:w-auto bg-[#D4AF37] text-white px-8 md:px-12 py-3.5 md:py-5 rounded-full text-sm md:text-lg font-bold shadow-xl">크리에이터 지원</motion.button>
              <motion.button whileTap={{ scale: 0.95 }} onClick={handleWipClick} className="w-full sm:w-auto border-2 border-white text-white px-8 md:px-12 py-3.5 md:py-5 rounded-full text-sm md:text-lg font-bold">브랜드 제휴 문의</motion.button>
            </div>
          </motion.div>
        </div>
        <motion.button onClick={(e) => scrollToSection(e, 'philosophy')} animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2.5 }} className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 text-white/40 hover:text-white"><ChevronDown size={24} className="md:w-7 md:h-7" /></motion.button>
      </section>

      <Stats />

      {/* Philosophy */}
      <section id="philosophy" className="py-12 md:py-24 bg-[#E3F2FD]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl md:text-4xl font-bold text-[#1B3B6F] mb-6 md:mb-8 text-left">회사 철학</h2>
            <div className="space-y-5 md:space-y-8 text-left">
              {[
                { icon: '1886', title: '1886 Heritage: 시대를 관통하는 본질', desc: '광고의 태동부터 시작된 130년의 유산. 시간의 검증을 거친 진정한 가치를 새롭게 흐르게 합니다.' },
                { icon: 'Ad', title: '광고 (Ad): 최적의 매칭', desc: '크리에이터의 감성과 브랜드의 가치가 만나는 지점. 데이터 기반의 최적 매칭을 제안합니다.' },
                { icon: 'St', title: '흐름 (Stream): 콘텐츠의 여정', desc: '콘텐츠, 수익, 소통의 끊임없는 흐름. 국경을 넘어 전 세계로 뻗어 나가는 생태계를 구축합니다.' }
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-4 md:space-x-6">
                  <div className={`w-9 h-9 md:w-12 md:h-12 flex-shrink-0 rounded-lg md:rounded-xl flex items-center justify-center font-bold text-[10px] md:text-sm ${i === 0 ? 'bg-[#0A1A2F] text-[#D4AF37] italic font-serif-1886' : i === 1 ? 'bg-[#1B3B6F] text-white' : 'bg-[#D4AF37] text-white'}`}>{item.icon}</div>
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
            <div className="absolute -bottom-2 -right-2 md:-bottom-8 md:-right-8 w-24 h-24 md:w-48 md:h-48 bg-[#D4AF37] rounded-full flex items-center justify-center text-white text-center p-3 md:p-4 shadow-xl text-[10px] md:text-base font-bold leading-tight">Since 1886 Heritage Spirit</div>
          </motion.div>
        </div>
      </section>

      <GlobalNetwork />

      {/* Services */}
      <section id="services" className="py-12 md:py-24 bg-[#E3F2FD]/50">
        <div className="max-w-7xl mx-auto px-5 md:px-6">
          <div className="text-center mb-10 md:mb-20">
            <h2 className="text-2xl md:text-5xl font-bold text-[#1B3B6F] mb-3 md:mb-6">주요 서비스</h2>
            <p className="text-xs md:text-lg text-gray-600 px-4">성장을 위한 올인원 MCN 솔루션을 제공합니다.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 md:gap-8">
            {services.map((service, idx) => (
              <motion.div key={idx} whileHover={{ y: -6 }} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.05 }} viewport={{ once: true }} className="bg-white p-5 md:p-10 rounded-[24px] md:rounded-[32px] border border-gray-100 shadow-md hover:shadow-xl transition-all flex flex-col items-start">
                <div className="text-[#D4AF37] mb-4 md:mb-8 p-3 md:p-4 bg-gray-50 rounded-xl md:rounded-2xl">{service.icon}</div>
                <h3 className="text-lg md:text-2xl font-bold text-[#1B3B6F] mb-2 md:mb-4">{service.title}</h3>
                <p className="text-[11px] md:text-[15px] text-gray-500 mb-5 md:mb-8 leading-relaxed flex-grow">{service.desc}</p>
                <button onClick={handleWipClick} className="inline-flex items-center text-[#D4AF37] font-bold text-[11px] md:text-sm group mt-auto">자세히 보기 <ArrowRight size={12} className="ml-1.5 md:ml-2 group-hover:translate-x-1 transition-transform" /></button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Creators */}
      <section id="creators" className="py-12 md:py-24 bg-[#0A1A2F] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12">
            <div className="text-left mb-6 md:mb-0">
              <h2 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4">함께 성장하는 크리에이터</h2>
              <p className="text-xs md:text-base text-white/60">분야별 최고의 전문가들이 Adstream | 1886과 함께합니다.</p>
            </div>
            <div className="flex flex-wrap gap-1.5 md:gap-2">
              {CATEGORIES.map(cat => (
                <button key={cat} onClick={() => setSelectedCategory(cat)} className={`px-3.5 md:px-6 py-1 md:py-2 rounded-full text-[10px] md:text-sm font-bold transition-all ${selectedCategory === cat ? 'bg-[#D4AF37] text-white' : 'bg-white/10 hover:bg-white/20'}`}>{cat}</button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
            <AnimatePresence mode='popLayout'>
              {creators
                .filter(c => selectedCategory === '전체' || c.category === selectedCategory)
                .map((creator) => (
                  <motion.div layout key={creator.id} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="relative group overflow-hidden rounded-[16px] md:rounded-3xl bg-gray-900 border border-white/5 shadow-xl aspect-[4/5]">
                    <img src={creator.image} alt={creator.name} className="w-full h-full object-cover opacity-80 transition-all duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent p-3.5 md:p-6 flex flex-col justify-end text-left">
                      <h4 className="text-base md:text-2xl font-bold mb-0.5">{creator.name}</h4>
                      <p className="text-[#D4AF37] text-[9px] md:text-sm font-bold tracking-wide uppercase mb-2 md:mb-4">{creator.category} • <span className="text-white/60">{creator.followers}</span></p>
                      <motion.button 
                        whileTap={{ scale: 0.95 }}
                        onClick={handleWipClick}
                        className="w-full bg-white text-[#1B3B6F] py-2 md:py-3 rounded-lg md:rounded-xl font-bold text-[10px] md:text-sm md:opacity-0 md:group-hover:opacity-100 transition-all transform md:translate-y-4 md:group-hover:translate-y-0"
                      >
                        프로필 보기
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
            </AnimatePresence>
          </div>
          <div className="mt-10 md:mt-16 text-center">
            <motion.button whileTap={{ scale: 0.98 }} onClick={handleWipClick} className="w-full sm:w-auto bg-transparent border border-[#D4AF37] text-[#D4AF37] px-8 md:px-10 py-3 md:py-4 rounded-full font-bold hover:bg-[#D4AF37] hover:text-white transition-all text-sm md:text-base">전체 크리에이터 보기</motion.button>
          </div>
        </div>
      </section>

      {/* Success Cases */}
      <section id="cases" className="py-12 md:py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-8 md:mb-12 text-center">
          <h2 className="text-2xl md:text-5xl font-bold text-[#1B3B6F] mb-2 md:mb-4">성공 사례</h2>
          <p className="text-xs md:text-lg text-gray-600">글로벌 리딩 브랜드와 함께 만든 전략적 성과입니다.</p>
        </div>
        <div className="relative group max-w-[1440px] mx-auto px-4 md:px-0">
          <button onClick={() => scroll('left')} className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 bg-white shadow-lg rounded-full hidden lg:flex items-center justify-center text-[#1B3B6F] hover:bg-[#D4AF37] hover:text-white transition-all"><ChevronLeft size={20} /></button>
          <button onClick={() => scroll('right')} className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 bg-white shadow-lg rounded-full hidden lg:flex items-center justify-center text-[#1B3B6F] hover:bg-[#D4AF37] hover:text-white transition-all"><ChevronRight size={20} /></button>
          <div ref={scrollContainerRef} className="flex overflow-x-auto gap-4 md:gap-8 px-2 md:px-24 pb-6 md:pb-12 scrollbar-hide snap-x snap-mandatory no-scrollbar scroll-smooth">
            {caseStudies.map((item, idx) => (
              <div key={item.id} onClick={handleWipClick} className="flex-shrink-0 w-[240px] md:w-[480px] snap-center cursor-pointer">
                <div className="aspect-video overflow-hidden rounded-[20px] md:rounded-[40px] mb-3 md:mb-6 shadow-xl relative">
                  <img src={item.thumbnail} alt={item.campaignName} className="w-full h-full object-cover" />
                </div>
                <div className="text-left px-2">
                  <span className="text-[#D4AF37] font-black text-[9px] md:text-xs tracking-widest uppercase mb-0.5 md:mb-1 block">{item.brandLogo}</span>
                  <h3 className="text-base md:text-2xl font-bold text-[#1B3B6F] mb-3 md:mb-4 leading-snug">{item.campaignName}</h3>
                  <div className="flex flex-wrap gap-1.5 md:gap-2">
                    {item.results.map(res => <span key={res} className="bg-gray-50 text-[#1B3B6F] px-2.5 md:px-4 py-1 md:py-2 rounded-full text-[9px] md:text-[12px] font-bold border border-gray-100">{res}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex lg:hidden justify-center items-center space-x-2 text-gray-300 text-[9px] font-bold uppercase tracking-widest mt-2">
             <ChevronLeft size={10} /> Swipe <ChevronRight size={10} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="apply" className="py-16 md:py-32 bg-[#1B3B6F] relative overflow-hidden text-center px-6">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/20 blur-[100px] -translate-y-1/2 translate-x-1/2 rounded-full" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-5xl font-bold text-white mb-6 leading-tight">당신의 잠재력을 <br className="md:hidden" /> 글로벌 시장으로 확장하세요</h2>
          <p className="text-xs md:text-xl text-white/70 mb-10 md:mb-12">Adstream | 1886은 크리에이터의 진정한 가치를 발견하고 함께 성장합니다.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-6">
             <motion.button whileTap={{ scale: 0.95 }} onClick={handleWipClick} className="w-full sm:w-auto bg-[#D4AF37] text-white px-10 md:px-14 py-4 md:py-6 rounded-full text-base md:text-xl font-bold shadow-2xl">지금 바로 지원하기</motion.button>
             <motion.button whileTap={{ scale: 0.95 }} onClick={handleWipClick} className="w-full sm:w-auto border-2 border-white/30 text-white px-10 md:px-14 py-4 md:py-6 rounded-full text-base md:text-xl font-bold">브랜드 문의</motion.button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2D3748] text-white pt-12 md:pt-24 pb-8 md:pb-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 mb-10 md:mb-16">
          <div className="text-left">
            <button onClick={scrollToTop} className="text-lg md:text-2xl font-heading mb-4 md:mb-6 block font-bold">Adstream | <span className="text-[#D4AF37]">1886</span></button>
            <p className="text-gray-400 text-[10px] md:text-sm leading-relaxed mb-6">근대 광고의 유산을 잇고 디지털 미래를 개척하는 글로벌 MCN 그룹입니다.</p>
            <div className="flex space-x-5">
              <Instagram onClick={handleWipClick} className="w-5 h-5 cursor-pointer hover:text-[#D4AF37]" />
              <Youtube onClick={handleWipClick} className="w-5 h-5 cursor-pointer hover:text-[#D4AF37]" />
              <Twitter onClick={handleWipClick} className="w-5 h-5 cursor-pointer hover:text-[#D4AF37]" />
            </div>
          </div>
          <div className="text-left hidden sm:block">
            <h4 className="font-bold mb-6 uppercase tracking-widest text-[10px] text-gray-500">Company</h4>
            <ul className="space-y-3 text-[11px] md:text-sm text-gray-400">
              <li><button onClick={handleWipClick}>회사 소개</button></li>
              <li><button onClick={(e) => scrollToSection(e, 'services')}>서비스</button></li>
              <li><button onClick={(e) => scrollToSection(e, 'creators')}>크리에이터</button></li>
            </ul>
          </div>
          <div className="text-left">
            <h4 className="font-bold mb-5 md:mb-6 uppercase tracking-widest text-[9px] md:text-[10px] text-gray-500">Contact</h4>
            <ul className="space-y-3 text-[11px] md:text-sm text-gray-400">
              <li>contact@adstream1886.com</li>
              <li>+82 02-1234-5678</li>
              <li>서울 특별시 강남구 테헤란로 1886</li>
            </ul>
          </div>
          <div className="text-left">
            <h4 className="font-bold mb-5 md:mb-6 uppercase tracking-widest text-[9px] md:text-[10px] text-gray-500">Newsletter</h4>
            <form onSubmit={(e) => { e.preventDefault(); handleWipClick(); }} className="flex bg-white/5 rounded-full p-0.5 border border-white/10">
              <input type="email" placeholder="Email" className="bg-transparent border-none focus:ring-0 px-3 py-1.5 flex-grow text-[11px] md:text-sm" />
              <button className="bg-[#D4AF37] text-white px-4 md:px-5 py-1.5 rounded-full text-[10px] md:text-xs font-bold">구독</button>
            </form>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[9px] md:text-[10px] text-gray-500 gap-4">
          <div>&copy; 2025 Adstream | 1886. All rights reserved.</div>
          <div className="flex space-x-6 md:space-x-8">
            <button onClick={handleWipClick}>이용약관</button>
            <button onClick={handleWipClick}>개인정보처리방침</button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
