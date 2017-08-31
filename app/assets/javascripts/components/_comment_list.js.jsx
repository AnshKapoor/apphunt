var CommentList = React.createClass({

  render: function() {
    return (
      <div className="comments-button" onClick={this.toggleCommentList}> {/* make this return comment component instead */}
        <i className="fa fa-commenting"></i>
      </div>
    );
  },

  toggleCommentList: function() {
    <div className="comments-container">
      {this.props.product.comments.map(function(comment){
        console.log(comment);
        return <Comment comment={comment} key={comment.id} />;
      })}
    </div>
  }

});


