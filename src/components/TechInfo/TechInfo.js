import PropTypes from 'prop-types';

import { Alert, Button } from 'react-bootstrap';
import { useState } from 'react';
// import { Spinner } from 'react-bootstrap';
// export default function TechInfo({ message, loader = true }) {
//   export default function TechInfo({ message, children}) {
//   return (
//     <>
//       <h2>{message}</h2>
//       {children}
//       {/* {loader && */}
//       {/* <Spinner animation="grow" variant="primary" /> */}
//       {/* } */}
//     </>
//   );
// }
export default function TechInfo({ message, children }) {
  const [show, setShow] = useState(true);
  return (
    <>
      <Alert show={show} variant="warning" transition>
        <Alert.Heading>{message}</Alert.Heading>
        {/* <h2>{message}</h2> */}
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

// function AlertDismissible() {
//   const [show, setShow] = useState(true);

//   return (
//     <>
//       <Alert show={show} variant="success">
//         <Alert.Heading>How's it going?!</Alert.Heading>
//         <p>
//           Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
//           lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
//           fermentum.
//         </p>
//         <hr />
//         <div className="d-flex justify-content-end">
//           <Button onClick={() => setShow(false)} variant="outline-success">
//             Close me y'all!
//           </Button>
//         </div>
//       </Alert>

//       {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
//     </>
//   );
// }

// render(<AlertDismissible />);

TechInfo.propTypes = {
  message: PropTypes.string,
};
