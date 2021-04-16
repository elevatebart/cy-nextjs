import { useRouter } from "next/router";

export default () => {
  const router = useRouter();
  return <p>{router.pathname}</p>;
};
