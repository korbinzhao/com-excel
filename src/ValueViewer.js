import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class ValueViewer extends PureComponent {
  render() {
    const { value } = this.props;
    return (
      <span className="value-viewer">
        {value}
      </span>
    );
  }
}

ValueViewer.propTypes = {
  value: PropTypes.node.isRequired
};
