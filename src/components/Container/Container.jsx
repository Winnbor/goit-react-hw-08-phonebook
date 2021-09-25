import PropTypes from 'prop-types';

import './Container.scss';

function Container({ children }) {
  return <div className="Container">{children}</div>;
}

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
