import axios from "axios";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
  try {
    const res = await axios.post(
      "http://localhost:8000/api/auth/login",
      {
        email,
        password,
      }
    );

    console.log(res.data);

  } catch (error) {
    console.log(error);
  }
};

  return (
    <div className="h-screen bg-black text-white flex items-center justify-center">
      <div className="bg-zinc-900 p-8 rounded-2xl w-[400px]">
        <h1 className="text-3xl font-bold mb-6">
          Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 rounded-lg bg-zinc-800 mb-4 outline-none"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 rounded-lg bg-zinc-800 mb-4 outline-none"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button
          className="w-full bg-violet-600 hover:bg-violet-700 transition p-3 rounded-lg font-semibold"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
}