import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function PricingPlans() {
  const plans = [
    {
      title: "Free",
      price: "$0",
      subtitle: "/ forever",
      features: [
        "Up to 100 participants",
        "40-minute meeting limit",
        "HD video quality",
        "Screen sharing",
        "Basic chat features",
      ],
      button: "Get Started",
    },
    {
      title: "Pro",
      price: "$12",
      subtitle: "/ per month",
      tag: "Most Popular",
      features: [
        "Unlimited participants",
        "Unlimited meeting time",
        "Full HD video quality",
        "Screen sharing & recording",
        "Advanced chat & reactions",
        "Priority support",
        "Custom backgrounds",
      ],
      button: "Get Started",
      highlight: true,
    },
    {
      title: "Enterprise",
      price: "Custom",
      subtitle: "/ contact us",
      features: [
        "Everything in Pro",
        "Dedicated account manager",
        "Custom branding",
        "Advanced analytics",
        "SSO integration",
        "API access",
        "24/7 premium support",
      ],
      button: "Contact Sales",
    },
  ];

  return (
    <div className="w-full flex flex-col items-center py-16 px-4">
      <h2 className="text-4xl font-bold mb-2 text-center">
        Choose Your <span className="text-purple-600">Perfect Plan</span>
      </h2>
      <p className="text-gray-500 text-center mb-12">
        Flexible pricing for teams of all sizes
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className={`relative ${
              plan.highlight ? "border-2 border-purple-500 rounded-3xl p-1" : ""
            }`}
          >
            <Card className="rounded-3xl shadow-lg p-6 flex flex-col h-full">
              {plan.tag && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-600 text-white text-xs px-4 py-1 rounded-full shadow-md">
                  {plan.tag}
                </div>
              )}

              <CardContent className="flex flex-col items-center text-center">
                <h3 className="text-2xl font-semibold mb-4">{plan.title}</h3>
                <p className="text-4xl font-bold">{plan.price}</p>
                <p className="text-gray-500 mb-6">{plan.subtitle}</p>

                <ul className="space-y-2 text-gray-700 mb-8">
                  {plan.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-green-500 font-bold">✔</span> {f}
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full py-6 rounded-xl text-base shadow-md ${
                    plan.highlight ? "bg-purple-600 hover:bg-purple-700" : ""
                  }`}
                >
                  {plan.button}
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
