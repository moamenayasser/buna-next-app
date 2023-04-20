// MUI
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
// Internal Imports
import Image from "next/image";
import InnerTitle from "../InnerTitle";

const Leadership = () => {
  return (
    <Box pt={10} pb={10} bgcolor="#f2f2f2">
      <Container>
        <InnerTitle title="LEADERSHIP" align="left" />

        <Grid container spacing={3} display="flex" justifyContent="center">
          <Grid item xs={12} md={10}>
            <div
              style={{ display: "flex", justifyContent: "space-evenly" }}
              className="thumbnail1"
            >
              <div>
                <Image
                  width={150}
                  height={150}
                  alt="complex"
                  src="/images/leader2.jpg"
                  priority
                  style={{
                    objectFit: "cover",
                    borderRadius: "50%",
                    margin: "10px",
                  }}
                />
                <h4 textAlign="center" className="inner-subtitle">
                  SAEED AL NAHDI{" "}
                  <span
                    style={{
                      display: "block",
                      fontSize: "14px",
                      color: "#948f8f",
                      textAlign: "center",
                    }}
                  >
                    CHAIRMAN
                  </span>
                </h4>
              </div>
              <div>
                <Image
                  width={150}
                  height={150}
                  alt="complex"
                  src="/images/leader1.jpg"
                  priority
                  style={{
                    objectFit: "cover",
                    borderRadius: "50%",
                    margin: "10px",
                  }}
                />
                <h4 textAlign="center" className="inner-subtitle">
                  SAEED AL NAHDI{" "}
                  <span
                    style={{
                      display: "block",
                      fontSize: "14px",
                      color: "#948f8f",
                      textAlign: "center",
                    }}
                  >
                    CEO
                  </span>
                </h4>
              </div>
            </div>

            <p>
              It gives me great pleasure to welcome you to the world of BUNA.
              <br />
              At BUNA we have always found excitement in challenges. Going
              through our profile, you will get a sense of passion, expertise,
              reliability.
              <br />
              BUNA had developed management techniques, supported by highly
              professional teams, making us ready for the challenges in
              construction sector. <br />
              We are giving a high intention to every aspect in order to deliver
              the highest quality at a reasonable price, and within the desired
              time frame, meeting the safety & quality requirements that enhance
              the construction market & satisfies our clients. <br />
              At BUNA, along with all our subsidiaries & dedicated teams,
              believes that we have the required know-how to do a markable
              impact in construction market.
            </p>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Leadership;
