export type NavButtons = {
  title: string;
  icon: React.ReactNode;
  href: string;
};

export type SidebarContextType = {
  isOpen: boolean;
  toggleSidebar: () => void;
};

