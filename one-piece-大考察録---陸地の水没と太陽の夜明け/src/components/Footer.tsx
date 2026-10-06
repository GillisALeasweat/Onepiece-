import React from 'react';
import { ArrowUp, BookOpen } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-stone-800 bg-[#080c16] text-stone-400 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 text-stone-200 font-serif-jp font-bold text-base mb-1">
            <span>ONE PIECE 大考察録</span>
            <span className="text-xs font-normal text-stone-500">· 陸地の水没と太陽の夜明け</span>
          </div>
          <p className="text-xs text-stone-400 max-w-xl">
            『ONE PIECE』（尾田栄一郎／集英社）の世界観、歴史、キャラクター構造を体系的に読み解く個人ファン考察アーカイブです。
          </p>
        </div>

        <div className="flex items-center gap-6 text-xs">
          <a href="#top" className="hover:text-amber-300 transition-colors">
            トップへ
          </a>
          <a href="#drain-simulation" className="hover:text-amber-300 transition-colors">
            排水シミュレーション
          </a>
          <a href="#chapter-reader" className="hover:text-amber-300 transition-colors">
            全9章を読む
          </a>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-stone-900 hover:bg-stone-800 text-stone-300 border border-stone-800 transition-colors cursor-pointer"
            title="ページ先頭へ戻る"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
