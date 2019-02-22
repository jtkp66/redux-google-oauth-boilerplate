import React, { Component } from 'react';
import { Field, reduxForm, formValues } from 'redux-form';

class PostCreate extends Component {
  renderInput(formProps) {
    return (
      <div className="field">
        <label>{formProps.label}</label>
        <input {...formProps.input} />
        <div>{formProps.meta.error}</div>
      </div>
    )
  }

  // renderInput({ input }) {
  //   return <input {...input} />;
  // }

  onSubmit(formValues) {
    console.log(formValues);
  }

  render() {
    console.log(this.props);
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form">
        <Field name="title" component={this.renderInput} label="Enter a Title" />
        <Field name="description" component={this.renderInput} label="Enter a Description" />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};

  if (!formValues.title) {
    errors.title = 'You must enter a title.';
  }

  if (!formValues.description) {
    errors.description = 'You must enter a description.';
  }

  return errors;
};

export default reduxForm({
  form: 'postCreate',
  validate: validate
})(PostCreate);
