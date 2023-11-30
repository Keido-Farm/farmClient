import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { getFarmDetailsAndPeriods } from "../store/actions/actionCreator";
import { useParams } from "react-router-dom";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs"; 
import PeriodTable from "../components/reusableTablePeriod";

export default function TablePeriod() {
  const dispatch = useDispatch();
  const {id} = useParams()
  const periods = useSelector((state) => {
    return state.periodData.periods
  })
  console.log(periods);
  useEffect(() => {
    dispatch(getFarmDetailsAndPeriods(id))
  }, [])
  return (
    <div>
       <Link to="/">
        <BsArrowLeft size={25} style={{ marginRight: '10px',color:'green' }} /> 
      </Link>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Starting DOC</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {periods.map((period,i) => {
              const periodNumber = i + 1
              return <PeriodTable key={period.id} period={period} periodNumber = {periodNumber} />;
            })}
        </tbody>
      </Table>
    </div>
  );
}
