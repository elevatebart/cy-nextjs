import { useRouter } from "next/router";
import { test } from "../../test";

export default () => {
  const router = useRouter();

  return (
    <p>
      {router.pathname}
      {test()}
    </p>
  );
};
