import Row from "./row";
import Header from "./header";

export default function Table({ data, onSort, sortInfo }) {
  const { prevSortingType, isRightDirection } = sortInfo;

  return (
    <table className="table table-striped table-hover task-table">
      <thead>
        <tr>
          <th>#</th>
          <Header 
            sortType={prevSortingType} 
            direction={isRightDirection}
            onSort={onSort}
            />
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {data.map(({ when, name, status, description }, i) => (
          <Row
            key={i}
            when={when}
            name={name}
            status={status}
            description={description}
            i={i}
          />
        ))}
      </tbody>
    </table>
  );
}
