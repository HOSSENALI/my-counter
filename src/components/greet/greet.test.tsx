import { render, screen } from "@testing-library/react";
import React from "react";
import { Greet } from "./greet";

test("greeting text existing check", () => {
  render(<Greet />);
  const textElement = screen.getByText(/hello/i);
  expect(textElement).toBeInTheDocument(); 
});

test("greeting with name", () => {
  render(<Greet name={"Hossen"}/>);
  const textElement = screen.getByText("Hello Hossen");
  expect(textElement).toBeInTheDocument(); 
});
