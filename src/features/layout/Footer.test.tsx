import { render, screen, waitFor } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Footer from "./Footer";
import { BrowserRouter } from "react-router-dom";
import { userEvent } from "@testing-library/user-event";

const BASE_URL = "http://localhost" || process.env.VITE_BASE_URL;
const PORT = ":3000/" || process.env.VITE_PORT;

describe("Footer", () => {
  test("clicking should navigate to the correct URL", async () => {
    //  userEvent הפעלה של
    const user = userEvent.setup();
    render(
      //עטיפת הקומפוננטה בראוטר
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
    // תפיסת הכפתור שלחיצה עליו אמורה לשנות נתיב
    const Button = screen.getByTitle("title for test");

    //דימוי של לחיצה על הכפתור הנל
    user.click(Button);

    // הבדיקה לאחר תוצאה אסינכרונית
    await waitFor(() => {
      // בדיקה שאחרי לחיצה הנתיב השתנה לנתיב מסויים
      expect(window.location.href).toEqual(`${BASE_URL}${PORT}`);
      // בדיקה שאחרי לחיצה הנתיב השתנה לנתיב ריק
      expect(window.location.pathname).toEqual("/");
    });
  });
});
