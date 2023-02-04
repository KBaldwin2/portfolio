import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Root from "./components/pages/Root";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Projects from "./components/pages/Projects";
import React, { useState, useEffect } from "react";
import CircleLoader from "react-spinners/CircleLoader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/projects", element: <Projects /> },
    ],
  },
]);


function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const imgs = [
      "./assets/Home/Home (2).png",
      "./assets/Home/Home (3).png",
      "./assets/Home/Home (4).png",
      "./assets/Home/Home (5).png",
      "./assets/Home/Home.png",
      "./assets/Home/Home (6).png",
      "./assets/me.png",
      "./assets/hiking.jpeg",
      "./assets/skiing.png",
      "./assets/portugal.png",
      "./assets/oilRig.png",
      "./assets/inToronto.png",
      "./assets/iceWaterRescue.png",
      "./assets/crossCountrySki.png",
      "./assets/biking.png",
      "./assets/mountain2.png",
    ];
    cacheImages(imgs);
  }, []);

  const cacheImages = async (images) => {
    const promises = await images.map((image) => {
      return new Promise(function (resolve, reject) {
        const img = new Image();
        img.image = image;
        img.onload = resolve();
        img.onerror = reject();
      });
    });
    await Promise.all(promises);
    setIsLoading(false);
  };

  return (
    <React.Fragment>
      {isLoading ? (
        <div className="spinner-div">
          <CircleLoader />
        </div>
      ) : (
        <RouterProvider router={router} />
      )}
    </React.Fragment>
  );
}

export default App;
