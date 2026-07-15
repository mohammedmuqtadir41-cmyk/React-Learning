import { useEffect, useState } from "react";
import { topImages } from "../mockData/topImg";
import { TopShimmer } from "./TopSkeleton";
import { imgBaseURL } from "../mockData/constants";

const Top = ({ topData }) => {
  // console.log(topData, "from top.jsx");

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
          topData.map((item) => (
            <div key={item.id} className="food-item">
              <img src={`${imgBaseURL}${item.imageId}`} alt={item.name} />
              {/* <p>{item.action.text}</p> */}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Top;
