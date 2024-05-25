import { useParams } from "react-router-dom";

export default function B() {
  const { id } = useParams();

  return <div>{id}</div>;
}

export const Component = B;
