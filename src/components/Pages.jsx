import { Link, Outlet, Route, Routes, useParams } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home page</h1>
      <Link to={{ pathname: "/settings", search: "articleId=manish" }}>
        Settings
      </Link>
    </div>
  );
}

function About() {
  return <h1>About Page</h1>;
}

function Settings() {
  //   const article = useParams();
  return (
    <div>
      <h1>Settings Are Jus More</h1>
      <Outlet />
    </div>
  );
}

function MoreSettings() {
  const useId = useParams();
  return <h1>More Messages for {useId.id}</h1>;
}

function NotFound() {
  return <h1>Route not found</h1>;
}

export { Home, About, Settings, NotFound, MoreSettings };
