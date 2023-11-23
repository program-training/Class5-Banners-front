import { render, screen } from "@testing-library/react";
import BannerCard from "./BannerCard";
import { describe, expect, test } from "vitest";

const sampleProduct = {
  ID: 1,
  title: "Sample Product",
  description: "This is a sample product",
  image: "sample-image-url.jpg",
};
describe("banner card", () => {
  test("renders BannerCard with sample product", () => {
    render(<BannerCard selectedProduct={sampleProduct} />);
    const title = screen.getByText("Sample Product");
    const description = screen.getByText("This is a sample product");
    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });
});
