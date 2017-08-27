var Products = React.createClass({
  render() {
    var showProducts = (product) => <Song name={product.name} artist={product.artist} key={product.id}/>;
    return <ul>{this.props.products.map(showProducts)}</ul>;
  }
});
