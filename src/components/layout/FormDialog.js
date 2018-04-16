import React, { Component, Fragment } from 'react'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from 'material-ui/Dialog'

class FormDialog extends Component {
	state = {
		isError: false
	}

	handleCheckValue = value => {
		if (this.props.handleCheckValue(value)) {
			this.setState({ isError: false })
			this.props.handleClose()
		} else {
			this.setState({ isError: true })
		}
	}

	render() {
		const {
			open, 
			value, 
			handleClose,
			handleChange } = this.props

		return (
			<Fragment>
				<Dialog
						open={open}
						onClose={handleClose}
						aria-labelledby="form-dialog-title"
					>
						<DialogTitle id="form-dialog-title">Add city</DialogTitle>
						<DialogContent>
							<DialogContentText>
								To add a new city to this website, please enter the name here.
							</DialogContentText>
							<TextField
								autoFocus
								margin="dense"
								id="name"
								label="City"
								type="text"
								color="secondary"
								value={value}
								onChange={handleChange}
								fullWidth
							/>
								{
									this.state.isError ? 
										<Typography variant="caption" color="error" gutterBottom align="center">
											The field is empty. Please entere the value.
										</Typography>
									: ''
								}
						</DialogContent>
						<DialogActions>
							<Button onClick={handleClose} color="secondary">
								Cancel
							</Button>
							<Button onClick={() => { this.handleCheckValue(value) }} color="secondary">
								Add
							</Button>
						</DialogActions>
					</Dialog>
			</Fragment>
		)
	}
}

export default FormDialog 