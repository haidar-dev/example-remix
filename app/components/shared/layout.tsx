import { Anchor } from "../ui";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="p-layout py-4">
        <h1>
          <Anchor href="https://remix.haidar.dev">remix.haidar.dev</Anchor>
        </h1>
      </header>

      <main className="flex-[1] p-layout">{children}</main>

      <footer className="p-layout py-4 bg-secondary">
        <p>
          &copy; <Anchor href="https://haidar.dev">haidar.dev</Anchor>
        </p>
      </footer>
    </div>
  );
}
