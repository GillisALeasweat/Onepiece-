import React, { useState, useEffect } from 'react';
import { X, Bookmark, Trash2, Copy, Check, Plus, BookOpen, Share2 } from 'lucide-react';
import { THEORY_SECTIONS } from '../data/theoryData';

interface ReaderNotesModalProps {
  isOpen: boolean;
  onClose: () => void;
  bookmarkedIds: Set<string>;
  onToggleBookmark: (id: string) => void;
}

interface UserNote {
  id: string;
  timestamp: string;
  chapterTitle: string;
  content: string;
}

export const ReaderNotesModal: React.FC<ReaderNotesModalProps> = ({
  isOpen,
  onClose,
  bookmarkedIds,
  onToggleBookmark
}) => {
  const [notes, setNotes] = useState<UserNote[]>([]);
  const [newNoteText, setNewNoteText] = useState('');
  const [selectedChapter, setSelectedChapter] = useState(THEORY_SECTIONS[0].title);
  const [copiedSuccess, setCopiedSuccess] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('onepiece_theory_user_notes');
    if (saved) {
      try {
        setNotes(JSON.parse(saved));
      } catch {
        // ignore
      }
    }
  }, []);

  const saveNotes = (updated: UserNote[]) => {
    setNotes(updated);
    localStorage.setItem('onepiece_theory_user_notes', JSON.stringify(updated));
  };

  const handleAddNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newNoteText.trim()) return;

    const newNote: UserNote = {
      id: Date.now().toString(),
      timestamp: new Date().toLocaleDateString('ja-JP', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }),
      chapterTitle: selectedChapter,
      content: newNoteText.trim()
    };

    saveNotes([newNote, ...notes]);
    setNewNoteText('');
  };

  const handleDeleteNote = (id: string) => {
    saveNotes(notes.filter((n) => n.id !== id));
  };

  const handleCopyGrandSummary = () => {
    const text = `『ONE PIECE』大考察録\n・物理構造：800年前にイム様が水没させた陸地（Daichi）と、世界の巨大な栓（ONE PIECE）による大排水\n・古代兵器：生の営み（天・海）vs 死の人工兵器（プルトン）\n・巨人族：神と人間のハーフ／ロキは古代神の超濃厚な先祖返り\n・天竜人＆フィガーランド：肉の盾（デコイ）と傀儡監視役／シャンクスのDへの覚醒\n・二つのD：正統なDaichi（笑う神の天敵）vs 実験体Double（死を恐れる黒ひげ）\n・悪魔の実：政府開発のヤミヤミ回収システム＆ケロベロス多重格納\n・イム様：負の感情を糧にする永久機関\n・ニカ：怒りを笑いとおふざけに置換し、悪魔のエネルギーを断つ絶対カウンター\n・ラスト：復元されたひとつの大地で全人類と世界最大の宴を開く！`;
    navigator.clipboard.writeText(text);
    setCopiedSuccess(true);
    setTimeout(() => setCopiedSuccess(false), 2000);
  };

  if (!isOpen) return null;

  const bookmarkedSections = THEORY_SECTIONS.filter((s) => bookmarkedIds.has(s.id));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="w-full max-w-2xl bg-[#0e1320] border border-stone-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-stone-800 flex items-center justify-between bg-stone-900/60">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-amber-400" />
            <h3 className="text-base sm:text-lg font-bold font-serif-jp text-stone-100">
              読者考察録＆マイノート
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyGrandSummary}
              className="px-2.5 py-1 rounded text-xs bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 transition-colors flex items-center gap-1.5 cursor-pointer"
              title="考察の全要約をコピー"
            >
              {copiedSuccess ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
              <span>{copiedSuccess ? 'コピー済' : '全体要約共有'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-1 rounded-md text-stone-400 hover:text-stone-200 hover:bg-stone-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6">
          {/* Bookmarks Section */}
          <div>
            <div className="text-xs uppercase font-mono text-stone-400 font-semibold mb-2 flex items-center gap-1.5">
              <Bookmark className="w-3.5 h-3.5 text-amber-400" />
              <span>ブックマーク中の章 ({bookmarkedSections.length})</span>
            </div>

            {bookmarkedSections.length === 0 ? (
              <p className="text-xs text-stone-500 italic p-3 bg-stone-950 rounded-lg border border-stone-900">
                各章の「栞を挟む」ボタンを押すと、ここに保存されます。
              </p>
            ) : (
              <div className="space-y-2">
                {bookmarkedSections.map((sec) => (
                  <div
                    key={sec.id}
                    className="p-2.5 rounded-lg bg-stone-900/80 border border-stone-800 flex items-center justify-between text-xs"
                  >
                    <div className="truncate pr-2">
                      <span className="text-amber-400 font-mono mr-2">CH.{sec.number}</span>
                      <span className="font-semibold text-stone-200 font-serif-jp">{sec.title}</span>
                    </div>
                    <button
                      onClick={() => onToggleBookmark(sec.id)}
                      className="text-stone-500 hover:text-rose-400 transition-colors cursor-pointer"
                      title="ブックマーク解除"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Add Personal Note Form */}
          <div>
            <div className="text-xs uppercase font-mono text-stone-400 font-semibold mb-2 flex items-center gap-1.5">
              <Plus className="w-3.5 h-3.5 text-amber-400" />
              <span>新たな考察・私見を記録</span>
            </div>

            <form onSubmit={handleAddNote} className="space-y-3">
              <select
                value={selectedChapter}
                onChange={(e) => setSelectedChapter(e.target.value)}
                className="w-full p-2 bg-stone-950 border border-stone-800 rounded-lg text-xs text-stone-200 focus:outline-none focus:border-amber-500/50"
              >
                {THEORY_SECTIONS.map((sec) => (
                  <option key={sec.id} value={sec.title}>
                    CH.{sec.number} {sec.title}
                  </option>
                ))}
              </select>

              <textarea
                value={newNoteText}
                onChange={(e) => setNewNoteText(e.target.value)}
                placeholder="原作のあのシーンとの関連、自分なりの補足考察などを自由に記録..."
                rows={3}
                className="w-full p-3 bg-stone-950 border border-stone-800 rounded-lg text-xs text-stone-200 placeholder-stone-500 focus:outline-none focus:border-amber-500/50 resize-none"
              />

              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={!newNoteText.trim()}
                  className="px-4 py-2 bg-amber-500 disabled:opacity-50 hover:bg-amber-400 text-stone-950 text-xs font-semibold rounded-lg transition-colors cursor-pointer"
                >
                  ノートを保存
                </button>
              </div>
            </form>
          </div>

          {/* User Notes Feed */}
          {notes.length > 0 && (
            <div>
              <div className="text-xs uppercase font-mono text-stone-400 font-semibold mb-2">
                保存済みマイ考察ノート ({notes.length})
              </div>
              <div className="space-y-3">
                {notes.map((note) => (
                  <div key={note.id} className="p-3.5 rounded-xl bg-stone-950/80 border border-stone-800">
                    <div className="flex items-center justify-between text-[11px] text-stone-400 mb-1">
                      <span className="font-semibold text-amber-300/90 truncate max-w-[320px]">
                        {note.chapterTitle}
                      </span>
                      <div className="flex items-center gap-2">
                        <span>{note.timestamp}</span>
                        <button
                          onClick={() => handleDeleteNote(note.id)}
                          className="text-stone-500 hover:text-rose-400 transition-colors"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                    <p className="text-xs text-stone-300 whitespace-pre-wrap leading-relaxed">
                      {note.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
