import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Example: Remix" },
    { name: "description", content: "Remix full stack web app example" },
  ];
};

export default function Index() {
  return (
    <div>
      <header>
        <h1>Example: Remix</h1>
      </header>

      <main>
        <p>
          Web: <a href="https://remix.haidar.dev">remix.haidar.dev</a>
        </p>
        <p>
          Repo:{" "}
          <a href="https://github.com/haidar-dev/example-remix">
            github.com/haidar-dev/example-remix
          </a>
        </p>
      </main>

      <footer>
        <p>&copy; haidar.dev</p>
      </footer>
    </div>
  );
}
