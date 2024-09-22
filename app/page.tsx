import { useEffect, useState } from 'react';
import Storyblok from '@/lib/storyblok';
import DynamicComponent from '@/lib/dynamicComponent';

interface Block {
  _uid: string;
  component: string;
  [key: string]: any;
}

export default async function Home() {
  const { data } = await Storyblok.get('cdn/stories/home', {
    version: 'published', // Use '' in production
  });
  const content = data.story.content;
  return (
      <div className="min-h-screen py-12">
        {content.body.map((blok: Block) => (
            <DynamicComponent key={blok._uid} blok={blok} />
        ))}
      </div>
  );
}
