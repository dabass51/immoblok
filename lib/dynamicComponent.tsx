import PricingCard from '@/components/PricingCard';
import PricetableContainer from '@/components/PricetableContainer';

// Define the type of component blocks from Storyblok
interface BlockComponentProps {
    _uid: string;
    component: string;
    [key: string]: string;
}

// A resolver function to map Storyblok components to React components
const Components = {
    PricingCard: PricingCard,
    PricetableContainer: PricetableContainer,
};

const DynamicComponent = ({ blok }: { blok: BlockComponentProps }) => {
    if (typeof Components[blok.component] !== 'undefined') {
        const Component = Components[blok.component];
        return <Component {...blok} />;
    }
    return <p>The component {blok.component} has not been created yet.</p>;
};

export default DynamicComponent;
