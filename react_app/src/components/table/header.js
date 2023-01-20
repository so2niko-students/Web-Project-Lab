export default function Header({ sortType, direction, onSort }) {
  const headers = [
    { key: "when", description: "When" },
    { key: "name", description: "Name" },
    { key: "status", description: "Status" },
  ];

  const dir = direction ? "▼" : "▲";

  return headers.map(({ key, description }) => (
    <th data-sort={key} key={key} onClick={() => onSort(key)}>
      {description}
      {sortType == key ? dir : ""}
    </th>
  ));
}
