import { render, screen } from "@testing-library/react";
import AppRoutes from "./App";

test("renders learn react link", () => {
  render(<AppRoutes />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
