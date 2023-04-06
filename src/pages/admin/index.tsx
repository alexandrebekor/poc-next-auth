import { Avatar } from "@/components/Avatar";
import { GetServerSidePropsContext } from "next";
import { Session } from "next-auth";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]";
import { ButtonSignOut } from "@/components/Button/Signout";

const Admin = () => {
  return (
    <main>
      <Avatar />
      <p>Logged</p>
      <ButtonSignOut />
    </main>
  );
};

export default Admin;
