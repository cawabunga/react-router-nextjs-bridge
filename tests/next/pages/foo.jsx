import { Link } from "react-router-dom";
import NextBridgeRouter from "../../..";

export default function FooPage() {
  return (
    <NextBridgeRouter>
      <h1>I am Foo Page</h1>

      <Link to={"/"}>Go to Index</Link>
    </NextBridgeRouter>
  );
}
