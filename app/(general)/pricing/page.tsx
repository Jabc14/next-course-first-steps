import { Metadata } from "next";

export const metadata: Metadata = {
 title: 'Pricing',
 description: 'Page to know the prices',
 keywords: ['Pricing Page']
};

export default function PricingPage() {
    return (
        <>
        <span className="text-7xl">Pricing</span>
        </>
    )
}