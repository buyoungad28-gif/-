/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CompanyProfile } from './components/CompanyProfile';
import { ServicesSection } from './components/ServicesSection';
import { ProcessSection } from './components/ProcessSection';
import { PortfolioSection } from './components/PortfolioSection';
import { MaterialsStore } from './components/MaterialsStore';
import { EstimateCalculator } from './components/EstimateCalculator';
import { LocationSection } from './components/LocationSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { QuickActionBar } from './components/QuickActionBar';
import { InquiryModal } from './components/InquiryModal';

export default function App() {
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState<boolean>(false);
  const [modalInitialService, setModalInitialService] = useState<string>('옥상 우레탄 도막방수');

  const handleOpenEstimate = (serviceTitle?: string) => {
    if (serviceTitle) {
      setModalInitialService(serviceTitle);
    }
    setIsInquiryModalOpen(true);
  };

  const handleSelectServiceFromSection = (serviceTitle: string) => {
    // Scroll smoothly to calculator section and pre-fill or open modal
    const calcElement = document.getElementById('calculator');
    if (calcElement) {
      calcElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      handleOpenEstimate(serviceTitle);
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-blue-600 selection:text-white pb-14 sm:pb-0">
      {/* Top sticky header */}
      <Header onOpenEstimate={() => handleOpenEstimate()} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero onOpenEstimate={() => handleOpenEstimate()} />

        {/* 2. Company Introduction & Rep Moon Young-joo's Greeting */}
        <CompanyProfile />

        {/* 3. Core Business & Specialized Fields */}
        <ServicesSection onSelectService={handleSelectServiceFromSection} />

        {/* 4. Professional 5-Step Process & Before/After Comparison */}
        <ProcessSection />

        {/* 5. Real Construction Work Portfolio Gallery */}
        <PortfolioSection />

        {/* 6. Waterproof & Painting Materials Wholesale Store */}
        <MaterialsStore />

        {/* 7. Instant Estimate Calculator & Free On-Site Inspection Form */}
        <EstimateCalculator initialService={modalInitialService} />

        {/* 8. Map, Directions & Real Store Location (연제구 과정로 295-2) */}
        <LocationSection />

        {/* 9. Frequently Asked Questions */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Floating Action Bar (Call / SMS / Quote) */}
      <QuickActionBar onOpenEstimate={() => handleOpenEstimate()} />

      {/* Quick Consultation Inquiry Modal */}
      <InquiryModal
        isOpen={isInquiryModalOpen}
        onClose={() => setIsInquiryModalOpen(false)}
        defaultService={modalInitialService}
      />
    </div>
  );
}

