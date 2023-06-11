import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function RootLayout() {
  return (
    <div>
      <Header />

      <main className="min-h-screen bg-black pt-24 text-zinc-200">
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
