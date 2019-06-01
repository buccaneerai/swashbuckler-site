import React from 'react';
import {Button, Col, Container, Row} from 'reactstrap';

import Jumbotron from '../components/Jumbotron';
import Features from '../components/Features';

const headline = (
  <span>
    Haven <small><small><small>for GitHub</small></small></small>
  </span>
);

const jumbotronBody = `
  Haven empowers machine learning teams to move faster by providing out-of-the-box
  infrastructure tailored to the demands of modern ML teams. Spend more time solving
  high-value problems and less time on bugs, routine tasks, infrastructure and deployments.
`;

const features = [
  {
    title: 'Version Control for ML Models',
    icon: <span className="icon icon-github"/>,
    body: `Git is a superb tool for versioning code but it wasn\'t designed
      specifically for data science. We boost your GitHub repository by implementing
      ML-specific best practices and processes that run whenever you push
      a commit. While you focus on building models, Haven works quietly in the
      background to improve your team's daily effectiveness.`
  },
  {
    title: 'More Power for the Tools You Love',
    icon: <span className="icon icon-arrow-bold-up"/>,
    body: `Haven plays nice with sklearn, Jupyter notebooks, GitHub, Slack, AWS and
      GCP (with support for other popular tools coming soon).  With a simple
      config file, you can be up in running in a matter of minutes without
      disrupting your existing workflow or software systems.
    `
  },
  {
    title: 'Transparent Model Performance',
    icon: <span className="icon icon-line-graph"/>,
    body: `Haven tracks the performance of every model you've ever pushed and
      stores the information in one place so you can always see how your model has
      changed over time.  Want to see how the per-class accuracy of your multi-classifier
      algorithm has changed over the last 6 months?  Or maybe your boss wants a
      link to your latest results? We've got you covered.
    `
  },
  {
    title: 'Differential QA (CI)',
    icon: <span className="icon icon-gauge"/>,
    body: `Haven uses sophisitcated techniques to track differences between each
      model and the prior model. It allows you to see where places where your
      model got worse and
    `
  },
  {
    title: 'Automated Deployments (CD)',
    icon: <span className="icon icon-line-graph"/>,
    body: `Optionally, Haven can deploy your models for you behind HTTPS APIs.
      You can grant access via private tokens so that internal stakeholders or
      customers can run the models. You can even run old versions of the model
      to compare how they perfom on different datasets.
    `
  },
  {
    title: 'Cheap, Secure, Scalable & Reliable',
    icon: <span className="icon icon-shield"/>,
    body: `Haven's team has experience deploying software at scale for some of
      the largest Fortune 100 companies and research universities in the world.
      We
    `
  }
];

const callToActionClickHandler = function callToActionClickHandler() {

};

