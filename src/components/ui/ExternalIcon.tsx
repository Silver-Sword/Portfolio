import { SocialIcon } from "react-social-icons";

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
  const socialIconStyles = {
    target: "_blank",
    rel: "noopener noreferrer",
    className:
      "social-icon-class transition-transform duration-300 ease-in-out transform hover:scale-110",
    style: { height: size, width: size },
    fgColor: "currentColor",
    bgColor: "transparent",
    network: override,
  };
  return <SocialIcon url={url} title={title} {...socialIconStyles} />;
}
