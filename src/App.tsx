import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// Layout

// Pages
import RootLayout from "./layout/RootLayout";
import About from "./pages/About";
import Careers from "./pages/Careers";
import Homepage from "./pages/Homepage";
import Pricing from "./pages/Pricing";
import Stories from "./pages/Stories";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Homepage />} />
        <Route path="about" element={<About />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="career" element={<Careers />} />
        <Route path="stories" element={<Stories />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
