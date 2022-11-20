import { Link, Route, Routes } from "react-router-dom";
import { About, Home, MoreSettings, NotFound, Settings } from "./Pages";

export default function RouteSettings() {
  return (
    <div>
      <nav style={{ display: "flex", gap: "5px" }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/settings">Settings</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/settings" element={<Settings />}>
          <Route path=":id" element={<MoreSettings />} />
        </Route>
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
}
