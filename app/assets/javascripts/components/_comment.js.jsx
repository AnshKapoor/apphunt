var Comment = React.createClass({
  render: function() {
    return (
      <div className="comment-container">
        <ul className="list-inline list-unstyled comment-details">
          <li>
            <Img src={this.props.comment.avatar_url} className="avatar"/>
          </li>
          <li>
            <p>{this.props.comment.first_name} at</p>
            <p>{this.props.comment.time_stamp_formatted}</p>
          </li>
        </ul>
        <p className="comment-content">- {this.props.comment.content}</p>
      </div>
    );
  }
});
