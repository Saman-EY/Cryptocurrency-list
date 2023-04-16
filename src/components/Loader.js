import React from 'react';
// gif
import spinner from '../gif/spinner.gif';
import styles from '../styles/Loader.module.css';
import { InfinitySpin } from 'react-loader-spinner';

const Loader = () => {
  return (
    <section className={styles.container}>
      <InfinitySpin width="200" color="white"  />
    </section>
  );
};

export default Loader;
