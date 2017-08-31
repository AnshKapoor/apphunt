var CommentList = React.createClass({

  render: function() {
    return (
      <div className="comments-container">
        <h3>Comments</h3>
        {this.props.comments.map(function(comment){
          console.log(comment);
          return <Comment comment={comment} key={comment.id} />;
        })}
      </div>
    );
  },
});


