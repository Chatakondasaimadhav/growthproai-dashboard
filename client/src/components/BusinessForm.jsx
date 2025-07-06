export default function BusinessForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !location) return;
    onSubmit({ name, location });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Business Name" className="input input-bordered w-full" />
      <input value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Location" className="input input-bordered w-full" />
      <button type="submit" className="btn btn-primary w-full">Submit</button>
    </form>
  );
}
