import React from 'react'
import { Route,Link,NavLink,Redirect,useHistory  } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit,faTrash,faEllipsisV} from '@fortawesome/free-solid-svg-icons';
import swal from 'sweetalert';
class EditPostPopup extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			textarea:this.props.post,
			error:'',
			postId:this.props.postId,
			userId:this.props.userId
		}
	}


	textareaValid(e){
		let textarea = this.state.textarea;
		let error = '';
		let formValid = true;
		if( !textarea ){
			let error = 'Please fill the postarea';
			let formValid = false;
		}
		this.setState({error:error});
		return formValid;

	}

	textareaHandle(e){
		this.setState({textarea:e.target.value});
	}

	submitFrom(e){
		e.preventDefault();
		if( this.textareaValid() ){
		let updateData = {'textarea':this.state.textarea,'postId':this.state.postId,'userId':this.state.userId};
			fetch('http://localhost/phprestapi/v1/update_post.php',{
				method:'post',
				header:{
					'Accept':'application/json',
					'Content-type':'application/json',
				},
				body:JSON.stringify(updateData)
			}).then((result) => {
				result.json().then((resp) => {
					if(resp.status){
						this.props.closePopup(2);
						swal("Poof! Your imaginary file has been deleted!", {
						      icon: "success",
						    });
					}else{
						swal("Opps! Something whats wrong", {
						      icon: "error",
						    });
					}
				})
			})
		}


	}

	render(){
		return(
				<div className="form-section popForm" style={{
										    position: 'absolute',
										    top: '13%',
										    left: '32%',
										    'zIndex': '112'}}
				>
					<section>
					  <form className="form-group"  method="post" onSubmit={this.submitFrom.bind(this)}>
					      <div className="text">
					      <a href={void(0)} className="closeMyPopUp" style={{'position':'absolute','top':'10px','right':'30px','cursor':'pointer'}} onClick={()=>this.props.closePopup(1)} >X</a>
					      <img src={require(`./img/profileImage/${this.props.img}`)}/>
					        <textarea className="form-control" value={this.state.textarea||''} onChange={this.textareaHandle.bind(this)}  placeholder="What's in your mind" name="postData" rows="5" >{this.props.post}</textarea>
					        <p className="file">
						    <input type="file" name="file" id="file" />
						    <label for="file">Photos</label>
						  </p>
					        <button className="btn-sub">Post</button>
					      </div>
				      </form>
				    </section>
				</div>
		)
	}

}

export default EditPostPopup;