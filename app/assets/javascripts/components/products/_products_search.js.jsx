{/* Component for product search form */}
var ProductsSearch = React.createClass({
  render: function() {
    return (
      <div className="col-xs-10 col-xs-offset-1 col-md-6 col-md-offset-3">
        <form ref="form" action={ this.props.searchPath } acceptCharset="UTF-8" method="get" className="product-search">
          <input ref="query" name="query" placeholder="Search here" onChange={ this.props.submitPath } className="product-search-input" />
        </form>
      </div>
    );
  }
})
