import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "react-toastify";
import { api } from "../utils/api";

export default function Signup() {
    const [clerkId, setClerkId] = useState("");
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSignup = async (e) => {
        e.preventDefault();

        if (!clerkId.trim()) {
            toast.error("Please enter a valid Clerk ID");
            return;
        }

        if (!email.trim()) {
            toast.error("Please enter a valid email");
            return;
        }

        setLoading(true);
        try {
            const response = await api.post(
                "/auth/signup",
                { clerkId, email },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            toast.success(response.data.message || "Signup successful!");
            router.push("/login");
        } catch (error) {
            console.error("Signup error:", error);
            toast.error(error.response?.data?.message || "Signup failed. Try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold text-gray-800 text-center">
                    Create an Account
                </h2>
                <form onSubmit={handleSignup} className="mt-4 space-y-4">
                    <div>
                        <label className="block text-gray-700">Clerk ID</label>
                        <input
                            type="text"
                            value={clerkId}
                            onChange={(e) => setClerkId(e.target.value)}
                            required
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter Clerk ID"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your email"
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-blue-500 text-white py-2 rounded-lg shadow-md hover:bg-blue-600 transition disabled:opacity-50"
                    >
                        {loading ? "Signing up..." : "Sign Up"}
                    </button>
                </form>
                <p className="text-center text-gray-600 mt-4">
                    Already have an account?{" "}
                    <a href="/login" className="text-blue-500 hover:underline">
                        Login
                    </a>
                </p>
            </div>
        </div>
    );
}
