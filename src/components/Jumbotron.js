import React, { useState } from 'react';
import PropTypes from 'prop-types';
import GitHubButton from 'react-github-btn';
import { Button, Col, Container, Row , Tooltip} from 'reactstrap';
import Typist from 'react-typist';
import copy from 'copy-to-clipboard';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

import colorHelpers from '../helpers/colorHelpers.js';
import CodeWithoutHighlighting from './CodeWithoutHighlighting';

function copyCode(installer = 'npm', setTooltip) {
  const code = (
    installer === 'npm'
    ? 'npm install --save swashbuckler'
    : 'yarn add swashbuckler'
  );
  copy(code, {format: 'text/plain'});
  setTooltip(installer);
  interval(1000).pipe(take(1)).subscribe(() => setTooltip(null));
}

const Jumbotron = function Jumbotron({
  backgroundColor,
  headline,
  logo,
  body,
  callToAction,
  callToActionOnClick
}) {
  const [tooltip, setTooltip] = useState(null);
  return (
    <div class="block block-inverse" style={{backgroundColor, height: "100%", minHeight: "600px"}}>
      <Container>
        <Row>
          <Col sm={10} md={6}>
            <h1 class="" style={{paddingTop: '100px'}}>
              <span style={{marginRight: '1em'}}>{headline}</span>
              <GitHubButton
                href="https://github.com/buccaneerai/swashbuckler"
                data-size="large"
                aria-label="Star buccaneerai/swashbuckler on GitHub"
              >
                Staaarrr
              </GitHubButton>
            </h1>
            <p class="lead mb-4" style={{color: 'rgba(256,256,256,0.8)'}}>
              {body}
            </p>
            <div>
              <a href="https://docs.swashbuckler.ai/quickstart">
                <Button color='light' outline size='lg'>
                  Get Started
                </Button>
              </a>
              <a href="https://docs.swashbuckler.ai">
                <Button color='light' outline size='lg' style={{marginLeft: '1em'}}>
                  Documentation
                </Button>
              </a>
              <a href="https://github.com/buccaneerai/swashbuckler">
                <Button color='light' outline size='lg' style={{marginLeft: '1em'}}>
                  <i className='fab fa-github'/>{' '}
                  GitHub
                </Button>
              </a>
            </div>
          </Col>
          <Col md={{offset: 2, size: 4}} style={{marginTop: '10vh'}}>
            <CodeWithoutHighlighting style={{padding: '0em'}}>
              <div className='text-right'>
                <Button
                  color='link'
                  style={{color: '#fff'}}
                  onClick={() => copyCode('npm', setTooltip)}
                  id='copy-npm-installer'
                >
                  <i className="fas fa-copy"/>
                </Button>
                <Tooltip
                  target='copy-npm-installer'
                  isOpen={tooltip === 'npm'}
                  placement='top'
                >
                  copied
                </Tooltip>
              </div>
              <div style={{padding: '0.2em 2em 2em 2em'}}>
                <Typist
                  delay={300}
                  cursor={{
                    show: true,
                    blink: true,
                    element: '|',
                    hideWhenDone: true,
                    hideWhenDoneDelay: 500
                  }}
                  avgTypingDelay={70}
                >
                  npm install --save swashbuckler
                </Typist>
              </div>
            </CodeWithoutHighlighting>
            <CodeWithoutHighlighting style={{padding: '0em'}}>
              <div className='text-right'>
                <Button
                  id='copy-yarn-installer'
                  color='link'
                  style={{color: '#fff'}}
                  onClick={() => copyCode('yarn', setTooltip)}
                >
                  <i className="fas fa-copy" id="jumbo-npm-install-copy"/>
                </Button>
                <Tooltip
                  target='copy-yarn-installer'
                  isOpen={tooltip === 'yarn'}
                  placement='top'
                >
                  copied
                </Tooltip>
              </div>
              <div style={{padding: '0.2em 2em 2em 2em'}}>
                <Typist
                  delay={300}
                  cursor={{
                    show: true,
                    blink: true,
                    element: '|',
                    hideWhenDone: true,
                    hideWhenDoneDelay: 500
                  }}
                  avgTypingDelay={70}
                >
                  yarn add swashbuckler
                </Typist>
              </div>
            </CodeWithoutHighlighting>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

Jumbotron.defaultProps = {
  backgroundColor: colorHelpers.getBrandColor(),
};

Jumbotron.propTypes = {
  backgroundColor: PropTypes.string,
  headline: PropTypes.oneOfType(PropTypes.element, PropTypes.string),
  body: PropTypes.string
};

export default Jumbotron;
