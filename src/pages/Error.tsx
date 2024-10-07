import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div>
      <h4>Page not found</h4>
      <Link to="/">Back to homepage?</Link>
    </div>
  );
}
