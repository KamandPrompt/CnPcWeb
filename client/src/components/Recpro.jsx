import React from "react";
// import { layout } from "react-bootstrap";
import { Button, Card, Form, Container, Row, Col } from "react-bootstrap";
import "./Recpro.css";

export const Recpro = () => {
  return (
    <>
      <div>
        <hr className="left-lg" />
        <h3 className="homeHead homeHead-lg">Recruitment process</h3>
        <hr className="right-lg" />
      </div>
      <br />
      <br />
      <Container>
        <center>
          <Row>
            <Col lg={3} md={4} sm={6} xs={12}>
              <div class="card text-center">
                <div class="card-body">
                  <h3 class="card-title">STEP 1</h3>
                  <p class="card-text">
                    Invitation for placements, along with Placement brochure, are sent to recruiting organizations by CDC/ Companies approaches CDC for placements.
                  </p>
                </div>
              </div>
            </Col>

            <Col lg={3} md={4} sm={6} xs={12}>
              <div class="card text-center">
                <div class="card-body">
                  <h3 class="card-title">STEP 2</h3>
                  <p class="card-text">
                    Job Notification Form (JNF)/ Internship Notification Form (INF) are sent to the recruiters for registration.
                  </p>
                </div>
              </div>
            </Col>

            <Col lg={3} md={4} sm={6} xs={12}>
              <div class="card text-center">
                <div class="card-body">
                  <h3 class="card-title">STEP 3</h3>
                  <p class="card-text">
                    Recruiters submit filled JNF and/or INF.
                  </p>
                </div>
              </div>
            </Col>

            <Col lg={3} md={4} sm={6} xs={12}>
              <div class="card text-center">
                <div class="card-body">
                  <h3 class="card-title">STEP 4</h3>
                  <p class="card-text">
                    Data of eligible students is shared with the companies.
                  </p>
                </div>
              </div>
            </Col>

            <Col lg={3} md={4} sm={6} xs={12}>
              <div class="card text-center">
                <div class="card-body">
                  <h3 class="card-title">STEP 5</h3>
                  <p class="card-text">
                    Pre-Placement Talks are scheduled for registered candidates.
                  </p>
                </div>
              </div>
            </Col>

            <Col lg={3} md={4} sm={6} xs={12}>
              <div class="card text-center">
                <div class="card-body">
                  <h3 class="card-title">STEP 6</h3>
                  <p class="card-text">
                    Slots are provided to companies for Online Test/ GD Process etc.
                  </p>
                </div>
              </div>
            </Col>

            <Col lg={3} md={4} sm={6} xs={12}>
              <div class="card text-center">
                <div class="card-body">
                  <h3 class="card-title">STEP 7</h3>
                  <p class="card-text">
                    Company provides the list of shortlisted candidates to CDC for final interview process.
                  </p>
                </div>
              </div>
            </Col>

            <Col lg={3} md={4} sm={6} xs={12}>
              <div class="card text-center">
                <div class="card-body">
                  <h3 class="card-title">STEP 8</h3>
                  <p class="card-text">
                    CDC allots dates to organizations for campus interviews based on various details given by companies.
                  </p>
                </div>
              </div>
            </Col>

            <Col lg={3} md={4} sm={6} xs={12}>
              <div class="card text-center">
                <div class="card-body">
                  <h3 class="card-title">STEP 9</h3>
                  <p class="card-text">
                    In case a student is shortlisted for more than one company in a given slot, he/she is to provide a preference at least an hour before the start of the interviews.
                  </p>
                </div>
              </div>
            </Col>

            <Col lg={3} md={4} sm={6} xs={12}>
              <div class="card text-center">
                <div class="card-body">
                  <h3 class="card-title">STEP 10</h3>
                  <p class="card-text">
                    Shortlisted candidates participate in the hiring process of the company.
                  </p>
                </div>
              </div>
            </Col>

            <Col lg={3} md={4} sm={6} xs={12}>
              <div class="card text-center">
                <div class="card-body">
                  <h3 class="card-title">STEP 11</h3>
                  <p class="card-text">
                    Company submits a list of finally selected students, to CDC, along with a waitlist at the end of the day/ slot.
                  </p>
                </div>
              </div>
            </Col>

            <Col lg={3} md={4} sm={6} xs={12}>
              <div class="card text-center">
                <div class="card-body">
                  <h3 class="card-title">STEP 12</h3>
                  <p class="card-text">
                    CDC confirms the offer acceptance to company based on the student preference collected in Step 9. The confirmation is given within 3 hours of result submission by the company.
                  </p>
                </div>
              </div>
            </Col>

            <Col lg={3} md={4} sm={6} xs={12}>
              <div class="card text-center">
                <div class="card-body">
                  <h3 class="card-title">STEP 13</h3>
                  <p class="card-text">
                    Selected students are taken out from further placement process, in compliance with our One Student, One Job Policy.
                  </p>
                </div>
              </div>
            </Col>

          </Row>

        </center>

      </Container>
      <br></br>
    </>
  );
};
