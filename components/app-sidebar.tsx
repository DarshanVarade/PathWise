"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { BookOpen, Brain, Compass, Home, LayoutDashboard, LogOut, MessageCircle, Trophy, Users } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"

export function AppSidebar() {
  const pathname = usePathname()

  const menuItems = [
    { title: "Home", icon: Home, path: "/" },
    { title: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
    { title: "Career Roadmap", icon: Compass, path: "/roadmap" },
    { title: "AI Assistant", icon: MessageCircle, path: "/assistant" },
    { title: "Learning Resources", icon: BookOpen, path: "/resources" },
  ]

  return (
    <Sidebar>
      <SidebarHeader className="flex items-center justify-between p-4">
        <Link href="/" className="flex items-center gap-2">
          <Brain className="h-6 w-6 text-primary" />
          <span className="font-bold text-xl">PathWise</span>
        </Link>
        <SidebarTrigger />
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.path}>
              <SidebarMenuButton asChild isActive={pathname === item.path} tooltip={item.title}>
                <Link href={item.path}>
                  <item.icon className="h-5 w-5" />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="p-4">
        <div className="flex items-center justify-between">
          <Button variant="outline" size="sm" className="w-full">
            <LogOut className="mr-2 h-4 w-4" />
            <span>Sign Out</span>
          </Button>
          <ModeToggle />
        </div>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}

