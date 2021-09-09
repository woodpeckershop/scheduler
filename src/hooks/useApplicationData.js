import axios from "axios";
import { useState, useEffect } from "react";

export default function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });

  const setDay = (day) => setState({ ...state, day });

  useEffect(() => {
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers"),
    ]).then((all) => {
      setState((prev) => ({
        ...prev,
        days: all[0].data,
        appointments: all[1].data,
        interviewers: all[2].data,
      }));
    });
  }, []);

  //This function allows us to change the local state when we book an interview
  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview },
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    return axios
      .put(`/api/appointments/${id}`, { interview })
      .then((result) => {
        const days = updateSpots(state, appointments);
        setState({ ...state, appointments, days });
      });
  }

  function cancelInterview(id) {
    const appointment = {
      ...state.appointments[id],
      interview: null,
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };
    return axios.delete(`/api/appointments/${id}`, {}).then((res) => {
      const days = updateSpots(state, appointments);
      setState({
        ...state,
        appointments,
        days,
      });
    });
  }

  const updateSpots = function (state, appointments) {
    // get day
    const dayObj = state.days.find((day) => day.name === state.day);
    // calculate the spots
    let spots = 0;
    for (const id of dayObj.appointments) {
      const appointment = appointments[id];
      if (!appointment.interview) {
        spots++;
      }
    }
    // update spots in day
    const day = { ...dayObj, spots };
    const days = state.days.map((dObj) =>
      dObj.name === state.day ? day : dObj
    );

    // return days array
    return days;
  };

  return { state, setDay, bookInterview, cancelInterview };
}
