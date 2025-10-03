import * as React from 'react';
import { Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Header, Footer, FloatingContact, ScrollToTop, Loader, PageTransition } from '../components';

// Lazy load pages
const HomePage = lazy(() => import('../src/pages/index').then(module => ({ default: module.HomePage })));
const AboutPage = lazy(() => import('../src/pages/index').then(module => ({ default: module.AboutPage })));
const ServicesPage = lazy(() => import('../src/pages/index').then(module => ({ default: module.ServicesPage })));
const FleetPage = lazy(() => import('../src/pages/index').then(module => ({ default: module.FleetPage })));
const ContactPage = lazy(() => import('../src/pages/index').then(module => ({ default: module.ContactPage })));
const PrivacyPolicyPage = lazy(() => import('../src/pages/index').then(module => ({ default: module.PrivacyPolicyPage })));
const TermsPage = lazy(() => import('../src/pages/index').then(module => ({ default: module.TermsPage })));

const App: React.FC = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <ScrollToTop />
        <AnimatePresence mode="wait" initial={false}>
          <Suspense fallback={<Loader />}>
            <Routes location={location}>
              <Route path="/" element={
                <PageTransition>
                  <HomePage />
                </PageTransition>
              } />
              <Route path="/about" element={
                <PageTransition>
                  <AboutPage />
                </PageTransition>
              } />
              <Route path="/services" element={
                <PageTransition>
                  <ServicesPage />
                </PageTransition>
              } />
              <Route path="/fleet" element={
                <PageTransition>
                  <FleetPage />
                </PageTransition>
              } />
              <Route path="/contact" element={
                <PageTransition>
                  <ContactPage />
                </PageTransition>
              } />
              <Route path="/privacy" element={
                <PageTransition>
                  <PrivacyPolicyPage />
                </PageTransition>
              } />
              <Route path="/terms" element={
                <PageTransition>
                  <TermsPage />
                </PageTransition>
              } />
              <Route path="*" element={
                <PageTransition>
                  <div className="min-h-screen flex items-center justify-center">
                    <motion.h2 
                      className="text-2xl"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      404 - Page Not Found
                    </motion.h2>
                  </div>
                </PageTransition>
              } />
            </Routes>
          </Suspense>
        </AnimatePresence>
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default App;
