'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Skeleton } from './skeleton';
import { formatDistanceToNow } from 'date-fns';

interface InstagramPost {
  id: string;
  media_url: string;
  permalink: string;
  caption?: string;
  media_type: string;
  thumbnail_url?: string;
  timestamp: string;
}

interface InstagramFeedProps {
  limit?: number;
  className?: string;
  showTimestamp?: boolean;
  showCaption?: boolean;
}

export function InstagramFeed({ 
  limit = 6, 
  className = '',
  showTimestamp = false,
  showCaption = false
}: InstagramFeedProps) {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInstagramPosts = async () => {
      try {
        const response = await fetch(`/api/instagram?limit=${limit}`);
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        console.error('Failed to fetch Instagram posts:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchInstagramPosts();
  }, [limit]);

  if (loading) {
    return (
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ${className}`}>
        {Array.from({ length: limit }).map((_, i) => (
          <Skeleton key={i} className="aspect-square rounded-lg" />
        ))}
      </div>
    );
  }

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ${className}`}>
      {posts.map((post) => (
        <a
          key={post.id}
          href={post.permalink}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative aspect-square overflow-hidden rounded-lg bg-gray-100"
        >
          <Image
            src={post.media_url}
            alt={post.caption?.slice(0, 100) || 'Instagram post'}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {(showTimestamp || showCaption) && (
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                {showCaption && post.caption && (
                  <p className="text-sm line-clamp-2 mb-1">{post.caption}</p>
                )}
                {showTimestamp && (
                  <p className="text-xs opacity-75">
                    {formatDistanceToNow(new Date(post.timestamp), { addSuffix: true })}
                  </p>
                )}
              </div>
            )}
          </div>
          <div className="absolute top-2 right-2">
            {post.media_type === 'VIDEO' && (
              <svg
                className="w-6 h-6 text-white drop-shadow-lg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zm12.553 1.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
              </svg>
            )}
          </div>
        </a>
      ))}
    </div>
  );
}
