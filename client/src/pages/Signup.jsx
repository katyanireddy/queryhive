import { useState } from "react";
import axios from "axios";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  const handleSignup = async () => {
    try {
      const res = await axios.post(
        "http://localhost:8000/api/auth/signup",
        {
          name,
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
          Signup
        </h1>

        <input
          type="text"
          placeholder="Name"
          className="w-full p-3 rounded-lg bg-zinc-800 mb-4 outline-none"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
        />

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
          onClick={handleSignup}
          className="w-full bg-violet-600 hover:bg-violet-700 transition p-3 rounded-lg font-semibold"
        >
          Signup
        </button>
      </div>
    </div>
  );
}