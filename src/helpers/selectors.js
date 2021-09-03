export function getAppointmentsForDay(state, day) {
  //... returns an array of appointments for that day
  const newArr = [];
  for (let d of state.days) {
    if (d.name === day) {
      for (let appointment of d.appointments) {
        newArr.push(state.appointments[appointment]);
      }
    }
  }
  return newArr;
}

export function getInterview(state, interview) {
  if (interview !== null) {
    return {
      student: interview.student,
      interviewer: state.interviewers[interview.interviewer],
    };
  } else {
    return null
  }
}
