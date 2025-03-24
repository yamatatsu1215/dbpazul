"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignupPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSignUp = async () => {
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email, password }),
    });

    if (res.ok) {
      const data = await res.json();
      setMessage(data.error || "登録成功！確認メールを送信しました");
      router.push("/");
    } else {
      throw new Error("サーバーエラー");
    }
  };

  return (
    <div>
      <form onSubmit={handleSignUp}>
        <h1>Signup</h1>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          value={password}
          placeholder="6文字以上で入力してください"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Signup</button>
        <p>{message}</p>
      </form>
    </div>
  );
}
