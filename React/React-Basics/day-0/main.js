// import React from "react";
// import ReactDOM from "react-dom/client";

// function App() {
//   return (
//     <div className="container">
//       <header className="navbar">
//         <h1>React Learning</h1>

//         <nav>
//           <ul>
//             <li>
//               <a href="/">Home</a>
//             </li>
//             <li>
//               <a href="/">About</a>
//             </li>
//             <li>
//               <a href="/">Projects</a>
//             </li>
//             <li>
//               <a href="/">Contact</a>
//             </li>
//           </ul>
//         </nav>

//         <input type="text" placeholder="Search..." />
//         <button>Profile</button>
//       </header>

//       <main>
//         <section>
//           <h2>Welcome to React 🚀</h2>

//           <p>
//             This is my Day 0 React practice project. I learned JSX,
//             ReactDOM.createRoot(), and rendering elements.
//           </p>

//           <img src="https://picsum.photos/400/200" alt="Random" />

//           <button>Get Started</button>
//         </section>

//         <section>
//           <h2>Topics Covered</h2>

//           <ul>
//             <li>JSX</li>
//             <li>Nested Elements</li>
//             <li>className</li>
//             <li>Images</li>
//             <li>Buttons</li>
//             <li>Lists</li>
//           </ul>
//         </section>

//         <section>
//           <h2>Daily Goal</h2>

//           <table
//             style={{ borderCollapse: "collapse", border: "1px solid #000" }}
//           >
//             <thead>
//               <tr>
//                 <th style={{ border: "1px solid #000", padding: "8px" }}>
//                   Day
//                 </th>
//                 <th style={{ border: "1px solid #000", padding: "8px" }}>
//                   Topic
//                 </th>
//               </tr>
//             </thead>

//             <tbody>
//               <tr>
//                 <td style={{ border: "1px solid #000", padding: "8px" }}>0</td>
//                 <td style={{ border: "1px solid #000", padding: "8px" }}>
//                   JSX Basics
//                 </td>
//               </tr>

//               <tr>
//                 <td style={{ border: "1px solid #000", padding: "8px" }}>1</td>
//                 <td style={{ border: "1px solid #000", padding: "8px" }}>
//                   Components
//                 </td>
//               </tr>

//               <tr>
//                 <td style={{ border: "1px solid #000", padding: "8px" }}>2</td>
//                 <td style={{ border: "1px solid #000", padding: "8px" }}>
//                   Props
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         </section>
//       </main>

//       <footer>
//         <p>© 2026 Ahmed | React Learning Journey</p>
//       </footer>
//     </div>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<App />);

import userCard from "./components/user";

function App() {
  return (
    <div>
      <userCard />
      <userCard />
      <userCard />
    </div>
  );
}
