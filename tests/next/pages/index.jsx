import { Link } from "react-router-dom";
import NextBridgeRouter from "../../..";

export default function IndexPage() {
  return (
    <NextBridgeRouter>
      <h1>I am Index Page</h1>

      <Link to={"/foo"}>Go to Foo</Link>
    </NextBridgeRouter>
  );
}
