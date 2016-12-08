'use strict';

var $ = require('jquery');
var React = require('react');

var TestApp = React.createClass({
  render: function() {
    return (
      <div className="page">
        <h1>REACT!</h1>
      </div>
    );
  }
});

React.render(
  React.createElement(TestApp, null),
  document.getElementById('content')
);
