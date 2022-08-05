import React from 'react'
import {Link} from 'react-router-dom'

function Footer(){



	return(
		<div>
			<section className="section footer bg-dark text-white">
				<div className="container">
					<div className="row">
						<div className="col-md-4">
							<h6 className="mt-4">Company Information</h6>
							<hr/>
							<p className="text-white mb-1" >
								There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
							</p>	
						</div>
						<div className="col-md-4">
							<h6 className="mt-4">Quick Links</h6>
							<hr/>
								<div><Link to="/">Home</Link></div>
								<div><Link to="/about">About</Link></div>
								<div><Link to="/contact">Contact</Link></div>
								<div><Link to="/blog">Blog</Link></div>
						</div>
						<div className="col-md-4">

							<h6 className="mt-4">Contact Information</h6>
							<hr/>
							<div><p className="text-white mb-1">#54352 shfyhskagd jkshk fw</p></div>
							<div><p className="text-white mb-1">4826784</p></div>
							<div><p className="text-white mb-1">indfia palisytea</p></div>
							<div><p className="text-white mb-1">Donalt Trump</p></div>
							<div><p className="text-white mb-1">Elon Musk</p></div>

						</div>
					</div>
				</div>

			</section>

		</div>



		)
}


export default Footer;