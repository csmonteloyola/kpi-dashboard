import { FC } from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const Count = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.pxToRem(40),
  color: theme.colors.alpha.trueWhite[100]
}));

const CountLabel = styled(Typography)(({ theme }) => ({
  color: theme.colors.alpha.trueWhite[70],
  textTransform: 'uppercase',
  fontWeight: 100
}));


interface SectionCountProps {
    number: string;
    name: string;
}

const SectionCount: FC<SectionCountProps> = ({
  number = '',
  name = ''
}) => {
    return (
      <>
        <Count
          gutterBottom
          variant="h3"
          align="center">
          {number}
        </Count>
        <CountLabel
          gutterBottom
          variant="h4"
          align="center">
          {name}
        </CountLabel>
      </>
    );
};

SectionCount.propTypes = {
  number: PropTypes.string,
  name: PropTypes.string,
};

export default SectionCount;
