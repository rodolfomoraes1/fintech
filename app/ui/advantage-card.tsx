import Image, { ImageProps } from "next/image";

interface AdvantageCardProps {
  imageSrc: ImageProps["src"];
  imageAlt: string;
  title: string;
  description: string;
  imageWidth?: number;
  imageHeight?: number;
  className?: string;
}

export function AdvantageCard({
  imageSrc,
  imageAlt,
  title,
  description,
  imageWidth = 73,
  imageHeight = 56,
  className = "",
}: AdvantageCardProps) {
  return (
    <div className={`flex flex-col items-center text-center ${className}`}>
      <div className="mb-4">
        <Image
          width={imageWidth}
          height={imageHeight}
          src={imageSrc}
          alt={imageAlt}
          className="object-contain"
          style={{ width: "auto", height: `${imageHeight}px` }}
        />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2 text-green-400">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}
