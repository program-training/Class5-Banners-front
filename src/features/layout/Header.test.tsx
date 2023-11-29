import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Header from "./Header";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../redux/store";

describe("Header", () => {
  test("renders header components", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const logoButton = screen.getByRole("button", {
      name: "go to banner management page",
    });
    const myBannersButton = screen.getByRole("button", { name: "My Banners" });

    expect(logoButton).toBeInTheDocument();
    expect(myBannersButton).toBeInTheDocument();
  });

  test("clicking logo navigates to home page", async () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const logoButton = screen.getByRole("button", {
      name: "go to banner management page",
    });

    await userEvent.click(logoButton);
    expect(window.location.pathname).toBe("/");
  });

  test("clicking 'My Banners' navigates to the 'my-banners' page", async () => {
    const user = userEvent.setup();
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    await user.click(screen.getByText("My Banners"));

    expect(window.location.pathname).toBe("/my-banners");
  });

  test("header has correct background color", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const appBar = screen.getByRole("banner");

    expect(appBar).toHaveStyle({ backgroundColor: "#6d9edf" });
  });

  // Add assertions based on the expected behavior of user menu interaction.
});

test("dispatches the correct action on user interaction", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const myBannersButton = screen.getByRole("button", { name: "My Banners" });

  userEvent.click(myBannersButton);

  // Check if the Redux state is updated as expected.
  // Add assertions based on the expected state changes.
});

test("displays error message when an error occurs", () => {
  // Mock the Redux state to simulate an error.
  // Render the component and check if the error message is displayed.
});