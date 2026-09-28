import React from 'react';
import { BlogPost } from '../../types/blog';

interface BlogCardProps {
  post: BlogPost;
  onSelectPost: (slug: string) => void;
}

export const BlogCard: React.FC<BlogCardProps> = ({ post, onSelectPost }) => {
  return (
    <article
      onClick={() => onSelectPost(post.slug)}
      className="group flex flex-col bg-[#0f0f0f] border border-white/10 hover:border-[#c5a880]/60 transition-all duration-300 cursor-pointer overflow-hidden shadow-sm hover:shadow-[0_12px_30px_rgba(0,0,0,0.5)] focus-within:ring-2 focus-within:ring-[#c5a880]"
    >
      {/* Miniatura z zoomem na hover */}
      <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900">
        <img
          src={post.coverImage}
          alt={post.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {/* Kategoria jako badge */}
        <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-black/75 backdrop-blur-md border border-white/15 text-[10px] tracking-[0.2em] uppercase text-[#c5a880] font-medium">
          {post.category}
        </div>
      </div>

      {/* Treść karty */}
      <div className="flex flex-col flex-1 p-6 sm:p-7 justify-between">
        <div>
          <div className="flex items-center gap-3 text-xs text-gray-500 font-light mb-3">
            <time dateTime={post.publishedAt}>{post.publishedAt}</time>
            <span>·</span>
            <span>{post.readingTime}</span>
          </div>

          <h3 className="text-white font-serif text-xl sm:text-2xl leading-snug group-hover:text-[#c5a880] transition-colors mb-3 line-clamp-2">
            {post.title}
          </h3>

          <p className="text-gray-400 text-sm font-light leading-relaxed line-clamp-3 mb-6">
            {post.excerpt}
          </p>
        </div>

        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium text-white group-hover:text-[#c5a880] transition-colors pt-4 border-t border-white/10">
          <span>Czytaj artykuł</span>
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </div>
      </div>
    </article>
  );
};
