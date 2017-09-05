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

    var comments = [];
    this.state.product.comments.map(function(comment){
      if (comments.includes(comments) == false) {
        comments.push(comment);
      }
    });
    var comments = comments.reverse();

    return (
      <div className="comments-container">
        {/* Post comment form */}
        <div>
          <form acceptCharset="UTF-8" className="comment-form">
            <div className="form-group post-comment-form">
              <textarea ref="content" name="content" type="text" placeholder="Write new comment here" className="comment-input form-text form-control"></textarea>
              <input className="btn post-comment-btn" onClick={this.postComment} type="submit" value="Post comment" />
            </div>
          </form>
        </div>
        <h3>Comments</h3>
        {/* List of comments */}
        {comments.map(function(comment){
          return <Comment comment={comment} key={comment.id} />;
        })}
      </div>
    );
  },
});
