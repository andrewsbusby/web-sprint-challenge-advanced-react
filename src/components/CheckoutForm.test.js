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
    render ( <CheckoutForm/> );

    const firstName = screen.queryByLableText(/First Name/i);
    const lastName = screen.qeuryByLabelText(/Last Name/i);
    const address = screen.queryByLabelText(/Address/i);
    const city = screen.queryByLableText(/City/i);
    const state = screen.queryByLableText(/State/i);
    const zip = screen.queryByLableText(/Zip/i);
    const submitButton = document.querySelector('button');

    userEvent.type(firstName, 'Andrew');
    userEvent.type(lastName, 'Busby');
    userEvent.type(address, '123 some road');
    userEvent.type(city, 'Provo');
    userEvent.type(state, 'Utah');
    userEvent.type(zip, '12345');
    userEvent.click(submitButton);

    const successMessage = document.querySelector("[data-testid='successMessage']");

    expect(successMessage).toHaveTextContent(/Andrew Busby/);
    expect(successMessage).toHaveTextContent(/123 some road/);
    expect(successMessage).toHaveTextContent(/Prove/);
    expect(successMessage).toHaveTextContent(/Utah/);
    expect(successMessage).toHaveTextContent(/12345/);
});
