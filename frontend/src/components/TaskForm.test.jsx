import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TaskForm from "./TaskForm";

test("renders form inputs and add button", () => {
  render(<TaskForm onAdd={() => {}} />);
  expect(screen.getByPlaceholderText(/title/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/description/i)).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /add/i })).toBeInTheDocument();
});

test("calls onAdd when form is submitted", () => {
  const mockAdd = jest.fn();
  render(<TaskForm onAdd={mockAdd} />);
  fireEvent.change(screen.getByPlaceholderText(/title/i), { target: { value: "Test Task" } });
  fireEvent.change(screen.getByPlaceholderText(/description/i), { target: { value: "Test Desc" } });
  fireEvent.click(screen.getByRole("button", { name: /add/i }));
  expect(mockAdd).toHaveBeenCalledTimes(1);
});
