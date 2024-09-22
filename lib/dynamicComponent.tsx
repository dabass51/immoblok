import PricingCard from "@/components/PricingCard";
import PricetableContainer from "@/components/PricetableContainer";

interface BlockComponentProps {
    _uid: string;
    component: 'PricingCard' | 'PricetableContainer'; // Specify the valid components
    [key: string]: any;
}

const Components = {
    PricingCard,
    PricetableContainer,
};

const DynamicComponent = ({ blok }: { blok: BlockComponentProps }) => {
    const Component = Components[blok.component];
    if (Component) {
        return <Component {...blok} />;
    }
    return <p>The component {blok.component} has not been created yet.</p>;
};

export default DynamicComponent;
