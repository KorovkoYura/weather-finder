import React from 'react'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from 'material-ui/Dialog'

const FormDialog  = ({
	open, 
	value, 
	handleClose, 
	addCard, 
	handleChange}) =>  {

	return (
		<div>
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
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="secondary">
              Cancel
            </Button>
            <Button onClick={() => {
							addCard(value)
							handleClose()
						}} color="secondary">
              Add
            </Button>
          </DialogActions>
        </Dialog>
		</div>
	)
}

export default FormDialog 