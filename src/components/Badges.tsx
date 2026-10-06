import React from 'react';
import { BadgeType } from '../types/course';
import { CheckCircle2, AlertTriangle, HelpCircle, ShieldAlert, Cpu, BookOpen } from 'lucide-react';

interface Props {
  type: BadgeType;
  text?: string;
  size?: 'sm' | 'md';
}

export const Badge: React.FC<Props> = ({ type, text, size = 'md' }) => {
  const getBadgeConfig = () => {
    switch (type) {
      case 'FACT':
        return {
          label: 'FACT',
          icon: CheckCircle2,
          bg: 'bg-emerald-950/60',
          border: 'border-emerald-700/60',
          text: 'text-emerald-300',
          indicator: 'bg-emerald-400',
        };
      case 'RULE':
        return {
          label: 'RULE',
          icon: ShieldAlert,
          bg: 'bg-blue-950/60',
          border: 'border-blue-700/60',
          text: 'text-blue-300',
          indicator: 'bg-blue-400',
        };
      case 'PRACTICAL RULE':
        return {
          label: 'PRACTICAL RULE',
          icon: ShieldAlert,
          bg: 'bg-rose-950/60',
          border: 'border-rose-700/60',
          text: 'text-rose-300',
          indicator: 'bg-rose-400',
        };
      case 'HEURISTIC':
        return {
          label: 'HEURISTIC',
          icon: Cpu,
          bg: 'bg-purple-950/60',
          border: 'border-purple-700/60',
          text: 'text-purple-300',
          indicator: 'bg-purple-400',
        };
      case 'COMMON PRACTICE':
        return {
          label: 'COMMON PRACTICE',
          icon: BookOpen,
          bg: 'bg-amber-950/60',
          border: 'border-amber-700/60',
          text: 'text-amber-300',
          indicator: 'bg-amber-400',
        };
      case 'UNCERTAIN':
        return {
          label: 'UNCERTAIN',
          icon: AlertTriangle,
          bg: 'bg-orange-950/60',
          border: 'border-orange-700/60',
          text: 'text-orange-300',
          indicator: 'bg-orange-400',
        };
      case 'FORMULA':
        return {
          label: 'FORMULA',
          icon: HelpCircle,
          bg: 'bg-yellow-950/60',
          border: 'border-yellow-700/60',
          text: 'text-yellow-300',
          indicator: 'bg-yellow-400',
        };
      default:
        return {
          label: type,
          icon: CheckCircle2,
          bg: 'bg-slate-900',
          border: 'border-slate-700',
          text: 'text-slate-300',
          indicator: 'bg-slate-400',
        };
    }
  };

  const config = getBadgeConfig();
  const Icon = config.icon;

  if (!text) {
    return (
      <span
        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono font-semibold uppercase tracking-wider border ${config.bg} ${config.border} ${config.text}`}
      >
        <span className={`w-1.5 h-1.5 rounded-full ${config.indicator}`} />
        <Icon className="w-3.5 h-3.5" />
        {config.label}
      </span>
    );
  }

  return (
    <div className={`p-4 rounded-lg border ${config.bg} ${config.border} space-y-2`}>
      <div className="flex items-center gap-2">
        <span
          className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-mono font-bold uppercase tracking-wider border ${config.border} ${config.text} bg-black/40`}
        >
          <span className={`w-1.5 h-1.5 rounded-full ${config.indicator}`} />
          <Icon className="w-3 h-3" />
          {config.label}
        </span>
      </div>
      <p className="text-sm text-slate-200 leading-relaxed font-normal">{text}</p>
    </div>
  );
};
