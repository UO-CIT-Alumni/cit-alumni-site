import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image } from 'semantic-ui-react';

export default class PersonCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card>
        <Image src={this.props.avatar} />
        <Card.Content>
          <Card.Header>
            { this.props.name }
          </Card.Header>
        </Card.Content>
      </Card>
    )
  }
}

PersonCard.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string,
};

PersonCard.defaultProps = {
  name: 'Lorem Ipsum',
  avatar: '',
};
