import PropTypes from 'prop-types';
import data from 'components/statistics/data.json';
import {
  Stats,
  StatsItem,
  StatsLabel,
  StatsList,
  StatsTitle,
  StatsValue,
} from './StatisticsElements';

export const Statistics = () => {
  return (
    <Stats variant="container">
      <StatsTitle variant="title">UPLOAD STATS</StatsTitle>
      <StatsList variant="list">
        {data.map(data => (
          <StatsItem variant="item" key={data.id}>
            <StatsLabel variant="label">{data.label}: </StatsLabel>
            <StatsValue variant="value">{data.percentage}%</StatsValue>
          </StatsItem>
        ))}
      </StatsList>
    </Stats>
  );
};
Statistics.propTypes = {
  data: PropTypes.shape({
    variant: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
  }),
};
