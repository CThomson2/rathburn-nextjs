"use client";

import { createContext, useContext, useEffect, useState } from "react";

/**
 * Type definition for the sidebar context
 * @property {boolean} isOpen - Current state of the sidebar (open or closed)
 * @property {() => void} toggle - Function to toggle the sidebar state
 */
type SidebarContextType = {
  isOpen: boolean;
  toggle: () => void;
};

/**
 * Context for managing sidebar state across the application
 * Initially undefined, will be populated by SidebarProvider
 */
const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

/**
 * Provider component that manages sidebar state
 * - Persists sidebar state in localStorage
 * - Applies appropriate CSS classes to the document
 * - Provides toggle functionality to child components
 *
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components that will have access to sidebar context
 */
export function SidebarProvider({ children }: { children: React.ReactNode }) {
  // Default to open sidebar
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    // Initialize from localStorage on mount
    const savedState = localStorage.getItem("sidebarOpen");
    setIsOpen(savedState !== "false");

    // Apply class to html element
    document.documentElement.classList.toggle(
      "sidebar-open",
      savedState !== "false"
    );
  }, []);

  /**
   * Toggles the sidebar state, updates localStorage, and applies CSS classes
   */
  const toggle = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    localStorage.setItem("sidebarOpen", String(newState));
    document.documentElement.classList.toggle("sidebar-open", newState);
  };

  return (
    <SidebarContext.Provider value={{ isOpen, toggle }}>
      {children}
    </SidebarContext.Provider>
  );
}

/**
 * Custom hook to access sidebar state and toggle function
 *
 * @returns {SidebarContextType} Object containing isOpen state and toggle function
 * @throws {Error} If used outside of a SidebarProvider
 */
export function useSidebar() {
  const context = useContext(SidebarContext);
  if (context === undefined) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
}
