import React from 'react';
import { 
  ChevronLeft, ChevronRight, Compass, Waves, 
  Castle, Sun, Sparkles, LayoutGrid, Columns, ArrowRight 
} from 'lucide-react';

export interface StageInfo {
  id: number;
  actLabel: string;
  title: string;
  subtitle: string;
  period: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  border: string;
  badge: string;
}

export const STAGES: StageInfo[] = [
  {
    id: 1,
    actLabel: 'ACT 01',
    title: '創世記と海洋物理',
    subtitle: '超巨大大陸Daichi・海面上昇200m・お風呂の排水実演',
    period: '世界の物理構造',
    icon: Waves,
    color: 'text-cyan-400',
    border: 'border-cyan-500/50',
    badge: '海面上昇と排水口'
  },
  {
    id: 2,
    actLabel: 'ACT 02',
    title: '支配機構と第1話冷戦',
    subtitle: 'イム様の巨大化コンプレックス・緋熊との密約・回収網',
    period: '世界政府の裏側',
    icon: Castle,
    color: 'text-rose-400',
    border: 'border-rose-500/50',
    badge: '緋熊と左腕の真実'
  },
  {
    id: 3,
    actLabel: 'ACT 03',
    title: '神話の起源と解放の系譜',
    subtitle: '陸の4神・正統Daichiと実験体Double・ニカの笑い',
    period: 'Dの意志と太陽神',
    icon: Sun,
    color: 'text-amber-400',
    border: 'border-amber-500/50',
    badge: '二つのDと神性奪還'
  },
  {
    id: 4,
    actLabel: 'ACT 04',
    title: '完全解体録と大宴会',
    subtitle: '火と緋の神話・主流考察比較・ラフテルの栓抜き・大宴',
    period: 'グランドフィナーレ',
    icon: Sparkles,
    color: 'text-amber-300',
    border: 'border-amber-400/50',
    badge: 'お風呂の栓と真のONE PIECE'
  }
];

interface HorizontalStageNavigatorProps {
  currentStage: number;
  onSelectStage: (stageId: number) => void;
  viewMode: 'horizontal' | 'vertical';
  onToggleViewMode: () => void;
}

export const HorizontalStageNavigator: React.FC<HorizontalStageNavigatorProps> = ({
  currentStage,
  onSelectStage,
  viewMode,
  onToggleViewMode
}) => {
  const activeStageInfo = STAGES.find(s => s.id === currentStage) || STAGES[0];

  const handlePrev = () => {
    if (currentStage > 1) {
      onSelectStage(currentStage - 1);
    }
  };

  const handleNext = () => {
    if (currentStage < STAGES.length) {
      onSelectStage(currentStage + 1);
    }
  };

  return (
    <div className="sticky top-16 z-40 bg-[#0b0f19]/95 backdrop-blur-md border-y border-stone-800 shadow-xl px-4 sm:px-6 lg:px-8 py-3">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Mode Switcher & Act Pills */}
        <div className="flex items-center gap-3 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
          {/* Mode Switch Toggle Button */}
          <button
            onClick={onToggleViewMode}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium border border-amber-500/40 bg-amber-950/20 text-amber-300 hover:bg-amber-950/40 transition-all shrink-0 cursor-pointer"
            title="横方向ステージ展開と縦方向ロングスクロールを切り替え"
          >
            {viewMode === 'horizontal' ? (
              <>
                <Columns className="w-3.5 h-3.5 text-amber-400" />
                <span>横展開モード [ON]</span>
              </>
            ) : (
              <>
                <LayoutGrid className="w-3.5 h-3.5 text-stone-400" />
                <span>縦スクロール [全展開]</span>
              </>
            )}
          </button>

          <div className="h-4 w-[1px] bg-stone-800 shrink-0 hidden sm:block" />

          {/* 4 Act Horizontal Tabs */}
          <div className="flex items-center gap-2">
            {STAGES.map((s) => {
              const isCurrent = currentStage === s.id;
              const Icon = s.icon;
              return (
                <button
                  key={s.id}
                  onClick={() => onSelectStage(s.id)}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-medium transition-all shrink-0 cursor-pointer ${
                    isCurrent
                      ? `bg-stone-900 ${s.border} ${s.color} shadow-md ring-1 ring-amber-400/30`
                      : 'bg-stone-950/60 border-stone-800 text-stone-400 hover:text-stone-200 hover:border-stone-700'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span className="font-mono text-[10px] uppercase font-bold">{s.actLabel}</span>
                  <span className="hidden sm:inline font-serif-jp">{s.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Next / Prev Horizontal Navigation Arrows */}
        {viewMode === 'horizontal' && (
          <div className="flex items-center justify-between md:justify-end gap-3 shrink-0">
            <div className="flex items-center gap-1.5">
              <button
                onClick={handlePrev}
                disabled={currentStage <= 1}
                className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-stone-800 bg-stone-950 text-xs text-stone-300 hover:text-stone-100 hover:border-stone-700 disabled:opacity-30 disabled:pointer-events-none transition-all cursor-pointer font-sans-jp"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>前へ</span>
              </button>

              <span className="text-xs font-mono text-stone-500 px-2">
                <span className="text-amber-400 font-bold">{currentStage}</span> / {STAGES.length}
              </span>

              <button
                onClick={handleNext}
                disabled={currentStage >= STAGES.length}
                className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-amber-500/40 bg-amber-950/30 text-xs text-amber-300 hover:bg-amber-950/50 hover:border-amber-400 disabled:opacity-30 disabled:pointer-events-none transition-all cursor-pointer font-sans-jp font-semibold"
              >
                <span>次へ</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Stage Active Bar & Quick Synopsis (Horizontal Mode) */}
      {viewMode === 'horizontal' && (
        <div className="max-w-7xl mx-auto mt-2.5 pt-2 border-t border-stone-850 flex items-center justify-between text-[11px] text-stone-400 font-sans-jp">
          <div className="flex items-center gap-2">
            <span className={`font-mono font-bold ${activeStageInfo.color}`}>
              【{activeStageInfo.actLabel}：{activeStageInfo.title}】
            </span>
            <span className="hidden sm:inline text-stone-300">
              {activeStageInfo.subtitle}
            </span>
          </div>
          <span className="font-mono text-stone-500 text-[10px]">
            {activeStageInfo.badge}
          </span>
        </div>
      )}
    </div>
  );
};
