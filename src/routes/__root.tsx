import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { navLinks } from "../../navLinks";

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="min-h-screen flex flex-col">
        <header className="flex items-center border-b border-gray-200 bg-gray-50 p-4 gap-4">
          <h1 className="text-2xl font-semibold text-gray-800">
            React mini projects
          </h1>
        </header>
        <div className="flex flex-1">
          <aside className="w-56 border-r border-gray-200 bg-white">
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
                        className={`block text-sm py-2 px-4 text-gray-700 hover:bg-purple-200 hover:text-purple-600 hover:font-semibold transition-colors duration-100`}
                        activeProps={{
                          className: `text-white font-semibold bg-purple-500`,
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
          <main className="flex-1 p-4">
            <Outlet />
          </main>
        </div>
      </div>
      <TanStackRouterDevtools position="bottom-right" />
    </>
  ),
});
