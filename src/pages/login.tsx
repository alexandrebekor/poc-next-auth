import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";

const Login = () => {
  const { register, handleSubmit } = useForm();

  const handleSignIn = async (data: any) => {
    const response = await signIn("credentials", {
      redirect: false,
      callbackUrl: `${window.location.origin}`,
      email: data.email,
      password: data.password,
    });

    console.log(response);
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
};

export default Login;
