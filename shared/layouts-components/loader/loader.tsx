'use client';

import Image from 'next/image';
import React, { useState, useEffect } from 'react';

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoadingState = () => {
      setLoading(false);
    };
    handleLoadingState();
  }, []);

  return loading ? (
    <div id="loader" className="loader">
      <Image fill src={`/assets/images/media/loader.svg`} alt="Loading..." />
    </div>
  ) : null;
};

export default Loader;
