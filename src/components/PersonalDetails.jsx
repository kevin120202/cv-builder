import React, { useState } from "react";
import '../index.css'
import Resume from "./Resume";

function PersonalDetails(props) {
    // console.log(props.formData);

    return (
        <div>
            <form>
                <h2>Personal Details</h2>
                <label htmlFor="full-name">Full name</label>
                <input type="text"
                    placeholder="Enter full name"
                    onChange={props.onChange}
                    value={props.formData.fullName}
                    name="fullName"
                    id="full-name" />
                <label htmlFor="email">Email</label>
                <input type="text"
                    placeholder="Enter email"
                    onChange={props.onChange}
                    value={props.formData.email}
                    name="email"
                    id="email" />
                <label htmlFor="phone-number">Phone number</label>
                <input type="text"
                    placeholder="Enter phone number"
                    onChange={props.onChange}
                    value={props.formData.number}
                    name="number"
                    id="phone-number" />
                <label htmlFor="address">Address</label>
                <input type="text"
                    placeholder="Enter address"
                    onChange={props.onChange}
                    value={props.formData.address}
                    name="address"
                    id="address" />
            </form>
        </div>
    )
}

export default PersonalDetails