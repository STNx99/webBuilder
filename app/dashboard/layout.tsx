"use client";
import { ReactNode } from 'react';

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="dashboard-container">
      {/* Add any dashboard-specific layout elements like sidebar, navigation, etc. */}
      <main className="dashboard-content">
        {children}
      </main>
    </div>
  );
}
