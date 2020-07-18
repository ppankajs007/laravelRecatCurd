import React from 'react';
import Navbar from './Navbar';
import { Route,Link,NavLink,Redirect,useHistory  } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit,faTrash,faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import swal from 'sweetalert';
import jwt from 'jsonwebtoken';
import EditPostPopup from './EditPostPopup';
import Pagination from './Pagination';
import {base_url,csrf_token} from '../Constant';
import axios from 'axios';
const peopleToReturn = '';
class Dashboard extends React.Component{
	constructor(props){
		super(props);
		var user_id = ''; 
		/*if(localStorage.getItem('u') !== null){

				axios.post(`${base_url}/api/details`,{
					header:{
						Bearer:localStorage.getItem('u')
					}
				}).then((res) => {
					console.log( res );
				}).catch((error) => {
					console.log( error );
				});

		}*/
		this.state = {
			postData:'',
			postError:'',
			user_id:'',
			afterPost:{},
			allUserPost:{},
			loginUser:user_id,
			userImage:null,
			clickDots:'',
			alluserData:'',
			userProfile:'',
			editPopup:false,
			currrentPost:'',
			postId:'',
			totalPage:'',
			limitPostShow:2,
			currentPage:1
		}

	/*	this.totalRecord     = 	this.totalRecord.bind(this);
		this.fetchAllPost    = 	this.fetchAllPost.bind(this);
		this.handlePost      = 	this.handlePost.bind(this);
		this.onChangeHandler = 	this.onChangeHandler.bind(this);
		console.log( csrf_token );*/
	}


	closePopup(i){
		if(i == 1){
			this.setState({editPopup:false});
		}else if(i == 2){
			this.fetchAllPost();
			this.setState({editPopup:false});
		}
	}

	componentDidMount(){
		if(localStorage.getItem('u') !== null){
				axios.get(`${base_url}/api/details`,{
					headers:{
						'Authorization' : 'Bearer ' + localStorage.getItem('u'),
					}
				}).then((res) => {
					console.log( res );
				}).catch((error) => {
					console.log( error );
				});

		}
		//this.fetchAllPost();
		//this.totalRecord();
	}

	/*handlePostValid(){
		let postData = this.state.postData;
		let postError = '';
		let postForm = true;
		if(!postData){
			postForm = false;
			postError = "Please Enter you post";
		}

		this.setState({'postError':postError});
		return postForm;
	}


	componentDidMount(){
		if(localStorage.getItem('u') !== null){

				axios.post(`${base_url}/api/details`,{
					header:{
						Bearer:localStorage.getItem('u')
					}
				}).then((res) => {
					console.log( res );
				}).catch((error) => {
					console.log( error );
				});

		}
		this.fetchAllPost();
		this.totalRecord();
	}

	totalRecord(){
		let page = '';
		if ( localStorage.getItem('u') !== null ) {
			this.setState({alluserData:localStorage.getItem('u')});
			fetch('http://localhost/phprestapi/v1/pagination.php',{
				method:'post',
				header:{
					'Accept':'application/json',
					'Contact-type':'application/json'
				},
				body:JSON.stringify({loginUser:this.state.loginUser})
			}).then((result)=>{
				result.json().then((resp) => {
					if(resp.status){
						page = Math.ceil(resp.total_record/this.state.limitPostShow);
						this.setState({ totalPage:page});
					}else{
						this.setState({ totalPage:''});
					}
				});
			})
		}
	}

	fetchAllPost(){
		if ( localStorage.getItem('u') !== null ) {
			this.setState({alluserData:localStorage.getItem('u')});
			fetch('http://localhost/phprestapi/v1/user_post.php',{
				method:'post',
				header:{
					'Contact-type':'application/json'
				},
				body:JSON.stringify({loginUser:this.state.loginUser,limitPostShow:this.state.limitPostShow,currentPage:this.state.currentPage})
			}).then((result)=>{
				result.json().then((resp) => {
					if(resp.status){
						let userLogin = jwt.decode(resp.token);
						this.setState({ allUserPost:userLogin.data});
						console.log( userLogin.data );
						if( typeof userLogin.data[0].image !== 'undefined'  ){
							this.setState({ userProfile:userLogin.data[0].image});
						}else{
							this.setState({ userProfile:''});
						}
					}else{
							this.setState({allUserPost:''});
						}
				});
			})
		}
	}

	handlePost(e){
		this.setState({ postData: e.target.value });
		let user_id = localStorage.getItem('u');
		if( user_id !== null && typeof user_id !== 'undefined' ){
			user_id = JSON.parse(user_id);
			this.setState({user_id:user_id.id});	
		}

		
	}

	submitPost(e){
		e.preventDefault();
		if ( this.handlePostValid() ) {
			fetch('http://localhost/phprestapi/v1/add_post.php',{
				method:'post',
				header:{
					'Accept':'application/json',
					'Contact-type':'application/json'
				},
				body:JSON.stringify(this.state)
			}).then((result)=>{
				result.json().then((resp) => {
				this.setState({postData:''});
					if(resp.status){
						this.fetchAllPost();
						this.totalRecord();
					}
				});
			})
		}
	}

	onChangeHandler(e){
	    this.setState({
	        selectedFile:e.target.files[0]
	    });
	    var imgData = new FormData();
	    imgData.append('image', e.target.files[0]);
	    imgData.append('myUid', this.state.loginUser);
	    fetch('http://localhost/phprestapi/v1/upload_image.php',{
				method:'post',
				header:{
					'Accept':'application/json',
					'Contact-type':'application/json'
				},
				body:imgData
			}).then((result)=>{
				result.json().then((resp) => {
					//let imagePath = JSON.parse(resp);
					console.log(resp );
					if(resp.status){
						this.setState({imageName:resp.imageName});
					}
				});
			});
 	}

 	deletePost(id){
 		let deleteData = {pId:id,uId:this.state.loginUser}
		 swal({
			  title: "Are you sure?",
			  text: "Once deleted, you will not be able to recover this imaginary file!",
			  icon: "warning",
			  buttons: true,
			  dangerMode: true,
			})
			.then((willDelete) => {

				fetch('http://localhost/phprestapi/v1/delete_post.php',{
					method:'post',
					header:{
						'Accept':'application/json',
						'Contact-type':'application/json'
					},
					body:JSON.stringify(deleteData)
				}).then((result)=>{
					result.json().then((resp) => {
						if(resp.status){
							swal("Poof! Your imaginary file has been deleted!", {
						      icon: "success",
						    });
							this.fetchAllPost();
							this.totalRecord();
						} else {
						    swal("Your imaginary file is safe!");
						}
					});
				});
			});
		}

		showDotsAction(idName,e){
			e.stopPropagation();
			if(this.state.clickDots === idName ){
				this.setState({clickDots:''});
			}else{
				this.setState({clickDots:idName});
			}
		}

		resetState(){
			this.setState({clickDots:''});
		}

		paginationPage(e){
			this.setState({currentPage:e});
			console.log(this.state.currentPage);
			console.log('paginationPage');
			this.fetchAllPost();
		}*/

	render(){
			return(
			 	<div>
			 	{localStorage.getItem('u')}
			 	</div>
				)
		}

}

export default Dashboard;