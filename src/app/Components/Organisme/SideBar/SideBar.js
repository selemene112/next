'use client';
import React, { useState } from 'react';

import Dropdown from 'react-bootstrap/Dropdown';
import './StyleBox.css';

export const Box = ({ minValue, maxValue }) => {
  const [rangeValue, setRangeValue] = useState(minValue);

  const handleRangeChange = (event) => {
    setRangeValue(event.target.value);
  };
  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <div className="row mt-3">
            <div className="col">
              <div className="card">
                <Dropdown>
                  <Dropdown.Toggle variant="light" id="dropdown-basic" style={{ width: '100%' }}>
                    Transit
                  </Dropdown.Toggle>

                  <Dropdown.Menu alignRight style={{ width: '100%' }}>
                    <Dropdown.Item href="#/action-1">Direct</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Transit</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Transit 2+</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col">
              <div className="card">
                <Dropdown>
                  <Dropdown.Toggle variant="light" id="dropdown-basic" style={{ width: '100%' }}>
                    Facilities
                  </Dropdown.Toggle>

                  <Dropdown.Menu alignRight style={{ width: '100%' }}>
                    <Dropdown.Item href="#/action-1">Luggage</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">In-Flight Meal</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Wi-fi</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col">
              <div className="card">
                <Dropdown>
                  <Dropdown.Toggle variant="light" id="dropdown-basic" style={{ width: '100%' }}>
                    Departure Time
                  </Dropdown.Toggle>

                  <Dropdown.Menu alignRight style={{ width: '100%' }}>
                    <Dropdown.Item href="#/action-1">00:00 - 06:00</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">06:00 - 12:00</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">12:00 - 18:00</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col">
              <div className="card">
                <Dropdown>
                  <Dropdown.Toggle variant="light" id="dropdown-basic" style={{ width: '100%' }}>
                    Time Arrived
                  </Dropdown.Toggle>

                  <Dropdown.Menu alignRight style={{ width: '100%' }}>
                    <Dropdown.Item href="#/action-1">00:00 - 06:00</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">06:00 - 12:00</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">12:00 - 18:00</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col">
              <div className="card">
                <Dropdown>
                  <Dropdown.Toggle variant="light" id="dropdown-basic" style={{ width: '100%' }}>
                    Airlines
                  </Dropdown.Toggle>

                  <Dropdown.Menu alignRight style={{ width: '100%' }}>
                    <Dropdown.Item href="#/action-1">Garuda Indonesia</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Air Asia</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Lion Air</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col">
              <div className="card">
                <input type="range" min={minValue} max={maxValue} value={rangeValue} onChange={handleRangeChange} style={{ width: '100%' }} />
                <div>Cost $ = {rangeValue}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
