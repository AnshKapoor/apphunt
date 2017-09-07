var ProductListItem = React.createClass({

  getInitialState: function() {
    return { showCommentList: false };
  },
  toggleCommentList: function() {
    this.state.showCommentList ? this.setState({ showCommentList: false }) : this.setState({ showCommentList: true });
  },

  render: function() {
    if (this.props.product.tagline != null) {
      var tagline = " - " + this.props.product.tagline;
    };

    return (
      <div>
        <div className="product container">
          <div className="row product-comp-row">
            <div className="product-body col-xs-10">
              <h3>
                <p><a href={this.props.product.url} target="_blank">{this.props.product.name}</a>{tagline}</p>
              </h3>
            </div>
            <div className="product-avatar col-xs-2">
              <div>
                <Img src={this.props.product.user.avatar_url} className="product-badge"/>
              </div>
            </div>
          </div>
          <div className="row product-comp-row">
            <div className="col-xs-10">
              <p className="product-description">{this.props.product.description}</p>
            </div>
            <div className="product-controls col-xs-2">
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

            <div className="hidden-xs">
              {this.props.product.for_sale ? (
                <div className="product-badge for-sale-badge hidden-xs hidden-sm">
                  <p>For sale</p>
                </div>
              ) : (
                <div className="product-badge wanted-badge">
                  <p>Wanted</p>
                </div>
              )}
            </div>
          </div>
          <div className="row product-comp-row">
            <div className="col-xs-12">
              { this.state.showCommentList ? <CommentList product={this.props.product} /> : null }
            </div>
          </div>
        </div>
      </div>
    );
  }

});
