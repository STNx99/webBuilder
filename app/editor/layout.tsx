"use client";
import { EditorSideBar2 } from "@/components/editor/sidebar/EditorSideBar";
import LayoutSideBar from "@/components/editor/sidebar/LayoutSideBar";
import EditorProvider from "@/components/provider/EditorProvider";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function EditorLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <SidebarProvider>
      <EditorProvider>
        <div className="flex w-screen h-screen">
          <EditorSideBar2 />
          <main className="w-full">
            <SidebarTrigger />
            {children}
          </main>
          <LayoutSideBar/>
        </div>
      </EditorProvider>
    </SidebarProvider>
  );
}
