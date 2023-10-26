import React from "react";
import CardHeading from "../Basics/CardHeading";
import html from '../../media/IndividualTest/html.png'
import Dialog from "@mui/material/Dialog";
import Update from "./Update";
import { useSelector } from "react-redux";

const IndividualTest = () => {
  const stats = useSelector((state) => state.update.stats);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="individual">
      <div className="skills-individual">
        <div className="logo">
          {/* <div className="logo-name">HTML</div> */}
          <div className="logo-image">
            <img
              src={html}
              alt="HTML"
            />
          </div>
        </div>
        <div className="detail">
          <CardHeading heading="Hypertext Markup Language" />
          <div className="detail-content">
            Questions : 08 | Duration : 15 min | Submitted on 5 June 2021
          </div>
        </div>
        <div className="button">
          {/* <Button variant="contained" color="primary" onClick={handleClickOpen}>
            Update
          </Button> */}
          <button className='update-button' onClick={handleClickOpen}>Update</button>
        </div>
      </div>

      {/* Dialog */}
      <Dialog open={open} aria-labelledby="responsive-dialog-title">
        <Update handleClose={handleClose} />
      </Dialog>
      {/* ---- */}

      <div className="statics-individual">
        <CardHeading heading="Quick Statistics" />
        <div className="data-statics">
          <div className="ind-stat">
            <div className="stat-image">🏆</div>
            <div className="stat-detail">
              <div className="stat-number">{stats.rank}</div>
              <div className="stat-type">Your Rank</div>
            </div>
          </div>
          <div className="ind-stat">
            <div className="stat-image">📉</div>
            <div className="stat-detail">
              <div className="stat-number">
                {stats.percentile < 10
                  ? `0${stats.percentile}`
                  : stats.percentile}
                %
              </div>
              <div className="stat-type">Percentile</div>
            </div>
          </div>
          <div className="ind-stat">
            <div className="stat-image">✅</div>
            <div className="stat-detail">
              <div className="stat-number">
                {stats.score < 10 ? `0${stats.score}` : stats.score} /{" "}
                {stats.totalQuestions < 10
                  ? `0${stats.totalQuestions}`
                  : stats.totalQuestions}
              </div>
              <div className="stat-type">Correct Answers</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndividualTest;
