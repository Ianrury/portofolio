// src/pages/ProjectDetail.jsx
import { useParams } from "react-router-dom";

function ProjectDetail() {
  const { slug } = useParams();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Detail Project</h1>
      <p>Slug: {slug}</p>
      {/* Fetch detail project dari API berdasarkan slug */}
    </div>
  );
}

export default ProjectDetail;
