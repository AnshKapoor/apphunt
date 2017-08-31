{/* Component for posting new comments */}
var CommentForm = React.createClass({
  render: function() {
    return (
      <div>
        <form ref="form" action={ this.props.postCommentPath } acceptCharset="UTF-8" method="get" className="product-search">
          <p><input ref="comment" name="comment" placeholder="Write new comment here" onChange={ this.props.submitPath } className="product-search-input" /></p>
        </form>
      </div>
    );
  }
})

// var CommentForm = React.createClass({
//   handleSubmit: function(e) {
//     e.preventDefault();
//     var author = React.findDOMNode(this.refs.author).value.trim();
//     var comment = React.findDOMNode(this.refs.text).value.trim();
//     var timestamp = moment().format();
//     if (!comment || !author) {
//       return;
//     }
//     this.props.onCommentSubmit({author: author, text: comment,
//                                createdAt: timestamp});
//     React.findDOMNode(this.refs.author).value = '';
//     React.findDOMNode(this.refs.text).value = '';
//     React.findDOMNode(this.refs.author).focus();
//     return;
//   },
//   render: function() {
//     return (
//       <form className="commentForm" onSubmit={this.handleSubmit}>
//         <div className="form-group">
//           <input className="form-control" type="text" placeholder="Your name"
//             ref="author" autoFocus="true" />
//         </div>
//         <div className="form-group">
//           <input className="form-control" type="text" placeholder="Your comment"
//             ref="text" />
//         </div>
//         <input className="btn btn-success" type="submit" value="Post Comment" />
//       </form>
//     );
//   }
// });
