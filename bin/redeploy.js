const prompt = require('prompt');
const optimist = require('optimist');
const AWS = require('aws-sdk');

const ecs = new AWS.ECS({region: 'us-east-1'});

function redeploy({stage, serviceName}) {
  const params = {
    cluster: stage,
    service: `${stage}-${serviceName}`,
    forceNewDeployment: true,
  };

  ecs.updateService(params, (err, res) => {
    if (err) throw err;
    console.log('ECS.updateService response: ', res);
    return;
  });
}

const schema = {
  properties: {
    stage: {
      description: 'Which stage should be forced to re-deploy? (prod, staging, etc)',
      type: 'string',
      required: true,
    },
    serviceName: {
      type: 'string',
      default: 'swashbuckler-site',
    }
  }
};
prompt.override = optimist.argv;
prompt.start();
prompt.get(schema, (err, params) => redeploy(params));

