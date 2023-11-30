import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Swal from 'sweetalert2';

function formatDate(dateString) {
  const date = new Date(dateString);
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); 
  const day = date.getDate().toString().padStart(2, '0');
  const year = date.getFullYear().toString();
  return `${month}/${day}/${year}`;
}

export default function PeriodTable({ period, periodNumber }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formattedStartDate = formatDate(period.startDate);
  const formattedEndDate = formatDate(period.endDate);

  return (
    <>
      <tr>
        <td>{periodNumber}</td>
        <td>{formattedStartDate}</td>
        <td>{formattedEndDate}</td>
        <td>{period.startingDOCNum}</td>
        <td>{period.status}</td>
        <td>
          <div>
            <Button variant="success">Weekly</Button>
            <Button variant="warning" style={{marginLeft: 10}}>Edit</Button>
            <Button variant="danger" style={{marginLeft: 10}}>End</Button>
          </div>
        </td>
      </tr>
    </>
  );
}

