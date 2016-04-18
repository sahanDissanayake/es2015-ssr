import React from 'react';

class Post extends React.Component {
    render() {
        var {_id, title} = this.props;
        console.log( _id, title );
        return (
            <li key={_id}>
              <a href={FlowRouter.path('post', this.props)}>{title}</a>
            </li>
        )
    }

    componentDidMount() {
      console.log('hello');
    }
}

export default Post;