// Component for home page list of wanted products
var WantedList = React.createClass({
  render: function() {
    return (
      <div>
        {this.props.products.map(function(product) {
          if (product.for_sale == false) {
            return <ProductListItem product={product} key={product.id} />;
          }
        })}
      </div>
    );
  }
});
