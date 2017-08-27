var Products = React.createClass({
  render() {
    var showProducts = (product) => <Product name={product.name} tagline={product.tagline} key={product.id}/>;
    return <ul>{this.props.products.map(showProducts)}</ul>;
  }
});
