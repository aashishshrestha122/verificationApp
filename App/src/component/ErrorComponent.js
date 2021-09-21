import React, { Fragment } from 'react'
import { Alert } from 'react-bootstrap';

const ErrorComponent = ({ data }) => {

	return (
		<Fragment>
			<Alert variant='danger'>
				{data.err}
			</Alert>
		</Fragment >
	)
}

export default ErrorComponent