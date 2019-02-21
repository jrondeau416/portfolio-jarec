import React from 'react'

class SuperComponent extends React.Component {
    constructor(props) {
        super(props);
        this.someVariable = 'Just some variable';
    }

    alertName(title) {
        alert(title);
    }
  
    render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default SuperComponent;
