import React from "react";
import Form from "../components/Form";

import Section from "../components/styled/Section";
import Row from "../components/styled/Row";
import Column from "../components/styled/Column";

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
					<Column>
						<Form headerText="Contact" formFields={contactFields} width="400px" />
					</Column>
				</Row>
			</Section>
		</div>
	);
};
