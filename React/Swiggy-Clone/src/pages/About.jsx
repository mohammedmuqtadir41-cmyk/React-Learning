import "./page.css";

const About = () => {
  return (
    <div className="page">
      <div className="page-card">
        <h1>About Food Stack</h1>

        <p>
          <strong>Food Stack</strong> is a modern food ordering web
          application inspired by Swiggy, built using React and the
          latest frontend technologies. The project focuses on creating
          a responsive, fast, and user-friendly experience while
          following real-world development practices.
        </p>

        <p>
          It demonstrates concepts such as component-based architecture,
          React Router, API integration, state management, dynamic
          rendering, search and filtering, reusable UI components, and
          responsive design.
        </p>

        <p>
          This project is continuously being improved by adding features
          like restaurant menus, cart management, order summary, billing,
          and checkout to simulate a production-ready food delivery
          platform.
        </p>

        <div className="about-tech">
          <h3>Tech Stack</h3>

          <ul>
            <li>⚛️ React</li>
            <li>🟨 JavaScript (ES6+)</li>
            <li>🛣️ React Router</li>
            <li>🎨 HTML5 & CSS3</li>
            <li>🌐 REST API Integration</li>
            <li>📦 Parcel Bundler</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;