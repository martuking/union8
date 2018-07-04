import * as React from 'react';

const Row = (props) => {
  return (
    <tr>
      {
        props.data.map((d, i) => {
          return (
            <td>{d}</td>
          );
        })
      }
    </tr>
  );
}

export default Row;