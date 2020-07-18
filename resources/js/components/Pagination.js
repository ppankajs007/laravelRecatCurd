import React from 'react';
import { Route,Link,NavLink,Redirect,useHistory  } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointLeft,faHandPointRight } from '@fortawesome/free-solid-svg-icons';

class Pagination extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			currentClick:1
		}
	}

	async currentClickPage(i){
		await this.setState({currentClick:i});
		await this.props.paginationPage(this.state.currentClick);
	}

	pageNumber(){
		const rows = [];
		for (var i = 1; i <= this.props.totalPage; i++) {
			rows.push( <li key={i} onClick={this.currentClickPage.bind(this,i)}><a href={void(0)}>{i}</a></li>)
		}
		return rows;
	}


	async nextPage(){
		let cp = this.state.currentClick + 1;
		await this.setState({currentClick:cp});
		await this.props.paginationPage(this.state.currentClick);
	}

	async previewPage(){
		let cp = this.state.currentClick - 1;
		await this.setState({currentClick:cp});
		await this.props.paginationPage(this.state.currentClick);
	}

	render(){
		 return(
		 	<div>
				<div className="pagination-area pb-45 text-center">
					<div className="container">
						<div className="row">
							<div className="col-xl-12">
								<div className="single-wrap d-flex justify-content-center">
									<nav aria-label="Page navigation example">
										<ul className="pagination justify-content-start">
										{ this.props.currentPage!=1 ?
											<li className="page-item" onClick={() => this.previewPage()}>
												<a className="page-link" href={void(0)}>
													<FontAwesomeIcon icon={faHandPointLeft} />
												</a>
											</li>
										:null }
										{ this.pageNumber() }
										{ this.state.currentClick != this.props.totalPage && this.props.totalPage != 0 ?
											<li className="page-item" onClick={()=>this.nextPage()}>
												<a className="page-link" href={void(0)}>
													<FontAwesomeIcon icon={faHandPointRight} />
												</a>
											</li>
											:null }
										</ul>
									</nav>
								</div>
							</div>
						</div>
				    </div>
				</div>
			</div>
		 ) 
		}
}

export default Pagination;