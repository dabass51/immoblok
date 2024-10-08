import Storyblok from '@/lib/storyblok';
import DynamicComponent from '@/lib/dynamicComponent';

interface PricingCardFeature {
  _uid: string;
  feature: string;
  component: string;
}
interface PricingCardBlock {
  _uid: string;
  component: 'PricingCard';
  title: string;
  price: string;
  description: string;
  features: PricingCardFeature[];
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
    version: 'draft',
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
