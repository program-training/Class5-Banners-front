import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Footer from "./Footer";
import { BrowserRouter } from "react-router-dom";

describe("their is a footer", () => {
  test("email", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
    expect(screen.getByText("Company@Banners.com")).toBeInTheDocument();
  });
});
