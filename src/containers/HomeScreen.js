import React, { Fragment } from 'react';
import {
  Button,
  Card,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
  Container,
  Row
} from 'reactstrap';
// import logo from './logo.svg';
import Prism from 'prismjs';
import Typist from 'react-typist';
import '../scss/prismjs/okaidia.scss';

import colorHelpers from '../helpers/colorHelpers';
import Jumbotron from '../components/Jumbotron';
import Footer from '../components/Footer';
import Features from '../components/Features';
import ModelPerformance from '../components/ModelPerformance';
import CodeWithoutHighlighting from '../components/CodeWithoutHighlighting';

const headline = (
  <span>
    Swashbuckler (Coming Soon)
  </span>
);

const jumbotronBody = `
  A simple, complete & opensource framework for Machine Learning at any scale.
  Made by builders who love Javascript. For builders who love Javascript.
`;

const codeExample = `
import { decisionTree } from 'swashbuckler/classifiers';
import { from } from 'rxjs';

const pirates = [
  {name: 'Blackbeard', drinksRum: true, label: 'fearsome'},
  {name: 'Morgan', drinksRum: true, label: 'fearsome'},
  {name: 'Captain Crunch', drinksRum: false, label: 'notfearsome'},
];

const trainingSet$ = from(pirates);
const model$ = decisionTree.train(trainingSet$);
model$.subscribe();
`;

const functionalProgrammingExample = `
import { filter, map, pluck, take } from 'rxjs/operators';

const trainingSet$ = rawData$.pipe(
  filter(row => row.feature1 !== null), // drop bad data
  pluck('feature1', 'feature2'), // drop irrelevant keys
  map(row => ({...row, yarrr: 'aye'})), // transform data
  take(500) // sample 500 items
);
const model$ = decisionTree.train(trainingSet$);
`;

const middlewareExample = `
import { decisionTree } from 'swashbuckler';
import mongo from '@swashbuckler/mongo-middleware';

// Laptops are puny. Make MongoDB do the work instead:
const middleware$ = mongo.create({
  mongoUrl: process.env.MONGO_URL
});
const model$ = decisionTree.train(data$, { middleware$ });
model$.subscribe();
`;