const HavenPromo = function HavenPromo() {
  return (
    <div>
      <Jumbotron
        headline={headline}
        body={jumbotronBody}
        callToAction="Try it for free"
        callToActionOnClick={callToActionClickHandler} />
      <Container className='text-center' hidden>
        <Row>
          <Col sm="12" lg="4" style={{paddingTop: '40px'}}>
            <h6 class="text-muted text-uppercase">
              Supercharge GitHub
            </h6>
            <p class="lead mb-4">
              A great data science team deserves a great versioning system.
            </p>
          </Col>
          <Col sm="12" lg="4" style={{paddingTop: '40px'}}>
              <h6 class="text-muted text-uppercase">
                Workflow Automation
              </h6>
            <p class="lead mb-4">
             Haven automates routine tasks so you can focus on what's important.
            </p>
          </Col>
          <Col sm="12" lg="4" style={{paddingTop: '40px'}}>
            <h6 class="text-muted text-uppercase">
              Painless Onboarding
            </h6>
            <p class="lead mb-4">
              Convention over configuration gets you results more quickly.
            </p>
          </Col>
        </Row>
        <Row>
          <Col sm="12" lg="4" style={{paddingTop: '10px'}}>
            <p>
                Git is a great tool for versioning code but it wasn't designed
                with data science applications in mind.  We supplement your GitHub
                repository by providing ML-specific tooling that runs whenever you
                push a commit or change your data sources.  While you focus on
                refining your models, Haven works in the background to make your
                life simpler.
            </p>
          </Col>
          <Col sm="12" lg="4" style={{paddingTop: '10px'}}>
            <p>
                When you track models with Haven, it provides useful automations
                right out of the box.  Haven can automatically deploy your models
                behind HTTPS APIs, measure the performance of models over time,
                track versions of your data, containerize your models and maintain
                a link to the original data. Our goal is to replace cookie-cutter
                processes with software so you can get more done.
            </p>
          </Col>
          <Col sm="12" lg="4" style={{paddingTop: '10px'}}>
            <p>
              Haven is built to support your existing workflow and assumes
              sensible defaults which are suitable for the vast bulk of projects.
              After some simple setup, it runs in the background and enhances the
              tools you already use like sklearn, Jupyter notebooks, iPython
              Tensorflow, and (coming soon) R. <a href="/">Link an existing
              GitHub repository in under 5 minutes.</a>  No annual contract
              required. You can cancel at any time.
            </p>
          </Col>
        </Row>
      </Container>
      <Container fluid>
          <Features features={features} />
      </Container>
      <Container>
        <Row className="text-center">
          <h3 class="col-md-12" style={{paddingTop: '80px', paddingBottom: '50px'}}>
            Affordable Pricing
          </h3>
        </Row>
        <Row>
          <Col md="4" className="px-4 pb-2 mb-5">
            <div class="px-2 mb-2">
              <h6 class="text-muted text-uppercase mb-4 text-center">Starter</h6>
              <div class="statcard text-center">
                <h3 class="statcard-number">$25<small>/mo</small></h3>
                <span class="statcard-desc">per project</span>
              </div>
              <ul class="list-unstyled text-center">
                <li class="py-4"><strong>5</strong> team members</li>
                <li class="py-4"><strong>10GB</strong> of data </li>
                <li class="py-4"><strong>2</strong> deployments per project</li>
              </ul>
            </div>
          </Col>
          <Col md="4" class="px-4 pb-2 mb-5">
            <div class="px-2 mb-2">
              <h6 class="text-muted text-uppercase mb-4 text-center">Business</h6>
              <div class="statcard text-center">
                <h3 class="statcard-number">$50<small>/mo</small></h3>
                <span class="statcard-desc">per project</span>
              </div>
              <ul class="list-unstyled text-center">
                <li class="py-4"><strong>10</strong> team members</li>
                <li class="py-4"><strong>10TB</strong> of data </li>
                <li class="py-4"><strong>5</strong> deployments per project </li>
                <li class="py-4">Support by email (within 48 hours)</li>
              </ul>
            </div>
          </Col>
          <Col md="4" class="px-4 pb-2 mb-5">
            <div class="px-2 mb-2">
              <h6 class="text-muted text-uppercase mb-4 text-center">Enterprise</h6>
              <div class="statcard text-center">
                <h3 class="statcard-number">Usage Based</h3>
              </div>
              <ul class="list-unstyled text-center">
                <li class="py-4"><strong>$25/mo</strong> per team member</li>
                <li class="py-4"><strong>$5/mo</strong> per GB of data</li>
                <li class="py-4">Scale deployments to any size and pay only for what you use </li>
                <li class="py-4"><strong>9am-5pm</strong> email & phone support (within 24 hours)</li>
              </ul>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md="4" px="4" pb="2" mb="5">
            <Button block color="primary" size="lg">
              Try it for free (1 month trial)
            </Button>
          </Col>
          <Col md="4" px="4" pb="2" mb="5">
            <Button block color="primary" size="lg">
              Sign up
            </Button>
          </Col>
          <Col md="4" px="4" pb="2" mb="5">
            <Button block color="primary" size="lg">
              Contact us
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HavenPromo;
