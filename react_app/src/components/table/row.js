export default function Row({ when, name, status, description, i }) {
  return (
    <tr>
      <td>{i + 1}</td>
      <td>{when}</td>
      <td>{name}</td>
      <td>{status}</td>
      <td>{description}</td>
    </tr>
  );
}
