import React from 'react';
import { BallTriangle } from 'react-loader-spinner';
import { LoadWrapper } from './Loader.styled';

const Loader = () => {
  return (
    <LoadWrapper>
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#4fa94d"
        ariaLabel="ball-triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </LoadWrapper>
  );
};

export default Loader;
