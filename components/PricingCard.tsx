import {Button} from "@/components/ui/button";

interface PricingCardProps {
    title: string;
    price: string;
    description: string;
    features: {feature:string}[];
    testText: string;
    highlighted: boolean;
}

export default function PricingCard({ title, price, description, features, testText, highlighted }: PricingCardProps) {
    const featureArray = features.map((item) => item.feature);

    return (
        <div
            className={`relative p-6 pt-10 bg-white rounded-lg shadow-md border ${highlighted ? "border-teal-500" : "border-gray-200"} ${
                highlighted ? "bg-teal-50" : ""
            }`}
        >

            {highlighted && (
                <span className="absolute top-0 left-0 text-center bg-secondary text-primary w-full text-white text-xs font-bold px-3 py-1 rounded-lg rounded-b uppercase">
                  Unsere Empfehlung
                </span>
            )}


            <h3 className="text-lg mb-2">{title}</h3>
            <p className="text-2xl mb-2 text-primary">{price}</p>
            <p className="text-primary mb-4">{description}</p>
            <ul className="space-y-2 mb-4">

                {featureArray && featureArray.map((feature, index) => (
                    <li
                        key={index}
                        className={`flex items-center ${index < 3 ? "" : "text-red-500"}`}
                    >
                            <span className="mr-2">
                              {index < 3 ? (
                                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth="2"
                                          d="M5 13l4 4L19 7"
                                      />
                                  </svg>
                              ) : (
                                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth="2"
                                          d="M6 18L18 6M6 6l12 12"
                                      />
                                  </svg>
                              )}
                            </span>
                        {feature}
                    </li>
                ))}
            </ul>
            { highlighted && (
                <Button
                    variant="outline"
                >
                    {testText}
                </Button>
            )}
            { !highlighted && (
                <Button
                    variant="default"
                >
                    {testText}
                </Button>
            )}

        </div>
    );
}
