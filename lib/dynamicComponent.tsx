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

const Components = {
    PricingCard,
    PricetableContainer,
};

const DynamicComponent = ({ blok }: { blok: Block }) => {
    const Component = Components[blok.component];
    if (Component) {
        return <Component {...blok} />;
    }
    return <p>The component {blok.component} has not been created yet.</p>;
};

export default DynamicComponent;
