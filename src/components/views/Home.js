import React from 'react'
import { Button, Typography } from 'material-ui'

const Home = props => {
	return (
		<div style={{
			position: 'absolute', 
			width: '100%', 
			height: '100%',
			display: 'flex', 
			flexDirection: 'column', 
			justifyContent: 'center', 
			alignItems: 'center'
			}}>
			<Typography variant="display4" gutterBottom>
				Weather Finder
			</Typography>
			<Button
				style={{margin: '0 auto'}}
				variant="raised"
				color="primary"
				size="large"
				onClick={() => props.history.push('/weather-finder')}>
				Get started
			</Button>
	</div>
	)
}

export default Home