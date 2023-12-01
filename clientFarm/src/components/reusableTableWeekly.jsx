import { useNavigate } from "react-router-dom";
import Table from "react-bootstrap/Table";
export default function WeeklyTable({ week, weekNumber }) {
  return (
    <>
      <Text>Week No:{weekNumber}</Text>
      <Text>Starting Date:{week.startingDate} - Ending Date:{week.endDate}</Text>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Parameter</th>
            <th>Pengukuran</th>
            <th>Pencapaian</th>
            <th>Standard</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}
