import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import WeatherCardsGrid from './containers/WeatherCardsGrid'
import WeatherDetails from './components/WeatherDetails'
import Home from './components/views/Home'
import NotFound from './components/views/NotFound'

class App extends Component {
  render() {
		const { weatherCards } = this.props

    return (
      <BrowserRouter>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/weather-finder" component={WeatherCardsGrid} />
					<Route path="/weather-finder/:id" render={
						props => <WeatherDetails {...props} 
							{...weatherCards.find(card => card.id == props.match.params.id)} />
					} />
					<Route component={NotFound} />
				</Switch>
			</BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    weatherCards: state.weatherCards
  }
}

export default connect(mapStateToProps, {})(App)
