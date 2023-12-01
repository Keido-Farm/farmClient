import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs"; 
import WeeklyTable from "../components/reusableTableWeekly";
import { getPeriodDetailsAndWeekly } from "../store/actions/actionCreator";

export default function TableWeekly() {
  const dispatch = useDispatch();
  const {id} = useParams()
  const weeklyReport = useSelector((state) => {
    return state.weekData.weeks
  })
  console.log(weeklyReport);
  useEffect(() => {
    dispatch(getPeriodDetailsAndWeekly(id))
  }, [])
  return (
    <div>
       <Link to={`/period-list/${id}`}>
        <BsArrowLeft size={25} style={{ marginRight: '10px',color:'green' }} /> 
      </Link>
    </div>
  );
}