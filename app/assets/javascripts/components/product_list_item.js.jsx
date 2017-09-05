var ProductListItem = React.createClass({

  // if (this.props.product.comments.length > 1) {
  //   var commentListComponent = <CommentList product={this.props.product} />;
  // };

  getInitialState: function() {
    return { showCommentList: false };
  },
  toggleCommentList: function() {
    this.state.showCommentList ? this.setState({ showCommentList: false }) : this.setState({ showCommentList: true });
  },
  // render: function() {
  //     return (
  //         <div>
  //             <input type="submit" value="Search" onClick={this.onClick} />
  //             { this.state.showCommentList ? <Results /> : null }
  //         </div>
  //     );
  // }

  render: function() {
    if (this.props.product.tagline != null) {
      var tagline = " - " + this.props.product.tagline;
    };

    return (
      <div>
        <div className="product">
          <div>
            <Upvote product={this.props.product}/>
          </div>
          <div className="show-comments">
            <div className="comments-button" onClick={this.toggleCommentList}> {/* make this return comment component */}
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
          {/* {commentListComponent} */}
          { this.state.showCommentList ? <CommentList product={this.props.product} /> : null }
        </div>
      </div>
    );
  }

});
