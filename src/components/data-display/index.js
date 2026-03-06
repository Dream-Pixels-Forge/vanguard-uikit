import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { theme } from '../../theme';
import { IconButton } from '../buttons';

export const Table = ({ columns, data, emptyMessage = "No data", className = "" }) => (
  <div className={`overflow-hidden ${theme.radius.xlarge} ${theme.liquidSurface} ${className}`}>
    <table className="w-full">
      <thead>
        <tr className="border-b border-white/5">
          {columns.map((col, idx) => (
            <th key={idx} className="text-left py-4 px-4 text-[9px] font-black uppercase tracking-widest text-white/40">
              {col.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.length === 0 ? (
          <tr>
            <td colSpan={columns.length} className="py-8 text-center text-white/40">
              {emptyMessage}
            </td>
          </tr>
        ) : (
          data.map((row, rowIdx) => (
            <tr key={rowIdx} className="border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors">
              {columns.map((col, colIdx) => (
                <td key={colIdx} className="py-4 px-4 text-sm text-white/70">
                  {col.render ? col.render(row[col.accessor], row) : row[col.accessor]}
                </td>
              ))}
            </tr>
          ))
        )}
      </tbody>
    </table>
  </div>
);

export const Pagination = ({ currentPage, totalPages, onPageChange, className = "" }) => (
  <div className={`flex items-center justify-center gap-2 ${className}`}>
    <IconButton icon={ChevronLeft} variant="glass" size="sm" onClick={() => onPageChange(Math.max(1, currentPage - 1))} disabled={currentPage === 1} />
    {[...Array(totalPages)].map((_, i) => (
      <button key={i} onClick={() => onPageChange(i + 1)} className={`w-8 h-8 ${theme.radius.base} text-[9px] font-bold transition-all ${currentPage === i + 1 ? 'bg-gradient-to-br from-white via-white/90 to-white/80 text-black shadow-[0_4px_16px_rgba(255,255,255,0.2)]' : 'bg-white/5 text-white/40 hover:bg-white/10'}`}>
        {i + 1}
      </button>
    ))}
    <IconButton icon={ChevronRight} variant="glass" size="sm" onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))} disabled={currentPage === totalPages} />
  </div>
);
