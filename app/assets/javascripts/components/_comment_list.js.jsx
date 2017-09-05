var CommentList = React.createClass({

  getInitialState: function() {
    return { product: this.props.product }
  },

  postComment(event) {
    event.preventDefault();
    var test_content = this.refs.content.value;

    // AJAX request to store the comment in the db
    $.ajax({
      type: 'POST',
      url: Routes.post_comment_product_path({
        product_id: this.props.product.id,
        content: test_content
      }),
      dataType: 'json',
      success: function(data) {
        console.log(data.comments);
        this.setState({ product: data });
      }.bind(this)
    });

    // Clear input field
    this.refs.content.value = '';
    this.refs.content.focus();
  },

  render: function() {
    return (
      <div className="comments-container">
        <h3>Comments</h3>
        {this.state.product.comments.map(function(comment){
          return <Comment comment={comment} key={comment.id} />;
        })}
        <div>
          <form acceptCharset="UTF-8" className="comment-form">
            <div className="form-group">
              <input ref="content" name="content" type="text" placeholder="Write new comment here" className="comment-input form-control"/>
              <input className="btn btn-success" onClick={this.postComment} type="submit" value="Post comment" />
            </div>
          </form>
        </div>
      </div>
    );
  },
});