const HomeScreen = function HomeScreen() {
  const primaryColor = colorHelpers.getBrandColor();
  return (
    <Fragment>
      <Jumbotron
        logo='/logo.svg'
        headline={headline}
        body={jumbotronBody}
      />
      <Container>
        <Row style={{paddingTop: '2em'}}>
          <Col md={5}>
            <h2>
              Create your next ML project in pure, expressive Javascript.
              Deploy it anytime, anywhere, for anyone.
            </h2>
            <p>
              Swashbuckler provides ferocious implementations for common ML
              algorithms in native Javascript so that they can be trained or run
              on node.js servers, browsers, mobile applications (like
              React Native) or desktop applications (like Electron). It combines
              all the power of modern ML with the liberating flexibility of
              universal Javascript.
            </p>
          </Col>
          <Col md={{size: 6, offset: 1 }}>
            <pre style={{padding: '2em', paddingTop: '1em'}}>
              <code className='language-javascript'>
                {codeExample}
              </code>
            </pre>
          </Col>
        </Row>
        <Row style={{paddingTop: '15vh'}}>
          <Col md={{size: 5}}>
            <ModelPerformance />
          </Col>
          <Col md={{size: 5, offset: 2}}>
            <h2>Gold standard algorithms provide second-to-none accuracy.</h2>
            <p>
              To be competitive in the field of data science, Javascript needed
              a toolkit that could match or beat the performance of established
              ML libraries in other programming languages.
              Swashbuckler is carefully
              tested and benchmarked before each release to ensure that it
              produces models that are on par with other gold standard ML implementations
              (like Python's sklearn and R's caret).
            </p>
          </Col>
        </Row>
        <Row style={{paddingTop: '15vh'}}>
          <Col md={{size: 5}}>
            <h2>Out-of-the-box d3 visualizations illuminate model performance.</h2>
            <p>
              A picture is worth 1000 words when it comes to understanding data.
              Swashbuckler comes with a companion library called <a href="#">Lighthouse</a>, which
              makes it a breeze to visualize the performance of each model.
              Since Swashbuckler uses streamable Javascript under the hood,
              you can even see model performance and diagnose issues in real-time,
              as the model is learning.
            </p>
          </Col>
          <Col md={{size: 6, offset: 1}}></Col>
        </Row>
        <Row style={{paddingTop: '15vh'}}>
          <Col md={{size: 6}}>
            <pre style={{padding: '2em', paddingTop: '1em'}}>
              <code className='language-javascript'>
                {functionalProgrammingExample}
              </code>
            </pre>
          </Col>
          <Col md={{size: 5, offset: 1}}>
            <h2>
              Made for makers, not ivory towers. RxJS Observables power an intuitive, expressive
              and reactive API.
            </h2>
            <p>
              Most ML libraries were developed in academia (by statisticians) and
              are designed around abstract
              mathematical concepts like vector algebra. Swashbuckler throws
              those conventions to the wayside. Instead, it embraces the{' '}
              <a href="https://medium.com/javascript-scene/the-two-pillars-of-javascript-pt-2-functional-programming-a63aa53a41a4">
                Second Pillar of Javascript
              </a>{' '}and the <a href="https://rxjs-dev.firebaseapp.com/guide/overview">observable software pattern</a>.
              So the entire library
              is designed using simple programming concepts that
              most Javascript users already know and understand!
            </p>
          </Col>
        </Row>
        <Row style={{paddingTop: '15vh'}}>
          <Col md={5}>
            <h2>
              Swashbuckler middlewares deliver scale and speed.
            </h2>
            <p>
              Most ML libraries perform their calculations in-memory. This is
              great for hobbyist projects and small datasets but it can be problem
              for enterprise-scale data science.  Using middlewares, Swashbuckler
              can run calculations in-memory or using a beefier computational
              system like MongoDB or Apache Spark. You can declare what you want
              Swashbuckler to do and leave it up to the middleware to determine
              the fastest and most efficient way to do it!
            </p>
            <img src="/logo-aws.png" width='15%' style={{marginRight: '1em'}}/>
            <img src="/logo-gcp.jpg" width='45%'/>
            <img src="/logo-mongodb.png" width='35%'/>
          </Col>
          <Col md={{size: 6, offset: 1}}>
            <pre style={{padding: '2em', paddingTop: '1em'}}>
              <code className='language-javascript'>
                {middlewareExample}
              </code>
            </pre>
          </Col>
        </Row>
        <Row style={{paddingTop: '15vh'}}>
          <Col md={6}>
            <CodeWithoutHighlighting style={{minHeight: '11.5em'}}>
              <Typist
                startDelay={5000}
                avgTypingDelay={50}
                cursor={{
                  show: true,
                  blink: true,
                  element: '|',
                  hideWhenDone: true,
                  hideWhenDoneDelay: 300
                }}
              >
                npm i -g @swashbuckler/haven
                <Typist.Delay ms={500} />
                <br/>
                haven create my-saucy-new-project
                <Typist.Delay ms={500} />
                <br/>
                cd my-saucy-new-project
                <Typist.Delay ms={500} />
                <br/>
                haven push -b master .
                <Typist.Delay ms={500} />
                <br/>
                haven deploy -b master -env production .
              </Typist>
            </CodeWithoutHighlighting>
          </Col>
          <Col md={{size: 5, offset: 1}}>
            <h2>
              Get more done. Automate all the things with trusty companion
              libraries and out-of-the-box infrastructure.
            </h2>
            <p>
              Swashbuckler comes with a CLI tool that supports best practice data
              science workflow.  It can generate boilerplate for new projects
              and automate routine tasks. Out-of-the-box infrastructure is also available
              for Swashbuckler through an optional companion service called Haven.
              Haven provides useful conveniences to make life easier for data
              scientists including infrastructure to train models, version models,
              deploy models to production, track model performance over time and
              more.
            </p>
          </Col>
        </Row>
        <Row>
        </Row>
      </Container>
      <Footer/>
    </Fragment>
  );
};

export default HomeScreen;
