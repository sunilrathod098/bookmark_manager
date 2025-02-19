// src/pages/login.jsx
import { useRouter } from "next/router";
import { useState } from "react";
import Button from "../components/Button";
import { api } from "../utils/api";

export default function Login() {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const handleLogin = async (e) => {
        e.preventDefault();
        if (!email) {
            setError("Please provide an email.");
            return;
        }
        try {
            const response = await api.post("/auth/login", { email });
            localStorage.setItem("authToken", response.data.token); // Assuming token returned
            router.push("/dashboard");
        } catch (err) {
            setError("Login failed. Please try again.");
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold">Login</h2>
                {error && <div className="text-red-500">{error}</div>}
                <form onSubmit={handleLogin} className="mt-4">
                    <input
                        type="email"
                        className="border p-2 w-full mb-4"
                        placeholder="Enter your email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Button type="submit" className="bg-blue-500 text-white w-full">
                        Login
                    </Button>
                </form>
            </div>
        </div>
    );
}
