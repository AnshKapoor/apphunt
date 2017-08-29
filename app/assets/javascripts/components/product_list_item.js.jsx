var ProductListItem = React.createClass({
  render: function() {
    if (this.props.product.tagline != null) {
      var tagline = " - " + this.props.product.tagline;
    };

    return (
      <div className="product">
        <div className="product-upvote">
          <Upvote product={this.props.product} />
        </div>
        <div className="product-body">
          <h3>
            <p><a href={this.props.product.url} target="_blank">{this.props.product.name}</a>{tagline}</p>
          </h3>
          <p className="product-description">{this.props.product.description}</p>
        </div>
        <div className="product-controls">
          <div className="product-control">
            <div className="user-badge-container ">
              <Img src={this.props.product.user.avatar_url} className="avatar"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
});
