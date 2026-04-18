import { Outlet } from "react-router";

export default function RootLayout() {
  return (
    <div className="min-h-screen bg-bg flex justify-center">
      <div className="relative w-full max-w-sm min-h-screen bg-bg flex flex-col">
        <main className="flex-1 overflow-y-auto pb-20">
          <Outlet />
        </main>
        {/* BottomNav goes here */}
      </div>
    </div>
  );
}
