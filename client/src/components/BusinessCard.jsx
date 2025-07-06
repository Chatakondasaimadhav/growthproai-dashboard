export default function BusinessCard({ data, onRegenerate }) {
  return (
    <div className="card shadow-md p-6 mt-4 bg-white rounded">
      <p>⭐ <strong>Rating:</strong> {data.rating}</p>
      <p>📝 <strong>Reviews:</strong> {data.reviews}</p>
      <p>📢 <strong>Headline:</strong> {data.headline}</p>
      <button onClick={onRegenerate} className="btn btn-secondary mt-3">Regenerate SEO Headline</button>
    </div>
  );
}
