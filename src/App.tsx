/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { HorizontalStageNavigator, STAGES } from './components/HorizontalStageNavigator';
import { WorldDrainVisualizer } from './components/WorldDrainVisualizer';
import { MiniatureIslandsWorldRefrain } from './components/MiniatureIslandsWorldRefrain';
import { AncientWeaponsMatrix } from './components/AncientWeaponsMatrix';
import { LunarCivilizationTechMatrix } from './components/LunarCivilizationTechMatrix';
import { BloodlineLokiViewer } from './components/BloodlineLokiViewer';
import { FigarlandHierarchy } from './components/FigarlandHierarchy';
import { TwoDComparator } from './components/TwoDComparator';
import { BlackbeardBiologicalWeaponMatrix } from './components/BlackbeardBiologicalWeaponMatrix';
import { PirateKingPropagandaMatrix } from './components/PirateKingPropagandaMatrix';
import { RedPoneglyphNavigationMatrix } from './components/RedPoneglyphNavigationMatrix';
import { FourGodsOriginOfDevilFruits } from './components/FourGodsOriginOfDevilFruits';
import { DevilFruitSystem } from './components/DevilFruitSystem';
import { ImuEngineAndNikaCounter } from './components/ImuEngineAndNikaCounter';
import { GearEvolutionMatrix } from './components/GearEvolutionMatrix';
import { PangeaCastleAndHigumaTheory } from './components/PangeaCastleAndHigumaTheory';
import { ChapterOneColdWarForensics } from './components/ChapterOneColdWarForensics';
import { BathPlugVisualForensics } from './components/BathPlugVisualForensics';
import { GigantIronyAndSeraphimForensics } from './components/GigantIronyAndSeraphimForensics';
import { FireAndCrimsonMasterPlot } from './components/FireAndCrimsonMasterPlot';
import { TheoryComparisonMatrix } from './components/TheoryComparisonMatrix';
import { DualLiberationAndStrawHatDreams } from './components/DualLiberationAndStrawHatDreams';
import { GrandBanquetFinale } from './components/GrandBanquetFinale';
import { ChapterReader } from './components/ChapterReader';
import { Footer } from './components/Footer';
import { ReaderNotesModal } from './components/ReaderNotesModal';
import { ArrowLeft, ArrowRight, Sparkles, Compass } from 'lucide-react';

