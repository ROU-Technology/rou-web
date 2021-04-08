import React, { Component } from "react";
import "./About.css";
import { toast } from "react-toastify";

export default class AboutPage extends Component {
  state = {
    form: {
      name: "",
      email: "",
      organization: "",
      address: "",
      message: "",
    },

    error: {},
  };

  onChange = (event) => {
    let { form } = this.state;
    let updateForm = {
      ...form,
      [event.target.name]: event.target.value,
    };
    this.setState({ form: updateForm });
  };

  formIsValid = () => {
    const _errors = {};
    const { email, name, address, message } = this.state.form;

    if (email === "") _errors.email = "Email is required";
    if (name === "") _errors.name = "Name is required";
    if (address === "") _errors.address = "Address is required";
    if (message === "") _errors.message = "A Message is required";

    this.setState({ error: _errors });

    // Form is valid if the _errors object has no properties

    return Object.keys(_errors).length === 0;
  };

  canBeSubmitted = () => {
    const { email, name, address, message } = this.state.form;
    return (
      email.length > 0 &&
      name.length > 0 &&
      address.length > 0 &&
      message.length > 0
    );
  };

  handleFormSubmit = (event) => {
    const _newForm = {
      name: "",
      email: "",
      organization: "",
      address: "",
      message: "",
    };
    event.preventDefault();
    if (!this.formIsValid()) {
      toast.error("Please fill in the required field");
    }
    console.log(this.state.form);
    this.setState({ form: _newForm });
    toast.success("Your message Successfully sent");
    this.props.history.push("/sus");
  };

  render() {
    const isEnabled = this.canBeSubmitted();
    return (
      <div className="container-fluid jumbotron">
        <h1 className="ab-h1">About</h1>
        <p>
          We are a company, working together to help Youths make their dreams
          come true by imparting futuristic skills. We started ROU Tech, to
          eliminate the barrier between you and your dreams. We wished we could
          have known about Programming and Artificial Intelligence much earlier,
          and gotten the skills at a much cheaper price, but how blessed and
          fortunate we are to now partner with gurus in the Tech field, to make
          this wish come true.
        </p>
        <div className="contact-form" id="contact">
          <h2 className="ab-h2">Contact Us</h2>
          <form onSubmit={this.handleFormSubmit}>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="name">Name</label>
                <input
                  name="name"
                  type="name"
                  className="form-control"
                  id="name"
                  placeholder="your full name"
                  value={this.state.form.name}
                  onChange={this.onChange}
                  required
                />
              </div>
              {this.state.error.name && (
                <div className="alert alert-danger">
                  {this.state.error.name}
                </div>
              )}
              <div className="form-group col-md-6">
                <label htmlFor="email">Email</label>
                <input
                  name="email"
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="youremail@xyz.com"
                  value={this.state.form.email}
                  onChange={this.onChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="organization">Organization</label>
              <input
                name="organization"
                type="text"
                className="form-control"
                id="organization"
                placeholder="School or Organization"
                value={this.state.form.organization}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input
                name="address"
                type="text"
                className="form-control"
                id="address"
                placeholder="location"
                value={this.state.form.address}
                onChange={this.onChange}
                required
              />
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  type="text"
                  className="form-control"
                  id="message"
                  rows="4"
                  value={this.state.form.message}
                  onChange={this.onChange}
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={!isEnabled}
            >
              Send
            </button>
          </form>
        </div>
      </div>
    );
  }
}
