import React from "react";
import { Input, Button } from "semantic-ui-react";
import "./style.css";
class Login extends React.Component {
  constructor() {
    super();
    this.state = { id: "nothing", pwd: "Asd" };
  }
  render() {
    return (
      <div class="body">
        <div></div>

        <div class="login">
          <p>
            <Input onChange={(e) => this.setState({ id: e.target.value })} />
          </p>
          <p>
            <Input onChange={(e) => this.setState({ pwd: e.target.value })} />
          </p>
          <Button onClick={() => alert(this.state.id + this.state.pwd)}>
            login
          </Button>
          <Button primary>
            <a href="./Join">Join</a>
          </Button>
        </div>
        <div></div>
      </div>
    );
  }
}
export default Login;
