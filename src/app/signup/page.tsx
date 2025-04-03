"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { supabase } from "@/lib/supabase";
import Image from "next/image";
import Header from "../components/landing/Header";
import Footer from "../components/landing/Footer";

export default function SignupPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profile, setProfile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [message, setMessage] = useState("");

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setProfile(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const uploadImage = async () => {
    if (!profile) return null;
    const fileName = `profile-${Date.now()}-${profile.name}`;
    const { data, error } = await supabase.storage
      .from("profile-image")
      .upload(fileName, profile);
    
    if (error) {
      setMessage("画像のアップロードに失敗しました");
      return null;
    }
    return `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/profile-image/${fileName}`;
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const imageUrl = await uploadImage();
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email, password, profileImage: imageUrl }),
    });

    if (res.ok) {
      const data = await res.json();
      setMessage(data.error || "登録成功！確認メールを送信しました");
      router.push("/");
    } else {
      setMessage("サーバーエラー: " + res.statusText);
    }
  };

  return (
    <div>
    <Header />
      <form onSubmit={handleSignUp} encType="multipart/form-data">
        <h1>Signup</h1>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" value={password} placeholder="6文字以上で入力してください" onChange={(e) => setPassword(e.target.value)} />
        <input type="file" accept="image/*" onChange={handleImageChange} />
        {preview && <Image src={preview} alt="Preview" width={100} height={100} />}
        <button type="submit">Signup</button>
        <p>{message}</p>
      </form>
      <Footer />
    </div>
  );
}
