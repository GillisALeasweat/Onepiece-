import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, BookOpen, BookmarkCheck } from 'lucide-react';
import { drumsAudio } from '../utils/audioDrums';

interface NavbarProps {
  onOpenNotes: () => void;
  savedNotesCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenNotes, savedNotesCount }) => {
  const [isDrumsPlaying, setIsDrumsPlaying] = useState(false);
  const [pulseActive, setPulseActive] = useState(false);

  useEffect(() => {
    const unsub = drumsAudio.subscribe((_step, hit) => {
      if (hit) {
        setPulseActive(true);
        setTimeout(() => setPulseActive(false), 120);
      }
    });
    return () => unsub();
  }, []);

  const handleToggleDrums = () => {
    const playing = drumsAudio.toggle();
    setIsDrumsPlaying(playing);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0b0f19]/90 backdrop-blur-md border-b border-stone-800/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark in display font */}
        <a 
          href="#top" 
          className="text-lg sm:text-xl font-bold tracking-tight text-amber-100 hover:text-amber-300 transition-colors font-display flex items-center gap-2"
        >
          <span>ONE PIECE 大考察録</span>
          <span className="hidden sm:inline-block text-xs font-normal text-amber-400/80 border-l border-stone-700 pl-2">
            陸地の水没と太陽の夜明け
          </span>
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden lg:flex items-center gap-3.5 text-xs sm:text-sm font-medium text-stone-300">
          <a href="#drain-simulation" className="hover:text-amber-300 transition-colors">世界の排水</a>
          <a href="#two-d-truths" className="hover:text-amber-300 transition-colors">二つのD</a>
          <a href="#four-gods" className="hover:text-amber-300 transition-colors">陸の4神</a>
          <a href="#imu-and-nika" className="hover:text-amber-300 transition-colors">負の機関</a>
          <a href="#fire-and-crimson" className="hover:text-amber-300 transition-colors text-rose-400 font-semibold">完全解体録</a>
          <a href="#theory-comparison" className="hover:text-amber-300 transition-colors text-cyan-400">主流比較</a>
          <a href="#grand-banquet" className="hover:text-amber-300 transition-colors text-amber-400">大宴</a>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={handleToggleDrums}
            className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all flex items-center gap-1.5 border ${
              isDrumsPlaying 
                ? 'bg-amber-500/20 text-amber-200 border-amber-500/60 shadow-sm shadow-amber-500/20' 
                : 'bg-stone-900/80 text-stone-300 border-stone-700/80 hover:bg-stone-800'
            }`}
            title="解放のドラム（心臓の鼓動）を再生/停止"
          >
            {isDrumsPlaying ? (
              <>
                <Volume2 className={`w-3.5 h-3.5 text-amber-400 transition-transform ${pulseActive ? 'scale-125' : 'scale-100'}`} />
                <span className="truncate">解放のドラム 響音中</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5 text-stone-400" />
                <span className="truncate">解放のドラム</span>
              </>
            )}
          </button>

          <button
            onClick={onOpenNotes}
            className="px-3 py-1.5 rounded-md text-xs font-medium text-stone-200 bg-stone-800/80 hover:bg-stone-700 border border-stone-700 transition-colors flex items-center gap-1.5"
            title="考察メモ＆引用カード"
          >
            {savedNotesCount > 0 ? (
              <BookmarkCheck className="w-3.5 h-3.5 text-amber-400" />
            ) : (
              <BookOpen className="w-3.5 h-3.5 text-stone-400" />
            )}
            <span className="truncate">考察録 ({savedNotesCount})</span>
          </button>
        </div>
      </div>
    </header>
  );
};
