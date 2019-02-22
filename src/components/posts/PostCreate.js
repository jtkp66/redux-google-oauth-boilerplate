import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostCreate extends Component {
  renderInput(formProps) {
    return (
      <div className="field">
      <label>{ formProps.label }</label>
        <input {...formProps.input} />
      </div>
    )
  }

  // renderInput({ input }) {
  //   return <input {...input} />;
  // }

  render() {
    console.log(this.props);
    return (
      <form className="ui form">
        <Field name="title" component={this.renderInput} label="Enter a Title" />
        <Field name="description" component={this.renderInput} label="Enter a Description" />
      </form>
    )
  }
}

export default reduxForm({
  form: 'postCreate'
})(PostCreate);
