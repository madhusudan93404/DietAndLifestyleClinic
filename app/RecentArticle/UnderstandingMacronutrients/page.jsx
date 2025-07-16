"use client"
import Header from "../../../components/Header";
import Image from 'next/image'

import ThePowerofProteins from "../../../public/ThePowerofProteins.jpg";
import Carbohydrates from "../../../public/Carbohydrates.avif";
import HealthyFats from "../../../public/HealthyFats.avif";
export default function UnderstandingMacronutrients() {
    return (
        <>
            <Header />
            {/* Hero section */}
            <section className="relative bg-green-800 text-white">
                <Image
                    src={HealthyFats}
                    alt="Understanding Macronutrients hero"
                    width={1920}
                    height={600}
                    className="w-full h-80 object-cover opacity-70"
                />
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-center">Understanding Macronutrients</h1>
                </div>
            </section>

            {/* Article content */}
            <section className="max-w-4xl mx-auto px-4 py-10 space-y-8 text-gray-800">
                {/* Intro */}
                <div>
                    <p className="text-lg">
                        Proteins, carbohydrates, and fats form the foundation of every diet. Learning how to balance them can help you build a healthier, more energized lifestyle.
                    </p>
                </div>

                {/* Proteins section */}
                <div className="space-y-4">
                    <h2 className="text-2xl font-semibold text-green-900">1. The Power of Proteins</h2>
                    <Image
                        src={ThePowerofProteins}
                        alt="Proteins"
                        width={800}
                        height={400}
                        className="rounded-xl shadow-md mx-auto"
                    />
                    <p>
                        Proteins are the building blocks of muscles, skin, enzymes, and hormones. Include lean meats, fish, eggs, beans, and nuts for a balanced intake.
                    </p>
                </div>

                {/* Carbs section */}
                <div className="space-y-4">
                    <h2 className="text-2xl font-semibold text-green-900">2. Carbohydrates: Your Energy Source</h2>
                    <Image
                        src={Carbohydrates}
                        alt="Healthy carbs"
                        width={800}
                        height={400}
                        className="rounded-xl shadow-md mx-auto"
                    />
                    <p>
                        Carbs provide quick and long-lasting energy. Focus on whole grains, fruits, and vegetables, while limiting refined sugars and processed foods.
                    </p>
                </div>

                {/* Quote */}
                <blockquote className="border-l-4 border-green-500 pl-4 italic text-green-800">
                    “Balance is not something you find, it's something you create.”
                </blockquote>

                {/* Fats section */}
                <div className="space-y-4">
                    <h2 className="text-2xl font-semibold text-green-900">3. Healthy Fats</h2>
                    <Image
                        src={HealthyFats}
                        alt="Healthy fats"
                        width={800}
                        height={400}
                        className="rounded-xl shadow-md mx-auto"
                    />
                    <p>
                        Fats are essential for brain health, hormone production, and cell function. Choose unsaturated fats like olive oil, avocados, nuts, and seeds.
                    </p>
                </div>

                {/* Conclusion */}
                <div>
                    <h3 className="text-xl font-semibold text-green-900">Final Thoughts</h3>
                    <p>
                        Understanding and balancing macronutrients is key to a sustainable, healthy diet. Make mindful choices, and enjoy the journey to better health.
                    </p>
                </div>
            </section>
        </>
    )
}
