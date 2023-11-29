import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { BrowserRouter } from "react-router-dom";
import ErrorPage from "./ErrorPage";

describe("Error Page", () => {
  test("working", async () => {
    render(
      <BrowserRouter>
        <ErrorPage />
      </BrowserRouter>
    );
    const Error = screen.getByRole("heading", {
      name: /the page you are looking for does not exist\./i,
    });

    expect(Error).toBeInTheDocument();
  });
});
