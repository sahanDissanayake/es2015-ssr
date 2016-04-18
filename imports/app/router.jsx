import React from 'react';
import {mount} from 'react-mounter';

import BlogLayout from './layouts/blog.jsx';
import PostList from './containers/post_list';
import PostPage from './containers/post_page';

FlowRouter.route("/", {
  name: "home",
  action() {
    mount(BlogLayout, {
      content: <PostList />
    });
  }
});

