import PropTypes from 'prop-types';
// import { Spinner } from 'react-bootstrap';
// export default function TechInfo({ message, loader = true }) {
  export default function TechInfo({ message, children}) {
  return (
    <>
      <h2>{message}</h2>
      {children}
      {/* {loader && */}
      {/* <Spinner animation="grow" variant="primary" /> */}
      {/* } */}
    </>
  );
}

TechInfo.propTypes = {
  message: PropTypes.string,
};
