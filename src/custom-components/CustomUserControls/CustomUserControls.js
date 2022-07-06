import * as Flex from '@twilio/flex-ui';
import React, { Component } from 'react';
import { UserControlsWrapper } from './CustomUserControls.styles'
import AgentActivities from '../../utils/AgentActivities'



class CustomUserControls extends Component {
  render() {
    const { workerState: { worker } } = this.props;
    const attributes = worker.attributes;
    const { fullName, isAvailable } = worker;
    console.log("user wrapper ", AgentActivities.getCSSConfig())

   
    // NOTE: This will use a "hack" of sorts...
    // Using css it will show/hide and change the order of the activities
    // Mostly because there isn't a way to hook into the native component
    return (
      <UserControlsWrapper activitiesConfig={AgentActivities.getCSSConfig()}>
        <Flex.UserControls />
      </UserControlsWrapper>
    );
  }
}

export default CustomUserControls;
