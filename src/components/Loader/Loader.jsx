import React, { Component } from 'react';
import { Dna } from 'react-loader-spinner';

export default class Loader extends Component {
  render() {
    return (
      <Dna
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    );
  }
}
