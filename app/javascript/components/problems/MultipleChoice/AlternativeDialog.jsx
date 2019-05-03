import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Grid,
  Divider,
  TextField,
  Switch,
  FormControlLabel
} from '@material-ui/core';

class AlternativeDialog extends React.Component {
  state = {
    isCorrect: false
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.checked });

  creatAlt = () => {
    const { create } = this.props;
    create(this.state.isCorrect);
    this.setState({ isCorrect: false });
  };

  render() {
    const { isOpen, close, clear, alternative, handleChange } = this.props;

    return (
      <Dialog open={isOpen} onClose={close} fullWidth maxWidth="sm">
        <DialogTitle>Criando uma alternativa</DialogTitle>

        <DialogContent style={{ paddingTop: 32 }}>
          <Grid container justify="flex-end" spacing={32}>
            <Grid item xs={12}>
              <TextField
                name="alternative"
                multiline
                variant="outlined"
                fullWidth
                label="Alternativa"
                value={alternative}
                onChange={handleChange}
              />
            </Grid>

            <Grid item>
              <FormControlLabel
                control={
                  <Switch
                    checked={this.state.isCorrect}
                    name="isCorrect"
                    onChange={this.handleChange}
                  />
                }
                label="Marcar como alternativa correta"
              />
            </Grid>
          </Grid>
        </DialogContent>

        <DialogActions>
          <Button onClick={clear} variant="outlined">
            Limpar
          </Button>
          <Button onClick={this.creatAlt} variant="outlined">
            Criar
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default AlternativeDialog;
