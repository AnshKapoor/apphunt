var ProductList = React.createClass({
  render: function() {
    console.log(this.props.products);

    return (
      <div>
        {this.props.products.map(function(product){
          return <ProductListItem product={product} key={product.id} />;
        })}
      </div>
    );

  }
});

