import React from "react";

export default function Show(props) {
  let interviewerName;
  if (!props.interviewer) {
    interviewerName = <h3 className="text--regular">{""}</h3>;
  } else {
    interviewerName = (
      <h3 className="text--regular">{props.interviewer.name}</h3>
    );
  }

  return (
    <main className="appointment__card appointment__card--show">
      <section className="appointment__card-left">
        <h2 className="text--regular">{props.student}</h2>
        <section className="interviewer">
          <h4 className="text--light">Interviewer</h4>
          {interviewerName}
        </section>
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <img
            className="appointment__actions-button"
            src="images/edit.png"
            alt="Edit"
            onClick={props.onEdit}
          />
          <img
            className="appointment__actions-button"
            src="images/trash.png"
            alt="Delete"
            onClick={props.onDelete}
          />
        </section>
      </section>
    </main>
  );
}
