var React = require('react');
var ReactDOM = require('react-dom');

var GreeterMessage = React.createClass({
  render: function() {
    var name = this.props.name;
    return (
      <div>
        <h1>Hello to { name }!!!</h1>
        <h2>This is from Message</h2>
      </div>
    );
  }
});

var GreeterForm = React.createClass({

  onFormSubmit: function(e) {
    e.preventDefault();
    this.props.onName(this.refs.name.value);
    this.refs.name.value = '';
  },
  render: function() {
    return (
      <div>
        <form onSubmit={ this.onFormSubmit }>
          <input type="text" ref="name" />
          <button>Click</button>
        </form>
      </div>
    );
  }
});

var Greeter = React.createClass({

  getDefaultProps: function() {
    return {
      name: 'React'
    };
  },
  getInitialState: function() {
      return {
          name: this.props.name
      };
  },

  handleName: function(name) {
    this.setState({
      name: name
    });
  },
  render: function() {
    var name = this.state.name;
    return (
      <div>
        <GreeterMessage name={ name }/>
        <GreeterForm onName={ this.handleName }/>
      </div>
    );
  }
})

ReactDOM.render(
  <Greeter name="Madhukar"/>,
  document.getElementById('app')
);
