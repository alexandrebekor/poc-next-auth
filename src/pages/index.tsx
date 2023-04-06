import { GetServerSidePropsContext } from "next";
import { getServerSession } from "next-auth";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { authOptions } from "./api/auth/[...nextauth]";
import { redirect } from "next/dist/server/api-utils";

const Home = () => {
  const [messageError, setMessageError] = useState<string | null>(null);
  const { register, handleSubmit } = useForm();
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push("/admin");
    }
  }, [router, session]);

  const handleSignIn = async (data: any) => {
    const response = await signIn("credentials", {
      redirect: false,
      identifier: data.identifier,
      password: data.password,
    });

    if (response?.error) {
      setMessageError(response.error);
    } else {
      setMessageError(null);
    }

    if (response?.ok) {
      router.push("/admin");
    }
  };

  return (
    <main>
      <pre>{JSON.stringify(messageError, null, 2)}</pre>
      <form onSubmit={handleSubmit(handleSignIn)}>
        <label htmlFor="identifier">Email</label>
        <input {...register("identifier")} type="email" />

        <label htmlFor="password">Password</label>
        <input {...register("password")} type="password" />

        <button type="submit">Entrar</button>
      </form>
    </main>
  );
};

export default Home;
