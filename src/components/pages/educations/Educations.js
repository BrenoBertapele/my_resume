import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

export default function Educations() {
	return (
		<div>
			<div class='card'>
				<div class='card-content'>
					<h6>
						<strong>EDUCATION</strong>
					</h6>
					<table class='striped'>
						<thead>
							<tr>
								<th>Certificate</th>
								<th>Date of Achievement</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
						<tr>
								<td>Ignite Bootcamp: ReactJS,NodeJS - ROCKETSEAT</td>
								<td>In course</td>
								<td>
									<Link to='/details' class='btn blue lighten-1'>
									    View
									</Link>
								</td>
							</tr>
							<tr>
								<td>React + Redux Course: Fundamentals and 2 Absolutely ZERO Apps - Cod3r Cursos Online - UDEMY </td>
								<td>may 2022</td>
								<td>
									<Link to='/details' class='btn blue lighten-1'>
										View
									</Link>
								</td>
							</tr>
								<tr>
								<td>Complete Modern Web Course with JavaScript 2022 + Projects - Cod3r Online Courses - UDEMY</td>
								<td>Apr 2022</td>
								<td>
									<Link to='/details' class='btn blue lighten-1'>
										View
									</Link>
								</td>
							</tr>
							<tr>
								<td>JavaScript for Backend - ALURA  </td>
								<td>Mar 2022</td>
								<td>
									<Link to='/details' class='btn blue lighten-1'>
										View
									</Link>
								</td>
							</tr>
							<tr>
								<td>Post-Graduation Lato Sensu, Software Engineering with emphasis on software quality and testing - UNOPAR</td>
								<td>Feb 2022 ~ Feb 2023</td>
								<td>
									<Link to='/details' class='btn blue lighten-1'>
										View
									</Link>
								</td>
							</tr>
							<tr>
								<td>Post-graduation Latu Sensu, Logistics and Supply Chain Management - UCAM</td>
								<td>Aug 2019 ~ Aug 2020</td>
								<td>
									<Link to='/details' class='btn blue lighten-1'>
										View
									</Link>
								</td>
							</tr>
							<tr>
								<td>Post-graduation Latu Sensu, Engineering Evaluation and Expertise - UNYLEYA</td>
								<td>Jan 2019 ~ Dec 2019</td>
								<td>
									<Link to='/details' class='btn blue lighten-1'>
										View
									</Link>
								</td>
							</tr>
							<tr>
								<td>Bachelor`s Degree, Civil Engineer - UEM</td>
								<td>Mar 2013 ~ Mar 2018</td>
								<td>
									<Link to='/details' class='btn blue lighten-1'>
										View
									</Link>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}
