'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

interface PlanFeature {
  text: string;
}

interface PlanData {
  id: string;
  icon: string;
  iconColor: string;
  type: string;
  size: string;
  price: string;
  initialDeposit: string;
  paymentDuration: string;
  features: PlanFeature[];
}

interface PricingPlansProps {
  plans: PlanData[];
}

const PricingPlans: React.FC<PricingPlansProps> = ({ plans }) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  
  return (
    <section ref={sectionRef} className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          Pricing Plans
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div 
              key={plan.id}
              className="bg-gray-50 rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <div className="p-6">
                <div className="mb-4">
                  {plan.icon && (
                    <Image 
                      src={plan.icon} 
                      alt={plan.type} 
                      width={32} 
                      height={32} 
                      className={`${plan.iconColor}`}
                    />
                  )}
                  <h3 className={`text-xl font-medium ${plan.iconColor} mt-4`}>{plan.type}</h3>
                </div>
                <p className="text-gray-600 mb-5">Size: {plan.size}</p>
                
                <div className="mt-2">
                  <div className="text-gray-700 text-sm mb-1">Full Price</div>
                  <div className="text-4xl font-bold text-gray-900">{plan.price}</div>
                </div>
              </div>
              
              <div className="p-6 border-t border-gray-200">
                <h4 className="text-sm font-medium text-[#6D6D6D] uppercase tracking-wider mb-4">INSTALLMENT PLAN</h4>
                <div className="mb-3">
                  <div className="font-medium text-[#6D6D6D]">Initial Deposit: {plan.initialDeposit}</div>
                </div>
                <div className="mb-3">
                  <div className="font-medium text-[#6D6D6D]">Full Payment Duration: {plan.paymentDuration}</div>
                </div>
              </div>
              
              {plan.features && plan.features.length > 0 && (
                <div className="p-6 border-t border-gray-200">
                  <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">FEATURES</h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-500 flex items-center justify-center mr-2 mt-0.5">
                          <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-700">{feature.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans; 