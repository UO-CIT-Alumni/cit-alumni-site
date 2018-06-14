import React, { Component } from 'react';
import { Image, Menu, Header, Segment } from 'semantic-ui-react';

import ErrorBoundary from './ErrorBoundary.jsx';
import Homepage from './Homepage.jsx';
import Newsfeed from './Newsfeed.jsx';
import People from './People.jsx';

import './App.css';

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
      default:
      case 'home':
        content = <Homepage />;
        break;

      case 'news':
        content = <Newsfeed />;
        break;

      case 'people':
        content = <People />;
        break;
    }

    return (
      <ErrorBoundary>
        <Segment className="header">
          <Menu>
            <Menu.Item
              name="home"
              active={this.state.activeItem === 'home'}
              onClick={this.handleMenuItemClick.bind(this)}
              >Home
            </Menu.Item>

            <Menu.Item
              name="news"
              active={this.state.activeItem === 'news'}
              onClick={this.handleMenuItemClick.bind(this)}
              >News
            </Menu.Item>

            <Menu.Item
              name="people"
              active={this.state.activeItem === 'people'}
              onClick={this.handleMenuItemClick.bind(this)}
              >People
            </Menu.Item>
          </Menu>
        </Segment>

        <Segment className="content">
          {content}
        </Segment>
      </ErrorBoundary>
    );
  }
}
