import React, { Component } from 'react';
import { Image, Menu, Header, Segment } from 'semantic-ui-react';

import Homepage from './Homepage.jsx';
import Newsfeed from './Newsfeed.jsx';
import People from './People.jsx';
import ErrorBoundary from './ErrorBoundary.jsx';
import Profile from './Profile.jsx'
import Terms from './Terms.jsx'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 'home'
    }
  }

  handleMenuItemClick(e, {name}) {
    this.setState({ activeItem: name });
  }

  render() {
    let content;
    switch(this.state.activeItem) {
      case 'home':
        content = <Homepage />;
        break;

      case 'news':
        content = <Newsfeed />;
        break;

      case 'people':
        content = <People />;
        break;

      case 'profile':
        content = <Profile />;
        break;

      case 'terms':
        content = <Terms />;
        break;
    }

    return (
      <ErrorBoundary>
        <Segment>
          <Menu>
            <Menu.Item
              name="home"
              active={true}
              active={this.state.activeItem === 'home'}
              onClick={this.handleMenuItemClick.bind(this)}
              >Home
            </Menu.Item>

            <Menu.Item
              name="news"
              active={true}
              active={this.state.activeItem === 'news'}
              onClick={this.handleMenuItemClick.bind(this)}
              >News
            </Menu.Item>

            <Menu.Item
              name="people"
              active={true}
              active={this.state.activeItem === 'people'}
              onClick={this.handleMenuItemClick.bind(this)}
              >People
            </Menu.Item>

            <Menu.Item
              name="profile"
              active={true}
              active={this.state.activeItem === 'profile'}
              onClick={this.handleMenuItemClick.bind(this)}
              >Profile
            </Menu.Item>

            <Menu.Item
              name="terms"
              active={true}
              active={this.state.activeItem === 'terms'}
              onClick={this.handleMenuItemClick.bind(this)}
              >Terms
            </Menu.Item>
          </Menu>
        </Segment>

        <Segment>
          {content}
        </Segment>
      </ErrorBoundary>
    );
  }
}
