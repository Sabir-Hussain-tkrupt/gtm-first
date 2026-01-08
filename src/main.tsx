import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);



// import { createRoot } from "react-dom/client";
// import { BrowserRouter } from "react-router-dom"; // install if you don't have it
// import App from "./App.tsx";
// import "./index.css";

// const isProd = import.meta.env.PROD;
// const basename = isProd ? "/GTM-First/" : "/"; // use repo name in production

// createRoot(document.getElementById("root")!).render(
//   <BrowserRouter basename={basename}>
//     <App />
//   </BrowserRouter>
// );
