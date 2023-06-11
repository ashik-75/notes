import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// Layout

// Pages
import RootLayout from "./layout/RootLayout";
import Notes from "./pages/Notes";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Notes />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
