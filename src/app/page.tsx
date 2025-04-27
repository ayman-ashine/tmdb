import { Game } from "@/components/game";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Investigation Game",
};

export default function Home() {
  return <Game />;
}
