import { render, screen, waitFor } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { BrowserRouter } from "react-router-dom";
import { userEvent } from "@testing-library/user-event";

describe("הבדיקה", () => {
  test("הבדיקה", async () => {
    const user = userEvent.setup();

    render(<BrowserRouter> הקומפוננטה </BrowserRouter>);

    const a = screen.getByTitle("title for test");

    expect(a).toBeInTheDocument();

    user.click(a);

    await waitFor(() => {
      // לבדיקת נתיב
      expect(window.location.pathname).toEqual("הנתיב הרצוי");
    });
  });
});
