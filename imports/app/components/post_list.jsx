import React from 'react';
import Post from './post.jsx';

class PostList extends React.Component {
    render() {
        return <div>
            This is the post list
            <ul>
              {this.props.posts.map(({_id, title}) => (
                <Post key={_id} _id={_id} title={title} />
              ))}
            </ul>
          </div>
    }

    componentDidMount() {
      console.log('hello');
    }
}

export default PostList;
