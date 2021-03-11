import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: [],
    };
  }

  componentDidMount() {
    fetch('https://hidden-ravine-31705.herokuapp.com/Users')
      .then(response => response.json())
      .then(data => {
        let list = [];
        data.forEach(function (user) {
          list.push(user)

        });
        this.setState({ userList: list });
      });
  }

  render() {
    return (
      <div>
        <h1>usuarios</h1>
        {this.state.userList.map((data, i) => {
          return (
            <div>
              <h3>User {data.name}</h3>
              <h4>
                {data.email}
              </h4>
              <h4>
                {data.id}
              </h4>
            </div>
          )
        })}
      </div>
    );
  }
}

export default App;