export default function App() {
  const [isNotesOpen, setIsNotesOpen] = useState(false);
  const [bookmarkedIds, setBookmarkedIds] = useState<Set<string>>(new Set());
  const [currentStage, setCurrentStage] = useState<number>(1);
  const [viewMode, setViewMode] = useState<'horizontal' | 'vertical'>('horizontal');

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (!hash) return;

      const stage1Hashes = ['drain-simulation', 'miniature-world', 'ancient-weapons', 'bath-plug-forensics'];
      const stage2Hashes = ['bloodline-loki', 'figarland-hierarchy', 'pangea-and-higuma', 'ch1-cold-war', 'gigant-irony', 'devil-fruit-system'];
      const stage3Hashes = ['four-gods', 'two-d-truths', 'pirate-king-truth', 'road-poneglyph', 'imu-and-nika', 'gear-evolution'];
      const stage4Hashes = ['fire-and-crimson', 'theory-comparison', 'grand-banquet', 'chapter-reader'];

      if (stage1Hashes.includes(hash)) setCurrentStage(1);
      else if (stage2Hashes.includes(hash)) setCurrentStage(2);
      else if (stage3Hashes.includes(hash)) setCurrentStage(3);
      else if (stage4Hashes.includes(hash)) setCurrentStage(4);

      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    };

    window.addEventListener('hashchange', handleHash);
    if (window.location.hash) {
      handleHash();
    }
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleToggleBookmark = (id: string) => {
    setBookmarkedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      localStorage.setItem('onepiece_theory_bookmarks', JSON.stringify(Array.from(next)));
      return next;
    });
  };

  const handleScrollToExplore = () => {
    if (viewMode === 'horizontal') {
      setCurrentStage(1);
      const el = document.getElementById('horizontal-stage-root');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      const el = document.getElementById('drain-simulation');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const currentStageMeta = STAGES.find(s => s.id === currentStage) || STAGES[0];

  const handleStageChange = (newStage: number) => {
    setCurrentStage(newStage);
    const el = document.getElementById('horizontal-stage-root');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0f19] text-[#e2e8f0] flex flex-col font-sans-jp selection:bg-amber-500/30 selection:text-amber-200">
      {/* Top Bar with Liberation Drums Toggle & Notes Trigger */}
      <Navbar
        onOpenNotes={() => setIsNotesOpen(true)}
        savedNotesCount={bookmarkedIds.size}
      />

      <main className="flex-1">
        {/* Exhibition Hero */}
        <HeroSection onScrollToExplore={handleScrollToExplore} />

        {/* Horizontal Panoramic Stage Navigator (Sticky) */}
        <div id="horizontal-stage-root">
          <HorizontalStageNavigator
            currentStage={currentStage}
            onSelectStage={handleStageChange}
            viewMode={viewMode}
            onToggleViewMode={() => setViewMode(prev => prev === 'horizontal' ? 'vertical' : 'horizontal')}
          />
        </div>

        {/* VIEW MODE 1: HORIZONTAL STAGE FLOW (横展開モード) */}
        {viewMode === 'horizontal' ? (
          <div className="transition-all duration-300">
            {/* STAGE 1: 創世記と海洋物理 */}
            {currentStage === 1 && (
              <div className="animate-fadeIn">
                <WorldDrainVisualizer />
                <MiniatureIslandsWorldRefrain />
                <AncientWeaponsMatrix />
                <LunarCivilizationTechMatrix />
                <BathPlugVisualForensics />
              </div>
            )}

            {/* STAGE 2: 支配機構と第1話冷戦 */}
            {currentStage === 2 && (
              <div className="animate-fadeIn">
                <BloodlineLokiViewer />
                <FigarlandHierarchy />
                <PangeaCastleAndHigumaTheory />
                <ChapterOneColdWarForensics />
                <GigantIronyAndSeraphimForensics />
                <DevilFruitSystem />
              </div>
            )}

            {/* STAGE 3: 神話の起源と解放の系譜 */}
            {currentStage === 3 && (
              <div className="animate-fadeIn">
                <FourGodsOriginOfDevilFruits />
                <TwoDComparator />
                <BlackbeardBiologicalWeaponMatrix />
                <PirateKingPropagandaMatrix />
                <RedPoneglyphNavigationMatrix />
                <ImuEngineAndNikaCounter />
                <GearEvolutionMatrix />
              </div>
            )}

            {/* STAGE 4: 完全解体録と大宴会 */}
            {currentStage === 4 && (
              <div className="animate-fadeIn">
                <FireAndCrimsonMasterPlot />
                <TheoryComparisonMatrix />
                <DualLiberationAndStrawHatDreams />
                <GrandBanquetFinale />
                <ChapterReader
                  bookmarkedIds={bookmarkedIds}
                  onToggleBookmark={handleToggleBookmark}
                />
              </div>
            )}

            {/* Stage Bottom Progress Bar & Jump Cards */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-stone-800">
              <div className="p-6 sm:p-8 rounded-3xl bg-stone-900/80 border border-stone-800 flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-xl">
                <div>
                  <span className="text-xs font-mono text-amber-400 uppercase font-semibold">
                    STAGE JOURNEY · {currentStageMeta.actLabel} 完了
                  </span>
                  <h3 className="text-lg sm:text-2xl font-bold font-serif-jp text-stone-100 mt-1">
                    {currentStageMeta.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-400 mt-1">
                    {currentStageMeta.subtitle}
                  </p>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  {currentStage > 1 && (
                    <button
                      onClick={() => handleStageChange(currentStage - 1)}
                      className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-stone-750 bg-stone-950 text-xs sm:text-sm text-stone-300 hover:text-stone-100 hover:border-stone-600 transition-all cursor-pointer font-sans-jp"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>前の幕へ</span>
                    </button>
                  )}

                  {currentStage < STAGES.length ? (
                    <button
                      onClick={() => handleStageChange(currentStage + 1)}
                      className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-amber-500/50 bg-amber-950/40 text-xs sm:text-sm font-semibold text-amber-300 hover:bg-amber-950/70 hover:border-amber-400 transition-all cursor-pointer font-sans-jp shadow-lg"
                    >
                      <span>次の幕（ACT 0{currentStage + 1}）へ進む</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      onClick={() => handleStageChange(1)}
                      className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-amber-500/50 bg-amber-950/40 text-xs sm:text-sm font-semibold text-amber-300 hover:bg-amber-950/70 transition-all cursor-pointer font-sans-jp"
                    >
                      <Sparkles className="w-4 h-4" />
                      <span>最初から旅を振り返る</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* VIEW MODE 2: VERTICAL FULL SCROLL (縦方向全展開モード) */
          <div>
            {/* Chapter 01: Physical Structure & Drainage Simulation */}
            <WorldDrainVisualizer />
            <MiniatureIslandsWorldRefrain />
            <AncientWeaponsMatrix />
            <LunarCivilizationTechMatrix />
            <BathPlugVisualForensics />

            {/* Chapter 03 & 04 & 06: Bloodlines, Loki, Figarland, Higuma */}
            <BloodlineLokiViewer />
            <FigarlandHierarchy />
            <PangeaCastleAndHigumaTheory />
            <ChapterOneColdWarForensics />
            <GigantIronyAndSeraphimForensics />
            <DevilFruitSystem />

            {/* Chapter 05 & 07: 4 Gods, Two D's, Imu Engine */}
            <FourGodsOriginOfDevilFruits />
            <TwoDComparator />
            <BlackbeardBiologicalWeaponMatrix />
            <PirateKingPropagandaMatrix />
            <RedPoneglyphNavigationMatrix />
            <ImuEngineAndNikaCounter />
            <GearEvolutionMatrix />

            {/* Masterplot & Finale */}
            <FireAndCrimsonMasterPlot />
            <TheoryComparisonMatrix />
            <DualLiberationAndStrawHatDreams />
            <GrandBanquetFinale />
            <ChapterReader
              bookmarkedIds={bookmarkedIds}
              onToggleBookmark={handleToggleBookmark}
            />
          </div>
        )}
      </main>

      {/* Institutional Editorial Footer */}
      <Footer />

      {/* Reader's Notes & Bookmarks Drawer */}
      <ReaderNotesModal
        isOpen={isNotesOpen}
        onClose={() => setIsNotesOpen(false)}
        bookmarkedIds={bookmarkedIds}
        onToggleBookmark={handleToggleBookmark}
      />
    </div>
  );
}
