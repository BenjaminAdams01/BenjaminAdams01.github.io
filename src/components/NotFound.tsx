import { Link } from "react-router";

interface Props {
  error?: string;
}

function NotFound({ error = "Page Not Found" }: Props) {
  return (
    <div className="page">
      <h1>{error}</h1>
      <Link to="/">Return To Home Page</Link>
    </div>
  );
}

export default NotFound;
