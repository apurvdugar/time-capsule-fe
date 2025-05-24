import { z } from "zod"
export type NavButtons = {
  title: string;
  icon: React.ReactNode;
  href: string;
};

export type SidebarContextType = {
  isOpen: boolean;
  toggleSidebar: () => void;
};

export const capsuleSchema = z.object({
  title: z.string().min(2, {
    message: "title must be at least 2 characters.",
  }),
  description: z.string().optional(),
  unlockDate: z.date(),
  unlockTime: z.string().regex(/^([0-1]\d|2[0-3]):([0-5]\d)$/, {
    message: "Please enter a valid time (HH:MM).",
  }),
})
export type TCapsuleSchema = z.infer<typeof capsuleSchema>;
export type sadfa = {
    title: string,
    description?: string
    unlockDate: string,
    unlockTime?: null,
}
export let arr:sadfa[] = [];