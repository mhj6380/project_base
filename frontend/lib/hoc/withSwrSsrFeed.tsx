import React, { useState, useEffect } from 'react';
// import useSWR from 'swr';
import axios from '../../util/axios';

const withRequest = (url: string) => (WrappedComponent: any) => {
  // return <div>TESTIN</div>;

  const ChildComp = () => {
    const [datas, setDatas] = useState(null);

    useEffect(() => {
      initialize();
    }, []);

    const initialize = async () => {
      const response = await axios.get(url);
      setDatas(response.data);
    };

    return <WrappedComponent datas={datas} />;
  };

  return ChildComp;
};

// SSR

export default withRequest;
