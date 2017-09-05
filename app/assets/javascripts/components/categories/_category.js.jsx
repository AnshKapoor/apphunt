// Component listing current product categories and allowing clicking to live-search them, by
// passing the category name to the searchProducts function in the ProductContainer component
var Category = React.createClass({
  render: function() {
    return (
      <form ref="form" action={ this.props.searchPath } acceptCharset="UTF-8" method="get" className="category-search">
        <li>
          <input type="submit" ref="query" name="query" value={this.props.category} onClick={ this.props.submitPath } />
        </li>
      </form>
    );
  }
})
