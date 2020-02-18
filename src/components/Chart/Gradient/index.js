import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";

const Gradient = ({ value, label }) => {
  const [series, setSeries] = useState([value]);
  const [options, setOptions] = useState({});

  useEffect(() => {
    setSeries(series);
    setOptions({
      chart: {
        height: 350,
        type: "radialBar",
        toolbar: {
          show: true,
        },
      },
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 225,
          hollow: {
            margin: 0,
            size: "70%",
            background: "#fff",
            //image: undefined,
            imageOffsetX: 0,
            imageOffsetY: 0,
            position: "front",
            dropShadow: {
              enabled: true,
              top: 3,
              left: 0,
              blur: 4,
              opacity: 0.24,
            },
          },
          track: {
            background: "#fff",
            strokeWidth: "67%",
            margin: 0, // margin is in pixels
            dropShadow: {
              enabled: true,
              top: -3,
              left: 0,
              blur: 4,
              opacity: 0.35,
            },
          },

          dataLabels: {
            show: true,
            name: {
              offsetY: -10,
              show: true,
              color: "#888",
              fontSize: "12px",
            },
            value: {
              formatter: function(val) {
                return parseFloat(val);
              },
              color: "#111",
              fontSize: "28px",
              show: true,
            },
          },
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          type: "horizontal",
          shadeIntensity: 0.5,
          gradientToColors: ["#ABE5A1"],
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100],
        },
      },
      stroke: {
        lineCap: "round",
      },
      labels: ["Cº 0 - 100"],
    });
  }, [series]);

  return (
    <div className="row">
      <div className="col-md-12 col-lg-6 col-xl-3">
        <div className="panelcard">
          <div className="panel__body card-body">
            <div className="panel__title">
              <h5 className="bold-text">{label}</h5>
              {/* <h5 className="subhead">Last 10 minutes</h5> */}
            </div>
            <div className="panel__content">
              <div className="dashboard__current-users">
                <div className="dashboard__current-users-chart">
                  <div className="recharts-wrapper">
                    <div className="col mixed-chart">
                      <Chart
                        options={options}
                        series={series}
                        type="radialBar"
                        width="180"
                        height="200"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gradient;
