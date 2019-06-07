import React from 'react';
import { Col, Container, Row } from 'reactstrap';

const Footer = function Footer() {
  return (
    <Container>
      <Row style={{padding: '10vh 10vw 10vh 10vw'}}>
        <Col md={4}>
          <h6 style={{color: 'rgb(153,153,153)'}}>Swashbuckler ML</h6>
          <a href="https://docs.swashbuckler.ai">Documentation</a>
          <br/>
          <a href="https://docs.swashbuckler.ai/quickstart">Get Started</a>
          <br/>
          <a href="https://docs.swashbuckler.ai/guides">Guides</a>
        </Col>
        <Col md={4}>
          <h6 style={{color: 'rgb(153,153,153)'}}>Community</h6>
          <i className='fab fa-github'/>{' '}
          <a href="https://github.com/buccaneerai/swashbuckler" style={{marginBottom: '2em'}}>
            GitHub
          </a>
          <br/>
          <i className='fab fa-trello'/>{' '}
          <a href="https://trello.com/b/xJEagBZ8/swashbuckler">
            Trello (Roadmap)
          </a>
          <br/>
          <i className='fab fa-slack'/>{' '}
          <a href="https://buccaneer-opensource.slack.com">
            Slack (Public Discussion)
          </a>
          <br/>
          <i className='fab fa-medium'/>{' '}
          <a href="https://medium.com/buccaneer">
            Blog
          </a>
        </Col>
        <Col md={4}>
          <h6 style={{color: 'rgb(153,153,153)'}}>Terms</h6>
          <p>This website is published under the <a href="https://opensource.org/licenses/MIT">MIT License</a>.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
