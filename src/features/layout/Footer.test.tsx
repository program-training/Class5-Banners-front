import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Footer from "./Footer";
import { BrowserRouter } from "react-router-dom";
import { userEvent } from "@testing-library/user-event";

describe("Footer", () => {
  test("navigator", async () => {
    const user = userEvent.setup();
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
    const navigator = screen.getByTitle("title for test");
    await user.click(navigator);

    expect(screen.getByText("Company@Banners.com")).toBeInTheDocument();
  });
});
