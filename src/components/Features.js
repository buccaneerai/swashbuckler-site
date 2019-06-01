import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import colorHelpers from '../helpers/colorHelpers.js';
import { Col, Container, Row } from 'reactstrap';

function Feature({title, body, icon, color}) {
  return (
    <li class="mb-5">
      <div class="featured-list-icon" style={{color: color}}> {icon} </div>
      <h3>{title}</h3>
      <p style={{minHeight: '105px'}}> {body} </p>
    </li>
  );
}

const Features = function Features({features, color}) {
  const col1 = _.filter(features, (f, i) => ((i + 2) % 2 === 0));
  const col2 = _.filter(features, (f, i) => ((i + 2) % 2 !== 0));
  return (
    <Container>
      <Row style={{paddingTop: '50px'}}>
        <Col md="6" lg="6">
          <ul class="featured-list">
            {col1.map(f => <Feature {...f} color={color} />)}
          </ul>
        </Col>
        <Col md="6" lg="6">
          <ul class="featured-list">
            {col2.map(f => <Feature {...f} color={color} />)}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

Features.defaultProps = {
  color: colorHelpers.getBrandColor(),
}

Features.propTypes = {
  color: PropTypes.string,
  features: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string,
    icon: PropTypes.element,
  })),
};

export default Features;
