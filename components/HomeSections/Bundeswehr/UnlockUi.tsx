import React from 'react';
import styled from '@mui/system/styled';
import Image from 'components/Image';
import TextField from '@mui/material/TextField';
import bwi1 from 'public/images/bw_0.png';
import bwi2 from 'public/images/bw_1.png';

const Wrapper = styled('div')({
  display: 'flex',
  background: 'lightgrey',
  justifyContent: 'center',
  aspectRatio: '1 / 0.5625',
  alignItems: 'center',
});

const UnlockUi = ({
  handleUnlock,
  id,
  locked,
}: {
  handleUnlock: () => void;
  id: number;
  locked: boolean;
}) => {
  const handleChange = ({ target }) => {
    if (
      target?.value?.toLowerCase() ===
      process.env.NEXT_PUBLIC_UNLOCK_PASSWORD?.toLowerCase()
    ) {
      handleUnlock();
    }
  };

  return (
    <>
      {locked && (
        <Wrapper>
          <TextField
            id={`password-input-${id}`}
            label="Password"
            variant="outlined"
            onChange={handleChange}
          />
        </Wrapper>
      )}
      {!locked && <Image src={id === 1 ? bwi1 : bwi2} alt="bundeswehr" />}
    </>
  );
};

export default UnlockUi;
