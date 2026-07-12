import { useEffect, useState } from "react";
import { topImages } from "../mockData/topImg";
import { TopShimmer } from "./TopSkeleton";

const Top = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="top-container">
      <h2>What's on your mind?</h2>

      <div className="top-images">
        {loading ? (
          <TopShimmer />
        ) : (
          topImages.map((item) => (
            <div key={item.id} className="food-item">
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};


export default Top;
