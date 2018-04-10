import React from 'react'
import { Paper, Typography } from 'material-ui'

const Default = props => {
  return (
		<Paper style={{padding: '5em', width: '100%', textAlign: 'center'}}>
			 <Typography variant="headline" gutterBottom>
			 	There is no cards
      </Typography>
			<Typography variant="title" gutterBottom>
			To add a new card please click 'Add city' button
      </Typography>
		</Paper>
  )
}

export default Default