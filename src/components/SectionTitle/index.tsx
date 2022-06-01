import { FC } from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const Title = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.pxToRem(14),
  color: theme.colors.info.light,

}));

interface SectionTitleProps {
    title: string;
}

const SectionTitle: FC<SectionTitleProps> = ({
  title = ''
}) => {
    return (
      <Title
        gutterBottom
        variant="h2"
        align="center"
      >
        {title}
      </Title>
    );
};

SectionTitle.propTypes = {
    title: PropTypes.string,
};

export default SectionTitle;
