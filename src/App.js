import React from "react";
import { Table, Button } from "reactstrap";

function App() {
  return (
    <div className="container">
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Rating</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>Book title</td>
            <td>2.5</td>
            <td>
              <Button color="success" size="sm">
                Edit
              </Button>
              <Button color="danger" size="sm">
                Delete
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default App;
