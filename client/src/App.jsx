import { useState } from "react";
import BusinessForm from "./components/BusinessForm";
import BusinessCard from "./components/BusinessCard";

function App() {
  const [data, setData] = useState(null);
  const [formData, setFormData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchBusinessData = async (form) => {
    setFormData(form);
    setLoading(true);
    const res = await fetch("http://localhost:3000/business-data", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const result = await res.json();
    setData(result);
    setLoading(false);
  };

  const regenerateHeadline = async () => {
    if (!formData) return;
    const res = await fetch(
      `http://localhost:3000/regenerate-headline?name=${formData.name}&location=${formData.location}`
    );
    const result = await res.json();
    setData((prev) => ({ ...prev, headline: result.headline }));
  };

  return (
    <div className="max-w-xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Local Business Dashboard</h1>
      <BusinessForm onSubmit={fetchBusinessData} />
      {loading && <p className="text-center mt-4">⏳ Loading...</p>}
      {data && <BusinessCard data={data} onRegenerate={regenerateHeadline} />}
    </div>
  );
}

export default App;
