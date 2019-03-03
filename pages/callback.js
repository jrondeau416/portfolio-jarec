import React from 'react';
import Header from '../components/shared/Header';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import auth0Client from '../services/auth0';
import { withRouter } from 'next/router';

class Callback extends React.Component {
debugger;
    async componentDidMount() {
        await auth0Client.handleAuthentication();
        this.props.router.push('/');
    }

  render() {
    return (
        <BaseLayout>
          <BasePage>
            <h1>
                Verifying login...
            </h1>
          </BasePage>  
        </BaseLayout>
    )
  }
}

export default withRouter(Callback);