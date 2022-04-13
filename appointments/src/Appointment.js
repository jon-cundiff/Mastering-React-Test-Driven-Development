import React from "react";
import { appointmentTimeOfDay } from "./appointmentTimeOfDay";

export const Appointment = ({
    startsAt,
    customer: { firstName, lastName, phoneNumber, stylist, service, notes },
}) => (
    <div>
        <h1>{appointmentTimeOfDay(startsAt)}</h1>
        <table>
            <tbody>
                <tr>
                    <th>First Name:</th>
                    <td>{firstName}</td>
                </tr>
                <tr>
                    <th>Last Name:</th>
                    <td>{lastName}</td>
                </tr>
                <tr>
                    <th>Phone Number:</th>
                    <td>{phoneNumber}</td>
                </tr>
                <tr>
                    <th>Stylist:</th>
                    <td>{stylist}</td>
                </tr>
                <tr>
                    <th>Service:</th>
                    <td>{service}</td>
                </tr>
                <tr>
                    <th>Appointment Notes:</th>
                    <td>{notes}</td>
                </tr>
            </tbody>
        </table>
    </div>
);
