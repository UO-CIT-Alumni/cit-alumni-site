import React from 'react';
import { Image, Menu, Header, Segment, Grid} from 'semantic-ui-react';

export default class People extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      <h1>People</h1>
          <Grid relaxed columns={4}>
            <Grid.Column>
              <Image src='/assets/images/wireframe/image.png' />
            </Grid.Column>
            <Grid.Column>
              <Image src='/assets/images/wireframe/image.png' />
            </Grid.Column>
            <Grid.Column>
              <Image src='/assets/images/wireframe/image.png' />
            </Grid.Column>
            <Grid.Column>
              <Image src='/assets/images/wireframe/image.png' />
            </Grid.Column>
          </Grid>
        </div>
    )
  }
}
