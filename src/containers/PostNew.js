import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

import { createPost } from '../actions';

class PostNew extends Component {
  renderField(field){
    const {meta: { touched, error }} = field;
    const className = `form-group ${ touched && error ? 'has-danger' : ''}`
    return (
      <div className={ className }>
        <label>{field.label}</label>
        <input 
          className="form-control"
          type="text"
          {...field.input}
        />
        <div className="text-help">
          {touched ? error : ''}
        </div>
      </div>
    )
  }

  onSubmit(values){
    this.props.createPost(values, () => {
      this.props.history.push('/');
    });
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div>
        {/* passing a callback to handleSubmit so have to bind this */}
        <form onSubmit={ handleSubmit(this.onSubmit.bind(this))}> 
          <Field label="Title" name="title" component={this.renderField} />
          <Field label="Category" name="categories" component={this.renderField} />
          <Field label="Content" name="content" component={this.renderField} />
          <button className="btn btn-primary" type="submit">Submit</button>
          <Link className="btn btn-danger" to="/"> Cancel </Link>
        </form>
      </div>
    );
  }
}

function validate(values){
  const error = {}
  
  if(!values.title) {
    error.title = "Please enter a title"
  }
  if(!values.categories) {
    error.categories = "Please enter a category"
  }
  if(!values.content) {
    error.content = "Please enter content"
  }
  return error;
}

export default reduxForm({
  validate,
  form: "PostNewForm"
})(
  connect(null, { createPost })(PostNew)
);
