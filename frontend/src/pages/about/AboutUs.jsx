import React from 'react';

function AboutUs() {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl">
                <h1 className="text-3xl font-bold text-center mb-6">About Us</h1>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                    Welcome to our website! We are dedicated to providing top-notch services and valuable resources to our users. Our team is passionate about innovation and excellence, ensuring that every interaction you have with us is meaningful and impactful.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                    Our mission is to create a community where ideas thrive and goals are achieved. With years of experience and a commitment to quality, we strive to exceed expectations and deliver outstanding results in everything we do.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                    Thank you for being a part of our journey. Together, we can achieve great things. If you have any questions or feedback, feel free to reach out to us through our contact page.
                </p>
            </div>
        </div>
    );
}

export default AboutUs;