import React from "react";
import "./InterviewerListItem.scss";
import classnames from "classnames";

export default function InterviewerListItem(props) {
  const interviewerListItemClass = classnames("interviewers__item", {
    "interviewers__item--selected": props.selected
  });



  return (
  <li className={interviewerListItemClass} onClick = {() => props.setInterviewer(props.name)} >
    <img
      className="interviewers__item-image"
      src={props.avatar}
      alt={props.name}
    />
   {props.selected && props.name}
  </li>
  )
}
