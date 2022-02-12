import React from "react";
import SimpleSidebar from "../Sidebar";

interface LayoutProps {}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <SimpleSidebar>{children}</SimpleSidebar>;
};

export default Layout;
