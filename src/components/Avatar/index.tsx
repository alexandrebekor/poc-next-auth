import { useSession } from "next-auth/react";

const Avatar = () => {
  const { data, status } = useSession();

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
};

export { Avatar };
