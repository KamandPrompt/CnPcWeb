export const Footer = (props) => {
    return (
        <footer style={{position: "absolute",bottom: "0%"}}>
		<div className="footer-main">
			<div className="container">
				<div className="row">
					<div className="col-lg-4 col-md-12 m-md-auto align-self-center">
						<div id="block-1" className="block">
							{/* <table>
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
							</table> */}
							<div className="log" style={{"height":"100px"}}><a href="https://iitmandi.ac.in/"><img src="images/iitmandi_logo.png" alt="" width="150px"
												height="auto"/></a></div>
							<div className="head"><h2 className="address" style={{"color":"gray","lineHeight":"15px"}}>Indian Institute of Technology Mandi<br/>Kamand, Mandi - 175005 <br/> Himachal Pradesh, India</h2></div>
							<div className="icons">
								<ul className="social-icon list-inline">
									<li className="list-inline-item">
										<a id="fav1" className="social-links" href="https://www.facebook.com/IITMandi2009/"><i className="fab fa-facebook-f"></i></a>
									</li>
									<li className="list-inline-item">
										<a id="fav2" className="social-links" href="https://twitter.com/iit__mandi"><i className="fab fa-twitter"></i></a>
									</li>
									<li className="list-inline-item">
										<a id="fav3" className="social-links" href="https://www.linkedin.com/school/indian-institute-of-technology-mandi"><i class="fab fa-linkedin-in"></i></a>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-3 col-6 mt-5 mt-lg-0">
						<div className="block-2">
							{/* <!-- heading --> */}
							<h4>Quick Links</h4>
							<hr className="new4"/>
							{/* <!-- links --> */}
							<ul id="links-1">
								<li><a href="./gcs/index.html" style={{"color":"gray"}}>Guidance and Counseling Service</a></li>
								<li><a href="https://research.iitmandi.ac.in/main/placements/" style={{"color":"gray"}}>Career and Placement Cell</a></li>
								<li><a href="./grievances/index.html" style={{"color":"gray"}}>Grievances</a></li>
								<li><a href="./Talk2_us/index.html" style={{"color":"gray"}}>Talk To Faculty</a></li>
								<li><a href="/gcs/index.html#ug_orientation" style={{"color":"gray"}}>B.Tech Orientation</a></li>
								<li><a href="https://students.iitmandi.ac.in/files/CodeOfConduct.pdf" style={{"color":"gray"}}>Code of Conduct</a></li>
								<li><a href="https://oas.iitmandi.ac.in" style={{"color":"gray"}}>Office Automation System</a></li>
							</ul>
						</div>
					</div>
					<div className="col-lg-4 col-md-3 col-6 mt-5 mt-lg-0">
						<div className="block-2">
							<h4>Explore</h4>
							<hr className="new4"/>
							<ul>
								<li><a href="https://gymkhana.iitmandi.co.in/" style={{"color":"gray"}}>Student Gymkhana</a></li>
								<li><a href="./campusLife/index.html" style={{"color":"gray"}}>Campus Life</a></li>
								<li><a href="./studentLife/index.html" style={{"color":"gray"}}>Student Life</a></li>
								<li><a href="./social_consciousness/index.html" style={{"color":"gray"}}>Social Initiatives</a></li>
								<li><a href="./achievements/index.html" style={{"color":"gray"}}>Students' Achievements</a></li>
								<li><a href="./FemaleHelpDesk/index.html" style={{"color":"gray"}}>Female Help Desk</a></li>
								<li><a href="http://students.iitmandi.ac.in/talk2_ws.php" style={{"color":"gray"}}>Talk To B.Tech Female Students</a></li>
								<li><a href="./FemaleStudents/index.html" style={{"color":"gray"}}>Specially For Female Students</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div id="footer_copyright"> <a href="https://iitmandi.co.in/" style={{"color":"black"}}><span style={{"color":"black"}}>©</span>CnP, IIT Mandi</a> 2021, All rights reserved.</div>
	</footer>
)}