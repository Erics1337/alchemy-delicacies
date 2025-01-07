import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const limit = parseInt(searchParams.get('limit') || '6');

  try {
    const accessToken = process.env.INSTAGRAM_BASIC_DISPLAY_TOKEN;
    
    if (!accessToken) {
      throw new Error('Instagram access token not configured');
    }

    const response = await fetch(
      `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp&limit=${limit}&access_token=${accessToken}`
    );

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error?.message || 'Failed to fetch from Instagram API');
    }

    const data = await response.json();
    return NextResponse.json(data.data || []);

  } catch (error) {
    console.error('Instagram fetch error:', error);
    
    // Return mock data in case of error
    const mockPosts = Array.from({ length: limit }, (_, i) => ({
      id: `mock-${i}`,
      media_url: `/images/gallery${(i % 6) + 2}.png`,
      permalink: '#',
      caption: 'Sample Instagram Post',
      media_type: 'IMAGE',
      timestamp: new Date().toISOString()
    }));

    return NextResponse.json(mockPosts);
  }
}
