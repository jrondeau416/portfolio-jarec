import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import SuperComponent from '../components/SuperComponent';
import axios from 'axios';


class Index extends SuperComponent {

    static async getInitialProps() {
        let userData = {};
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
            userData = response.data;
            console.log(userData);
        } catch(err) {
            console.error(err);
        }

        
        return{initialData: [1,2,3,4], userData};
    }

    constructor(props) {
        super(props);

        this.state = {
            title: 'I am the index page'
        }

        console.log('Constructor');
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    updateTitle() {
        this.setState({title: 'I have been updated'})
    }

    render() {
        const { title } = this.state;
        const { userData, initialData } = this.props;
        // const title = this.state.title;

        return (
            <BaseLayout>
                <div>
                    <h1>I am the Index Page from a Class Component</h1>
                    <h2>{ title }</h2>
                    <h2> { userData.title } </h2>
                    <button onClick={ () => this.updateTitle() }> Change Title </button>
                </div>
            </BaseLayout>  
        )
    }
}


export default Index;