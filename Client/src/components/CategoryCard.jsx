export default function CategoryCard({ category }) {
    return (
        <div className="border p-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold">{category.name}</h3>
        </div>
    );
}
