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
  if (interview) {
    return { ...interview, interviewer: state.interviewers[interview.interviewer],
    };
  } else {
    return null
  }
}

export function getInterviewersForDay(state, day) {
  const IntArray = [];
  for (const Day of state.days) {
    if (Day.name === day) {
      Day.interviewers.forEach(number => IntArray.push(state.interviewers[number]))
    }
  }
  //returns an array of appointments for that day
  return IntArray;
}
