// Component for home page list of for sale products
var ForSaleList = React.createClass({
  render: function() {
    return (
      <div>
        {this.props.products.map(function(product) {
          if (product.for_sale == true) {
            return <ProductListItem product={product} key={product.id} />;
          }
        })}
      </div>
    );
  }
});
