/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { WorldDrainVisualizer } from './components/WorldDrainVisualizer';
import { MiniatureIslandsWorldRefrain } from './components/MiniatureIslandsWorldRefrain';
import { AncientWeaponsMatrix } from './components/AncientWeaponsMatrix';
import { LunarCivilizationTechMatrix } from './components/LunarCivilizationTechMatrix';
import { BloodlineLokiViewer } from './components/BloodlineLokiViewer';
import { FigarlandHierarchy } from './components/FigarlandHierarchy';
import { TwoDComparator } from './components/TwoDComparator';
import { PirateKingPropagandaMatrix } from './components/PirateKingPropagandaMatrix';
import { RedPoneglyphNavigationMatrix } from './components/RedPoneglyphNavigationMatrix';
import { FourGodsOriginOfDevilFruits } from './components/FourGodsOriginOfDevilFruits';
import { DevilFruitSystem } from './components/DevilFruitSystem';
import { ImuEngineAndNikaCounter } from './components/ImuEngineAndNikaCounter';
import { GearEvolutionMatrix } from './components/GearEvolutionMatrix';
import { PangeaCastleAndHigumaTheory } from './components/PangeaCastleAndHigumaTheory';
import { GrandBanquetFinale } from './components/GrandBanquetFinale';
import { ChapterReader } from './components/ChapterReader';
import { Footer } from './components/Footer';
import { ReaderNotesModal } from './components/ReaderNotesModal';

export default function App() {
  const [isNotesOpen, setIsNotesOpen] = useState(false);
  const [bookmarkedIds, setBookmarkedIds] = useState<Set<string>>(new Set());

  useEffect(() => {
    const saved = localStorage.getItem('onepiece_theory_bookmarks');
    if (saved) {
      try {
        setBookmarkedIds(new Set(JSON.parse(saved)));
      } catch {
        // ignore
      }
    }
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
    const el = document.getElementById('chapter-reader');
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

        {/* Chapter 01: Physical Structure & Drainage Simulation */}
        <WorldDrainVisualizer />

        {/* The Fractal World Pattern: Miniature Islands & Breaking the Cages */}
        <MiniatureIslandsWorldRefrain />

        {/* Chapter 02: Ancient Weapons - Life vs Death */}
        <AncientWeaponsMatrix />

        {/* The Lunar Legacy & Weaponization of Science */}
        <LunarCivilizationTechMatrix />

        {/* Chapter 03: Giants as Half-God Half-Human & Prince Loki */}
        <BloodlineLokiViewer />

        {/* Chapter 04: Figarland & Puppet Decoy Structure */}
        <FigarlandHierarchy />

        {/* Chapter 05: The Two D's - Daichi vs Double */}
        <TwoDComparator />

        {/* Semantic Warfare: The Truth of the 'Pirate King' Label */}
        <PirateKingPropagandaMatrix />

        {/* The Crimson Emergency Cipher: Road Poneglyphs */}
        <RedPoneglyphNavigationMatrix />

        {/* The Mythological Origin: 4 Land Gods vs Imu */}
        <FourGodsOriginOfDevilFruits />

        {/* Chapter 06: Government Devil Fruit Recovery System */}
        <DevilFruitSystem />

        {/* Chapter 07 & 08: Imu's Negative Engine vs Nika's Laughter Override */}
        <ImuEngineAndNikaCounter />

        {/* Chapter 08 Deep Dive: Gear Evolution History - Wrath to Laughter */}
        <GearEvolutionMatrix />

        {/* The Central Valve & Restoration: Pangea, Laugh Tale Key, Higuma */}
        <PangeaCastleAndHigumaTheory />

        {/* Chapter 09: Climax & The Grand Banquet */}
        <GrandBanquetFinale />

        {/* Comprehensive Editorial Chapter Reader */}
        <ChapterReader
          bookmarkedIds={bookmarkedIds}
          onToggleBookmark={handleToggleBookmark}
        />
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
