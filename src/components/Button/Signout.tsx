import { signOut } from "next-auth/react";
import { useRouter } from "next/router";

const ButtonSignOut = () => {
  const router = useRouter();

  const handleClick = async () => {
    const response = await signOut();

    console.log(response);
  };

  return <button onClick={handleClick}>Sair</button>;
};

export { ButtonSignOut };
