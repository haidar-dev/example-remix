import type { MetaFunction } from "@remix-run/node";

import { Anchor, Button, DatePicker } from "~/components";

export const meta: MetaFunction = () => {
  return [
    { title: "remix.haidar.dev - Remix Example" },
    { name: "description", content: "Remix full stack web app example" },
  ];
};

export default function Index() {
  return (
    <div>
      <section className="space-y-8">
        <div className="flex gap-4">
          <Button>Click this</Button>
          <DatePicker name="date" />
        </div>

        <div className="prose">
          <p>
            Web:{" "}
            <Anchor href="https://remix.haidar.dev" withColor>
              remix.haidar.dev
            </Anchor>
          </p>
          <p>
            Repo:{" "}
            <Anchor
              href="https://github.com/haidar-dev/example-remix"
              withColor
            >
              github.com/haidar-dev/example-remix
            </Anchor>
          </p>
        </div>
      </section>
    </div>
  );
}
