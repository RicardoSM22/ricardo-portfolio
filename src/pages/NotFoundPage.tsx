import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6">
      <h1 className="text-6xl font-bold">404</h1>

      <p>Page not found</p>

      <Link
        to="/"
        className="px-4 py-2 rounded bg-primary text-white"
      >
        Back Home
      </Link>
    </div>
  );
}