import React, { useState } from "react";
import Form from "../components/Form";

import Section from "../components/styled/Section";
import Row from "../components/styled/Row";
import Column from "../components/styled/Column";

export default () => {
	const [hasSubmit, setHasSubmit] = useState(false);

	const contactFields = [
		{
			type: "text",
			name: "first-name",
			label: "First Name"
		},
		{
			type: "text",
			name: "last-name",
			label: "Last Name"
		},
		{
			type: "email",
			name: "email",
			label: "Email"
		},
		{
			type: "textarea",
			name: "message",
			label: "Message"
		}
	];

	const encode = (data) => {
		return Object.keys(data)
			.map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
			.join("&");
	};

	const handleSubmit = (e, state) => {
		console.log(state);

		fetch("/", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: encode({ "form-name": "contact", ...state })
		})
			.then(() => setHasSubmit(true))
			.catch((error) => alert(error));

		e.preventDefault();
	};

	return (
		<div>
			<Section>
				<Row>
					<Column>
						{!hasSubmit ? (
							<Form
								headerText="Contact"
								formFields={contactFields}
								width="400px"
								netlify={true}
								handleSubmit={handleSubmit}
								name="contact"
							/>
						) : (
							<h2 style={{ textAlign: "center" }}>
								Thanks for reaching out, I will get back to you as soon as I can!
							</h2>
						)}
					</Column>
				</Row>
			</Section>
		</div>
	);
};
