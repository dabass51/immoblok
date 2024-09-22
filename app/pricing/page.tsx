"use client"

import { useEffect, useState } from 'react';
import Storyblok from '@/lib/storyblok';
import PlanComparisonTable from '@/components/PlanComparisonTable';
import PricingCard from '@/components/PricingCard';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

// Define types for content
interface PricingCardData {
    title: string;
    price: string;
    description: string;
    features: string[];
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

interface HomePageContent {
    title: string;
    subtitle: string;
    description: string;
    ctaText: string;
    durationLabel: string;
    alternativeDurationLabel: string;
    ctaSecondaryText: string;
    pricingCards: PricingCardData[];
    planFeatures: PlanFeatureGroup[];
}

export default async function Pricing() {
    // Fetch data from Storyblok
    const { data } = await Storyblok.get('cdn/stories/home', {
        version: 'draft', // Use 'published' in production
    });
    const content: HomePageContent = data.story.content;

    return (
        <div className="min-h-screen py-12">
            <div className="text-center">
                <h2 className="text-primary text-lg mb-2">{content?.title}</h2>
                <h1 className="text-4xl mb-4">{content?.subtitle}</h1>
                <p className="text-gray-600 mb-6">{content?.description}</p>
                <Button className="text-lg" variant="default">
                    {content?.ctaText}
                </Button>
            </div>

            <div className="text-center mt-8">
                <Label htmlFor="payment-schedule" className="me-3">
                    {content?.durationLabel}
                </Label>
                <Switch id="payment-schedule" />
                <Label htmlFor="payment-schedule" className="relative ms-3">
                    {content?.alternativeDurationLabel}
                </Label>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
                {content?.pricingCards?.map((card, idx) => (
                    <PricingCard
                        key={idx}
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
                <Button variant="outline">{content?.ctaSecondaryText}</Button>
            </div>

            <div className="text-center mt-6 max-w-7xl mx-auto">
                <PlanComparisonTable planFeatures={content?.planFeatures || []} />
            </div>
        </div>
    );
}
