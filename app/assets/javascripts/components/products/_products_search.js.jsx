{/* Component for product search form */}
var ProductsSearch = React.createClass({
  render: function() {
    return (
      <div>
        <form ref="form" action={ this.props.searchPath } acceptCharset="UTF-8" method="get" className="product-search">
          <p><input ref="query" name="query" placeholder="Search here" onChange={ this.props.submitPath } className="product-search-input" /></p>
        </form>
      </div>
    );
  }
})
