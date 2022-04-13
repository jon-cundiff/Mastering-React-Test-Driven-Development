import React from "react";
import ReactDOM from "react-dom";
import { Appointment } from "../src/Appointment";

describe("Appointment", () => {
    let container;
    let customer;

    beforeEach(() => {
        container = document.createElement("div");
    });

    const render = (component) => ReactDOM.render(component, container);

    it("renders the customer first name", () => {
        customer = { firstName: "Ashley" };
        render(<Appointment customer={customer} />);
        expect(container.textContent).toMatch("Ashley");
    });

    it("renders another customer first name", () => {
        customer = { firstName: "Jordan" };
        render(<Appointment customer={customer} />);
        expect(container.textContent).toMatch("Jordan");
    });

    it("renders the customer last name", () => {
        customer = { lastName: "Jones" };
        render(<Appointment customer={customer} />);
        expect(container.textContent).toMatch("Jones");
    });

    it("renders the customer's phone number", () => {
        customer = { phoneNumber: "132-321-1234" };
        render(<Appointment customer={customer} />);
        expect(container.textContent).toMatch("132-321-1234");
    });

    it("renders the stylist's name", () => {
        customer = { stylist: "Jane Doe" };
        render(<Appointment customer={customer} />);
        expect(container.textContent).toMatch("Jane Doe");
    });

    it("renders the salon service", () => {
        customer = { service: "Haircut" };
        render(<Appointment customer={customer} />);
        expect(container.textContent).toMatch("Haircut");
    });

    it("renders appointment notes", () => {
        customer = {
            notes: "Thicker hair",
        };
        render(<Appointment customer={customer} />);
        expect(container.textContent).toMatch("Thicker hair");
    });

    it("renders the appointment time in a heading", () => {
        const today = new Date();
        const startsAt = today.setHours(12, 0);

        render(<Appointment startsAt={startsAt} customer={{}} />);
        expect(container.querySelector("h1").textContent).toEqual("12:00");
    });
});
