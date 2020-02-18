import React, { Component } from "react";
import Chart from "react-apexcharts";

class Basicline extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar",
          toolbar: {
            show: false,
          },
        },
        plotOptions: {
          bar: {
            columnWidth: "50%",
            endingShape: "arrow",
          },
        },
        stroke: {
          width: [4, 0, 0],
        },
        xaxis: {
          categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        markers: {
          size: 6,
          strokeWidth: 3,
          fillOpacity: 0,
          strokeOpacity: 0,
          hover: {
            size: 8,
          },
        },
        yaxis: {
          tickAmount: 5,
          min: 0,
          max: 100,
        },
      },
      series: [
        {
          name: "series-1",
          type: "line",
          data: [30, 40, 25, 50, 49, 21, 70, 51],
        },
        {
          name: "series-2",
          type: "column",
          data: [23, 12, 54, 61, 32, 56, 81, 19],
        },
        {
          name: "series-3",
          type: "column",
          data: [62, 12, 45, 55, 76, 41, 23, 43],
        },
      ],
    };
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-12 col-lg-6 col-xl-3">
          <div className="panelcard">
            <div className="panel__body card-body">
              <div className="panel__title">
                <h5 className="bold-text">Atividades</h5>
                <h5 className="subhead">Last 10 minutes</h5>
              </div>
              <div className="panel__content">
                <div className="dashboard__current-users">
                  <div className="dashboard__current-users-chart">
                    <div className="recharts-wrapper">
                      <div className="col mixed-chart">
                        <Chart
                          options={this.state.options}
                          series={this.state.series}
                          type="line"
                          height="350"
                          width="800"
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
  }
}

export default Basicline;
