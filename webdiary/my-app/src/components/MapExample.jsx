import React from 'react';

const MapExample = () => {
  let numbers = [1, 2, 3, 4, 5];
  let result = numbers.map((n) => {
    let x = n * 2;
    return x;
  });

  console.log(result);

  return (
    <div>
      MapExample
      {/* <div>{result.join(', ')}</div> */}
    </div>
  );
};

export default MapExample;

// output 
// MapExample
// 2, 4, 6, 8, 10