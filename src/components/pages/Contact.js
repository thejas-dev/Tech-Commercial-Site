import React from 'react'

function Contact(){

	return(
			<div>	
				<section className="py-4 bg-info">
					<div className="container">
						<div className="row">
							<div className="col-md-4 my-auto">
								<h4>Contact us</h4>
							</div>
							<div className="col-md-8 my-auto">
								<h6 className="float-end">
									Home / Contact Us
								</h6>
							</div>
						</div>
					</div>
				</section>

				<section className="section">
					<div className="container">
						<div className="card shadow">
							<div className="card-body">
								<div className="row">
									<div className="col-md-6">
										<h6>Contact Form</h6>
										<hr/>
										<div className="form-group">
											<label className="mb-1">Full Name</label>
											<input type="text" className="form-control" placeholder="Enter Full Name"/>
										</div>
										<div className="form-group">
											<label className="mb-1">Mobile Number</label>
											<input type="text" className="form-control" placeholder="Enter Mobile Number"/>
										</div>
										<div className="form-group">
											<label className="mb-1">Email Address</label>
											<input type="email" className="form-control" placeholder="Enter Address"/>
										</div>
										<div className="form-group">
											<label className="mb-1">Message</label>
											<textarea rows="3" className="form-control" placeholder="Your Message Goes Here.."/>
										</div>
										<div className="form-group py-4">
											<button type="button" className="btn btn-primary w-100 shadow">Send Message</button>
										</div>
									</div>
									<div className="col-md-6 border-start">
										<h6 className="main-heading text-center">Address Information</h6>
										<div className="underline w-100"></div>
										<p>
											#YYY, baratiyar Theru, Indigopuram , Villacheri - 554XXX , INDIA
										</p>
										<p>
											Phone :- +91 7524378992
										</p>
										<p>
											Email :- indigo12093@gmail.com
										</p>

									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		);


}

export default Contact;