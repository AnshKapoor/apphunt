

var ProductList = React.createClass({
  render: function() {
    {/* console.log(this.props.products);  currently and empty array is being returned upon search*/}
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

