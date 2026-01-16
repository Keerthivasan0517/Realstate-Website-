"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [hasSubmitted, setHasSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate submission - in a real app this would go to an API
        console.log("Form submitted:", formData);
        setHasSubmitted(true);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <>
            {/* Toggle Button */}
            <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-slate-900 text-white shadow-xl hover:bg-slate-800 transition-colors"
            >
                {isOpen ? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="h-6 w-6"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="h-6 w-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
                        />
                    </svg>
                )}
            </motion.button>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="fixed bottom-24 right-6 z-50 w-[90vw] max-w-sm rounded-2xl bg-white shadow-2xl overflow-hidden border border-slate-100"
                    >
                        {/* Header */}
                        <div className="bg-slate-900 p-4 text-white">
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-700 text-lg">
                                    🤖
                                </div>
                                <div>
                                    <h3 className="font-medium">Greenie</h3>
                                    <p className="text-xs text-slate-300">AI Assistant</p>
                                </div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-6 max-h-[60vh] overflow-y-auto">
                            {!hasSubmitted ? (
                                <div className="space-y-6">
                                    <div className="space-y-2">
                                        <p className="text-slate-600">
                                            I'm an AI assistant, I'm here to answer all of your questions.
                                        </p>
                                        <p className="text-slate-600">
                                            Before we get started, please provide your details below.
                                        </p>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div className="space-y-1">
                                            <label htmlFor="name" className="text-xs font-medium uppercase tracking-wider text-slate-500">
                                                Name
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm focus:border-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900"
                                                placeholder="Your full name"
                                            />
                                        </div>

                                        <div className="space-y-1">
                                            <label htmlFor="phone" className="text-xs font-medium uppercase tracking-wider text-slate-500">
                                                Phone number
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                required
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm focus:border-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900"
                                                placeholder="Your phone number"
                                            />
                                        </div>

                                        <div className="space-y-1">
                                            <label htmlFor="email" className="text-xs font-medium uppercase tracking-wider text-slate-500">
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm focus:border-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900"
                                                placeholder="Your email address"
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full rounded-lg bg-slate-900 py-3 text-sm font-medium text-white transition-colors hover:bg-slate-800 disabled:opacity-50"
                                            disabled={!formData.name || !formData.phone || !formData.email}
                                        >
                                            Submit
                                        </button>
                                    </form>
                                </div>
                            ) : (
                                <div className="space-y-4 text-center py-8">
                                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl">
                                        👋
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="font-medium text-slate-900">Welcome, {formData.name}!</h4>
                                        <p className="text-slate-600 text-sm">
                                            Thank you for sharing your details. How can I help you today?
                                        </p>
                                    </div>
                                    {/* Real chat interface would go here */}
                                    <div className="rounded-lg bg-slate-50 p-4 text-left text-sm text-slate-500 border border-slate-100 mt-4">
                                        <p>Chat interface placeholder...</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
