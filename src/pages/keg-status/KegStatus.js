import React from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import { AiFillSetting } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { IoChevronUpSharp, IoChevronDownSharp } from "react-icons/io5";
import "./keg-status.scss";

const KegStatus = () => {
  return (
    <Container className="keg-status-section">
      {/* Heading Section Start */}
      <Row>
        <Col xs="12">
          <div className="keg-status-heading">
            <h5>Keg Status</h5>
            <div className="keg-status-icons">
              <AiFillSetting
                className="keg-status-setting-icon"
                size={22}
                fill={"#3c414e"}
              />
              <MdDelete
                className="keg-status-del-icon"
                size={22}
                fill={"#3c414e"}
              />
            </div>
          </div>
        </Col>
      </Row>
      {/* Heading Section End */}
      {/* Table Section Start */}
      <Row>
        <Col xs="12">
          <div className="keg-status-table">
            <Table responsive hover>
              <thead>
                <tr>
                  <th>
                    <div className="sorted-table-head">
                      <div className="sorted-table-head-icons">
                        <IoChevronUpSharp size={13} />
                        <IoChevronDownSharp size={13} />
                      </div>
                      Device ID
                    </div>
                  </th>
                  <th>
                    <div className="sorted-table-head">
                      <div className="sorted-table-head-icons">
                        <IoChevronUpSharp size={13} />
                        <IoChevronDownSharp size={13} />
                      </div>
                      Device Name
                    </div>
                  </th>
                  <th>
                    <div className="sorted-table-head">
                      <div className="sorted-table-head-icons">
                        <IoChevronUpSharp size={13} />
                        <IoChevronDownSharp size={13} />
                      </div>
                      Timestamp
                    </div>
                  </th>
                  <th>
                    {" "}
                    <div className="sorted-table-head">
                      <div className="sorted-table-head-icons">
                        <IoChevronUpSharp size={13} />
                        <IoChevronDownSharp size={13} />
                      </div>
                      Remaining Beers
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {[...Array(6)].map((el, i) => (
                  <tr key={i}>
                    <td>#3338206633382066</td>
                    <td>Beer Keg A</td>
                    <td>2/20/2016 9:20:44 PM </td>
                    <td>78</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>
      {/* Table Section End */}
    </Container>
  );
};

export default KegStatus;
