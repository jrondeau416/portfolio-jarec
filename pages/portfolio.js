import React from 'react';
import Header from '../components/shared/Header';
import BaseLayout from '../components/layouts/BaseLayout';
import axios from 'axios';
import { Link } from '../routes';
import BasePage from '../components/BasePage';

export default class portfolio extends React.Component {

  static async getInitialProps() {
    let posts = {};
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        posts = response.data;
    } catch(err) {
        console.error(err);
    }

    
    return{posts: posts.splice(0, 10)};
}

  renderPosts(posts) {
    return posts.map((post, index) => {
      return (
        <li key={index}> 
          <Link route={`/portfoliodetail/${post.id}`}>
            <a>{post.title}</a>
          </Link> 
        </li>
      )
    })
  }

  render() {
    const { posts } = this.props;
    return (
        <BaseLayout>
          <BasePage>
            <h1>
                I am the Portfolio page from class based component
            </h1>
            <ul>
              {
                this.renderPosts(posts)
              }
            </ul>
          </BasePage>  
        </BaseLayout>
      
    )
  }
}
