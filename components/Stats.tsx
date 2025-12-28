
import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import { Users, TrendingUp, Target, Globe } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

const Counter = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const springValue = useSpring(0, { stiffness: 40, damping: 20 });
  const displayValue = useTransform(springValue, (latest) => Math.floor(latest).toLocaleString());

  useEffect(() => {
    if (isInView) {
      springValue.set(value);
    }
  }, [isInView, value, springValue]);

  return (
    <span ref={ref}>
      <motion.span>{displayValue}</motion.span>
      {suffix}
    </span>
  );
};

const Stats: React.FC<{ lang: Language }> = ({ lang }) => {
  const t = translations[lang].stats;
  
  const stats = [
    { icon: <Users className="w-5 h-5 md:w-8 md:h-8" />, label: t.partners, value: 500, suffix: '+' },
    { icon: <TrendingUp className="w-5 h-5 md:w-8 md:h-8" />, label: t.followers, value: 100, suffix: 'M+' },
    { icon: <Target className="w-5 h-5 md:w-8 md:h-8" />, label: t.campaigns, value: 1000, suffix: '+' },
    { icon: <Globe className="w-5 h-5 md:w-8 md:h-8" />, label: t.languages, value: 6, suffix: t.langSuffix },
  ];

  return (
    <section className="py-12 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="flex flex-col items-center p-5 md:p-8 bg-gray-50 rounded-2xl border border-transparent hover:border-[#D4AF37] transition-all duration-300 shadow-sm hover:shadow-xl"
            >
              <div className="mb-3 md:mb-4 text-[#D4AF37] p-2 md:p-3 bg-white rounded-full shadow-sm">
                {stat.icon}
              </div>
              <div className="text-xl md:text-4xl font-black text-[#1B3B6F] mb-1 md:mb-2 text-center">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-[10px] md:text-base text-gray-400 font-bold uppercase tracking-wider text-center">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
