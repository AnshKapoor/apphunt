{/* Component for rendering list of clickable categories */}
var Categories = React.createClass({
  render: function() {
    {/* Gathering all the categories of all products uniquely and alphabetically sorted */}
    var categories = [];
    this.props.products.map(function(product){
      if (categories.includes(product.category) == false) {
        categories.push(product.category);
      }
    });
    var categories = categories.sort();

    return (
      <div className="col-xs-2 col-xs-offset-1 home-product-list-wrapper">
        <h2 className="list-title">Categories</h2>
        <div className="container home-product-list">
          <div className="row">
            <div className="col-xs-12">
              <ul className="category-list">
                {categories.map(function(category, index){
                  return <li key={ index }><p>{category}</p></li>;
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
})
