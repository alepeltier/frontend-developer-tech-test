import { AspectRatio } from "@/components/ui/aspect-ratio/AspectRatio";
import Image from "next/image";

interface TitleImageProps {
  src: string;
  alt: string;
}

// TODO - add skeleton loading and error handling

export default function TitleImage({ src, alt }: TitleImageProps) {
  return (
    <AspectRatio className="flex justify-center items-center rounded-2xl overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        style={{
          objectFit: "contain",
          objectPosition: "center",
        }}
      />
    </AspectRatio>
  );
}
