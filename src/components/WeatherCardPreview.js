import React from 'react'
import { Link } from 'react-router-dom'
import { withStyles } from 'material-ui/styles'
import Card, { CardActions, CardContent } from 'material-ui/Card'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import moment from 'moment'

const styles = {
  card: {
		maxWidth: 250,
		borderRadius: 15
  }
}

const WeatherCardPreview = props => {
const {
	match: { url }, 
	classes,  
	weatherCard: { id, date, data }, 
	updateCard, 
	deleteCard,
	handleSnackbarClick } = props

	return (
		<Card className={classes.card}>
				<Typography gutterBottom variant="display1" color='secondary' align="center" component="span">
					<div className="card-icon">
						<i className={`wi wi-owm-${data.weather[0].id}`}></i>
					</div>
				</Typography>
			<CardContent>
				<Typography gutterBottom variant="display1" color='secondary' align="center" component="span">
					{ Math.round(data.main.temp) } °C
				</Typography>
				<Typography gutterBottom variant="headline" color='secondary' align="center" component="h3">
					{ data.name }
				</Typography>
				<Typography variant="caption" gutterBottom align="center">
					<div className="card-details">
						<i className="wi wi-humidity"></i>
						<span>{data.main.humidity}%</span>
					</div>
					<div className="card-details">
						<i className="wi wi-strong-wind"></i>
						<span>{data.wind.speed}m/s</span>
					</div>
				 </Typography>
				<Typography variant="caption" gutterBottom align="center">
        	Updated: { moment(new Date(date)).fromNow() }
      	</Typography>
			</CardContent>
			<CardActions>
				<Link to={`${url}/${id}`}>
					<Button size="small" color="secondary">
						More
					</Button>
				</Link>
				<Button size="small" color="secondary" onClick={() => {
						updateCard(id, data.name)
						handleSnackbarClick('Card was updated')
					}}>
					Update
				</Button>
				<Button size="small" color="secondary" onClick={() => deleteCard(id)}>
					Delete
				</Button>
			</CardActions>
		</Card>
	)
}

export default withStyles(styles)(WeatherCardPreview)