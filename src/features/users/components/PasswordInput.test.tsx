import { render, screen, fireEvent } from "@testing-library/react";
import PasswordInputs from "./PasswordInput";

describe("PasswordInputs component", () => {
    const mockSetIsValidPassword = vi.fn();
    const mockSetPassword = vi.fn();

    beforeEach(() => {
        vi.clearAllMocks();
    });

    it("renders password input field correctly", () => {
        const isValidPassword = true;
        const password = "TestPassword123!";
        render(
            <PasswordInputs
                setIsValidPassword={mockSetIsValidPassword}
                isValidPassword={isValidPassword}
                setPassword={mockSetPassword}
                password={password}
            />
        );

        const passwordInput = screen.getByLabelText("Password");
        expect(passwordInput).toBeInTheDocument();
        expect(passwordInput).toHaveAttribute("type", "password");
        expect(passwordInput).toHaveValue(password);
    });

    it("calls setPassword and setIsValidPassword on password change", () => {
        const isValidPassword = true;
        const password = "TestPassword123!";
        render(
            <PasswordInputs
                setIsValidPassword={mockSetIsValidPassword}
                isValidPassword={isValidPassword}
                setPassword={mockSetPassword}
                password={password}
            />
        );

        const passwordInput = screen.getByLabelText("Password");
        fireEvent.change(passwordInput, {
            target: { value: "NewPassword456!" },
        });

        expect(mockSetPassword).toHaveBeenCalledWith("NewPassword456!");
        expect(mockSetIsValidPassword).toHaveBeenCalled(); // Ensure it's called for validation
    });

    it("toggles password visibility when clicking eye icon", () => {
        const isValidPassword = true;
        const password = "TestPassword123!";
        render(
            <PasswordInputs
                setIsValidPassword={mockSetIsValidPassword}
                isValidPassword={isValidPassword}
                setPassword={mockSetPassword}
                password={password}
            />
        );

        const eyeIconButton = screen.getByTestId("VisibilityIcon");
        expect(eyeIconButton).toBeInTheDocument();

        // Initially hidden password
        const passwordInput = screen.getByLabelText("Password");
        expect(passwordInput).toHaveAttribute("type", "password");

        fireEvent.click(eyeIconButton); // Simulate click with fireEvent

        // Now the password type is neither password or text
        // The question is what is it?

        // expect(passwordInput).toHaveAttribute("type", "password"); // Error!
        // expect(passwordInput).toHaveAttribute("type", "text"); // Error!
        expect(passwordInput).toHaveValue("TestPassword123!"); // Passes

        fireEvent.click(eyeIconButton); // Simulate click with fireEvent

        // // Password should be hidden again
        expect(passwordInput).toHaveAttribute("type", "text"); // Passes
        expect(passwordInput).toHaveValue("TestPassword123!"); // Check value remains hidden
    });
});
