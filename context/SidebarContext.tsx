"use client";
import { createContext, useState, useContext, ReactNode } from "react";

type SidebarContextType = {
  isOpen: boolean;
  toggleSidebar: () => void;
};

const defaultValue: SidebarContextType = {
  isOpen: false,
  toggleSidebar: () => {},
};

const SidebarContext = createContext<SidebarContextType>(defaultValue);

export const SidebarProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <SidebarContext.Provider value={{ isOpen, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => useContext(SidebarContext);
