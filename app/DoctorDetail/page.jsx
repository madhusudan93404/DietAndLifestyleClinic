"use client"

import Image from "next/image"
import DietOffice from "../../public/diet_office.jpg"
import DoctorImage from "../../public/diet_office.jpg" // replace with real doctor image if available

const DoctorDetail = () => {
    return (
        <section className="bg-gray-50">
            {/* Hero Section */}
            <div className="relative h-64 md:h-96 w-full">
                <Image
                    src={DietOffice}
                    alt="Clinic Background"
                    layout="fill"
                    objectFit="cover"
                    className="brightness-75"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
                    <h1 className="text-3xl md:text-5xl font-bold mb-2">Meet Your Dietitian</h1>
                    <p className="text-sm md:text-lg max-w-2xl">
                        Learn more about Mr. Homesh Mandawliya and his holistic, nature-based approach to health and nutrition.
                    </p>
                </div>
            </div>

            {/* Doctor Card */}
            <div className="max-w-5xl mx-auto mt-8 md:mt-12 px-4 grid md:grid-cols-3 gap-6">
                <div className="md:col-span-1 flex justify-center">
                    <Image
                        src={'https://www.dietnlifestyleclinic.com/wp-content/uploads/2021/06/n1-682x1024.png'}
                        alt="Mr. Homesh Mandawliya"
                        width={250}
                        height={250}
                        className="rounded-full border-4 border-green-500 shadow-lg object-cover"
                    />
                </div>
                <div className="md:col-span-2 bg-white rounded-lg shadow p-6">
                    <h2 className="text-2xl md:text-3xl font-semibold text-green-800 mb-2">Mr. Homesh Mandawliya</h2>
                    <p className="text-gray-700 mb-1">BSc. - Human Nutrition</p>
                    <p className="text-gray-600 text-sm mb-3">Therapist | Dietitian / Nutritionist</p>
                    <p className="text-gray-700 mb-3">
                        With over a decade of experience, Mr. Mandawliya has guided thousands towards healthier living.
                        His approach focuses on natural, sustainable lifestyle changes rather than quick fixes.
                    </p>
                    <p className="italic text-gray-700">"We are giving healthy lifestyle by nature way."</p>
                </div>
            </div>

            {/* About Section */}
            <div className="max-w-5xl mx-auto mt-10 px-4">
                <h3 className="text-xl md:text-2xl font-semibold text-green-900 mb-4">About Mr. Mandawliya</h3>
                <p className="text-gray-700 mb-3">
                    Mr. Homesh Mandawliya has helped clients across diverse backgrounds achieve goals like weight management,
                    sports performance optimization, medical nutrition therapy, and lifestyle disease management.
                </p>
                <p className="text-gray-700 mb-3">
                    His philosophy centers around empowering clients to make sustainable dietary choices, using natural foods,
                    and balancing macronutrients to support holistic wellness.
                </p>
                <p className="text-gray-700">
                    With a client-first approach and deep scientific expertise, he continues to inspire many on their wellness journey.
                </p>
            </div>

            {/* Achievements / Statistics */}
            <div className="max-w-5xl mx-auto mt-10 px-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="bg-white rounded-lg shadow p-4">
                    <h4 className="text-2xl font-bold text-green-600">1000+</h4>
                    <p className="text-gray-600">Happy Clients</p>
                </div>
                <div className="bg-white rounded-lg shadow p-4">
                    <h4 className="text-2xl font-bold text-green-600">10+</h4>
                    <p className="text-gray-600">Years Experience</p>
                </div>
                <div className="bg-white rounded-lg shadow p-4">
                    <h4 className="text-2xl font-bold text-green-600">95%</h4>
                    <p className="text-gray-600">Success Rate</p>
                </div>
                <div className="bg-white rounded-lg shadow p-4">
                    <h4 className="text-2xl font-bold text-green-600">50+</h4>
                    <p className="text-gray-600">Special Diet Plans</p>
                </div>
            </div>

            {/* CTA */}
            <div className="max-w-5xl mx-auto mt-12 px-4 text-center">
                <h3 className="text-xl md:text-2xl font-semibold text-green-900 mb-3">Ready to transform your health?</h3>
                <p className="text-gray-700 mb-6">
                    Book an appointment or contact us to get started on your wellness journey today!
                </p>
                <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full shadow transition duration-300">
                    Book Appointment
                </button>
            </div>

            <div className="h-10"></div>
        </section>
    )
}

export default DoctorDetail
