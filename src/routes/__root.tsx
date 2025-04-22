import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { navLinks } from "../../navLinks";
import { Analytics } from "@vercel/analytics/react";

export const Route = createRootRoute({
  component: () => (
    <>
      <Analytics />
      <div className="h-screen flex flex-col">
        <header className="flex items-center border-b border-gray-200 bg-gray-50 p-4 gap-4 shrink-0">
          <h1 className="text-2xl font-semibold text-gray-800">
            <Link to="/">React mini projects</Link>
          </h1>
        </header>
        <div className="flex flex-1 min-h-0">
          <aside className="w-56 border-r border-gray-200 bg-white overflow-y-auto shrink-0">
            <nav className="flex flex-col py-2">
              {navLinks.map((sectionData) => (
                <div key={sectionData.section} className="mb-4">
                  <h3 className="text-sm font-semibold text-gray-900 uppercase px-4 mb-2">
                    {sectionData.section}
                  </h3>
                  {sectionData.links.map((link) => (
                    <div key={link.to}>
                      <Link
                        to={link.to}
                        activeOptions={{}}
                        preload="intent"
                        className={`block text-sm py-2 px-4 text-gray-700 hover:bg-blue-200 hover:text-blue-600 hover:font-semibold transition-colors duration-100`}
                        activeProps={{
                          className: `text-white font-semibold bg-blue-500`,
                        }}
                      >
                        {link.label}
                      </Link>
                    </div>
                  ))}
                </div>
              ))}
            </nav>
          </aside>
          <main className="flex-1 p-4 overflow-y-auto">
            <Outlet />
          </main>
        </div>
      </div>
      <TanStackRouterDevtools position="bottom-right" />
    </>
  ),
});
