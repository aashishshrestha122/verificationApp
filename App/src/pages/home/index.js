import React, { Fragment, useEffect } from 'react';
import axios from 'axios';
import { Button } from "react-bootstrap";
import ReactInputVerificationCode from 'react-input-verification-code';
import { useHistory } from "react-router-dom";

import ErrorComponent from '../../component/ErrorComponent';

import "./index.css";


const http = axios.create({
	baseURL: `http://localhost:5000/api`,
	headers: {
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': '*'
	},
})

const Home = () => {

	const styleButtons = {
		textAlign: 'center'
	}

	const heading = {
		textAlign: 'center'
	}

	const history = useHistory();

	const [value, setValue] = React.useState("");
	const [showErr, setShowErr] = React.useState(false);
	const [resMessage, setResMessage] = React.useState([]);

	const clearValue = () => setValue("");

	const handleSubmit = async () => {
		const payload = { value };
		try {
			const { data } = await http.post('/verify/', payload);
			if (data) {
				history.push('/success')
			}
		} catch (err) {
			setShowErr(true);
			setResMessage({ err: err.response.data.message });
		}
	}

	return (
		<Fragment>
			<div style={heading}><h3>Verification Code</h3></div>
			<ReactInputVerificationCode
				length={6}
				onChange={setValue}
				value={value}
				placeholder=''
			/>
			<div style={styleButtons}>
				<Button onClick={clearValue} variant='danger'>Clear</Button>
				<Button onClick={handleSubmit} variant='primary' className='mx-2'>Submit</Button>
			</div>

			{showErr && <ErrorComponent data={resMessage} />}
		</Fragment>
	)
}

export default Home;