"use client";

import PlanComparisonTable from '@/components/PlanComparisonTable';
import PricingCard from '@/components/PricingCard';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

// Define types for content based on blok data structure
interface PricingCardData {
    _uid: string;
    title: string;
    price: string;
    description: string;
    features: [];
    testText: string;
    highlighted: boolean;
}

interface PlanFeature {
    name: string;
    free: boolean;
    startup: boolean;
    team: boolean;
    enterprise: boolean;
}

interface PlanFeatureGroup {
    type: string;
    features: PlanFeature[];
}

interface Blok {
    _uid: string;
    title: string;
    subtitle: string;
    description: string;
    ctaText: string;
    durationLabel: string;
    alternativeDurationLabel: string;
    pricingCards: PricingCardData[];
    planFeatures?: PlanFeatureGroup[];
    component: string;
}

const PricetableContainer = (blok: Blok) => {
    return (
        <div className="min-h-screen py-12">
            <div className="text-center">
                <h2 className="text-primary text-lg mb-2">{blok?.title}</h2>
                <h1 className="text-4xl mb-4">{blok?.subtitle}</h1>
                <p className="text-gray-600 mb-6">{blok?.description}</p>
                <Button className="text-lg" variant="default">
                    {blok?.ctaText}
                </Button>
            </div>

            <div className="text-center mt-8">
                <Label htmlFor="payment-schedule" className="me-3">
                    {blok?.durationLabel}
                </Label>
                <Switch id="payment-schedule" />
                <Label htmlFor="payment-schedule" className="relative ms-3">
                    {blok?.alternativeDurationLabel}
                </Label>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
                {blok?.pricingCards?.map((card) => (
                    <PricingCard
                        key={card._uid}
                        title={card.title}
                        price={card.price}
                        description={card.description}
                        features={card.features}
                        testText={card.testText}
                        highlighted={card.highlighted}
                    />
                ))}
            </div>

            <div className="text-center mt-6">
                <Button variant="outline">Mehr</Button>
            </div>

            {false && blok?.planFeatures && (
                <div className="text-center mt-6 max-w-7xl mx-auto">
                    <PlanComparisonTable planFeatures={blok?.planFeatures || []} />
                </div>
            )}
        </div>
    );
};

export default PricetableContainer;
