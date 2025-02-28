"use client";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button"; // Assuming you have a Button component

export default function NavigationExample() {
  const router = useRouter();

  const navigateToDashboard = () => {
    router.push("/dashboard");
  };

  return (
    <div>
      <h2>Navigation Example</h2>
      <Button onClick={navigateToDashboard}>Go to Dashboard</Button>
    </div>
  );
}
