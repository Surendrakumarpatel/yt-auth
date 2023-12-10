"use client";

import axios from "axios"
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function Home() {
  const router = useRouter();

  const logoutHandler = async () => {
    try {
      const res = await axios.get("/api/users/logout");
      router.push("/login");
      toast.success(res.data.message);
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  }

  return (
    <main className="flex bg-[#669bbc] min-h-screen py-10">
      <div>
        <h1>I am Home</h1>
        <button onClick={logoutHandler} className="bg-zinc-800 px-2 py-1 rounded-md text-white">Logout</button>
      </div>

    </main>
  )
}
