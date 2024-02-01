import { render, screen, waitFor } from "@testing-library/react";
import Home from "@/app/page";
import "@testing-library/jest-dom";

describe("Home", () => {
  it("Should Have Home Text", async () => {
    render(await Home({ searchParams: { page: "1" } }));
    const HomeText = screen.getByText("Home");
    expect(HomeText).toBeInTheDocument();
  });
});
