import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

const handleLogin = async () => {
    console.log("LOGIN BUTTON CLICKED");

    console.log(email);
    console.log(password);
    
  try {
    const res = await axios.post(
      "http://localhost:8000/api/auth/login",
      {
        email,
        password,
      }
    );
    console.log("FULL RESPONSE:", res.data);

    localStorage.setItem(
      "token",
      res.data.token
    );

    console.log(
        "TOKEN AFTER SAVE:",
        localStorage.getItem("token")
    );

    localStorage.setItem(
      "user",
      JSON.stringify(res.data.user)
    );

    navigate("/dashboard");

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