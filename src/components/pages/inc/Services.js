import React from 'react'
import Service1 from '../../images/index5.jpg'
import Service3 from '../../images/index4.jpg'
import Service2 from '../../images/index3.jpg'
import {Link} from 'react-router-dom'


function Services(){
	return(
		<div>
			<section className='section border-top ' >
					<div className='container'>
						<div className='row'>
							<div className='column-md-12 mb-4 text-center'>
								<h3 className='main-heading' >Our Services</h3>
								<div className='underline mx-auto'></div>
							</div>
							<div className='col-md-4'>
								<div className="card shadow">
								<img className='w-100 border-bottom' alt="Service1" src={Service1} />
									<div className="card-body">
										<h6>Service-1</h6>
										<div className="underline"></div>
										<p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
										</p>
										<Link to='/' className='btn btn-link' >Read More</Link>
									</div>
								</div>
							</div>
							<div className='col-md-4 mt-2'>
								<div className="card shadow">
								<img className='w-100 border-bottom' alt="Service1" src={Service2} />
									<div className="card-body">
										<h6>Service-2</h6>
										<div className="underline"></div>
										<p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
										</p>
										<Link to='/' className='btn btn-link' >Read More</Link>
									</div>
								</div>
							</div>
							<div className='col-md-4 mt-2'>
								<div className="card shadow">
								<img className='w-100 border-bottom' alt="Service1" src={Service3} />
									<div className="card-body">
										<h6>Service-3</h6>
										<div className="underline"></div>
										<p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
										</p>
										<Link to='/' className='btn btn-link' >Read More</Link>
									</div>
								</div>
							</div>

							
						</div>
					</div>
				</section>


		</div>



		)
}

export default Services;