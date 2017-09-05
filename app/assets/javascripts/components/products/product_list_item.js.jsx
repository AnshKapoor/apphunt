var ProductListItem = React.createClass({

  getInitialState: function() {
    return { showCommentList: false };
  },
  toggleCommentList: function() {
    this.state.showCommentList ? this.setState({ showCommentList: false }) : this.setState({ showCommentList: true });
    console.log(this.props.path);
  },

  render: function() {
    if (this.props.product.tagline != null) {
      var tagline = " - " + this.props.product.tagline;
    };

    return (
      <div>
        <div className="product">
          <div className="product-controls">
            <Upvote product={this.props.product}/>

            <div className="comment-controls" onClick={this.toggleCommentList}>
              <div className="comments-button">
                <i className="fa fa-commenting"></i>
              </div>
              <div className="comments-count">
                {this.props.product.comments.length}
              </div>
            </div>
          </div>

          <div className="product-body">
            <h3>
              <p><a href={this.props.product.url} target="_blank">{this.props.product.name}</a>{tagline}</p>
            </h3>
            <p className="product-description">{this.props.product.description}</p>
          </div>
          <div className="product-badges">
            {this.props.product.for_sale ? (
              <div className="product-badge for-sale-badge">
                <p>For sale</p>
              </div>
            ) : (
              <div className="product-badge wanted-badge">
                <p>Wanted</p>
              </div>
            )}
            <div>
              <Img src={this.props.product.user.avatar_url} className="product-badge"/>
            </div>
          </div>
        </div>
        <div>
          { this.state.showCommentList ? <CommentList product={this.props.product} /> : null }
        </div>
      </div>
    );
  }

});
