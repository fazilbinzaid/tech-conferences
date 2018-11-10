import React, { Fragment } from "react";
import { TextField, Card, Button } from "@material-ui/core";
import { Row, Col, Container } from "react-grid-system";
import Dialog from "@material-ui/core/Dialog";
//import { eventsRef } from "./firebaseCustom";
import  eventsRef  from "./data.json";

const initialState = {
  date: Date(),
  title: "",
  subtitle: "",
  description: ""
};
export default class AddEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  reset = () => {
    this.setState(initialState);
  };

  handleChange = (name, event) => {
    this.setState({ [name]: event.target.value });
  };
  handleSubmit = () => {
    eventsRef.push(this.state);
    this.reset();
    this.closeForm();
  };

  closeForm = () => {
    this.props.close();
  };
  render() {
    
    return (
      <Dialog
        open={this.props.open}
        onEscapeKeyDown={this.closeForm}
        onBackdropClick={this.closeForm}
        fullWidth
        OnExit={this.closeForm}
      >
        <Card style={{ width: "100%", height: "100vh" }}>
          <Container>
            <Col
              lg={12}
              md={12}
              sm={12}
              xs={12}
              style={{ margin: "5px all", padding: "5px" }}
            >
              <Row>
                <TextField
                  id="date"
                  label="Date"
                  type="date"
                  value={this.state.date}
                  onChange={this.handleChange.bind(this, "date")}
                />
              </Row>
              <Row>
                <TextField
                  id="title"
                  label="Event Title"
                  type="text"
                  value={this.state.title}
                  onChange={this.handleChange.bind(this, "title")}
                  fullWidth
                />
              </Row>
              <Row>
                <TextField
                  id="subtitle"
                  label="Location"
                  type="text"
                  value={this.state.subtitle}
                  onChange={this.handleChange.bind(this, "subtitle")}
                  fullWidth
                />
              </Row>
              <Row>
                <TextField
                  id="description"
                  label="Description"
                  type="text"
                  value={this.state.description}
                  onChange={this.handleChange.bind(this, "description")}
                  fullWidth
                />
              </Row>
              <Fragment>
                <Button
                  variant="raised"
                  color="primary"
                  style={{ margin: "5px" }}
                  onClick={this.handleSubmit}
                >
                  Submit
                </Button>
              </Fragment>
            </Col>
          </Container>
        </Card>
      </Dialog>
    );
  }
}
