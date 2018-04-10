import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import Layout from './layout'
import { Typography } from 'material-ui'


const WeatherDetails = ({date, data, history}) => {
	let weatherLength = data.weather.length - 1
	
	return (
		<Layout backBtn updateBtn history={history}>
				<div className="row justify-content-center">
					<div className="wrapper">
					<div className="weather-block">
						{	
							data.weather.map((w, i) => {
								return (
									<div key={i} className="weather-condition">
										<div className="weather-icon">
											<i className={`wi wi-owm-${w.id}`}></i>
											{
												(weatherLength !== i) &&
													<div className="weather-arrowAnim">
													<div className="arrowSliding">
														<div className="arrow"></div>
													</div>
													<div className="arrowSliding delay1">
														<div className="arrow"></div>
													</div>
													<div className="arrowSliding delay2">
														<div className="arrow"></div>
													</div>
													<div className="arrowSliding delay3">
														<div className="arrow"></div>
													</div>
												</div>
											}
										</div>
										<div className="weather-desc">{w.description}</div>
									</div>
								)
							})
						}
					</div>
					<Typography gutterBottom variant="display3" color="inherit" align="center" component="div">
						{ Math.round(data.main.temp) } °C
					</Typography>
					<Typography gutterBottom variant="display2" color="inherit" align="center" component="div">
						{ data.name }
					</Typography>
					<Typography gutterBottom variant="subheading" color="primary" align="center">
						Updated: { moment(new Date(date)).fromNow() }
					</Typography>
					<Typography gutterBottom variant="title" color="inherit" align="center">
						{ data.weather[0].description }
					</Typography>
					<div className="weather-details">
						<i className="wi wi-humidity"></i>
						<span>{data.main.humidity}%</span>
					</div>
					<div className="weather-details">
						<i className="wi wi-barometer"></i>
						<span>{data.main.pressure} hPa</span>
					</div>
					<div className="weather-details">
						<i className="wi wi-strong-wind"></i>
						<span>{data.wind.speed} meter/sec</span>
					</div>
					<div className="weather-details">
						<i className="wi wi-cloudy"></i>
						<span>{data.clouds.all}%</span>
					</div>
				</div>
			</div>
		</Layout>
	)
}

WeatherDetails.propTypes = {
	date: PropTypes.number.isRequired
}

export default WeatherDetails