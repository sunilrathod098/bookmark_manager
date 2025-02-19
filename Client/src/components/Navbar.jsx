// src/components/Navbar.jsx
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="p-4 shadow-lg bg-white">
            <div className="container mx-auto flex justify-between">
                <h1 className="text-2xl font-bold">Bookmark Manager</h1>
                <div>
                    {/* <Link href="/dashboard">
                        <button className="px-4">Dashboard</button>
                    </Link> */}
                    <Link href="/dashboard">Dashboard</Link>
                    <Link href="/login">
                        <button className="px-4">Login</button>
                    </Link>
                    <Link href="/signup">
                        <button className="px-4">Signup</button>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
