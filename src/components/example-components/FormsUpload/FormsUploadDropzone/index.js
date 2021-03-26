import React, { Component, Fragment } from 'react';

import { Alert, Col, ListGroup, ListGroupItem, Row } from 'reactstrap';

import Dropzone from 'react-dropzone';

import { UncontrolledAlert } from 'reactstrap';

export default class LivePreviewExample extends Component {
  constructor() {
    super();
    this.state = {
      files: [],
    };
  }

  onDrop(files) {
    this.setState({ files });
  }

  onCancel() {
    this.setState({
      files: [],
    });
  }

  render() {
    const { files } = this.props;

    const fileList = files.map(file =>
      <ListGroupItem key={file.name}>
        {file.name} - {file.size} bytes
      </ListGroupItem>);

    return (
      <Fragment>
        <UncontrolledAlert color="warning">
          This example does not actually upload any of the selected files, only
          simulates the upload process!
        </UncontrolledAlert>

        <Row className="mt-4">
          <Col md="6">
            <div className="dropzone">
              <Dropzone
                onDrop={this.onDrop.bind(this)}
                onFileDialogCancel={this.onCancel.bind(this)}>
                {({ getInputProps, getRootProps }) =>
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <div className="dz-message">
                      <div className="dx-text">
                        Try dropping some files here, or click to select files
                        to upload.
                      </div>
                    </div>
                  </div>
                }
              </Dropzone>
            </div>
          </Col>
          <Col
            md="6"
            className="d-flex justify-content-center align-items-center">
            <div className="w-100">
              {files.length === 0 &&
                <Alert color="success">
                  Files uploaded for demo purposes will appear here!
                </Alert>
              }
              {files.length > 0 &&
                <ListGroup>
                  <ListGroupItem className="font-weight-bold text-center">
                    Uploaded Files
                  </ListGroupItem>
                  {fileList}
                </ListGroup>
              }
            </div>
          </Col>
        </Row>
      </Fragment>
    );
  }
}
