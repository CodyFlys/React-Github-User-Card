import React from 'react';

class UserCard extends React.Component {
    constructor() {
      super();
      this.state = {
      };
  }

  render(props) {
    return (
            <div className="userCard">
                <h1>{this.props.user.login}</h1>
                <div className="profile-picture">
                <img src = {this.props.user.avatar_url} />
                </div>
                <h3>Followers: {this.props.user.followers}</h3>
                <h3>Following: {this.props.user.following}</h3>
                <h3>Public Repos: {this.props.user.public_repos}</h3>
            </div>
    )
  }
}

export default UserCard;