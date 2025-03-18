"use client";
import React, { useEffect } from "react";

/**
 * SEO Component
 *
 * This component handles basic SEO functionality by dynamically setting the document title.
 * It appends the provided title to the application name "Rathburn" in the browser tab.
 *
 * As a client component, it uses the useEffect hook to update the document title when mounted
 * or when the title prop changes.
 *
 * @param {object} props - Component props
 * @param {string} props.title - The page-specific title to be appended to the app name
 * @returns {JSX.Element} An empty fragment as this component doesn't render visible content
 *
 * @example
 * // Usage in a page component
 * <Seo title="Dashboard" /> // Sets document title to "Rathburn - Dashboard"
 */
const Seo = ({ title }: { title: string }) => {
  useEffect(() => {
    document.title = `Rathburn - ${title}`;
  }, [title]); // Added title as dependency to ensure title updates when prop changes

  return <></>;
};

export default Seo;
