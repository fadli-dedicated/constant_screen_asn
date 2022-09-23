import React, { useEffect, useState } from "react";
import apiCalendar from "./api/Calendar";
import "./App.css";

function App() {
  const [izinkan, setIzinkan] = useState(false);
  const [success, setSuccess] = useState(false);
  const handleCalendar = async () => {
    apiCalendar.handleAuthClick();
    setIzinkan(true);
  };

  const _handleChangeCalendar = (e) => {
    console.info(e.target.value);
  };

  let [eventDetail, setEventDetail] = useState({
    summary: "Konsultasi ASN Sejahtera",
    location: "Depok Jawabarat Indonesia",
    description: "ASN Sejahtera - Konsultasi",
    start: {
      dateTime: "2022-09-24T21:00:00", //"2022-09-21T20:00:00.000Z" use this format,
      timeZone: "Asia/Jakarta",
    },
    end: {
      dateTime: "2022-09-24T21:30:00",
      timeZone: "Asia/Jakarta",
    },
    attendees: [{ email: "fadli@dedicated-it.com" }],
  });

  const _createEvent = async () => {
    let createCal = await apiCalendar.createEvent(
      eventDetail,
      "primary",
      "all"
    );
    return createCal;
  };

  // get params query
  useEffect(() => {
    let params = new URLSearchParams(window.location.search);
    let start = params.get("start");
    let end = params.get("end");
    let email = params.get("email");
    let desc = params.get("desc");
    let summary = params.get("summary");
    let location = params.get("location");

    setEventDetail({
      ...eventDetail,
      start: {
        dateTime: start,
        timeZone: "Asia/Jakarta",
      },
      end: {
        dateTime: end,
        timeZone: "Asia/Jakarta",
      },
      attendees: [{ email: email }, { email: "dev@dedicated-it.com" }],
      description: desc,
      summary: summary,
      location: location,
    });

    return () => {};
  }, []);

  if (success) {
    return <div className="App">Terimakasih, data Berhasil di buat</div>;
  }

  return (
    <div className="App">
      {!izinkan ? (
        <button onClick={handleCalendar}>Izinkan Google Calendar</button>
      ) : (
        <button
          onClick={() => {
            _createEvent().then((res) => console.info(res));
            setSuccess(true);
          }}
        >
          Konfirmasi
        </button>
      )}
    </div>
  );
}

export default App;
