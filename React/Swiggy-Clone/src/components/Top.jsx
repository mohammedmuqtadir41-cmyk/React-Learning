import {topImages} from "../mockData/topImg";

const Top = () => {
  return (
    <div className="top-container">
      <h2>What's on your mid?</h2>
      <div className="top-images">
        {topImages.map((item) => (
          <div key={item.id} className="food-item">
            <img src={item.image} alt={item.name} />

            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// const Top = () => {
//   return (
//     <h1>Hello Ahmed</h1>
//   );
// };

// export default Top;

export default Top;
