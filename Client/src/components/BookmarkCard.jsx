export default function BookmarkCard({ bookmark }) {
    return (
        <div className="border p-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold">{bookmark.title}</h3>
            <p className="text-gray-500">{bookmark.description}</p>
            <a href={bookmark.url} target="_blank" className="text-blue-500">
                Visit
            </a>
        </div>
    );
}
