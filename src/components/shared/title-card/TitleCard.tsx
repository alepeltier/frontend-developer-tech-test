"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton/Skeleton";
import { AspectRatio } from "@/components/ui/aspect-ratio/AspectRatio";

export interface TitleImageProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string;
  alt: string;
}

const TitleImage = React.forwardRef<HTMLDivElement, TitleImageProps>(
  ({ className, src, alt, ...props }, ref) => {
    const [loaded, setLoaded] = React.useState(false);

    return (
      <AspectRatio
        ratio={12 / 19}
        className="rounded-xl overflow-hidden"
        ref={ref}
        {...props}
      >
        {!loaded ? <Skeleton className="w-full h-full" /> : null}
        <Image
          src={src}
          alt={alt}
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
          onLoad={() => setLoaded(true)}
          onError={() => setLoaded(true)}
          fill
          quality={50}
          sizes="(max-width: 768px) 300px, (max-width: 1200px) 200px, 180px"
          loading="eager"
          priority
        />
      </AspectRatio>
    );
  }
);
TitleImage.displayName = "TitleImage";

export interface TitleCardInfoProps
  extends React.HTMLAttributes<HTMLDivElement> {
  titleText: string;
  releaseYear: string;
}

// needs more breaking down

const TitleCardInfo = React.forwardRef<HTMLElement, TitleCardInfoProps>(
  ({ className, titleText, releaseYear, ...props }, ref) => {
    return (
      <div className="py-2">
        <p className="text-sm line-clamp-1 font-semibold">{titleText}</p>
        <p className="text-[11px] font-medium text-muted-foreground">
          {releaseYear}
        </p>
      </div>
    );
  }
);
TitleCardInfo.displayName = "TitleCardInfo";

export interface TitleCardProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

const TitleCard = React.forwardRef<HTMLAnchorElement, TitleCardProps>(
  ({ className, ...props }, ref) => {
    return (
      <Link
        ref={ref}
        className="border rounded-2xl p-1.5 hover:pointer"
        {...props}
      ></Link>
    );
  }
);
TitleCard.displayName = "TitleCard";

export { TitleImage, TitleCardInfo, TitleCard };
