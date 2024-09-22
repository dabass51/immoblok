import PricingCard from "@/components/PricingCard";
import PricetableContainer from "@/components/PricetableContainer";

interface PricingCardBlock {
    _uid: string;
    component: 'PricingCard';
    title: string;
    price: string;
    description: string;
    features: string[];
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
}

type Block = PricingCardBlock | PricetableContainerBlock;

const DynamicComponent = ({ blok }: { blok: Block }) => {
    if (blok.component === 'PricingCard') {
        return <PricingCard {...blok} />;
    }

    if (blok.component === 'PricetableContainer') {
        return <PricetableContainer {...blok} />;
    }

    return <p>The component has not been created yet.</p>;
};

export default DynamicComponent;
