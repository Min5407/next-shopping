"use client";
import { cn } from "@/lib/tailwind";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { ComponentProps } from "react";

type Props = {
  src: string;
  alt?: string;
  fallbackText?: string;
} & ComponentProps<typeof Avatar>;
export const ProfileAvatar = ({
  src,
  alt,
  fallbackText,
  ...avatarProps
}: Props) => {
  return (
    <Avatar
      {...avatarProps}
      className={cn(avatarProps.className, "flex justify-center items-center")}
    >
      <AvatarImage src={src} alt={alt || "Avatar"} className="rounded-full" />
      <AvatarFallback className="bg-gray-300 rounded-full w-6 h-6 flex items-center justify-center">
        {fallbackText || "A"}
      </AvatarFallback>
    </Avatar>
  );
};
