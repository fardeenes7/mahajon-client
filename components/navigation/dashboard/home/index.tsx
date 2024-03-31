import Logo from "@/components/navigation/logo"
import UserNavigation from "@/components/navigation/user"

import NotificationDropdown from "../notification"

export function DashboardHomeNavigation({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className=" min-h-screen w-full ">
      <div className="flex flex-col">
        <header className="w-full flex h-14 items-center justify-between gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <div className="w-full flex-1">
            <Logo />
          </div>
          <div className="flex items-center justify-between gap-x-4">
            <NotificationDropdown />
            <UserNavigation />
          </div>
        </header>
        {children}
      </div>
    </div>
  )
}