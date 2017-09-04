var CommentList = React.createClass({

  getInitialState: function() {
    return {
      product: this.props.product.comments
    }
  },

  postComment: function() {
    // var content = React.findDOMNode(this.refs.commentInput).value.trim();
    // console.log(content);

    // Store this (the upvote component) in a variable so that it can be called upon
    // success in the ajax callback. Else this will refer to the AJAX call itself.
    var that = this;
    var test_content = "Test";
    // AJAX request to store the comment
    $.ajax({
      type: 'POST',
      // url: Routes.post_comment_product_path(this.props.product.id)+"?content=Test comment",
      url: Routes.post_comment_product_path({
        product_id: this.props.product.id,
        content: test_content
      }),
      dataType: 'json',
      success: function(data) {
        that.setState({ product: data });
      }
    });

    console.log(this.props.product);
  },


  render: function() {
    return (
      <div className="comments-container">
        <h3>Comments</h3>
        {this.props.product.comments.map(function(comment){
          return <Comment comment={comment} key={comment.id} />;
        })}
        <div>


          <div onClick={this.postComment}>
            <div className="product-arrow"></div>
          </div>
        </div>
      </div>
    );
  },
});


