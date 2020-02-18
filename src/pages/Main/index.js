import React, { Component } from "react";
import AdminLTE, { Sidebar } from "adminlte-2-react";
import Dashboards from "../../pages/Dashboard/index.js";
const { Item } = Sidebar;

class App extends Component {
  sidebar = [<Item key="dashboard" text="dashboard" to="/dashboard" />];

  render() {
    return (
      <AdminLTE
        title={["Dashboard"]}
        titleShort={["Da"]}
        theme="green"
        sidebar={this.sidebar}
      >
        <Dashboards path="/dashboard" />
      </AdminLTE>
    );
  }
}

export default App;
