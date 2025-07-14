"use client"
import Header from "../../../components/Header";
import Image from 'next/image'

export default function MealPrepMadeEasy() {
    return (
        <>
            <Header />

            {/* Hero section */}
            <section className="relative bg-green-800 text-white">
                <Image
                    src="/images/meal-prep-hero.avif"
                    alt="Meal prep hero"
                    width={1920}
                    height={600}
                    className="w-full h-80 object-cover opacity-70"
                />
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-center">Meal Prep Made Easy</h1>
                </div>
            </section>

            {/* Article content */}
            <section className="max-w-4xl mx-auto px-4 py-10 space-y-8 text-gray-800">
                {/* Intro */}
                <div>
                    <p className="text-lg">
                        Save time, eat healthier, and reduce stress by mastering the art of meal prep. With a few simple steps, you can enjoy delicious homemade meals every day.
                    </p>
                </div>

                {/* Section: Benefits */}
                <div className="space-y-4">
                    <h2 className="text-2xl font-semibold text-green-900">1. Why Meal Prep?</h2>
                    <Image
                        src="/images/meal-prep-boxes.avif"
                        alt="Meal prep boxes"
                        width={800}
                        height={400}
                        className="rounded-xl shadow-md mx-auto"
                    />
                    <p>
                        Meal prep helps you save time during busy weekdays, ensures balanced nutrition, and prevents last-minute unhealthy choices.
                    </p>
                </div>

                {/* Section: Planning & Shopping */}
                <div className="space-y-4">
                    <h2 className="text-2xl font-semibold text-green-900">2. Plan & Shop Smart</h2>
                    <Image
                        src="/images/meal-prep-grocery.avif"
                        alt="Grocery shopping for meal prep"
                        width={800}
                        height={400}
                        className="rounded-xl shadow-md mx-auto"
                    />
                    <p>
                        Start with a weekly meal plan. Make a grocery list, stick to it, and focus on versatile ingredients like grains, proteins, and vegetables.
                    </p>
                </div>

                {/* Highlight quote */}
                <blockquote className="border-l-4 border-green-500 pl-4 italic text-green-800">
                    “Failing to plan is planning to fail.”
                </blockquote>

                {/* Section: Store & Reheat */}
                <div className="space-y-4">
                    <h2 className="text-2xl font-semibold text-green-900">3. Store & Reheat Safely</h2>
                    <Image
                        src="/images/meal-prep-fridge.avif"
                        alt="Meals stored in fridge"
                        width={800}
                        height={400}
                        className="rounded-xl shadow-md mx-auto"
                    />
                    <p>
                        Use BPA-free containers, label dates, and store meals properly. Reheat evenly to keep meals tasty and safe.
                    </p>
                </div>

                {/* Conclusion */}
                <div>
                    <h3 className="text-xl font-semibold text-green-900">Final Thoughts</h3>
                    <p>
                        Meal prep isn’t just about saving time—it’s a lifestyle change toward healthier eating, less stress, and more energy for what truly matters.
                    </p>
                </div>
            </section>

            {/* Footer (if you have) */}
            {/* <Footer /> */}
        </>
    )
}
