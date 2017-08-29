var Product = React.createClass({
  render () {
    console.log(this.props);
    return (
      <div>
        <p>{ this.props.product.name }</p>
        <p>{ this.props.product.tagline }</p>
        <p>{ this.props.product.description }</p>
        <p>{ this.props.product.url }</p>
      </div>
    )
  }
});
