import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import SingleTable from "./SingleTable";
import AuthUser from './../../../hooks/AuthUser/AuthUser';
import Loading from './../../../hooks/Loading/Loading';
import { useQuery } from 'react-query';

const Table = () => {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch(`http://crossfitassemble.xyz/api/all_shedule_web`)
  //     .then((res) => res.json())
  //     .then((dt) => setData(dt.data));
  // }, []);

  const morningSchedule = [
    {
      id: 1,
      time: "07:00 AM",
      data: [
        "CrossFit",
        "CrossFit",
        "CrossFit",
        "CrossFit",
        "CrossFit",
        "",
        "",
      ],
    },
    {
      id: 2,
      time: "08:00 AM",
      data: [
        "",
        "Mobilizer",
        "Mobilizer",
        "Mobilizer",
        "Mobilizer",
        "Mobilizer",
        "",
      ],
    },
    {
      id: 3,
      time: "09:00 AM",
      data: [
        "CrossFit",
        "CrossFit",
        "CrossFit",
        "CrossFit",
        "CrossFit",
        "",
        "",
      ],
    },
    {
      id: 4,
      time: "10:00 AM",
      data: ["", "Self Defense", "", "", "Self Defense", "", ""],
    },
    {
      id: 5,
      time: "11:00 AM",
      data: ["CrossFit", "CrossFit", "CrossFit", "CrossFit", "CrossFit", "", ""],
    },
    {
      id: 6,
      time: "12:00 PM",
      data: [
        "",
        "Mobilizer",
        "Mobilizer",
        "Mobilizer",
        "Mobilizer",
        "Mobilizer",
        ""
      ],
    },
    { id: 7, time: "03:00 PM", data: ["", "HIIT", "", "", "HIIT", "", ""] },
    {
      id: 8,
      time: "04:00 PM",
      data: ["", "CrossFit", "CrossFit", "CrossFit", "CrossFit", "CrossFit", ""],
    },
    {
      id: 9,
      time: "05:00 PM",
      data: [
        "Mobilizer",
        "Mobilizer/Kids MMA",
        "Mobilizer/Kids MMA",
        "Mobilizer",
        "Mobilizer/Kids MMA",
        "Kids MMA",
        "",
      ],
    },
    {
      id: 10,
      time: "06:00 PM",
      data: [
        "",
        "CrossFit/Kick Boxing",
        "CrossFit/Kick Boxing",
        "CrossFit",
        "CrossFit/Kick Boxing",
        "CrossFit/Kick Boxing",
        "",
      ],
    },
    {
      id: 11,
      time: "07:00 PM",
      data: ["PowerHour", "PowerHour ", "Mobilizer", "PowerHour", "PowerHour ", "PowerHour", ""],
    },
    {
      id: 12,
      time: "08:00 PM",
      data: [
        "Mobilizer",
        "CrossFit/Kick Boxing",
        "CrossFit/Kick Boxing",
        "CrossFit",
        "CrossFit/Kick Boxing",
        "CrossFit/Kick Boxing",
        "",
      ],
    },
  ];


  const { token } = AuthUser()

  const { data: schedule, isLoading, refetch } = useQuery('users', () =>
      fetch(`http://crossfitassemble.xyz/api/all_shedule`, {
          method: 'GET',
          headers: {
              'authorization': `Bearer ${token}`
          }
      }).then(res => res.json())
  )
  if (isLoading) {
      return <Loading />
  }


  return (
    <div className="mid-container mx-auto">
      <h1 className="md:text-4xl text-3xl font-bold text-primary mb-6 ">
        Class Schedule
      </h1>
      <SingleTable tableData={morningSchedule} />
    </div>
  );
};

export default Table;
