import { Game } from "@/components/game";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Game Play",
};

export default function Home() {
  return <Game />;
}
