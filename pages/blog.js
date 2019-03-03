import React from 'react';
import Header from '../components/shared/Header';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';

export default class Blog extends React.Component {
  render() {
    return (
        <BaseLayout>
          <BasePage>
            <h1>
                I am the Blog page from class absed component
            </h1>
          </BasePage>  
        </BaseLayout>
    )
  }
}

