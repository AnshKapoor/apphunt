var ProductsContainer = React.createClass({
  componentWillMount(){
    this.fetchProducts();
  },

  fetchProducts() {
    $.ajax({
      url: this.props.productsPath,
      dataType: 'json',
      success: function(data) {
        this.setState({products: data});
      }.bind(this),
      error: function(data) {
        this.setState({products: []});
      }.bind(this)
    });
  },

  searchProducts(event) {
    if (event.target.value) {
      $.ajax({
        url: this.props.searchPath+"?query="+event.target.value,
        dataType: 'json',
        success: function(data) {
          this.setState({products: data});
        }.bind(this),
        error: function(data) {
          this.setState({products: []});
        }.bind(this)
      });
    }
    else {
      this.fetchProducts();
    }

  },

  getInitialState() {
    return { products: [] };
  },

  render() {

    return (
      <div>
        {/* For rendering products */}
        <Products products={this.state.products} />
        {/* For rendering search form */}
        <ProductsSearch searchPath={this.props.searchPath} submitPath={this.searchProducts} cancelPath={this.fetchProducts}/>
      </div>
    );

  }
});
