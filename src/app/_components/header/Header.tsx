import WidthContainer from "@/components/layout/width-container/WidthContainer";
import Link from "next/link";
import { ThemeToggle } from "../theme-toggle/ThemeToggle";

export default function Header() {
  return (
    <div className="border-b px-4 bg-secondary/50">
      <WidthContainer className="flex items-center justify-between py-4">
        <Link href="/" className="text-2xl font-bold text-orange">
          Titles
        </Link>
        <ThemeToggle />
      </WidthContainer>
    </div>
  );
}
