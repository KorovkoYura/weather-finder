import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import { KeyboardBackspace } from 'material-ui-icons'
import Button from 'material-ui/Button'
import FormDialog from './FormDialog'
import SwitchLabel from './SwitchLabel'

class TopBar extends Component {
	state = {
		open: false,
		value: ''
  }
	
	handleClickOpen = () => {
    this.setState({ open: true })
  }

  handleClose = () => {
    this.setState({ open: false })
	}
	
	handleChange = ({ target: { value } }) => {
		this.setState({ value })
	}

	render() {
	const { 
		classes, 
		history, 
		addCard, 
		themeType, 
		changeTheme, 
		backBtn, 
		updateBtn } = this.props
	
		return (
				<AppBar position="static">
					<Toolbar>
						{
							(backBtn === true) ? 
								(<Fragment>
									<Button   
										className={classes.backButton} 
										variant="flat"
										color="inherit"
										size="large"
										onClick={() => history.push('/weather-finder')}>
										<KeyboardBackspace style={{fontSize: 38}} />
									</Button>
									<Typography variant="display1" color="inherit" 	className={classes.flex}>
										Current weather
									</Typography>
								</Fragment>)
							: 
								(<Typography variant="display1" color="inherit" className={classes.flex}>
									Weather Finder
								</Typography>)
						}
						<SwitchLabel 
							themeType={themeType} 
							changeTheme={changeTheme}
						/>
						{
							updateBtn === false ?
							<Button className={classes.topBarButton} color="inherit"onClick={this.handleClickOpen}>Add city</Button>
							: ""
						}
						<FormDialog
							open={this.state.open}
							value={this.state.value}
							handleClose={this.handleClose}
							addCard={addCard}
							handleChange={this.handleChange}
						/>
					</Toolbar>
				</AppBar>
		)
	}
}

TopBar.propTypes = {
  classes: PropTypes.object.isRequired,
}


export default TopBar