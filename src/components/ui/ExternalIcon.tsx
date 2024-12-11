import { SocialIcon } from "react-social-icons";

import { FileText } from "lucide-react";

interface ExternalIconProps {
  url: string;
  title: string;
  size: number;
  override?: string;
}

export default function ExternalIcon({
  url,
  title,
  size,
  override,
}: ExternalIconProps) {
  const linkProperties = {
    target: "_blank",
    rel: "noopener noreferrer",
    className:
      "m-3 transition-transform duration-300 ease-in-out transform hover:scale-110",
  };

  const socialIconStyles = {
    ...linkProperties,
    className:
      "social-icon-class transition-transform duration-300 ease-in-out transform hover:scale-110",
    style: { height: size, width: size },
    fgColor: "currentColor",
    bgColor: "transparent",
    network: override,
  };
  if (override === "paper") {
    return (
      <a href={url} {...linkProperties} title={`Research Paper - ${title}`}>
        <FileText className="h-5 w-5" aria-label="Research Paper" />
      </a>
    );
  } else {
    return <SocialIcon url={url} title={title} {...socialIconStyles} />;
  }
}
