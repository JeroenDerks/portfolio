import React from 'react';
import styled from '@mui/system/styled';
import { Image } from 'components/Layout/Visual';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import bwi from 'public/images/bwi_bg.jpeg';
// import Link from 'components/Link';

const Wrapper = styled('div')({
  display: 'flex',
  background: 'lightgrey',
  justifyContent: 'center',
  aspectRatio: '1 / 0.5625',
  alignItems: 'center',
});

const UnlockUi = ({
  handleUnlock,
  locked,
}: {
  handleUnlock: () => void;
  locked: boolean;
}) => {
  const handleChange = ({ target }) => {
    if (target.value === process.env.NEXT_PUBLIC_UNLOCK_PASSWORD) {
      handleUnlock();
    }
  };

  return (
    <>
      {locked && (
        <Wrapper>
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            onChange={handleChange}
          />
        </Wrapper>
      )}
      {!locked && <Image src={bwi} alt="bundeswehr" />}
    </>
  );
};

export default UnlockUi;
