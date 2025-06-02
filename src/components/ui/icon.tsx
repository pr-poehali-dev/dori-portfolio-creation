import { LucideIcon, icons } from "lucide-react";

interface IconProps {
  name: keyof typeof icons;
  size?: number;
  className?: string;
  fallback?: keyof typeof icons;
}

const Icon = ({
  name,
  size = 24,
  className = "",
  fallback = "CircleAlert",
}: IconProps) => {
  const LucideIcon = icons[name] as LucideIcon;
  const FallbackIcon = icons[fallback] as LucideIcon;

  const IconComponent = LucideIcon || FallbackIcon;

  return <IconComponent size={size} className={className} />;
};

export default Icon;
