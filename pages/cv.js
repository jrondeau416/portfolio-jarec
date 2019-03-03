import React from 'react';
import Header from '../components/shared/Header';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';

export default class CV extends React.Component {
  render() {
    return (
        <BaseLayout {...this.props.auth}>
          <BasePage>
            <h1>
                I am the CV page from class based Component
            </h1>
          </BasePage>  
        </BaseLayout>
    )
  }
}

