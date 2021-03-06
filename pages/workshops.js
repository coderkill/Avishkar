import React, { Component } from "react";
import Meta from "../components/Meta";
import Footer from "../components/Footer";
import { withRouter } from "next/router";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
const workshopContactInfo = {
  IOT: [
    {
      name: "Arjita Chaurasia",
      mobile: 9721716833,
      email: "arjitachaurasia@gmail.com"
    },
    {
      name: "Apurva",
      mobile: 9621076421,
      email: "Apurva.sngh8@gmail.com"
    }
  ],
  BigData: [
    {
      name: "Shivani Gupta",
      mobile: 8765496418,
      email: "shivani.ashi@gmail.com"
    },
    {
      name: "Anisha Kumari",
      mobile: 9454788294,
      email: "kinshukri1996@gmail.com"
    },
    {
      name: "Anshuman Sabath",
      mobile: 8249025894,
      email: "sabathanshuman@gmail.com"
    }
  ],
  PLC: [
    {
      name: "Vikas Kumar",
      mobile: 9621456356,
      email: "vikas0985251@gmail.com"
    },
    {
      name: "Shreya Srivastava",
      mobile: 8545870037,
      email: "srivastavashreya0108@gmail.com"
    }
  ],
  Matlab: [
    {
      name: "Rahul Verma",
      mobile: 7233019509,
      email: "rahul239verma@gmail.com"
    },
    {
      name: "Mayank Garg",
      mobile: 8445546165,
      email: "mayankgarg4646@gmail.com"
    }
  ]
};
class Index extends React.Component {
  state = {
    alertDialog: {
      open: false
    },
    workshopName: "IOT"
  };
  handleAlertOpen = name => {
    let { alertDialog, workshopName } = this.state;
    alertDialog.open = true;
    workshopName = name;
    this.setState({ alertDialog, workshopName });
  };
  handleAlertClose = () => {
    let { alertDialog } = this.state;
    alertDialog.open = false;
    this.setState({ alertDialog });
  };
  render() {
    const { workshopName } = this.state;
    const { open } = this.state.alertDialog;
    return (
      <>
        <Meta />
        <div className="container-new">
          <h2>WORKSHOPS</h2>
          <div className="button-div">
            <a href="https://goo.gl/forms/QjPSaoPLFstJ7lfs1" target="_blank">
              <button>Register for Workshops</button>
            </a>
          </div>
          <div className="row new-card">
            <div className="col-md-4 img-container">
              <img src="/static/img/workshops/big-data.jpg" alt="big_data" />
            </div>
            <div className="col-md-8 content">
              <h1>BigData</h1>
              <h2> 22-23 September, 2018</h2>
              <h3>
                Big data is an evolving term that describes any voluminous
                amount of structured, semi-structured and unstructured data that
                has the potential to be mined for information.It is a term used
                to refer to the study and applications of data sets that are so
                big and complex that traditional data-processing application
                software are inadequate to deal with them. Big data challenges
                include capturing data, data storage, data analysis, search,
                sharing, transfer, visualization, querying, updating,
                information privacy and data source.
              </h3>
              <div className="contact-button">
                <button onClick={() => this.handleAlertOpen("BigData")}>
                  Contact
                </button>
              </div>
            </div>
          </div>
          <div className="row new-card">
            <div className="col-md-4 img-container">
              <img src="/static/img/workshops/IoT-connectivity.jpg" alt="IOT" />
            </div>
            <div className="col-md-8 content">
              <h1>IOT with AWS</h1>
              <h2> 21-22 September, 2018</h2>
              <h3>
                The Internet of things is an ecosystem of connected physical
                objects that are accessible through the internet. Here we
                organise a best workshop on IOT with AWS in our college. The
                Internet of Things (IoT) with AWS provides secure,
                bi-directional communication between Internet-connected devices
                such as sensors, actuators, embedded micro-controllers, or smart
                appliances and the AWS Cloud. This enables you to collect
                telemetry data from multiple devices, and store and analyze the
                data. You can also create applications that enable your users to
                control these devices from their phones or tablets.
              </h3>
              <div className="contact-button">
                <button onClick={() => this.handleAlertOpen("IOT")}>
                  Contact
                </button>
              </div>
            </div>
          </div>
          <div className="row new-card">
            <div className="col-md-4 img-container">
              <img src="/static/img/workshops/matlab.png" alt="MATLAB" />
            </div>
            <div className="col-md-8 content">
              <h1>MATLAB</h1>
              <h2> 21 - 22 September, 2018</h2>
              <h3>
                This workshop aimed at providing practical methods for
                incorporating Simulink in the classroom to enhance teaching of
                technical concepts. MATLAB (matrix laboratory) is a
                multi-paradigm numerical computing environment and proprietary
                programming language developed by MathWorks. MATLAB allows
                matrix manipulations, plotting of functions and data,
                implementation of algorithms, creation of user interfaces, and
                interfacing with programs written in other languages, including
                C, C++, C#, Java, Fortran and Python. Although MATLAB is
                intended primarily for numerical computing, an optional toolbox
                uses the MuPAD symbolic engine, allowing access to symbolic
                computing abilities. An additional package, Simulink, adds
                graphical multi-domain simulation and model-based design for
                dynamic and embedded systems.
              </h3>
              <div className="contact-button">
                <button onClick={() => this.handleAlertOpen("Matlab")}>
                  Contact
                </button>
              </div>
            </div>
          </div>

          <div className="row new-card">
            <div className="col-md-4 img-container">
              <img src="/static/img/workshops/PLCScada.jpeg" alt="PLC Scada" />
            </div>
            <div className="col-md-8 content">
              <h1>PLC Scada</h1>
              <h2> 22 - 23 September, 2018</h2>
              <h3>
                PLC is a computing system used to control electromechanical
                processes. SCADA stands for Supervisory Control and Data
                Acquisition. It is a type of industrial control system that is
                used to monitor and control facilities and infrastructure in
                industries.PLCs Along With Certain Other Necessary Ingredients
                Like Sensors, Motors, Actuators, Valves, Conveyors, Boilers,
                SCADA Systems, Computers & Many More, Makes A Real Automated
                Manufacturing Plant. The main objective of PLC & Scada Workshop
                is to make the aspiring engineers acquainted with the conceptual
                as well as practical knowledge of the Industrial Automation &
                latest technologies being used to achieve industrial automation.
                The idea of organizing this workshop is to inculcate the basic
                fundamentals of automation in the students and provide them with
                a platform to work on, in the near future.
              </h3>
              <div className="contact-button">
                <button onClick={() => this.handleAlertOpen("PLC")}>
                  Contact
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Dialog
            open={open}
            onClose={this.handleAlertClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              Contact Information
            </DialogTitle>
            <div>
              <List>
                {workshopContactInfo[workshopName] !== undefined ? (
                  workshopContactInfo[workshopName].map(person => {
                    return (
                      <ListItem key={person.mobile}>
                        <ListItemText primary={person.name} />
                        <a
                          href={"tel:" + String(person.mobile)}
                          style={{ textDecoration: "none" }}
                        >
                          <ListItemText primary={person.mobile} />
                        </a>
                      </ListItem>
                    );
                  })
                ) : (
                  <></>
                )}
              </List>
            </div>
          </Dialog>
        </div>
        <Footer />
        <style jsx>
          {`
            .card {
              margin: 30px 100px;
            }
            .img-container {
              overflow: hidden;
            }
            .img-container img {
              height: 200px;
            }
            .new-card {
              min-height: 200px;
              padding: 15px;
              margin: 30px 100px;
              box-sizing: border-box;
              border-radius: 4px;
              box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
                0px 1px 1px 0px rgba(0, 0, 0, 0.14),
                0px 2px 1px -1px rgba(0, 0, 0, 0.12);
              border-left: 5px solid violet;
            }
            .container-new > h2 {
              margin-left: 100px;
            }
            h1 {
              color: rgba(0, 0, 0, 0.87);
              font-size: 1.5rem;
              font-weight: 400;
              font-family: "Roboto", "Helvetica", "Arial", sans-serif;
              line-height: 1.35417em;
            }
            .content h2 {
              color: rgba(0, 0, 0, 0.87);
              font-size: 1.1rem;
              font-weight: 400;
              font-family: "Roboto", "Helvetica", "Arial", sans-serif;
              line-height: 1.35417em;
            }
            h1,
            .content h2,
            h3 {
              margin: 0px;
            }
            .button-div a button {
              color: whitesmoke;
              text-align: center;
              margin: 0px;
              font-weight: 400;
              cursor: pointer;
              background: linear-gradient(
                45deg,
                rgb(108, 174, 221),
                rgb(57, 145, 208)
              );
              border-radius: 4px;
              text-decoration: none;
              padding: 0.75em 1.2em;
              border-style: none;
              font-size: 1.175rem;
              font-family: Source Sans Pro, Open Sans, Segoe UI, sans-serif;
              margin-left: 50%;
              transform: translateX(-50%);
              outline: none;
            }
            .contact-button button {
              text-align: center;
              margin: 10px 0 0 0;
              font-weight: 400;
              cursor: pointer;
              border-radius: 4px;
              text-decoration: none;
              padding: 0.4em 0.8em;
              border-style: none;
              font-size: 1.175rem;
              font-family: Source Sans Pro, Open Sans, Segoe UI, sans-serif;
              outline: none;
            }
            .content h3 {
              margin-top: 10px;
              color: rgba(0, 0, 0, 0.54);
              font-size: 1rem;
              font-weight: 400;
              font-family: "Roboto", "Helvetica", "Arial", sans-serif;
              line-height: 1.5em;
              text-align: justify;
            }
            @media (max-width: 700px) {
              .card {
                margin: 30px 5px;
              }
              .button-div a button {
                width: 220px;
                padding: 8px;
              }
              .contact-button button {
                width: 30%;
                padding: 0.35em 0.4em;
                margin-left: 50%;
                transform: translateX(-50%);
              }
              .new-card {
                margin: 30px 10px;
                border-left: 0px;
              }
              .container-new {
                margin-top: 60px;
              }
              .container-new > h2 {
                margin-left: 10px;
              }
            }
          `}
        </style>
      </>
    );
  }
}
export default withRouter(Index);
