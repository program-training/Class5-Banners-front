import ConfirmPasswordInput from "./ConfirmPasswordInput";
import { render, renderHook, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import userEvent from "@testing-library/user-event";

describe("Confirm Password Input", () => {
  test("confirm", async () => {
    const { result: result1 } = renderHook(() => useState(""));
    const { result: result2 } = renderHook(() => useState(true));

    const [isValidConfirmPassword, setIsValidConfirmPassword] = result2.current;
    const [, setConfirmPassword] = result1.current;
    const prevP = "1234";
    const conP = "112";
    render(
      <BrowserRouter>
        <ConfirmPasswordInput
          isValidConfirmPassword={isValidConfirmPassword}
          setIsValidConfirmPassword={setIsValidConfirmPassword}
          setConfirmPassword={setConfirmPassword}
          prevPassword={prevP}
          ConfirmPassword={conP}
        />
      </BrowserRouter>
    );
    const input = screen.getByLabelText("ConfirmPassword");
    // console.log(input);

    // await fireEvent.change(input, { target: { value: "123" } });
    await userEvent.type(input, "123").then((input) => console.log(input));

    expect(setIsValidConfirmPassword).toBeTruthy();
  });
});
