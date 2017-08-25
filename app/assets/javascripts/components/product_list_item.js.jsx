var ProductListItem = React.createClass({
  render: function() {
    return (
      <div className="product">
        <div className="product-upvote">
          <Upvote product={this.props.product} />
        </div>
        <div className="product-body">
          <h3>
            <a href={this.props.product.url} target="_blank">{this.props.product.name}</a>
          </h3>
          <p>{this.props.product.tagline}</p>
        </div>
        <div className="product-controls">
          <div className="product-control">
            <div className="user-badge-container ">
              <img src={this.props.product.user.avatar_url} className="avatar"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
});
