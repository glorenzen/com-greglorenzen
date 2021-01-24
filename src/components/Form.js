import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import Button from "./styled/Button";

const HeaderWrapper = styled.div`
	width: 100%;
	margin-bottom: 20px;
`;

const Header = styled.h3``;

const StyledForm = styled.form`
	width: ${(props) => (props.width ? props.width : "auto")};
`;

const Fields = styled.ul`
	display: block;
	list-style-type: none;
	margin: 0;
	padding: 0;
`;

const Field = styled.li`
	display: flex;
	flex-direction: column;
	width: ${(props) => props.width};
`;

const FieldLabel = styled.label`
	font-size: 22px;
	font-weight: 600;
	color: #272521;
`;

const FieldInput = styled.input``;

const FieldTextArea = styled.textarea``;

const Footer = styled.div`
	margin-top: 25px;
`;

const Form = (props) => {
	const { headerText, formFields, width } = props;
	const [fields, setFields] = useState(formFields);

	const inputValues = useMemo(() => {
		let values = {};

		for (const field of fields) {
			values[field.name] = "";
		}

		return values;
	}, [fields]);

	const [inputState, setInputState] = useState(inputValues);

	const handleInputChange = (e) => {
		e.persist();

		setInputState((prevState) => {
			return { ...prevState, [e.target.id]: e.target.value };
		});
	};

	return (
		<StyledForm width={width}>
			<HeaderWrapper>
				<Header>{headerText}</Header>
			</HeaderWrapper>
			<Fields>
				{fields
					? fields.map((field) => {
							const { label, name, type, width = "auto" } = field;

							return (
								<Field width={width} key={name}>
									<FieldLabel htmlFor={name}>{label}</FieldLabel>
									{type === "textarea" ? (
										<FieldTextArea
											id={name}
											rows="7"
											value={inputState[name]}
											onChange={handleInputChange}
										/>
									) : (
										<FieldInput
											id={name}
											type={type}
											name={name}
											value={inputState[name]}
											onChange={handleInputChange}
										/>
									)}
								</Field>
							);
					  })
					: null}
			</Fields>
			<Footer>
				<Button type="submit">Submit</Button>
			</Footer>
		</StyledForm>
	);
};

export default Form;