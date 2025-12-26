
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Globe, ArrowUpRight } from 'lucide-react';

const GlobalNetwork: React.FC = () => {
  const hubs = [
    {
      id: 'us',
      name: 'US',
      region: 'Americas Hub',
      city: 'New York, USA',
      image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&q=80&w=1200',
      description: '북미 시장 마케팅 및 글로벌 브랜드 파트너십 허브'
    },
    {
      id: 'kr',
      name: 'KR',
      region: 'East Asia Hub',
      city: 'Seoul, Korea',
      image: 'https://images.unsplash.com/photo-1504297050568-910d24c426d3?auto=format&fit=crop&q=80&w=1200',
      description: 'Adstream | 1886 글로벌 본사 및 기술/운영 총괄'
    },
    {
      id: 'cn',
      name: 'CN',
      region: 'Greater China',
      city: 'Shanghai, China',
      image: 'https://images.unsplash.com/photo-1506158669146-619067262a00?auto=format&fit=crop&q=80&w=1200',
      description: '중화권 MCN 네트워크 및 대규모 콘텐츠 배급 거점'
    },
    {
      id: 'sea',
      name: 'SEA',
      region: 'SEA Gateway',
      city: 'HCMC, Vietnam',
      image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&q=80&w=1200',
      description: '동남아시아 신흥 시장 성장 전략 및 로컬라이징 센터'
    }
  ];

  return (
    <section className="py-12 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-16 text-left">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2 text-[#D4AF37] mb-2 md:mb-4"
            >
              <Globe size={14} className="md:w-5 md:h-5" />
              <span className="text-[9px] md:text-sm font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase">Global Pipeline</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-2xl md:text-5xl font-bold text-[#1B3B6F] mb-3 md:mb-6 font-heading leading-tight"
            >
              네트워크 거점 <span className="font-serif-1886 text-[#D4AF37] italic">Detail</span>
            </motion.h2>
            <p className="text-gray-600 text-[13px] md:text-lg leading-relaxed">
              북미부터 아시아까지 연결된 글로벌 파이프라인. <br className="md:hidden" />
              현지 인프라를 통해 최적의 세계화 전략을 지원합니다.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
          {hubs.map((hub, idx) => (
            <motion.div
              key={hub.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="group relative h-[280px] md:h-[420px] rounded-[24px] md:rounded-[40px] overflow-hidden border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-700 bg-[#F1F5F9]"
            >
              <div className="absolute inset-0">
                <img 
                  src={hub.image} 
                  alt={`${hub.name} Regional View`} 
                  className="w-full h-full object-cover opacity-60 filter transition-all duration-1000 group-hover:scale-105 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/40 to-transparent transition-all duration-700 group-hover:opacity-10" />
              </div>

              <div className="relative h-full p-5 md:p-10 flex flex-col justify-between z-10 text-left">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center space-x-2.5 md:space-x-4 mb-2 md:mb-3">
                      <div 
                        className="w-8 h-8 md:w-16 md:h-16 rounded-lg md:rounded-[20px] flex items-center justify-center shadow-xl bg-[#1B3B6F] group-hover:bg-[#D4AF37] transition-all duration-500 transform group-hover:scale-105"
                      >
                        <MapPin size={16} className="md:w-8 md:h-8 text-white" />
                      </div>
                      <span className="text-xl md:text-4xl font-black text-[#1B3B6F] tracking-tighter group-hover:text-[#D4AF37] transition-colors duration-500">
                        {hub.name}
                      </span>
                    </div>
                    <p className="text-[9px] md:text-[13px] font-bold text-gray-500 uppercase tracking-[0.2em] md:tracking-[0.3em] mb-0.5 group-hover:text-[#1B3B6F] transition-colors">{hub.region}</p>
                    <p className="text-base md:text-2xl font-bold text-[#1B3B6F] group-hover:text-[#D4AF37] transition-colors">{hub.city}</p>
                  </div>
                  
                  <div className="w-8 h-8 md:w-14 md:h-14 rounded-full border border-[#1B3B6F]/10 flex items-center justify-center text-[#1B3B6F] bg-white/60 backdrop-blur-md group-hover:bg-[#1B3B6F] group-hover:text-white transition-all shadow-md">
                    <ArrowUpRight size={16} className="md:w-7 md:h-7" />
                  </div>
                </div>

                <div className="max-w-[100%] md:max-w-[95%] bg-white/85 backdrop-blur-xl p-3.5 md:p-6 rounded-xl md:rounded-[24px] border border-white/90 transition-all duration-500 group-hover:bg-white/95 group-hover:border-[#D4AF37]/50 group-hover:shadow-xl">
                  <p className="text-[#1B3B6F] leading-snug font-bold text-[11px] md:text-[17px]">
                    {hub.description}
                  </p>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 h-1.5 md:h-3.5 transition-all duration-700 w-0 group-hover:w-full bg-[#D4AF37]" />
            </motion.div>
          ))}
        </div>

        <div className="mt-8 md:mt-24 p-6 md:p-12 bg-[#1B3B6F] rounded-[24px] md:rounded-[48px] text-white flex flex-col md:flex-row items-center justify-around gap-6 md:gap-12 shadow-2xl relative overflow-hidden">
           <div className="absolute top-0 right-0 w-48 h-48 md:w-96 md:h-96 bg-[#D4AF37]/20 rounded-full blur-[80px] md:blur-[120px] -translate-y-1/2 translate-x-1/2" />
           
           <div className="text-center relative z-10 group w-full md:w-auto">
             <p className="text-white/50 text-[9px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.3em] mb-1.5 md:mb-4 font-bold">Total Partners</p>
             <p className="text-3xl md:text-6xl font-black text-[#D4AF37] transition-transform duration-500 group-hover:scale-105">500+</p>
           </div>
           <div className="hidden md:block w-px h-20 bg-white/15" />
           <div className="md:hidden w-12 h-px bg-white/10" />
           <div className="text-center relative z-10 group w-full md:w-auto">
             <p className="text-white/50 text-[9px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.3em] mb-1.5 md:mb-4 font-bold">Service Languages</p>
             <p className="text-3xl md:text-6xl font-black text-white transition-transform duration-500 group-hover:scale-105">6 Multi</p>
           </div>
           <div className="hidden md:block w-px h-20 bg-white/15" />
           <div className="md:hidden w-12 h-px bg-white/10" />
           <div className="text-center relative z-10 group w-full md:w-auto">
             <p className="text-white/50 text-[9px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.3em] mb-1.5 md:mb-4 font-bold">Global Presence</p>
             <p className="text-3xl md:text-6xl font-black text-white transition-transform duration-500 group-hover:scale-105">25 Global</p>
           </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalNetwork;
