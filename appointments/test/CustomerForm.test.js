import React from "react";
import ReactTestUtils from "react-dom/test-utils";
import { createContainer } from "./domManipulators";
import { CustomerForm } from "../src/CustomerForm";

describe("CustomerForm", () => {
    let render, container;

    const form = (id) => container.querySelector(`form[id="${id}"]`);
    const labelFor = (formElement) =>
        container.querySelector(`label[for="${formElement}"]`);
    const field = (name) => form("customer").elements[name];

    const expectToBeInputFieldOfTypeText = (formElement) => {
        expect(formElement).not.toBeNull();
        expect(formElement.tagName).toEqual("INPUT");
        expect(formElement.type).toEqual("text");
    };

    const itRendersAsATextBox = (fieldName) => {
        it("renders as a text box", () => {
            render(<CustomerForm />);
            expectToBeInputFieldOfTypeText(field(fieldName));
        });
    };

    const itIncludesTheExistingValue = (fieldName) => {
        it("includes the existing value", () => {
            render(<CustomerForm {...{ [fieldName]: "value" }} />);
            expect(field(fieldName).value).toEqual("value");
        });
    };

    const itRendersALabel = (fieldName, fieldText) => {
        it("renders a label", () => {
            render(<CustomerForm />);
            expect(labelFor(fieldName)).not.toBeNull();
            expect(labelFor(fieldName).textContent).toEqual(fieldText);
        });
    };

    const itAssignsAnIdThatMatchTheLabelId = (fieldName) => {
        it("assigns an id that matches the label id", () => {
            render(<CustomerForm />);
            expect(field(fieldName).id).toEqual(fieldName);
        });
    };

    const itSavesExistingValueWhenSubmitted = (fieldName, value) => {
        it("saves existing value when submitted", async () => {
            expect.hasAssertions();
            render(
                <CustomerForm
                    firstName={value}
                    onSubmit={({ firstName }) =>
                        expect(firstName).toEqual(value)
                    }
                />
            );
            await ReactTestUtils.Simulate.submit(form("customer"));
        });
    };

    const itSavesNewValueWhenSubmitted = (fieldName, value) => {
        it("saves new value when submitted", async () => {
            expect.hasAssertions();
            render(
                <CustomerForm
                    {...{ [fieldName]: "existingValue" }}
                    onSubmit={(props) =>
                        expect(props[fieldName]).toEqual(value)
                    }
                />
            );
            await ReactTestUtils.Simulate.change(field(fieldName), {
                target: { value, name: fieldName },
            });
            await ReactTestUtils.Simulate.submit(form("customer"));
        });
    };

    beforeEach(() => {
        ({ render, container } = createContainer());
    });

    it("renders a form", () => {
        render(<CustomerForm />);
        expect(form("customer")).not.toBeNull();
    });

    describe("first name field", () => {
        itRendersAsATextBox("firstName");
        itIncludesTheExistingValue("firstName");
        itRendersALabel("firstName", "First name");
        itAssignsAnIdThatMatchTheLabelId("firstName");
        itSavesExistingValueWhenSubmitted("firstName", "firstName");
        itSavesNewValueWhenSubmitted("firstName", "anotherFirstName");
    });

    describe("last name field", () => {
        itRendersAsATextBox("lastName");
        itIncludesTheExistingValue("lastName");
        itRendersALabel("lastName", "Last name");
        itAssignsAnIdThatMatchTheLabelId("lastName");
        itSavesExistingValueWhenSubmitted("lastName", "lastName");
        itSavesNewValueWhenSubmitted("lastName", "anotherLastName");
    });

    describe("phone number field", () => {
        itRendersAsATextBox("phoneNumber");
        itIncludesTheExistingValue("phoneNumber");
        itRendersALabel("phoneNumber", "Phone number");
        itAssignsAnIdThatMatchTheLabelId("phoneNumber");
        itSavesExistingValueWhenSubmitted("phoneNumber", "phoneNumber");
        itSavesNewValueWhenSubmitted("phoneNumber", "anotherPhoneNumber");
    });

    it("has a submit button", () => {
        render(<CustomerForm />);
        const submitButton = container.querySelector('input[type="submit"]');
        expect(submitButton).not.toBeNull();
    });
});
