import PropTypes from 'prop-types';
import { Alert, Button } from 'react-bootstrap';
import { useState } from 'react';
export default function TechInfo({ message, children }) {
  const [show, setShow] = useState(true);
  return (
    <>
      <Alert show={show} variant="warning" transition>
        <Alert.Heading>{message}</Alert.Heading>
        {children}
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-warning">
            X
          </Button>
        </div>
      </Alert>

      {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
    </>
  );
}

TechInfo.propTypes = {
  message: PropTypes.string,
};
