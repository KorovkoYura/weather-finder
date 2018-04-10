import React from 'react'
import PropTypes from 'prop-types'
import { FormGroup, FormControlLabel } from 'material-ui/Form'
import Switch from 'material-ui/Switch'

 const SwitchLabel = ({ themeType, changeTheme }) => {
	return (
		<FormGroup row>
			<FormControlLabel
				control={
					<Switch
						checked={themeType}
						onChange={e => changeTheme(e)}
					/>
					}
				label="Theme"
			/>
		</FormGroup>
	)
}

SwitchLabel.propTypes = {
	themeType: PropTypes.bool.isRequired,
	changeTheme: PropTypes.func.isRequired
};

export default SwitchLabel