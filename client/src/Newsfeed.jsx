import React from 'react';

export default class Newsfeed extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.getPosts()
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  async getPosts() {
    const response = await fetch('/api/posts', { mode: 'cors' });
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  }

  render() {
    return (
      <h1>Newsfeed</h1>
    )
  }
}
