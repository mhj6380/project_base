import React, { useState, useEffect } from 'react';
import axios from '../../util/axios';

const withRequest = (url: string) => (WrappedComponent: any) => {
  // return <div>TESTIN</div>;

  const ChildComp = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
      initialize();
    }, []);

    const initialize = async () => {
      const response = await axios.get(url);
      setData(response.data);
    };

    return <WrappedComponent data={data} />;
  };

  return ChildComp;
};

export default withRequest;
