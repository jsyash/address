import React from "react";
import { Edit } from "../../components/Edit";
import { Trash } from "../../components/Trash";
import "./style.css";

export const Desktop = () => {
  return (
    <div className="desktop">
      <div className="div">
        <div className="rectangle" />
        <div className="text-wrapper">Checkout</div>
        <div className="text-wrapper-2">Address</div>
        <div className="text-wrapper-3">Payment</div>
        <div className="text-wrapper-4">Address</div>
        <p className="p">Select your address for your CSD Delivery</p>
        <div className="overlap-group">
          <div className="text-wrapper-5">Mohini Yadav</div>
          <p className="text-wrapper-6">
            Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac
          </p>
          <div className="group">
            <div className="group-2">
              <div className="text-wrapper-7">Change Address</div>
              <Edit className="edit-instance" />
            </div>
          </div>
          <div className="overlap">
            <div className="group-3">
              <div className="text-wrapper-8">Delete</div>
              <Trash className="trash-instance" />
            </div>
          </div>
        </div>
        <div className="frame">
          <div className="text-wrapper-9">Proceed</div>
        </div>
        <div className="overlap-2">
          <img
            className="line"
            alt="Line"
            src="https://generation-sessions.s3.amazonaws.com/3ef9da42e95202b7990bd96e8cc65689/img/line-2.svg"
          />
          <img
            className="img"
            alt="Line"
            src="https://generation-sessions.s3.amazonaws.com/3ef9da42e95202b7990bd96e8cc65689/img/line-2.svg"
          />
          <div className="tick-mark">
            <div className="vector-wrapper">
              <img
                className="vector"
                alt="Vector"
                src="https://generation-sessions.s3.amazonaws.com/3ef9da42e95202b7990bd96e8cc65689/img/vector-2.svg"
              />
            </div>
          </div>
          <div className="tick-mark-wrapper">
            <div className="img-wrapper">
              <img
                className="vector"
                alt="Vector"
                src="https://generation-sessions.s3.amazonaws.com/3ef9da42e95202b7990bd96e8cc65689/img/vector-2.svg"
              />
            </div>
          </div>
          <div className="div-wrapper">
            <div className="img-wrapper">
              <img
                className="vector"
                alt="Vector"
                src="https://generation-sessions.s3.amazonaws.com/3ef9da42e95202b7990bd96e8cc65689/img/vector-2.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
