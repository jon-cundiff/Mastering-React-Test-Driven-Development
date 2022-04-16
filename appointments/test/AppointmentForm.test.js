import React from "react";
import { createContainer } from "./domManipulators";
import { AppointmentForm } from "../src/AppointmentForm";

describe("AppointmentForm", () => {
    let render, container;

    let consoleSpy;
    beforeAll(() => {
        consoleSpy = jest
            .spyOn(global.console, "error")
            .mockImplementation((message) => {
                if (!message.includes("ReactDOM.render")) {
                    global.console.error(message);
                }
            });
    });

    afterAll(() => consoleSpy.mockRestore());

    beforeEach(() => {
        ({ render, container } = createContainer());
    });

    const form = (id) => {
        container.querySelector(`form[id="${id}"]`);
    };

    it("renders a form", () => {
        render(<AppointmentForm />);
        expect(form("appointment")).not.toBeNull();
    });
});
