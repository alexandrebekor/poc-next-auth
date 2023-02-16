import { Inter } from "@next/font/google";
import { useForm } from "react-hook-form";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { register, handleSubmit } = useForm();

  const handleSignIn = (data: any) => {
    console.log(data);
  };

  return (
    <main>
      <form onSubmit={handleSubmit(handleSignIn)}>
        <label htmlFor="email">Email</label>
        <input {...register("email")} type="email" />

        <label htmlFor="password">Password</label>
        <input {...register("password")} type="password" />

        <button type="submit">Entrar</button>
      </form>
    </main>
  );
}
