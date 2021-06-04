import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm/>);
    screen.getByText('Checkout Form');
});

test("form shows success message on submit with form details", () => {
    render (<CheckoutForm/>)
});
