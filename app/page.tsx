import { Navbar } from "@/components/navbar";
import { Background } from "@/components/background";
import Main from "@/components/main";

export default function Home() {
  return (
    <div className="flex flex-col min-h-max">
      <Background />
      <Navbar />
      <Main />
    </div>
  );
}