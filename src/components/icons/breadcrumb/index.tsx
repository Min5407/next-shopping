import { LucideProps } from "lucide-react";

export const Breadcrumb = (props: LucideProps) => {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
      className="ml-2 h-5 w-5 flex-shrink-0 text-gray-300"
    >
      <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
    </svg>
  );
};
