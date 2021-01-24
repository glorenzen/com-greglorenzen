import React from "react";
import Form from "../components/Form";

import Section from "../components/styled/Section";
import Row from "../components/styled/Row";

export default () => {
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
			type: "textarea",
			name: "message",
			label: "Message"
		}
	];

	return (
		<div>
			<Section>
				<Row>
					<Form headerText="Contact" formFields={contactFields} width="400px" />
				</Row>
			</Section>
		</div>
	);
};
