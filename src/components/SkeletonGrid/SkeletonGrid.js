import React from "react";
import SkeletonCard from "../SkeletonCard/SkeletonCard";
import "./SkeletonGrid.css";

const SkeletonGrid = ({ count = 6 }) => {
  return (
    <div className="news-grid">
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
};

export default SkeletonGrid;