var ProductListItem = React.createClass({
  render: function() {
    if (this.props.product.tagline != null) {
      var tagline = " - " + this.props.product.tagline;
    };

    if (this.props.product.comments.length > 1) {
      var commentListComponent = <CommentList comments={this.props.product.comments} />;
    };

    return (
      <div>
        <div className="product">
          <div>
            <Upvote product={this.props.product}/>
          </div>
          <div className="show-comments">
            <div className="comments-button" onClick={this.toggleCommentList}> {/* make this return comment component instead */}
              <i className="fa fa-commenting"></i>
            </div>

            {/* <CommentList product={this.props.product}/> */}
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
        <div>
          {commentListComponent}
        </div>
      </div>
    );
  },

});
