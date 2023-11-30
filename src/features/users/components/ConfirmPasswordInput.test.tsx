import ConfirmPasswordInput from "./ConfirmPasswordInput";
import { render, renderHook, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { BrowserRouter } from "react-router-dom";
import { useState } from "react";

describe("Confirm Password Input", () => {
  test("confirm", async () => {
    const { result } = renderHook(() => useState(true));
    const [isValidConfirmPassword, setIsValidConfirmPassword] = result.current;
    console.log(result);

    render(
      <BrowserRouter>
        <ConfirmPasswordInput
          isValidConfirmPassword={isValidConfirmPassword}
          setIsValidConfirmPassword={setIsValidConfirmPassword}
          prevPassword=""
        />
      </BrowserRouter>
    );

    const confirm = screen.queryByText(/passwords doesn't match/i);

    expect(confirm).not.toBeInTheDocument();
  });
});
