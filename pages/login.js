import { useState } from "react";
import { useRouter } from "next/router";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    const data = await res.json();

    if (data.success) {
      localStorage.setItem("admin", "true");
      router.push("/edit");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-dynamic relative overflow-hidden">
      <div className="gradient-circle" aria-hidden="true" />
      <div className="gradient-circle-bottom" aria-hidden="true" />

      <div className="relative w-full max-w-md p-8 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 shadow-2xl">
        <div className="mb-6 text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-sky-200">
            Admin Login
          </h1>
          <p className="mt-2 text-sm text-sky-100/80">
            Sign in to manage your portfolio
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            className="w-full px-4 py-3 bg-black/30 border border-white/12 placeholder-sky-100/60 text-sky-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 transition"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            aria-label="Username"
          />

          <input
            className="w-full px-4 py-3 bg-black/30 border border-white/12 placeholder-sky-100/60 text-sky-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 transition"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            aria-label="Password"
          />

          <button
            className="w-full bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-900 text-white py-3 rounded-lg font-semibold hover:scale-[1.02] active:scale-100 transform-gpu transition shadow-[0_8px_30px_rgba(2,6,23,0.6)]"
            type="submit"
            aria-label="Login"
          >
            Login
          </button>
        </form>

        <div className="mt-4 text-center text-sm text-white/70">
          <a href="/" className="underline hover:text-white">
            Back to site
          </a>
        </div>
      </div>
    </div>
  );
}
