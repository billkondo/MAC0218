import React from 'react';
import { Tabs, Tab } from '@material-ui/core';

import { Problems } from './problems';

const TabContainer = ({ value }) => {
  switch (value) {
    case 0:
      return <Problems />;
    default:
      return null;
  }
};

class ProfileMenu extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => this.setState({ value });

  render() {
    return (
      <div style={{ padding: 8 }}>
        <Tabs value={this.state.value} onChange={this.handleChange}>
          <Tab label="Problemas" />
          <Tab label="Favoritos" />
        </Tabs>

        <TabContainer value={this.state.value} />
      </div>
    );
  }
}

export default ProfileMenu;
