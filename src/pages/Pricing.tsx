import { ArrowRight, Check, Users2 } from "lucide-react";
import { useState } from "react";

interface FeatureType {
  id: number;
  label: string;
}
interface PriceTableType {
  id: number;
  label: string;
  type: string;
  btnContent: string;
  features: FeatureType[];
}

const pricingTable = [
  {
    id: 1,
    label: "Personal",
    type: "Free",
    btnContent: "Get started",
    features: [
      {
        id: 3,
        label:
          "Easily import people from Email, Calendar, Twitter, Linkedin, Facebook, iMessage, and more",
      },
      {
        id: 31,
        label: "Get organized with Search and Groups",
      },
      {
        id: 31,
        label:
          "Stay in touch with Reconnect, Reminders, and Birthday notifications",
      },
      {
        id: 31,
        label:
          "See unlimited life updates: job changes, location changes, news mentions and more",
      },
    ],
  },
  {
    id: 2,
    label: "Pro",
    type: "$65/month",
    btnContent: "try it free",
    features: [
      {
        id: 4,
        label: "Deepen your relationships with unlimited search history",
      },
      {
        id: 41,
        label: "Receive 1:1 onboarding, VIP data import, and priority support",
      },
      {
        id: 42,
        label: "Invoice-based billing",
      },
    ],
  },
  {
    id: 3,
    label: "Team",
    type: "Custom Package",
    btnContent: "contact us",
    features: [
      {
        id: 5,
        label: "Add unlimited team members and collaborate on relationships",
      },
      {
        id: 51,
        label: "Custom integration and setup within your organization",
      },
      {
        id: 61,
        label: "SAML SSO",
      },
      {
        id: 52,
        label: "Admin tools and controls",
      },
      {
        id: 53,
        label: "Dedicated success manager",
      },
    ],
  },
];

function Pricing() {
  return (
    <div className="min-h-screen bg-black px-5 pt-32 text-zinc-100">
      <div className="mx-auto max-w-7xl space-y-10">
        {/* intro */}
        <div className="mx-auto max-w-xl space-y-5 text-center">
          <h1 className="font-aleg text-5xl">Build Better Relationships</h1>
          <p className="[line-height:30px] ">
            It's free to get started — no credit card required. Upgrade to
            access unlimited search history, unlock additional features, and
            support privacy-focused independent software.
          </p>
        </div>

        {/* pricing */}
        <div className="grid grid-cols-1 gap-5  lg:grid-cols-3">
          {pricingTable.map((price) => (
            <PriceTable key={price.id} price={price} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Pricing;

const PriceTable = ({ price }: { price: PriceTableType }) => {
  const [isBtnHover, setIsBtnHover] = useState(false);

  const bgColor =
    price.id === 1
      ? isBtnHover
        ? "bg-gradient-to-b from-zinc-400/40 to-zinc-400/10"
        : "bg-gradient-to-br from-zinc-400/20 to-zinc-400/10"
      : price.id === 2
      ? isBtnHover
        ? "bg-gradient-to-b from-teal-400/40 to-teal-400/10"
        : "bg-gradient-to-br from-teal-400/20 to-teal-400/10"
      : isBtnHover
      ? "bg-gradient-to-b from-blue-400/40 to-blue-400/10"
      : "bg-gradient-to-br from-blue-400/20 to-blue-400/10";

  return (
    <div
      className={`group w-full space-y-7 rounded-xl border border-zinc-600 transition-all duration-1000  ${bgColor} p-5 backdrop-blur-xl`}
    >
      <div>
        <h1 className="text-center font-aleg text-2xl">{price.label}</h1>
        <>
          {price.id !== 3 ? (
            <div className="py-8 text-center font-aleg text-3xl font-bold tracking-widest">
              price.type
            </div>
          ) : (
            <div className="py-4 text-center">
              <button className="rounded-full border border-blue-900/60 bg-blue-500/10 p-5">
                <Users2 className="h-7 w-7" />
              </button>
            </div>
          )}
        </>
        <button
          onMouseEnter={() => setIsBtnHover(true)}
          onMouseLeave={() => setIsBtnHover(false)}
          className="flex w-full origin-left items-center justify-center gap-5 rounded-full border border-zinc-500 py-2 text-center text-xs font-medium uppercase tracking-[7px] transition-all  hover:tracking-[8px]"
        >
          <span>{price.btnContent}</span>
          <span>
            <ArrowRight className="h-5 w-5" />
          </span>
        </button>
      </div>

      <div className="space-y-5">
        {price?.features?.map((feature: FeatureType) => (
          <div key={feature.id} className="flex gap-5 text-zinc-400">
            <span>
              <Check className="h-5 w-5" />
            </span>
            <span>{feature.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
