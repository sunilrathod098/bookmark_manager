import Link from 'next/link';

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Welcome to Bookmark Manager</h1>
            <div className="space-y-4">
                <Link href="/login">
                    <a className="px-6 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600">
                        Login
                    </a>
                </Link>
                <Link href="/signup" className="px-6 py-2 bg-green-500 text-white rounded-md shadow-md hover:bg-green-600">
                    Signup
                </Link>
                <Link href="/dashboard" className="px-6 py-2 bg-purple-500 text-white rounded-md shadow-md hover:bg-purple-600">
                    Go to Dashboard
                </Link>
            </div>
        </div>
    );
}
