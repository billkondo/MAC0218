import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const styles = theme => ({
  close: {
    padding: theme.spacing.unit / 2,
  },
});

class Message extends React.Component {

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={this.props.open}
          autoHideDuration={6000}
          onClose={() => this.props.toggleMenu()}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">{this.props.mensagem}</span>}
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              className={classes.close}
              onClick={() => this.props.toggleMenu()}
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
      </div>
    );
  }
}

Message.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Message);