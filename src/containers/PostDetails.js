import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPost } from '../actions';

class PostDetails extends Component {
  componentDidMount(){
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
  }

  render() {
    console.log(this.props.post);
    return (
      <div>
        PostDetails
      </div>
    )
  }
}

function mapStateToProps({ posts }, ownProps){
  return {
    post: posts[ownProps.match.params.id]
  }
}

export default connect(mapStateToProps, { fetchPost })(PostDetails);