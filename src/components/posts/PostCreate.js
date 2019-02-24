import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPost } from '../../actions';
import PostForm from './PostForm';

class PostCreate extends Component {
  onSubmit = (formValues) => {
    this.props.createPost(formValues);
  }

  render() {
    console.log(this.props);
    return(
      <div>
        <h3>Create a Post</h3>
        <PostForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, { createPost })(PostCreate);
