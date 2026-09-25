import React, { useState, useEffect } from 'react';
import { TranslationSchema } from '../data/translations';

interface InstagramFeedProps {
  tr: TranslationSchema;
}

interface BeholdPost {
  id: string;
  mediaUrl: string;
  permalink: string;
  mediaType?: string; // Dodano mediaType dla sprawdzenia typu posta
  caption?: string;
  prunedCaption?: string;
  thumbnailUrl?: string;
}

export const InstagramFeed: React.FC<InstagramFeedProps> = ({ tr }) => {
  const [posts, setPosts] = useState<BeholdPost[]>([]);
  const [loading, setLoading] = useState(true);

  // WKLEJ TUTAJ SWÓJ ADRES BEHOLD:
  const FEED_URL = 'https://feeds.behold.so/b8HEX8n7QbpkYMN9NYN0';

  useEffect(() => {
    fetch(FEED_URL)
      .then((res) => {
        if (!res.ok) throw new Error('Błąd odpowiedzi z Behold');
        return res.json();
      })
      .then((data) => {
        // Behold zwraca posty w data.posts:
        const feedPosts: BeholdPost[] = Array.isArray(data) ? data : (data.posts || []);
        setPosts(feedPosts.slice(0, 6));
        setLoading(false);
      })
      .catch((err) => {
        console.error('Błąd Instagram Feed:', err);
        setLoading(false);
      });
  }, [FEED_URL]);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase mb-3 text-[#c8a96e] font-medium">
              {tr.instagram.eyebrow}
            </p>
            <h2
              className="font-serif text-[#0a0a0a]"
              style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}
            >
              {tr.instagram.title}
            </h2>
            <p className="text-gray-400 text-sm mt-1">{tr.instagram.sub}</p>
          </div>

          <a
            href="https://instagram.com/werkmebel"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-premium btn-outline-dark px-5 py-3 text-xs tracking-widest uppercase font-medium flex items-center gap-2.5"
          >
            <svg className="w-4 h-4 text-current" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            <span>{tr.instagram.handle}</span>
          </a>
        </div>

        {/* Siatka 6 ujęć */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {loading
            ? Array.from({ length: 6 }).map((_, idx) => (
                <div key={idx} className="aspect-square bg-gray-100 animate-pulse" />
              ))
            : posts.map((post) => {
                // Determine the correct image source
                const isVideo = post.mediaType === 'VIDEO' || post.mediaUrl.endsWith('.mp4');
                const imageSource = isVideo && post.thumbnailUrl ? post.thumbnailUrl : post.mediaUrl;

                return (
                  <a
                    key={post.id}
                    href={post.permalink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative aspect-square overflow-hidden bg-gray-100 block shadow-sm"
                  >
                    <img
                      src={imageSource}
                      alt={post.prunedCaption || post.caption || 'Werk Mebel realizacja'}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2 text-center">
                      <span className="text-white text-xs font-light tracking-wider uppercase">
                        Zobacz na IG →
                      </span>
                    </div>
                  </a>
                );
              })}
        </div>
      </div>
    </section>
  );
};