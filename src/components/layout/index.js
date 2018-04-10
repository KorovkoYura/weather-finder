import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles, MuiThemeProvider } from 'material-ui/styles'
import lightTheme from '../../themes/lightTheme'
import darkTheme from '../../themes/darkTheme'
import TopBar from './TopBar'
import styles from './styles'

class Layout extends Component {
	state = {
		themeType: false
	}

	componentWillMount() {
		const localData = JSON.parse(localStorage.getItem('theme'))
		if (localData) {
			this.setState({themeType: localData})
		}
	}
	
	changeTheme = ({target: { checked }}) => {
		this.setState({ themeType: checked }, this._updateLocalStorage(checked))
	}

	_updateLocalStorage = data  => {
		let theme = JSON.stringify(data);
		localStorage.setItem('theme', theme);
	}

	render() {
		const { 
			classes, 
			history, 
			backBtn, 
			updateBtn, 
			addCard } = this.props

		return (
			<MuiThemeProvider theme={this.state.themeType ? darkTheme : lightTheme}>
				<TopBar 
					addCard={addCard} 
					classes={classes} 
					themeType={this.state.themeType} 
					changeTheme={this.changeTheme}
					backBtn={backBtn}
					updateBtn={updateBtn}
					history={history}
				/>
					<div className={`jumbotron ${classes.root}`}>
						<div className="container">
							{
								this.props.children
							}
						</div>
					</div>
			</MuiThemeProvider>
		)
	}
}

Layout.propTypes = {
	classes: PropTypes.object.isRequired,
	backBtn: PropTypes.bool,
	updateBtn: PropTypes.bool
}

export default withStyles(styles)(Layout)
