import React, { useState } from 'react';
import { VideoInfo } from '../types/course';
import { ExternalLink, Play, Clock, Calendar, ShieldCheck, User } from 'lucide-react';

interface Props {
  video: VideoInfo;
  isMain?: boolean;
}

export const VideoPlayer: React.FC<Props> = ({ video, isMain = true }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  // Extract YouTube ID safely
  const getEmbedUrl = (url: string, id?: string) => {
    let videoId = id;
    if (!videoId && url) {
      const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
      if (match && match[1]) {
        videoId = match[1];
      }
    }
    return videoId ? `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0` : null;
  };

  const embedUrl = getEmbedUrl(video.youtubeUrl, video.youtubeId);

  return (
    <div className="bg-[#12161f] border border-slate-800 rounded-xl overflow-hidden shadow-xl">
      {/* Video Frame */}
      <div className="relative aspect-video w-full bg-black/90">
        {isPlaying && embedUrl ? (
          <iframe
            src={embedUrl}
            title={video.title}
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <div className="w-full h-full relative flex flex-col items-center justify-center p-6 bg-gradient-to-br from-[#121622] via-[#0d1017] to-black">
            {/* Background Grid Pattern */}
            <div
              className="absolute inset-0 opacity-15 pointer-events-none"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, rgba(245, 158, 11, 0.4) 1px, transparent 0)`,
                backgroundSize: '24px 24px',
              }}
            />

            {/* Quality tag in corner */}
            <div className="absolute top-4 right-4 flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 px-3 py-1.5 rounded-lg">
              <span className="text-amber-400 font-mono text-xs font-semibold">
                SIFAT BAHOSI: {video.qualityScore}/100
              </span>
            </div>

            {/* Play Button */}
            <button
              onClick={() => setIsPlaying(true)}
              className="group relative flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20 hover:scale-105 hover:bg-amber-400 transition-all cursor-pointer z-10"
              aria-label="Videoni tomosha qilish"
            >
              <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-current translate-x-0.5" />
            </button>

            <p className="mt-4 text-sm text-slate-300 font-medium text-center max-w-md z-10">
              {video.title}
            </p>
            <p className="text-xs text-slate-500 mt-1">Videoni ushbu sahifada boshlash uchun bosing</p>
          </div>
        )}
      </div>

      {/* Video Metadata Panel */}
      <div className="p-4 sm:p-5 bg-[#0f131c] border-t border-slate-800/80">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <h3 className="text-base sm:text-lg font-semibold text-white tracking-tight flex items-center gap-2">
              {video.title}
            </h3>
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 font-medium">
              <span className="flex items-center gap-1.5 text-amber-400">
                <User className="w-3.5 h-3.5 text-amber-400" />
                {video.channel}
              </span>
              <span className="text-slate-600">·</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-slate-500" />
                {video.duration}
              </span>
              <span className="text-slate-600">·</span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-slate-500" />
                {video.date}
              </span>
              <span className="text-slate-600">·</span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                {video.language}
              </span>
            </div>
          </div>

          <a
            href={video.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-semibold transition-colors border border-slate-700 self-start sm:self-center shrink-0"
          >
            <span>YouTube'da ochish</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
