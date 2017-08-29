var ProductsContainer = React.createClass({
  componentWillMount(){
    this.fetchProducts();
  },

  fetchProducts() {
    // Making an AJAX request to our own server and getting @product.all in json format
    $.ajax({
      url: this.props.productsPath,
      dataType: 'json',
      success: function(data) {
        console.log(data);
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
        // Sending the AJAX search query request to the search function in products_controller (to searchkick)
        url: this.props.searchPath+"?query="+event.target.value,
        dataType: 'json',
        success: function(data) {
          console.log(data);
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
        {/* For rendering search form */}
        <ProductsSearch searchPath={this.props.searchPath} submitPath={this.searchProducts} cancelPath={this.fetchProducts}/>
        {/* For rendering products */}
        <Products products={this.state.products}/>
      </div>
    );

  }
});
