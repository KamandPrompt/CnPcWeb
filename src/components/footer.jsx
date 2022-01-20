export const Footer = (props) => {
    return (
        <footer style={{position: "absolute",bottom: "0%"}}>
		<div className="footer-main">
			<div className="container">
				<div className="row">
					<div className="col-lg-4 col-md-12 m-md-auto align-self-center">
						<div className="block">
							<table>
								<tr>
									<td><a href="https://iitmandi.ac.in/"><img src="images/logofoot.png" alt="" width="150px"
												height="auto"/></a></td>
									<td>
										<p className="address">Indian Institute of Technology Mandi<br/>Kamand, Mandi - 175005 <br/> Himachal Pradesh, India</p>
									</td>
								</tr>
								<tr>
									<td><br/>
										<ul className="social-icon list-inline">
											<li className="list-inline-item">
												<a className="social-links" href="https://www.facebook.com/IITMandi2009/"><i className="fa-brands fa-facebook"></i></a>
											</li>
											<li className="list-inline-item">
												<a className="social-links" href="https://twitter.com/iit__mandi"><i className="fa-brands fa-twitter"></i></a>
											</li>
											<li className="list-inline-item">
												<a className="social-links" href="https://www.linkedin.com/school/indian-institute-of-technology-mandi"><i className="fa-brands fa-linkedin"></i></a>
											</li>
										</ul>
									</td>
								</tr>
							</table>
						</div>
					</div>
					<div className="col-lg-4 col-md-3 col-6 mt-5 mt-lg-0">
						<div className="block-2">
							{/* <!-- heading --> */}
							<h6>Quick Links</h6>
							<hr className="new4"/>
							{/* <!-- links --> */}
							<ul>
								<li><a href="./gcs/index.html">Guidance and Counseling Service</a></li>
								<li><a href="https://research.iitmandi.ac.in/main/placements/">Career and Placement Cell</a></li>
								<li><a href="./grievances/index.html">Grievances</a></li>
								<li><a href="./Talk2_us/index.html">Talk To Faculty</a></li>
								<li><a href="/gcs/index.html#ug_orientation">B.Tech Orientation</a></li>
								<li><a href="https://students.iitmandi.ac.in/files/CodeOfConduct.pdf">Code of Conduct</a></li>
								<li><a href="https://oas.iitmandi.ac.in">Office Automation System</a></li>
							</ul>
						</div>
					</div>
					<div className="col-lg-4 col-md-3 col-6 mt-5 mt-lg-0">
						<div className="block-2">
							<h6>Explore</h6>
							<hr className="new4"/>
							<ul>
								<li><a href="https://gymkhana.iitmandi.co.in/">Student Gymkhana</a></li>
								<li><a href="./campusLife/index.html">Campus Life</a></li>
								<li><a href="./studentLife/index.html">Student Life</a></li>
								<li><a href="./social_consciousness/index.html">Social Initiatives</a></li>
								<li><a href="./achievements/index.html">Students' Achievements</a></li>
								<li><a href="./FemaleHelpDesk/index.html">Female Help Desk</a></li>
								<li><a href="http://students.iitmandi.ac.in/talk2_ws.php">Talk To B.Tech Female Students</a></li>
								<li><a href="./FemaleStudents/index.html">Specially For Female Students</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div id="footer_copyright"> <a href="https://iitmandi.co.in/" style={{"color":"black"}}><span style={{"color":"black"}}>©</span>CnP, IIT Mandi</a> 2021, All rights reserved.</div>
	</footer>
)}