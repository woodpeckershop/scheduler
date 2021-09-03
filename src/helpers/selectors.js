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
