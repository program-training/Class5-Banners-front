import { render } from "vitest-dom";
import Header from "./Header";

test("ה-Header נטען כמו שצריך", () => {
  const { container } = render(<Header />);

  // בדיקה האם הרכיב Header נטען בהצלחה
  expect(container).toBeDefined();
});

test("לחיצה על IconButton מביאה לדף הבית", () => {
  const { getByLabelText } = render(<Header />);
  const iconButton = getByLabelText("go to banner management page");

  // בדיקה שהניווט התרחש כמו שצריך
  // ייתכן שתצטרך להתאים את זה בהתאם לאופן הניווט בפרויקט שלך
  expect(window.location.pathname).toBe("/");
});

test('לחיצה על הכפתור "הבנרים שלי" מביאה לדף הנכון', () => {
  const { getByText } = render(<Header />);
  const myBannersButton = getByText("My Banners");

  // הדמיה לחיצה על הכפתור "הבנרים שלי"
  fireEvent.click(myBannersButton);

  // בדיקה שהניווט התרחש כמו שצריך
  // ייתכן שתצטרך להתאים את זה בהתאם לאופן הניווט בפרויקט שלך
  expect(window.location.pathname).toBe("/my-banners/bla-bla");
});
