import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/funliner-yacht")({
  beforeLoad: () => {
    throw redirect({
      to: "/rentals/funliner-yacht",
      replace: true,
    });
  },
});
