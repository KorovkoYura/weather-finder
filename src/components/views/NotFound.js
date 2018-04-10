import React from 'react'
import Layout from '../layout'
import { Typography, Button } from 'material-ui'

const NotFound = ({history}) => {
	return (
		<Layout>
			<div className="row">
				<div className="col-12">
					<Typography align='center' variant="headline" gutterBottom>
						The page you are looking for does not exist.
					</Typography>
				</div>
				<Button
					style={{margin: '0 auto'}}
					variant="raised"
					color="primary"
					size="large"
					onClick={() => history.push('/')}>
					Home page
				</Button>
			</div>
		</Layout>
	)
}

export default NotFound