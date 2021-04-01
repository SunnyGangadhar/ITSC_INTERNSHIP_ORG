import React from 'react';
import '../CSS/home.css';
import avatar1 from '../assets/images/avatars/avatar1.jpg'
import avatar2 from '../assets/images/avatars/avatar2.jpg'
import avatar3 from '../assets/images/avatars/avatar3.jpg'
import avatar4 from '../assets/images/avatars/avatar4.jpg'
import avatar5 from '../assets/images/avatars/avatar5.jpg'
import avatar6 from '../assets/images/avatars/avatar6.jpg'

const IndexPage = () =>
  <div className="default-content">
    <div className="content">
    <div style={{ textAlign: "center" }}>
                <h1> HomePage for Scheduling Events </h1>
                <p>
                  <h3> ITSC Event planning and Scheduling </h3>
                </p>
              </div>
              <div className="row pb-3" >
                <div className="col-lg-10 offset-lg-1">
                    <div className="stream-responsive stream-responsive-16by9">
                  <iframe
                    title="IT"
                    src="https://player.vimeo.com/video/408561496?autoplay=1"               
                    allow="autoplay; fullscreen"
                    allowFullScreen=""
                  ></iframe>
                  </div>
                </div>
              </div>
            </div>
            <section className="schedule-background">
              <div className="title" style={{ marginBottom:'4%'}}>
                <h1> Schedule and Speakers</h1>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="speaker">
                      <div>
                        <img
                          src={avatar1}
                          alt="User"
                          style={{ width: "180px" }}
                        ></img>
                      </div>
                      <div className="webkit-center">
                         <div className="date"> <p> 09:05 A.M - 09:10 A.M</p></div>
                          <h1 className="name"> Speaker Name, Phd</h1>
                          <p className="designation">Vice President - University of Cincinnati</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                  <div className="speaker">
                      <div>
                        <img
                          src={""}
                          alt="User"
                          style={{ width: "180px" }}
                        ></img>
                      </div>
                      <div className="webkit-center">
                      <div className="date"> <p> 09:20 A.M - 20.00 A.M</p></div>
                          <h1 className="name"> Speaker Name, Phd</h1>
                          <p className="designation"> President - University of Cincinnati</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                  <div className="speaker">
                      <div>
                        <img
                          src={""}
                          alt="User"
                          style={{ width: "180px" }}
                        ></img>
                      </div>
                      <div className="webkit-center">
                      <div className="date"> <p> 10.00 A.M - 12.00 P.M </p></div>
                          <h1 className="name"> Speaker Name, Phd</h1>
                          <p className="designation"> Lauren Kirgis- MSIT Graduate Advisor- University of Cincinnati</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                  <div className="speaker">
                      <div>
                        <img
                          src={""}
                          alt="User"
                          style={{ width: "180px" }}
                        ></img>
                      </div>
                      <div className="webkit-center">
                      <div className="date"> <p> 12.00 P.M - 02.00 P.M</p></div>
                          <h1 className="name"> Speaker Name, Phd</h1>
                          <p className="designation"> MSIT Prgram Director- Hazem Said - University of Cincinnati</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                  <div className="speaker">
                      <div>
                        <img
                          src={""}
                          alt="User"
                          style={{ width: "180px" }}
                        ></img>
                      </div>
                      <div className="webkit-center">
                      <div className="date"> <p> 02:10 P.M - 04:00 P.M</p></div>
                          <h1 className="name"> Speaker Name, Phd</h1>
                          <p className="designation">Executive Vice President and Provost - University of Cincinnati</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                  <div className="speaker">
                      <div>
                        <img
                          src={""}
                          alt="User"
                          style={{ width: "180px" }}
                        ></img>
                      </div>
                      <div className="webkit-center">
                      <div className="date"> <p> 04:10 P.M - 07:10 P.M</p></div>
                          <h1 className="name"> Speaker Name, Phd</h1>
                          <p className="designation">Executive Vice President and Provost - University of Cincinnati</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
    </div>

export default IndexPage;
