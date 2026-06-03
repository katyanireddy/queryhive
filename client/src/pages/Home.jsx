import { useEffect, useState } from "react";
import axios from "axios";


function Home() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8000")
      .then((res) => {
        console.log(res.data);
        setMessage(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-black text-white">
      <h1 className="text-5xl font-bold mb-4">
        QueryHive
      </h1>

      <p className="text-xl text-gray-400">
        {message}
      </p>
    </div>
  );
}

export default Home;