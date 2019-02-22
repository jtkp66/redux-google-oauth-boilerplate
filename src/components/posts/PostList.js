import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../../actions';

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderAdmin(post) {
    if (post.userId === this.props.currentUserId) {
      return (
        <div className="right floated content">
          <button className="ui button primary">Edit</button>
          <button className="ui button negative">Delete</button>
        </div>
      )
    }
  }

  renderList() {
    return this.props.posts.map(post => {
      return (
        <div className="item" key={post.id}>
          {this.renderAdmin(post)}
          <i className="large middle aligned icon book" />
          <div className="content">
            {post.title}
            <div className="description">{post.description}</div>
          </div>
        </div>
      )
    })
  }

  renderCreate() {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: 'right' }}>
          <Link to="/posts/new" className="ui button primary">Create Post</Link>
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        <h2>POSTS</h2>
        <div className="ui celled list">{this.renderList()}</div>
        {this.renderCreate()}
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  return {
    posts: Object.values(state.posts),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  };
}

export default connect(mapStatetoProps, { fetchPosts })(PostList);
