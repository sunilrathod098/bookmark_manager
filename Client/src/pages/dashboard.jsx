// src/pages/dashboard.jsx
import { useEffect, useState } from "react";
import BookmarkCard from "../components/BookmarkCard.jsx";
import { api } from "../utils/api.js";

export default function Dashboard() {
    const [bookmarks, setBookmarks] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchBookmarks() {
            try {
                const res = await api.get("/bookmarks");
                setBookmarks(res.data.GetAll_Bookmarks);
            } catch (error) {
                setError("Failed to fetch bookmarks");
            }
        }
        fetchBookmarks();
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold">Your Bookmarks</h1>
            {error && <div className="text-red-500">{error}</div>}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                {bookmarks.map((bookmark) => (
                    <BookmarkCard key={bookmark._id} bookmark={bookmark} />
                ))}
            </div>
        </div>
    );
}
