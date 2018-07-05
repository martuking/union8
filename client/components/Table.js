import * as React from 'react';
import Row from './Row';

const Table = (props) => {
  let headers = props.headers.map((n, i) => {
    return (
      <th>{n}</th>
    );
  })
  return (
    <div className="jumbotron">
      <table className="table table-hover table-sm">
        <thead>
          <tr>
            {headers}
          </tr>
        </thead>
        <tbody>
          {
            props.data.map((d, i) => {
              return (
                <Row data={d} key={i} />
              );
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default Table;