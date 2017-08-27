var Product = React.createClass({
  render () {
    return (
      <div>
        <h4>{ this.props.name } sang:</h4>
        <p>{ this.props.tagline }</p>
        <p>{ this.props.category }</p>
      </div>
    )
  }
});
