"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function CreateBasicPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to home or show a "not available" message
    router.push("/");
  }, [router]);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Redirecting...</h1>
        <p>This authentication page is being migrated.</p>
      </div>
    </div>
  );
}
