import { LucideProps } from "lucide-react";
import { Code2, Gem, LayoutDashboard, Laptop, Paintbrush, PenTool, Smartphone } from "lucide-react";

export type IconKeys = "webdev" | "content" | "marketing" | "design" | "erp" | "mobile";

export const Icons = ({ name, ...props }: { name: IconKeys } & LucideProps) => {
  const icons: Record<IconKeys, React.ReactNode> = {
    webdev: <Code2 {...props} />,
    content: <PenTool {...props} />,
    marketing: <LayoutDashboard {...props} />,
    design: <Paintbrush {...props} />,
    erp: <Gem {...props} />,
    mobile: <Smartphone {...props} />,
  };

  return <>{icons[name]}</>;
};
