import React from 'react';
import Modal from '../Modal';
import history from '../../history';

const PostDelete = () => {
  const actions = (
    <React.Fragment>
      <button className="ui button negative">Delete</button>
      <button className="ui button">Cancel</button>
    </React.Fragment>
  )

    return (
      <div>
        Post Delete
        <Modal
          title="Delete Post"
          content="Are you sure you want to delete this Post"
          actions={actions}
          onDismiss={() => history.push('/')}
        />
      </div>
    )
}

export default PostDelete;
