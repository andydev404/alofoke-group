import { cn } from "@/lib/utils";
import sanitizeHtml from "sanitize-html";

type Props = {
  html: string;
  className?: string;
};

export function SanitizedHtml({ html, className }: Props) {
  return (
    <div
      className={cn(className)}
      dangerouslySetInnerHTML={{
        __html: sanitizeHtml(html),
      }}
    />
  );
}
