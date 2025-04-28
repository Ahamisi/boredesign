'use client';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';

export default function MissionVisionValues() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [inView, controls]);

  return (
    <section className="max-w-7xl mx-auto px-4 py-16" ref={ref}>
      <h2 className="text-4xl font-bold mb-1 text-center md:text-left text-black">Our Mission, Vision & Core Values</h2>
      <p className="mb-10 text-gray-400 text-center md:text-left">Nigeria&apos;s top 10 real estate brands by 2035</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left: Vision and Mission */}
        <div className="flex flex-col gap-6 h-full justify-center">
          <div className="bg-purple-100 rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-4 text-gray-800">Our Vision</h3>
            <p className="text-gray-700">
              To be among Nigeria&apos;s top 10 real estate brands by 2035, building an asset portfolio worth over ₦1 trillion, bridging the housing gap with 1 million new homes, and generating over ₦500 billion in wealth for young professionals and middle-aged investors through innovative, sustainable, and life-changing real estate solutions.
            </p>
          </div>
          <div className="bg-green-100 rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-4 text-gray-800">Our Mission</h3>
            <p className="text-gray-700">
              To transform lives through innovative real estate solutions by developing sustainable housing, creating investment opportunities, and delivering exceptional value through strategic partnerships, operational excellence, and customer-focused services.
            </p>
          </div>
        </div>
        
        {/* Right: Core Values - Fixed height container to prevent spilling */}
        <div className="bg-blue-50 rounded-2xl p-8">
          <h3 className="text-xl font-bold mb-6 text-black">Core Values</h3>
          <div className="relative h-[460px] md:h-[460px]"> {/* Fixed height container */}
            {/* Values for desktop and tablet */}
            <div className="hidden md:block">
              {/* Excellence */}
              <motion.div
                className="absolute"
                style={{ top: '0', left: '0', width: '240px', height: '64px' }}
                initial={{ opacity: 0, y: 20 }}
                animate={controls}
                variants={{ visible: { opacity: 1, y: 0, transition: { delay: 0.1 } } }}
              >
                <div className="flex items-center h-full bg-[#0097CE] text-white px-4 rounded-[16px] font-medium shadow">
                  <span className="bg-white text-[#0097CE] font-bold w-10 h-10 flex items-center justify-center rounded-full mr-3">E</span>
                  Excellence
                </div>
              </motion.div>

              {/* Sustainability */}
              <motion.div
                className="absolute"
                style={{ top: '90px', left: '120px', width: '240px', height: '64px' }}
                initial={{ opacity: 0, y: 20 }}
                animate={controls}
                variants={{ visible: { opacity: 1, y: 0, transition: { delay: 0.2 } } }}
              >
                <div className="flex items-center h-full bg-[#0097CE] text-white px-4 rounded-[16px] font-medium shadow">
                  <span className="bg-white text-[#0097CE] font-bold w-10 h-10 flex items-center justify-center rounded-full mr-3">S</span>
                  Sustainability
                </div>
              </motion.div>

              {/* Accountability and Transparency row */}
              <motion.div
                className="absolute"
                style={{ top: '180px', left: '0', width: '240px', height: '64px' }}
                initial={{ opacity: 0, y: 20 }}
                animate={controls}
                variants={{ visible: { opacity: 1, y: 0, transition: { delay: 0.3 } } }}
              >
                <div className="flex items-center h-full bg-[#0097CE] text-white px-4 rounded-[16px] font-medium shadow">
                  <span className="bg-white text-[#0097CE] font-bold w-10 h-10 flex items-center justify-center rounded-full mr-3">A</span>
                  Accountability
                </div>
              </motion.div>

              <motion.div
                className="absolute"
                style={{ top: '180px', left: 'calc(100% - 220px)', width: '240px', height: '64px' }}
                initial={{ opacity: 0, y: 20 }}
                animate={controls}
                variants={{ visible: { opacity: 1, y: 0, transition: { delay: 0.4 } } }}
              >
                <div className="flex items-center h-full bg-[#0097CE] text-white px-4 rounded-[16px] font-medium shadow">
                  <span className="bg-white text-[#0097CE] font-bold w-10 h-10 flex items-center justify-center rounded-full mr-3">E</span>
                  Transparency
                </div>
              </motion.div>

              {/* Team work */}
              <motion.div
                className="absolute"
                style={{ top: '270px', left: '160px', width: '240px', height: '64px' }}
                initial={{ opacity: 0, y: 20 }}
                animate={controls}
                variants={{ visible: { opacity: 1, y: 0, transition: { delay: 0.5 } } }}
              >
                <div className="flex items-center h-full bg-[#0097CE] text-white px-4 rounded-[16px] font-medium shadow">
                  <span className="bg-white text-[#0097CE] font-bold w-10 h-10 flex items-center justify-center rounded-full mr-3">A</span>
                  Team work
                </div>
              </motion.div>

              {/* Excellence in Service */}
              <motion.div
                className="absolute"
                style={{ top: '360px', left: '40px', width: '240px', height: '64px' }}
                initial={{ opacity: 0, y: 20 }}
                animate={controls}
                variants={{ visible: { opacity: 1, y: 0, transition: { delay: 0.6 } } }}
              >
                <div className="flex items-center h-full bg-[#0097CE] text-white px-4 rounded-[16px] font-medium shadow">
                  <span className="bg-white text-[#0097CE] font-bold w-10 h-10 flex items-center justify-center rounded-full mr-3">E</span>
                  Excellence in Service
                </div>
              </motion.div>
            </div>

            {/* Values for mobile - Stacked layout */}
            <div className="md:hidden flex flex-col gap-4">
              {[
                { initial: 'E', label: 'Excellence' },
                { initial: 'S', label: 'Sustainability' },
                { initial: 'A', label: 'Accountability' },
                { initial: 'E', label: 'Transparency' },
                { initial: 'A', label: 'Team work' },
                { initial: 'E', label: 'Excellence in Service' },
              ].map((value, i) => (
                <motion.div
                  key={value.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={controls}
                  variants={{ visible: { opacity: 1, y: 0, transition: { delay: i * 0.1 } } }}
                >
                  <div className="flex items-center h-[44px] bg-[#0097CE] text-white px-4 rounded-[16px] font-medium shadow">
                    <span className="bg-white text-[#0097CE] font-bold w-10 h-10 flex items-center justify-center rounded-full mr-3">
                      {value.initial}
                    </span>
                    {value.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}