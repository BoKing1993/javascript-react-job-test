import React from 'react';
import { Button } from '@material-ui/core';
import { ArrowForwardIos } from '@material-ui/icons';

const ListItem: React.FC<PropTypes> = (props) => {
  const { onClick, children } = props;

  return (
    <Button
      style={styles.button}
      variant='text'
      endIcon={<ArrowForwardIos style={styles.icon} />}
      onClick={onClick}
    >
      {children}
    </Button>
  )
};

type PropTypes = {
  children: React.ReactNode,
  onClick: () => void,
}

export default ListItem;

const styles = {
  button: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  icon: {
    fontSize: 18
  }
}