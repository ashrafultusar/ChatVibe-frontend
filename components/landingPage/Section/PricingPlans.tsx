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
    <section className="w-full flex flex-col items-center py-20 px-4 bg-transparent">
      <h2 className="text-4xl font-bold mb-2 text-center text-white">
        Choose Your{" "}
        <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
          Perfect Plan
        </span>
      </h2>
      <p className="text-gray-400 text-center mb-12">
        Flexible pricing for teams of all sizes
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl mx-auto">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            className={`relative ${
              plan.highlight
                ? "rounded-3xl p-[2px] bg-gradient-to-r from-purple-500 to-blue-500 shadow-2xl shadow-purple-500/20"
                : ""
            }`}
          >
            <Card
              className={`
                rounded-3xl p-6 flex flex-col h-full
                bg-white/5 backdrop-blur-md
                border border-white/10
                shadow-lg shadow-purple-500/10
              `}
            >
              {plan.tag && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 
                  bg-gradient-to-r from-purple-600 to-blue-600 
                  text-white text-xs px-4 py-1 rounded-full shadow-lg border border-white/20">
                  {plan.tag}
                </div>
              )}

              <CardContent className="flex flex-col items-center text-center p-0">
                <h3 className="text-2xl font-semibold mb-4 text-white">
                  {plan.title}
                </h3>

                <p className="text-4xl font-bold text-white">{plan.price}</p>
                <p className="text-gray-400 mb-6">{plan.subtitle}</p>

                <ul className="space-y-2 text-gray-300 mb-8 w-full text-left">
                  {plan.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-emerald-400 font-bold mt-[2px]">✔</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full py-6 rounded-xl text-base shadow-md 
                    ${
                      plan.highlight
                        ? "bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90"
                        : "bg-white/10 hover:bg-white/15 text-white border border-white/10"
                    }`}
                >
                  {plan.button}
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
