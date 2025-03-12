"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from "react";

/**
 * Type definition for the Sidebar context
 */
interface SidebarContextType {
  isOpen: boolean;
  toggle: () => void;
}

/**
 * Default context value
 */
const SidebarContext = createContext<SidebarContextType>({
  isOpen: true,
  toggle: () => {},
});

/**
 * Provider component for sidebar state
 */
export function SidebarProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(true);

  // Use useCallback to prevent recreating the function on each render
  const toggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  // Attach event listener to the toggle button
  useEffect(() => {
    // Find the toggle button in the DOM
    const toggleBtn = document.querySelector("[data-toggle-sidebar]");

    if (toggleBtn) {
      // Define the event handler
      const handleToggle = () => {
        toggle();
      };

      // Add event listener
      toggleBtn.addEventListener("click", handleToggle);

      // Clean up on unmount
      return () => {
        toggleBtn.removeEventListener("click", handleToggle);
      };
    }
  }, [toggle]);

  return (
    <SidebarContext.Provider value={{ isOpen, toggle }}>
      {children}
    </SidebarContext.Provider>
  );
}

/**
 * Hook to access sidebar state
 */
export function useSidebar() {
  return useContext(SidebarContext);
}
