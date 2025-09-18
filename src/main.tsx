import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Landing from "./routes/Landing";
import ClassView from "./routes/ClassView";
import Certificate from "./routes/Certificate";
import LeaderboardMain from "./routes/LeaderboardMain";
import LeaderboardSample from "./routes/LeaderboardSample";
import SampleClass from "./routes/Sample";
import "./styles.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "leaderboard", element: <LeaderboardMain /> },
      { path: "leaderboard-sample", element: <LeaderboardSample /> },
      { path: "sample", element: <SampleClass /> },
      { index: true, element: <Landing /> },
      { path: "class/:lessonId", element: <ClassView /> },
      { path: "certificate", element: <Certificate /> }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);