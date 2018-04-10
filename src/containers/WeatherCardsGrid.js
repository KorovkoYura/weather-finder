import React, { Component } from 'react'
import { connect } from 'react-redux'
import Layout from '../components/layout'
import WeatherCardPreview from '../components/WeatherCardPreview'
import { addCard, updateCard, deleteCard } from '../actions/weatherCard'
import Grid from 'material-ui/Grid'
import SnackbarMessage from '../components/SnackbarMessage'
import Default from '../components/Default'

import '../styles/weather-icons-master/css/weather-icons.min.css'
import '../styles/weather-icons-master/css/weather-icons-wind.min.css'
import '../styles/cardPreview.css'

class WeatherCardsGrid extends Component {
	state = {
		snackbar: false,
		message: ''
  };

  handleSnackbarClick = message => {
    this.setState({ snackbar: true, message });
  };

  handleSnackbarClose = () => {
    this.setState({ snackbar: false });
	};
	
	componentWillReceiveProps(nextProps) {
		const prevCards = this.props.weatherCards.length
		const newCards = nextProps.weatherCards.length

		if (prevCards < newCards) {
			this.handleSnackbarClick('Card was added')
		} else if (prevCards > newCards ) {
			this.handleSnackbarClick('Card was deleted')
		} 
	}

	render() {
		const { 
			match, 
			weatherCards, 
			addCard, 
			updateCard, 
			deleteCard } = this.props

		return (
			<Layout backBtn={false} updateBtn={false} addCard={addCard}>
				<Grid container spacing={24}>
					{
						weatherCards.length ? 
							weatherCards.map((card, index) => {
								return (
									<Grid key={index} item xs={12} sm={6} md={3}>
										<WeatherCardPreview
											match={match}
											weatherCard={card}
											updateCard={updateCard}
											deleteCard={deleteCard}
											handleSnackbarClick={this.handleSnackbarClick}
										/>
									</Grid>
								)
						})
						: <Default />
					}
					<SnackbarMessage
						snackbar={this.state.snackbar}
						handleSnackbarClose={this.handleSnackbarClose}
						message={this.state.message}
					/>
				</Grid>
			</Layout>
		)
	}
}

const mapStateToProps = state => {
  return {
    weatherCards: state.weatherCards
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addCard: name => {
			dispatch(addCard(name))
		},
		updateCard: (id, name) => {
      dispatch(updateCard(id, name))
		},
		deleteCard: id => {
      dispatch(deleteCard(id))
		}
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(WeatherCardsGrid)
