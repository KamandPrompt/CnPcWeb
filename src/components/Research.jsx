import React from "react";
import { ResearchLab } from "./researchLab";
import { Centre } from "./centre";
export const Research = (props) => {
  return (
    <div>
      <ResearchLab />
      <Centre />
      <div className="acadmic">
        <div className="slot">
          <h3 className="homeHead">Projects</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea maiores
            repudiandae nostrum qui et mollitia, consequatur voluptas ut
            ducimus. Earum eveniet quae aperiam nobis doloribus quasi quam,
            blanditiis fugiat, nihil ab officiis odit dolore eius. Magni
            quibusdam consectetur eveniet laboriosam quidem consequuntur ipsum
            inventore voluptatum, incidunt odit ullam quos quaerat veritatis
            ducimus accusamus, quis soluta unde amet quam aliquid culpa!
          </p>
          <h5>
            Sponsored Research Projects (
            <a href="https://www.iitmandi.ac.in/research/sponsored_research.php">
              Click Here
            </a>
            ).
          </h5>
          <h5>
            Consultancy Projects (
            <a href="https://www.iitmandi.ac.in/research/consultancy.php">
              Click Here
            </a>
            ).
          </h5>
          <h5>
            Seed Grant Projects (
            <a href="https://www.iitmandi.ac.in/research/seed_grant.php">
              Click Here
            </a>
            ).
          </h5>
          <h5>
            Internal Projects (
            <a href="https://www.iitmandi.ac.in/research/internal.php">
              Click Here
            </a>
            ).
          </h5>
          <h5>
            EWOK (Enabling Women of Kamand) (
            <a href="http://ewok.iitmandi.ac.in/">Click Here</a>).
          </h5>
        </div>
      </div>
      <div className="acadmic blue">
        <div className="slot">
          <h3 className="homeHead">Technology Innovation HUB and HCL</h3>
          <p>
            A Technology Innovation Hub (TIH) in human-computer interaction (IIT
            Mandi iHub and HCI Foundation or iHub) has been setup at the Indian
            Institute of Technology (IIT) Mandi under India’s National Mission
            on Interdisciplinary Cyber-Physical Systems. The iHub is planned to
            make India a leader in human-computer interaction (HCI) research in
            the world. The iHub is a section-8 company that has been created
            with a funding of INR 110 crores through the Science and Engineering
            Research Board, Department of Science and Technology, Government of
            India. The primary activities of the iHub are research and
            technology development, skill development, incubation and
            acceleration of startups, and collaborations in HCI areas.
          </p>
          <p>
            {" "}
            <strong>To know more please</strong>{" "}
            <a href="https://www.iitmandi.ac.in/TIH-HCI/" target="_blank">
              click here
            </a>
            .
          </p>
        </div>
      </div>
      <div className="acadmic blue">
        <div className="slot">
          <h3 className="homeHead">Research News</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            autem quaerat cumque, odit ea eos a excepturi quidem, quasi minima
            soluta minus possimus labore laudantium rem debitis consequatur
            libero consectetur?
          </p>
          <p>
            {" "}
            <strong>To know more please</strong>{" "}
            <a href="https://www.iitmandi.ac.in/TIH-HCI/" target="_blank">
              click here
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};
