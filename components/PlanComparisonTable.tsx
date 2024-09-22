import React from "react";
import { CheckIcon, MinusIcon } from "lucide-react";

interface Feature {
    name: string;
    free: boolean;
    startup: boolean;
    team: boolean;
    enterprise: boolean;
}

interface FeatureType {
    type: string;
    features: Feature[];
}

interface PlanComparisonTableProps {
    planFeatures: FeatureType[];
}

const PlanComparisonTable: React.FC<PlanComparisonTableProps> = ({ planFeatures }) => {
    // Define the valid keys for the features in a way TypeScript understands
    const plans: (keyof Feature)[] = ["free", "startup", "team", "enterprise"];

    return (
        <div className="mt-20 lg:mt-32 max-w-7xl mx-auto">
            {/* Table Heading */}
            <div className="text-center mb-10 lg:mb-20">
                <h3 className="text-2xl font-semibold dark:text-white">Compare plans</h3>
            </div>

            {/* Desktop Table (lg and above) */}
            <div className="hidden lg:block overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                    <tr className="bg-gray-100 border-b">
                        <th className="w-3/12 text-left text-primary text-center p-4">Plans</th>
                        <th className="w-2/12 text-primary text-lg font-medium text-center">Free</th>
                        <th className="w-2/12 text-primary text-lg font-medium text-center">Startup</th>
                        <th className="w-2/12 text-primary text-lg font-medium text-center">Team</th>
                        <th className="w-2/12 text-primary text-lg font-medium text-center">Enterprise</th>
                    </tr>
                    </thead>
                    <tbody>
                    {planFeatures && planFeatures.map((featureType) => (
                        <React.Fragment key={featureType.type}>
                            <tr className="bg-gray-50">
                                <td colSpan={5} className="font-bold text-left px-4 py-2">
                                    {featureType.type}
                                </td>
                            </tr>
                            {featureType.features.map((feature) => (
                                <tr className="text-gray-600 border-b" key={feature.name}>
                                    <td className="px-4 py-3">{feature.name}</td>
                                    {plans.map((plan) => (
                                        <td className="text-center" key={plan}>
                                            {feature[plan] ? (
                                                <CheckIcon className="h-5 w-5 mx-auto" />
                                            ) : (
                                                <MinusIcon className="h-5 w-5 mx-auto" />
                                            )}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </React.Fragment>
                    ))}
                    </tbody>
                </table>
            </div>

            {/* Mobile View (xs to lg) */}
            <div className="lg:hidden space-y-12">
                {plans.map((plan) => (
                    <section key={plan}>
                        <div className="mb-4">
                            <h4 className="text-xl font-medium capitalize">{plan}</h4>
                        </div>
                        <table className="w-full bg-white border border-gray-200">
                            <tbody>
                            {planFeatures && planFeatures.map((featureType) => (
                                <React.Fragment key={featureType.type}>
                                    <tr className="bg-gray-50">
                                        <td colSpan={2} className="font-bold text-primary px-4 py-2">
                                            {featureType.type}
                                        </td>
                                    </tr>
                                    {featureType.features.map((feature) => (
                                        <tr className="text-gray-600 border-b" key={feature.name}>
                                            <td className="text-left px-4 py-3">{feature.name}</td>
                                            <td className="text-right pr-4">
                                                {feature[plan] ? (
                                                    <CheckIcon className="h-5 w-5 inline-block" />
                                                ) : (
                                                    <MinusIcon className="h-5 w-5 inline-block" />
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </React.Fragment>
                            ))}
                            </tbody>
                        </table>
                    </section>
                ))}
            </div>
        </div>
    );
};

export default PlanComparisonTable;
