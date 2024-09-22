import Storyblok from '@/lib/storyblok';
import DynamicComponent from '@/lib/dynamicComponent';

interface PricingCardBlock {
  _uid: string;
  component: 'PricingCard';
  title: string;
  price: string;
  description: string;
  features: {feature:string}[];
  testText: string;
  highlighted: boolean;
}

interface PricetableContainerBlock {
  _uid: string;
  component: 'PricetableContainer';
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  pricingCards: PricingCardBlock[];
  durationLabel: string;
  alternativeDurationLabel: string;
}

type Block = PricingCardBlock | PricetableContainerBlock;

export default async function Home() {
  const { data } = await Storyblok.get('cdn/stories/home', {
    version: 'published',
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
