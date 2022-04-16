import React, { useState } from "react";

export const CustomerForm = ({
    firstName,
    lastName,
    phoneNumber,
    onSubmit,
}) => {
    const [customer, setCustomer] = useState({
        firstName,
        lastName,
        phoneNumber,
    });

    const handleTextChange = ({ target }) => {
        setCustomer({
            ...customer,
            [target.name]: target.value,
        });
    };
    return (
        <form id="customer" onSubmit={() => onSubmit(customer)}>
            <label htmlFor="firstName">First name</label>
            <input
                type="text"
                name="firstName"
                id="firstName"
                value={firstName}
                onChange={handleTextChange}
            />
            <label htmlFor="lastName">Last name</label>
            <input
                type="text"
                id="lastName"
                name="lastName"
                value={lastName}
                onChange={handleTextChange}
            />
            <label htmlFor="phoneNumber">Phone number</label>
            <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                value={phoneNumber}
                onChange={handleTextChange}
            />
            <input type="submit" value="Add" />
        </form>
    );
};
