import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from '../Modal.js';
import history from '../../history';
import { fetchPost, deletePost } from '../../actions';

class PostDelete extends React.Component {
  componentDidMount() {
    console.log(this.props);
    this.props.fetchPost(this.props.match.params.id)
  }

  renderActions() {
    const { id } = this.props.match.params;

    return (
      <React.Fragment>
        <button onClick={() => this.props.deletePost(id)} className="ui button negative">Delete</button>
        <Link to="/" className="ui button">Cancel</Link>
      </React.Fragment>
    );
  }

  renderContent() {
    if (!this.props.post) {
      return 'Are you sure you want to delete this post?'
    }

    return `Are you sure you want to delete the post with title: ${this.props.post.title}`
  }

  render() {
    return (
      <Modal
        title="Delete Post"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push('/')}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { post: state.posts[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostDelete);
