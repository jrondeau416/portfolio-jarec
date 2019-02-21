import React from 'react';
import Header from '../components/shared/Header';
import BaseLayout from '../components/layouts/BaseLayout';
import { withRouter } from 'next/router';
import axios from 'axios';


class PortfolioDetail extends React.Component {

    static async getInitialProps({query}) {
        const portfolioId = query.id;
        let portfolioData = {};

        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${portfolioId}`)
            portfolioData = response.data;
        } catch(err) {
            console.log(err);
        }
    
        return{portfolioData};
    }

  render() {
      const { portfolioData } = this.props;

    return (
        <BaseLayout>
            <h1>
                {portfolioData.title}
            </h1>
            <p>
                Body: {portfolioData.body}
            </p>
            <p>
                Id: {portfolioData.id}
            </p>
            
        </BaseLayout>
    )
  }
}

export default withRouter(PortfolioDetail);