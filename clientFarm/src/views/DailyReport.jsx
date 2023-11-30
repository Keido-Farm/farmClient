import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { fetchFarmsAsyncSuccess,postDailyReport } from "../store/actions/actionCreator";
export default function DailyReport() {
  const dispatch = useDispatch();
  const farms = useSelector((state) => {
    return state.farms.farms;
  });
 
  const [report, setReport] = useState({
    FarmId: 0,
    recordDate: "",
    mati: 0,
    afkir: 0,
    diberikan: 0,
    dikonsumsi: 0,
    tindakan: "",
  });

  const handleChangeReport = (event) => {
    const { name, value } = event.target;
    setReport({
      ...report,
      [name]: value,
    });
  };

  const onSubmitReport = async (event) => {
    try {
      event.preventDefault();
      const msg = await postDailyReport(report)
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `${msg}`,
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (err) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: err,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }
  useEffect(() => {
    dispatch(fetchFarmsAsyncSuccess());
  }, []);
  return (
    <>
      <div className="container mt-4">
        <h1>Daily Report</h1>
        {JSON.stringify(report)}
        <Form onSubmit={onSubmitReport}>
          <Form.Group className="mb-3" controlId="formBasicFarm">
            <Form.Label>Select Farm:</Form.Label>
            <Form.Select
              name="FarmId"
              value={report.FarmId}
              onChange={handleChangeReport}
            >
              <option value="" disabled>
                Select Farm
              </option>
              {farms.map((farm) => (
                <option key={farm.id} value={farm.id}>
                  {farm.name}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicStartDate">
            <Form.Label>Tanggal Recording:</Form.Label>
            <Form.Control
              type="date"
              name="recordDate"
              value={report.recordDate}
              onChange={handleChangeReport}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicReward">
            <Form.Label>Mati:</Form.Label>
            <Form.Control
              type="number"
              placeholder="Jumlah Ayam Mati"
              name="mati"
              value={report.mati}
              onChange={handleChangeReport}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicReward">
            <Form.Label>Afkir:</Form.Label>
            <Form.Control
              type="number"
              placeholder="Jumlah Ayam Afkir"
              name="afkir"
              value={report.afkir}
              onChange={handleChangeReport}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicReward">
            <Form.Label>Makanan yang diberikan:</Form.Label>
            <Form.Control
              type="float"
              placeholder="Jumlah makan yang diberikan"
              name="diberikan"
              value={report.diberikan}
              onChange={handleChangeReport}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicReward">
            <Form.Label>Makanan yang dikonsumsi:</Form.Label>
            <Form.Control
              type="float"
              placeholder="Jumlah makan yang dikonsumsi"
              name="dikonsumsi"
              value={report.dikonsumsi}
              onChange={handleChangeReport}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicAction">
            <Form.Label>Tindakan:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Tindakan"
              name="tindakan"
              value={report.tindakan}
              onChange={handleChangeReport}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
}
