import React from 'react';

class Followers extends React.Component {
    constructor() {
      super();
      this.state = {
      };
  }

  render(props) {
    return (
            <div className="userCard">
                <h1>{this.props.followers.login}</h1>
                <div className="profile-picture">
                <img className="follower-pic" src = {this.props.followers.avatar_url} />
                </div>
            </div>
    )
  }
}

export default Followers;