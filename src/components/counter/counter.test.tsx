import { render, screen } from "@testing-library/react";
import React from "react";
import { Counter } from "./counter";

describe('Counter testing',()=>{
    let wrapper;
    beforeEach(() => {
       wrapper= render(<Counter />)
      });
    test("render the title of counter",()=>{
        // render(<Counter />)
        const textElement = screen.getByTestId('custom-element');
        expect(textElement).toBeInTheDocument(); 
    })
})