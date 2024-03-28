import { Metadata } from "next";

export const metadata: Metadata = {
 title: 'Contact',
 description: 'Page to contact the company',
 keywords: ['Contact Page']
};

export default function ContactPage() {
    return (
        <>
        <span className="text-7xl">Contact</span>
        </>
    )
}