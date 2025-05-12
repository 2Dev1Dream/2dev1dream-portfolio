// import CardHoverEffectDemo from "@/components/ServicesCards";
import { ServicesCards } from "@/components/ServicesCards";


export default function ServicesSection() {
    return (
        <section className="flex flex-col items-center justify-center text-center mb-50">
            <h3 className="text-4xl font-bold">Ce qu'on propose</h3>

            <ServicesCards />

        </section>
    );
}