import React, { useState } from "react";
import { useSelector } from "react-redux";
import { updateStats } from "../../redux/actions/update";
import { useDispatch } from "react-redux";
import html from '../../media/IndividualTest/html.png'

const Update = ({ handleClose }) => {
  const dispatch = useDispatch();

  const stats = useSelector((state) => state.update.stats);

  const [ranks, setRank] = useState(stats.rank);
  const [percentiles, setPercentile] = useState(stats.percentile);
  const [scores, setScore] = useState(stats.score);
  const saveData = () => {
    dispatch(
      updateStats({
        rank: ranks,
        percentile: percentiles,
        score: scores,
        totalQuestions: stats.totalQuestions,
      })
    );
    handleClose();
  };
  return (
    <div className="Update">
      <div className="dialog-heading">
        <div className="heading-name">Update Score Skills</div>
        <div className="logo">
          <div className="logo-image">
            <img
              src={html}
              alt="LOGO"
            />
          </div>
        </div>
      </div>

      <div className="dialog-content">
        <div className="input-rank">
          <div className="content-input">
            <span>1</span>Update your <b>Rank</b>
          </div>
          <div className="button-input">

            <input
              type="number"
              value={ranks}
              onChange={(e) => {
                setRank(e.target.value);
              }}
            ></input>

          </div>
        </div>
        <div className="input-rank">
          <div className="content-input">
            <span>2</span>Update your <b>Percentile</b>
          </div>
          <div className="button-input">

            <input
              type="number"
              value={percentiles}
              onChange={(e) => {
                setPercentile(e.target.value);
              }}
              max="100"
            ></input>

          </div>
        </div>
        <div className="input-rank">
          <div className="content-input">
            <span>3</span>Update your <b>Score</b>
          </div>
          <div className="button-input">

            <input
              type="number"
              value={scores}
              onChange={(e) => {
                setScore(e.target.value);
              }}
            ></input>

          </div>
        </div>
      </div>
      <div className="dialog-buttons">
        {/* <Button
          className="out"
          variant="outlined"
          color="primary"
          onClick={handleClose}
        >
          {" "}
          Cancel{" "}
        </Button> */}
        <button className="out" onClick={handleClose}>{" "}Cancel{" "}</button>

        <button className="fill" onClick={saveData}>{" "}Save {"→"}</button>
        {/* <Button
          className="fill"
          variant="contained"
          color="primary"
          onClick={saveData}
        >
          {" "}
          Save &nbsp; <ArrowForwardIcon fontSize="14px" />
        </Button> */}
      </div>
    </div>
  );
};

export default Update;
