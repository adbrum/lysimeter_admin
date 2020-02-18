import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";

const Semigauge = ({ value, min, max, title, label }) => {
  const [series, setSeries] = useState([value]);
  const [options, setOptions] = useState({});

  useEffect(() => {
    setSeries(series);
    setOptions({
      chart: {
        type: "radialBar",
        offsetY: -20
      },
      yaxis: {
        tickAmount: 5,
        min: min,
        max: max
      },
      plotOptions: {
        radialBar: {
          startAngle: -90,
          endAngle: 90,
          track: {
            background: "#e7e7e7",
            strokeWidth: "97%",
            margin: 5, // margin is in pixels
            dropShadow: {
              enabled: true,
              top: 2,
              left: 0,
              color: "#999",
              opacity: 1,
              blur: 2
            }
          },
          dataLabels: {
            show: true,
            name: {
              offsetY: 20,
              show: true,
              color: "#888",
              fontSize: "12px"
            },
            value: {
              formatter: function(val) {
                return parseFloat(val);
              },
              offsetY: -15,
              color: "#111",
              fontSize: "18px",
              show: true
            }
          }
        }
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "light",
          shadeIntensity: 0.4,
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 50, 53, 91]
        }
      },
      labels: [label]
    });
  }, [series]);

  return (
    <div className="row">
      <div className="col-md-12 col-lg-6 col-xl-3">
        <div className="panelcard">
          <div className="panel__body card-body">
            <div className="panel__title">
              <h5 className="bold-text">{title}</h5>
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

export default Semigauge;
