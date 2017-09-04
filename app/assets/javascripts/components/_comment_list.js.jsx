var CommentList = React.createClass({

  render: function() {
    return (
      <div className="comments-container">
        <h3>Comments</h3>
        {this.props.comments.map(function(comment){
          console.log(comment);
          return <Comment comment={comment} key={comment.id} />;
        })}
        <div>
          <form ref="comment-form" acceptCharset="UTF-8" method="post" className="comment-form">
            <p>
              <input ref="comment-input" type="text" name="comment-input" placeholder="Write new comment here" className="comment-input form-control"/>
            </p>
          </form>
        </div>
      </div>
    );
  },
});


