import React, { useState } from 'react';
import { VictoryAxis, VictoryBar, VictoryChart } from 'victory';
import { Container } from 'reactstrap';
import Select from 'react-select';
import times from 'lodash/times';
import roundTo from 'round-to';
import PropTypes from 'prop-types';

import { getBrandColor } from '../helpers/colorHelpers';

const data = {
  randomForest: {
    series: [
      {library: 'sklearn', performance: 0.88},
      {library: 'swashbuckler', performance: 0.88}
    ],
    title: 'Random Forest (MNIST Dataset)',
    performanceMeasure: 'F1 Score',
  },
  sgd: {
    series: [
      {library: 'sklearn', performance: 0.78},
      {library: 'swashbuckler', performance: 0.78}
    ],
    title: 'SGD (MNIST Dataset)',
    performanceMeasure: 'F1 Score',
  },
  decisionTree: {
    series: [
      {library: 'sklearn', performance: 0.80},
      {library: 'swashbuckler', performance: 0.80}
    ],
    title: 'CART Decision Tree (Iris Dataset)',
    performanceMeasure: 'F1 Score',
  },
  naiveBayes: {
    series: [
      {library: 'sklearn', performance: 0.78},
      {library: 'swashbuckler', performance: 0.78}
    ],
    title: 'Naive Bayes (???)',
    performanceMeasure: 'F1 Score',
  },
  knearestNeighbors: {
    series: [
      {library: 'sklearn', performance: 0.78},
      {library: 'swashbuckler', performance: 0.78}
    ],
    title: 'K-nearest Neighbors (???)',
    performanceMeasure: 'F1 Score',
  },
  kMeans: {
    series: [
      {library: 'sklearn', performance: 0.78},
      {library: 'swashbuckler', performance: 0.78}
    ],
    title: 'K-means (???)',
    performanceMeasure: 'F1 Score',
  }
};

const selectOptions = Object.keys(data).map(model => (
  { label: data[model].title, value: model }
));

const ModelPerformance = function ModelPerformance(props) {
  const { height } = props;
  const [model, setModel] = useState('randomForest');
  const series = data[model].series;
  return (
    <div>
      <div style={{paddingLeft: '4em', paddingRight: '4em', paddingBottom: '1em'}}>
        <Select
          options={selectOptions}
          onChange={({value}) => setModel(value)}
          defaultValue={selectOptions[0]}
          theme={theme => ({
            ...theme,
            colors: {...theme.colors, primary: getBrandColor()}
          })}
        />
      </div>
      <VictoryChart
        domainPadding={{x: [150, 150]}}
        height={height}
        padding={{top: 10, bottom: 60, left: 60}}
        animate={{duration: 1000}}
      >
        <VictoryAxis style={{tickLabels: {fontSize: '2em'}}} />
        <VictoryAxis
          label={`Performance (${data[model].performanceMeasure})`}
          height={height}
          dependentAxis
          tickValues={[0, 1.0]}
          style={{tickLabels: {fontSize: '2em'}}}
        />
        <VictoryBar
          labels={(d) => roundTo(d.performance, 2)}
          height={height}
          data={series}
          style={{ data: { fill: getBrandColor() } }}
          alignment='middle'
          x="library"
          y="performance"
          barWidth={100}
        >
        </VictoryBar>
      </VictoryChart>
    </div>
  );
};

ModelPerformance.defaultProps = {
  height: 400,
};

ModelPerformance.propTypes = {
  height: PropTypes.number
}

export default ModelPerformance;
