// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import AdminLTE, {
  Sidebar,
  Content,
  Row,
  Col,
  Box,
  Button,
  LoadingSpinner
} from "adminlte-2-react";
// eslint-disable-next-line no-unused-vars
// import { Container } from "./styles";
// eslint-disable-next-line no-unused-vars
import api from "../../services/api";
import Chart from "../../components/Chart/index.js";
import Semigauge from "../../components/Chart/Semigauge/index";
import Gradient from "../../components/Chart/Gradient";
import Zoomable from "../../components/Chart/Zoomable";
import Basicline from "../../components/Chart/Basicline";

const Browse = () => {
  const [username] = useState("admin");
  const [password] = useState("admin");
  const [landingPage, setLandingPage] = useState(false);
  const [items, setItems] = useState([]);

  const [created_at, setCreated_at] = useState("");
  const [lysimeter, setLysimeter] = useState("");
  const [battery, setBattery] = useState("");
  const [ambient_temperature, setAmbient_temperature] = useState("");
  const [ambient_humidity, setAmbient_humidity] = useState("");
  const [ambient_light01, setAmbient_light01] = useState("");
  const [ambient_light02, setAmbient_light02] = useState("");
  const [soil_temperature01, setSoil_temperature01] = useState("");
  const [soil_temperature02, setSoil_temperature02] = useState("");
  const [soil_temperature03, setSoil_temperature03] = useState("");
  const [soil_humidity01, setSoil_humidity01] = useState("");
  const [soil_humidity02, setSoil_humidity02] = useState("");
  const [soil_humidity03, setSoil_humidity03] = useState("");
  const [lysimeter_weight, setLysimeter_weight] = useState("");
  const [sediment_weight, setSediment_weight] = useState("");

  useEffect(() => {
    api
      .post("api/token/", {
        headers: {
          "Access-Control-Allow-Origin": "*"
        },
        username,
        password
      })
      .then(function (response) {
        // setToken(response.data.access);
        const token = response.data.access;

        console.log(token);
        api
          .get("lysimeters/", {
            headers: {
              Authorization: `Bearer ${token}`
            }
          })
          .then(response => {
            console.log("RESPONSE: ", [response.data.results]);
            // console.log("RESPONSE: ", response.data.results[0].battery);

            [response.data].map(item => {
              setCreated_at(item.results[0].created_at);
              setLysimeter(item.results[0].lysimeter);
              setBattery(item.results[0].battery);
              setAmbient_temperature(item.results[0].ambient_temperature);
              setAmbient_humidity(item.results[0].ambient_humidity);
              setAmbient_light01(item.results[0].ambient_light01);
              setAmbient_light02(item.results[0].ambient_light02);
              setSoil_temperature01(item.results[0].soil_temperature01);
              setSoil_temperature02(item.results[0].soil_temperature02);
              setSoil_temperature03(item.results[0].soil_temperature03);
              setSoil_humidity01(item.results[0].soil_humidity01);
              setSoil_humidity02(item.results[0].soil_humidity02);
              setSoil_humidity03(item.results[0].soil_humidity03);
              setLysimeter_weight(item.results[0].lysimeter_weight);
              setSediment_weight(item.results[0].sediment_weight);
            });
            setLandingPage(true);
          })
          .catch(error => {
            console.log(error);
          });
      })
      .catch(error => {
        console.log(error);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function valueToPercent(value) {
    return (value * 100) / 100;
  }

  return landingPage ? (
    <>
      <Content
        title="Lisimetro"
        subTitle="Dados dos sensores"
        browserTitle={created_at}
      >
        <Row>
          <Col xs={4}>
            <Col xs={12}>
              <Box title="Solo" type="primary" closable collapsable>
                <Col xs={6}>
                  <Semigauge
                    value={soil_temperature01}
                    min={-10}
                    max={50}
                    title="Temperatura 1"
                    label="-10 ºC 50"
                  />
                  <Semigauge
                    value={soil_temperature02}
                    min={-10}
                    max={50}
                    title="Temperatura 2"
                    label="-10 ºC 50"
                  />
                  <Semigauge
                    value={soil_temperature03}
                    min={-10}
                    max={50}
                    title="Temperatura 3"
                    label="-10 ºC 50"
                  />
                </Col>
                <Col xs={6}>
                  <Semigauge
                    value={valueToPercent((1023 - soil_humidity01) / 5)}
                    min={0}
                    max={100}
                    title="Humidade 1"
                    label="0 % 100"
                  />
                  <Semigauge
                    value={valueToPercent((1023 - soil_humidity02) / 5)}
                    min={0}
                    max={100}
                    title="Humidade 2"
                    label="0 % 100"
                  />
                  <Semigauge
                    value={valueToPercent((1023 - soil_humidity03) / 5)}
                    min={0}
                    max={100}
                    title="Humidade 3"
                    label="0 % 100"
                  />
                </Col>
              </Box>
            </Col>
          </Col>
          <Col xs={4}>
            <Col xs={12}>
              <Box title="Ambiente" type="primary" closable collapsable>
                <Col xs={6}>
                  <Semigauge
                    value={ambient_temperature}
                    min={-10}
                    max={50}
                    title="Temperatura"
                    label="-10 ºC 50"
                  />
                  <Semigauge
                    value={valueToPercent(ambient_humidity)}
                    min={0}
                    max={100}
                    title="Humidade"
                    label="0 % 100"
                  />
                </Col>
                <Col xs={6}>
                  <Semigauge
                    value={ambient_light01}
                    min={0}
                    max={50000}
                    title="Luz Vísivel + IR"
                    label="0 Lx 50000"
                  />
                  <Semigauge
                    value={ambient_light02}
                    min={0}
                    max={50000}
                    title="Luz IR"
                    label="0 Lx 50000"
                  />
                </Col>
              </Box>
            </Col>
          </Col>
          <Col xs={4}>
            <Col xs={12}>
              <Box title="Peso" type="primary" closable collapsable>
                <Col xs={6}>
                  <Semigauge
                    value={lysimeter_weight}
                    min={-10000}
                    max={50000}
                    title="Lisimetro"
                    label="-10000 g 50000"
                  />
                </Col>
                <Col xs={6}>
                  <Semigauge
                    value={sediment_weight}
                    min={0}
                    max={2000}
                    title="Residuos"
                    label="0 g 2000"
                  />
                </Col>
              </Box>
              <Box title="Bateria" type="primary" closable collapsable>
                <Col xs={6}>
                  <Semigauge
                    value={battery}
                    min={0}
                    max={5000}
                    title="Bateria"
                    label="0 mv 5000"
                  />
                </Col>
              </Box>
            </Col>
          </Col>
        </Row>
      </Content>
    </>
  ) : (
      <>
        <LoadingSpinner />
      </>
    );
};

export default Browse;
