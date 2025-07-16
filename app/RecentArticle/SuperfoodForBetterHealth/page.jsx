"use client"
import Header from "../../../components/Header";
import Image from 'next/image'


import Berries from "../../../public/BerriesNature’sCandy.avif";
import Nuts from "../../../public/Nuts&Seeds.jpg";
import Greens from "../../../public/LeafyGreens.avif";
import Avocado from "../../../public/Avocado.avif";
import Salmon from "../../../public/Salmon.avif";
import SweetPotatoes from "../../../public/SweetPotatoes.avif";
import GreekYogurt from "../../../public/GreekYogurt.jpg";
import GreenTea from "../../../public/ GreenTea.avif";
import Garlic from "../../../public/Garlic.avif";
import DarkChocolate from "../../../public/DarkChocolate.avif";

export default function SuperfoodForBetterHealth() {
    return (
        <>
            <Header />

            {/* Hero section */}
            <section className="relative bg-green-800 text-white">
                <Image
                    src={GreenTea}
                    alt="Superfoods"
                    width={1920}
                    height={600}
                    className="w-full h-80 object-cover opacity-70"
                />
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-center">10 Superfoods for Better Health</h1>
                </div>
            </section>

            {/* Article content */}
            <section className="max-w-4xl mx-auto px-4 py-10 space-y-10 text-gray-800">
                {/* Intro */}
                <div className="text-center space-y-4">
                    <p className="text-lg">
                        Discover the power of nutrient-dense foods that can transform your health and boost your energy levels.
                    </p>
                    <p className="text-lg">
                        Superfoods aren’t magic, but they’re packed with vitamins, minerals, and antioxidants your body loves.
                    </p>
                </div>

                {/* Superfood items */}
                {
                    [
                        {
                            title: "1. Berries: Nature’s Candy",
                            img: Berries,
                            alt: "Fresh berries",
                            desc: "Blueberries, strawberries, and raspberries are antioxidant powerhouses that help reduce inflammation and support heart health."
                        },
                        {
                            title: "2. Nuts & Seeds",
                            img: Nuts,
                            alt: "Assorted nuts and seeds",
                            desc: "Almonds, walnuts, chia seeds, and flaxseeds provide healthy fats, fiber, and plant-based protein to keep you energized."
                        },
                        {
                            title: "3. Leafy Greens",
                            img: Greens,
                            alt: "Fresh leafy greens",
                            desc: "Spinach, kale, and Swiss chard are rich in vitamins A, C, K, and minerals that support bone and immune health."
                        },
                        {
                            title: "4. Avocado",
                            img: Avocado,
                            alt: "Sliced avocado",
                            desc: "Loaded with heart-healthy monounsaturated fats, fiber, and potassium to keep your cholesterol in check."
                        },
                        {
                            title: "5. Salmon",
                            img: Salmon,
                            alt: "Grilled salmon",
                            desc: "Packed with omega-3 fatty acids which help reduce inflammation and promote brain and heart health."
                        },
                        {
                            title: "6. Sweet Potatoes",
                            img: SweetPotatoes,
                            alt: "Roasted sweet potatoes",
                            desc: "A great source of beta-carotene, fiber, and complex carbs that help sustain your energy."
                        },
                        {
                            title: "7. Greek Yogurt",
                            img: GreekYogurt,
                            alt: "Greek yogurt with fruits",
                            desc: "Rich in protein and probiotics, supporting gut health and muscle recovery."
                        },
                        {
                            title: "8. Green Tea",
                            img: GreenTea,
                            alt: "Cup of green tea",
                            desc: "Contains antioxidants called catechins that boost metabolism and may protect against disease."
                        },
                        {
                            title: "9. Garlic",
                            img: Garlic,
                            alt: "Fresh garlic cloves",
                            desc: "Known for its immune-boosting properties and potential to reduce blood pressure."
                        },
                        {
                            title: "10. Dark Chocolate",
                            img: DarkChocolate,
                            alt: "Pieces of dark chocolate",
                            desc: "High in antioxidants, it may improve heart health and boost mood—choose 70% cocoa or higher."
                        },
                    ].map((food, idx) => (
                    <div key={idx} className="space-y-4">
                        <h2 className="text-2xl font-semibold text-green-900">{food.title}</h2>
                        <Image
                            src={food.img}
                            alt={food.alt}
                            width={800}
                            height={400}
                            className="rounded-xl shadow-md mx-auto"
                        />
                        <p>{food.desc}</p>
                    </div>
                ))}

                {/* Highlight quote */}
                <blockquote className="border-l-4 border-green-500 pl-4 italic text-green-800">
                    “Let food be thy medicine and medicine be thy food.” – Hippocrates
                </blockquote>

                {/* Conclusion */}
                <div>
                    <h3 className="text-xl font-semibold text-green-900">Final Thoughts</h3>
                    <p>
                        Adding a variety of these superfoods to your daily meals can make a real difference in your health and well-being.
                        Remember: balance, color, and moderation are key!
                    </p>
                </div>
            </section>

            {/* Footer (if you have one) */}
            {/* <Footer /> */}
        </>
    )
}
