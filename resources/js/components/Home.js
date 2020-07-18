import React from 'react';
import Navbar from './Navbar';
import jwt from 'jsonwebtoken';
class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            allUserPost:{},
            userProfile:''
        }
        this.fetchAllPost = this.fetchAllPost.bind(this);        
    }

    componentDidMount(){
        this.fetchAllPost();
    }

    fetchAllPost(){
            fetch('http://localhost/phprestapi/v1/allpost.php',{
                method:'get'
            }).then((result)=>{
                result.json().then((resp) => { 
                    if(resp.status){
                        console.log( resp );
                        let userLogin = jwt.decode(resp.token);
                        this.setState({ allUserPost:userLogin.data});
                        console.log( this.state.allUserPost.length );
                        if( userLogin.data[0].image ){
                            this.setState({ userProfile:userLogin.data[0].image});
                        }
                    }
                });
            })
    }

	render() {
		return(
			<div>
            <Navbar />
				    <main>



   <div className="trending-area fix">
        <div className="container">
            <div className="trending-main">
                
                <div className="row">
                    <div className="col-lg-12">
                        <div className="trending-tittle">
                            <strong>Trending now</strong>
                            <p>Rem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            <div className="trending-animated">
                                <ul id="js-news" className="js-hidden">
                                    <li className="news-item">Bangladesh dolor sit amet, consectetur adipisicing elit.</li>
                                    <li className="news-item">Spondon IT sit amet, consectetur.......</li>
                                    <li className="news-item">Rem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                                </ul>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8">
                        <div className="trending-top mb-30">
                            <div className="trend-top-img">
                                <img src={require('./img/trending/trending_top.jpg')} alt="" />
                                <div className="trend-top-cap">
                                    <span>Appetizers</span>
                                    <h2><a href="">Welcome To The Best Model Winner<br /> Contest At Look of the year</a></h2>
                                </div>
                            </div>
                        </div>
                        
                        <div className="trending-bottom">
                            <div className="row">
                                {
                                    this.state.allUserPost.length?
                                        this.state.allUserPost.map((item,i) =>
                                           <div className="col-lg-4">
                                                        <div className="single-bottom mb-35">
                                                            <div className="trend-bottom-img mb-30">
                                                                <img src={item.image?require(`./img/profileImage/${item.image}`):null} alt="" />
                                                            </div>
                                                            <div className="trend-bottom-cap">
                                                                <span className="color1">{item.name}</span>
                                                                <h4><a href="details.html">{item.post}</a></h4>
                                                            </div>
                                                        </div>
                                                        </div>
                                )
                                    :'jssjsjsjj'
                                }
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="trand-right-single d-flex">
                            <div className="trand-right-img">
                                <img src={require('./img/trending/right1.jpg')} alt=""/>
                            </div>
                            <div className="trand-right-cap">
                                <span className="color1">Concert</span>
                                <h4><a href="details.html">Welcome To The Best Model Winner Contest</a></h4>
                            </div>
                        </div>
                        <div className="trand-right-single d-flex">
                            <div className="trand-right-img">
                                <img src={require('./img/trending/right2.jpg')} alt=""/>
                            </div>
                            <div className="trand-right-cap">
                                <span className="color3">sea beach</span>
                                <h4><a href="details.html">Welcome To The Best Model Winner Contest</a></h4>
                            </div>
                        </div>
                        <div className="trand-right-single d-flex">
                            <div className="trand-right-img">
                                <img src={require('./img/trending/right3.jpg')} alt=""/>
                            </div>
                            <div className="trand-right-cap">
                                <span className="color2">Bike Show</span>
                                <h4><a href="details.html">Welcome To The Best Model Winner Contest</a></h4>
                            </div>
                        </div> 
                        <div className="trand-right-single d-flex">
                            <div className="trand-right-img">
                                <img src={require('./img/trending/right4.jpg')} alt=""/>
                            </div>
                            <div className="trand-right-cap">
                                <span className="color4">See beach</span>
                                <h4><a href="details.html">Welcome To The Best Model Winner Contest</a></h4>
                            </div>
                        </div>
                        <div className="trand-right-single d-flex">
                            <div className="trand-right-img">
                                <img src={require('./img/trending/right5.jpg')} alt=""/>
                            </div>
                            <div className="trand-right-cap">
                                <span className="color1">Skeping</span>
                                <h4><a href="details.html">Welcome To The Best Model Winner Contest</a></h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="weekly-news-area pt-50">
        <div className="container">
           <div className="weekly-wrapper">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-tittle mb-30">
                            <h3>Weekly Top News</h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="weekly-news-active dot-style d-flex dot-style">
                            <div className="weekly-single">
                                <div className="weekly-img">
                                    <img src={require('./img/news/weeklyNews2.jpg')} alt=""/>
                                </div>
                                <div className="weekly-caption">
                                    <span className="color1">Strike</span>
                                    <h4><a href="#">Welcome To The Best Model  Winner Contest</a></h4>
                                </div>
                            </div> 
                            <div className="weekly-single active">
                                <div className="weekly-img">
                                        <img src={require('./img/news/weeklyNews1.jpg')} alt=""/>
                                </div>
                                <div className="weekly-caption">
                                    <span className="color1">Strike</span>
                                    <h4><a href="#">Welcome To The Best Model  Winner Contest</a></h4>
                                </div>
                            </div>
                            <div className="weekly-single">
                                <div className="weekly-img">
                                        <img src={require('./img/news/weeklyNews3.jpg')} alt=""/>
                                </div>
                                <div className="weekly-caption">
                                    <span className="color1">Strike</span>
                                    <h4><a href="#">Welcome To The Best Model  Winner Contest</a></h4>
                                </div>
                            </div>
                            <div className="weekly-single">
                                <div className="weekly-img">
                                    <img src={require('./img/news/weeklyNews1.jpg')} alt=""/>
                                </div>
                                <div className="weekly-caption">
                                    <span className="color1">Strike</span>
                                    <h4><a href="#">Welcome To The Best Model  Winner Contest</a></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
           </div>
        </div>
    </div>          
    <section className="whats-news-area pt-50 pb-20">
        <div className="container">
            <div className="row">
            <div className="col-lg-8">
                <div className="row d-flex justify-content-between">
                    <div className="col-lg-3 col-md-3">
                        <div className="section-tittle mb-30">
                            <h3>Whats New</h3>
                        </div>
                    </div>
                    <div className="col-lg-9 col-md-9">
                        <div className="properties__button">
                            <nav>                                                                     
                                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                    <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">All</a>
                                    <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Lifestyle</a>
                                    <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Travel</a>
                                    <a className="nav-item nav-link" id="nav-last-tab" data-toggle="tab" href="#nav-last" role="tab" aria-controls="nav-contact" aria-selected="false">Fashion</a>
                                    <a className="nav-item nav-link" id="nav-Sports" data-toggle="tab" href="#nav-nav-Sport" role="tab" aria-controls="nav-contact" aria-selected="false">Sports</a>
                                    <a className="nav-item nav-link" id="nav-technology" data-toggle="tab" href="#nav-techno" role="tab" aria-controls="nav-contact" aria-selected="false">Technology</a>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="tab-content" id="nav-tabContent">
                            <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">           
                                <div className="whats-news-caption">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6">
                                            <div className="single-what-news mb-100">
                                                <div className="what-img">
                                                    <img src={require('./img/news/whatNews1.jpg')} alt=""/>
                                                </div>
                                                <div className="what-cap">
                                                    <span className="color1">Night party</span>
                                                    <h4><a href="#">Welcome To The Best Model  Winner Contest</a></h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="single-what-news mb-100">
                                                <div className="what-img">
                                                    <img src={require('./img/news/whatNews2.jpg')} alt=""/>
                                                </div>
                                                <div className="what-cap">
                                                    <span className="color1">Night party</span>
                                                    <h4><a href="#">Welcome To The Best Model  Winner Contest</a></h4>
                                                </div>
                                            </div>
                                        </div> 
                                        <div className="col-lg-6 col-md-6">
                                            <div className="single-what-news mb-100">
                                                <div className="what-img">
                                                    <img src={require('./img/news/whatNews3.jpg')} alt=""/>
                                                </div>
                                                <div className="what-cap">
                                                    <span className="color1">Night party</span>
                                                    <h4><a href="#">Welcome To The Best Model  Winner Contest</a></h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="single-what-news mb-100">
                                                <div className="what-img">
                                                    <img src={require('./img/news/whatNews4.jpg')} alt="" />
                                                </div>
                                                <div className="what-cap">
                                                    <span className="color1">Night party</span>
                                                    <h4><a href="#">Welcome To The Best Model  Winner Contest</a></h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                <div className="whats-news-caption">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6">
                                            <div className="single-what-news mb-100">
                                                <div className="what-img">
                                                    <img src={require('./img/news/whatNews1.jpg')} alt="" />
                                                </div>
                                                <div className="what-cap">
                                                    <span className="color1">Night party</span>
                                                    <h4><a href="#">Welcome To The Best Model  Winner Contest</a></h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="single-what-news mb-100">
                                                <div className="what-img">
                                                    <img src={require('./img/news/whatNews2.jpg')} alt="" />
                                                </div>
                                                <div className="what-cap">
                                                    <span className="color1">Night party</span>
                                                    <h4><a href="#">Welcome To The Best Model  Winner Contest</a></h4>
                                                </div>
                                            </div>
                                        </div> 
                                        <div className="col-lg-6 col-md-6">
                                            <div className="single-what-news mb-100">
                                                <div className="what-img">
                                                    <img src={require('./img/news/whatNews3.jpg')} alt="" />
                                                </div>
                                                <div className="what-cap">
                                                    <span className="color1">Night party</span>
                                                    <h4><a href="#">Welcome To The Best Model  Winner Contest</a></h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="single-what-news mb-100">
                                                <div className="what-img">
                                                    <img src={require('./img/news/whatNews4.jpg')} alt="" />
                                                </div>
                                                <div className="what-cap">
                                                    <span className="color1">Night party</span>
                                                    <h4><a href="#">Welcome To The Best Model  Winner Contest</a></h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                                <div className="whats-news-caption">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6">
                                            <div className="single-what-news mb-100">
                                                <div className="what-img">
                                                    <img src={require('./img/news/whatNews1.jpg')} alt="" />
                                                </div>
                                                <div className="what-cap">
                                                    <span className="color1">Night party</span>
                                                    <h4><a href="#">Welcome To The Best Model  Winner Contest</a></h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="single-what-news mb-100">
                                                <div className="what-img">
                                                    <img src={require('./img/news/whatNews2.jpg')} alt="" />
                                                </div>
                                                <div className="what-cap">
                                                    <span className="color1">Night party</span>
                                                    <h4><a href="#">Welcome To The Best Model  Winner Contest</a></h4>
                                                </div>
                                            </div>
                                        </div> 
                                        <div className="col-lg-6 col-md-6">
                                            <div className="single-what-news mb-100">
                                                <div className="what-img">
                                                    <img src={require('./img/news/whatNews3.jpg')} alt="" />
                                                </div>
                                                <div className="what-cap">
                                                    <span className="color1">Night party</span>
                                                    <h4><a href="#">Welcome To The Best Model  Winner Contest</a></h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="single-what-news mb-100">
                                                <div className="what-img">
                                                    <img src={require('./img/news/whatNews4.jpg')} alt="" />
                                                </div>
                                                <div className="what-cap">
                                                    <span className="color1">Night party</span>
                                                    <h4><a href="#">Welcome To The Best Model  Winner Contest</a></h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="tab-pane fade" id="nav-last" role="tabpanel" aria-labelledby="nav-last-tab">
                                <div className="whats-news-caption">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6">
                                            <div className="single-what-news mb-100">
                                                <div className="what-img">
                                                    <img src={require('./img/news/whatNews1.jpg')} alt="" />
                                                </div>
                                                <div className="what-cap">
                                                    <span className="color1">Night party</span>
                                                    <h4><a href="#">Welcome To The Best Model  Winner Contest</a></h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="single-what-news mb-100">
                                                <div className="what-img">
                                                    <img src={require('./img/news/whatNews2.jpg')} alt="" />
                                                </div>
                                                <div className="what-cap">
                                                    <span className="color1">Night party</span>
                                                    <h4><a href="#">Welcome To The Best Model  Winner Contest</a></h4>
                                                </div>
                                            </div>
                                        </div> 
                                        <div className="col-lg-6 col-md-6">
                                            <div className="single-what-news mb-100">
                                                <div className="what-img">
                                                    <img src={require('./img/news/whatNews3.jpg')} alt="" />
                                                </div>
                                                <div className="what-cap">
                                                    <span className="color1">Night party</span>
                                                    <h4><a href="#">Welcome To The Best Model  Winner Contest</a></h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="single-what-news mb-100">
                                                <div className="what-img">
                                                    <img src={require('./img/news/whatNews4.jpg')} alt="" />
                                                </div>
                                                <div className="what-cap">
                                                    <span className="color1">Night party</span>
                                                    <h4><a href="#">Welcome To The Best Model  Winner Contest</a></h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="tab-pane fade" id="nav-nav-Sport" role="tabpanel" aria-labelledby="nav-Sports">
                                <div className="whats-news-caption">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6">
                                            <div className="single-what-news mb-100">
                                                <div className="what-img">
                                                    <img src={require('./img/news/whatNews1.jpg')} alt="" />
                                                </div>
                                                <div className="what-cap">
                                                    <span className="color1">Night party</span>
                                                    <h4><a href="#">Welcome To The Best Model  Winner Contest</a></h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="single-what-news mb-100">
                                                <div className="what-img">
                                                    <img src={require('./img/news/whatNews2.jpg')} alt="" />
                                                </div>
                                                <div className="what-cap">
                                                    <span className="color1">Night party</span>
                                                    <h4><a href="#">Welcome To The Best Model  Winner Contest</a></h4>
                                                </div>
                                            </div>
                                        </div> 
                                        <div className="col-lg-6 col-md-6">
                                            <div className="single-what-news mb-100">
                                                <div className="what-img">
                                                    <img src={require('./img/news/whatNews3.jpg')} alt="" />
                                                </div>
                                                <div className="what-cap">
                                                    <span className="color1">Night party</span>
                                                    <h4><a href="#">Welcome To The Best Model  Winner Contest</a></h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="single-what-news mb-100">
                                                <div className="what-img">
                                                    <img src={require('./img/news/whatNews4.jpg')} alt="" />
                                                </div>
                                                <div className="what-cap">
                                                    <span className="color1">Night party</span>
                                                    <h4><a href="#">Welcome To The Best Model  Winner Contest</a></h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="tab-pane fade" id="nav-techno" role="tabpanel" aria-labelledby="nav-technology">
                                <div className="whats-news-caption">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6">
                                            <div className="single-what-news mb-100">
                                                <div className="what-img">
                                                    <img src={require('./img/news/whatNews1.jpg')} alt="" />
                                                </div>
                                                <div className="what-cap">
                                                    <span className="color1">Night party</span>
                                                    <h4><a href="#">Welcome To The Best Model  Winner Contest</a></h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="single-what-news mb-100">
                                                <div className="what-img">
                                                    <img src={require('./img/news/whatNews2.jpg')} alt="" />
                                                </div>
                                                <div className="what-cap">
                                                    <span className="color1">Night party</span>
                                                    <h4><a href="#">Welcome To The Best Model  Winner Contest</a></h4>
                                                </div>
                                            </div>
                                        </div> 
                                        <div className="col-lg-6 col-md-6">
                                            <div className="single-what-news mb-100">
                                                <div className="what-img">
                                                    <img src={require('./img/news/whatNews3.jpg')} alt="" />
                                                </div>
                                                <div className="what-cap">
                                                    <span className="color1">Night party</span>
                                                    <h4><a href="#">Welcome To The Best Model  Winner Contest</a></h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="single-what-news mb-100">
                                                <div className="what-img">
                                                    <img src={require('./img/news/whatNews4.jpg')} alt="" />
                                                </div>
                                                <div className="what-cap">
                                                    <span className="color1">Night party</span>
                                                    <h4><a href="#">Welcome To The Best Model  Winner Contest</a></h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                
                <div className="section-tittle mb-40">
                    <h3>Follow Us</h3>
                </div>
                
                <div className="single-follow mb-45">
                    <div className="single-box">
                        <div className="follow-us d-flex align-items-center">
                            <div className="follow-social">
                                <a href="#"><img src={ require('./img/news/icon-fb.png') } alt="" /></a>
                            </div>
                            <div className="follow-count">  
                                <span>8,045</span>
                                <p>Fans</p>
                            </div>
                        </div> 
                        <div className="follow-us d-flex align-items-center">
                            <div className="follow-social">
                                <a href="#"><img src={require('./img/news/icon-tw.png')} alt="" /></a>
                            </div>
                            <div className="follow-count">
                                <span>8,045</span>
                                <p>Fans</p>
                            </div>
                        </div>
                            <div className="follow-us d-flex align-items-center">
                            <div className="follow-social">
                                <a href="#"><img src={require('./img/news/icon-ins.png')} alt="" /></a>
                            </div>
                            <div className="follow-count">
                                <span>8,045</span>
                                <p>Fans</p>
                            </div>
                        </div>
                        <div className="follow-us d-flex align-items-center">
                            <div className="follow-social">
                                <a href="#"><img src={require('./img/news/icon-yo.png')} alt="" /></a>
                            </div>
                            <div className="follow-count">
                                <span>8,045</span>
                                <p>Fans</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="news-poster d-none d-lg-block">
                    <img src={require('./img/news/news_card.jpg')} alt="" />
                </div>
            </div>
            </div>
        </div>
    </section>
    <div className="weekly2-news-area  weekly2-pading gray-bg">
        <div className="container">
            <div className="weekly2-wrapper">
              
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-tittle mb-30">
                            <h3>Weekly Top News</h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="weekly2-news-active dot-style d-flex dot-style">
                            <div className="weekly2-single">
                                <div className="weekly2-img">
                                    <img src={require('./img/news/weekly2News1.jpg')} alt="" />
                                </div>
                                <div className="weekly2-caption">
                                    <span className="color1">Corporate</span>
                                    <p>25 Jan 2020</p>
                                    <h4><a href="#">Welcome To The Best Model  Winner Contest</a></h4>
                                </div>
                            </div> 
                            <div className="weekly2-single">
                                <div className="weekly2-img">
                                    <img src={require('./img/news/weekly2News2.jpg')} alt="" />
                                </div>
                                <div className="weekly2-caption">
                                    <span className="color1">Event night</span>
                                    <p>25 Jan 2020</p>
                                    <h4><a href="#">Welcome To The Best Model  Winner Contest</a></h4>
                                </div>
                            </div> 
                            <div className="weekly2-single">
                                <div className="weekly2-img">
                                    <img src={require('./img/news/weekly2News3.jpg')} alt="" />
                                </div>
                                <div className="weekly2-caption">
                                    <span className="color1">Corporate</span>
                                    <p>25 Jan 2020</p>
                                    <h4><a href="#">Welcome To The Best Model  Winner Contest</a></h4>
                                </div>
                            </div>
                             <div className="weekly2-single">
                                <div className="weekly2-img">
                                    <img src={require('./img/news/weekly2News4.jpg')} alt="" />
                                </div>
                                <div className="weekly2-caption">
                                    <span className="color1">Event time</span>
                                    <p>25 Jan 2020</p>
                                    <h4><a href="#">Welcome To The Best Model  Winner Contest</a></h4>
                                </div>
                            </div> 
                             <div className="weekly2-single">
                                <div className="weekly2-img">
                                    <img src={require('./img/news/weekly2News4.jpg')} alt="" />
                                </div>
                                <div className="weekly2-caption">
                                    <span className="color1">Corporate</span>
                                    <p>25 Jan 2020</p>
                                    <h4><a href="#">Welcome To The Best Model  Winner Contest</a></h4>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>           
    <div className="recent-articles">
        <div className="container">
           <div className="recent-wrapper">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-tittle mb-30">
                            <h3>Recent Articles</h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="recent-active dot-style d-flex dot-style">
                            <div className="single-recent mb-100">
                                <div className="what-img">
                                    <img src={require('./img/news/recent1.jpg')} alt="" />
                                </div>
                                <div className="what-cap">
                                    <span className="color1">Night party</span>
                                    <h4><a href="#">Welcome To The Best Model  Winner Contest</a></h4>
                                </div>
                            </div>
                            <div className="single-recent mb-100">
                                <div className="what-img">
                                    <img src={require('./img/news/recent2.jpg')} alt="" />
                                </div>
                                <div className="what-cap">
                                    <span className="color1">Night party</span>
                                    <h4><a href="#">Welcome To The Best Model  Winner Contest</a></h4>
                                </div>
                            </div>
                            <div className="single-recent mb-100">
                                <div className="what-img">
                                    <img src={require('./img/news/recent3.jpg')} alt="" />
                                </div>
                                <div className="what-cap">
                                    <span className="color1">Night party</span>
                                    <h4><a href="#">Welcome To The Best Model  Winner Contest</a></h4>
                                </div>
                            </div>
                            <div className="single-recent mb-100">
                                <div className="what-img">
                                    <img src={require('./img/news/recent2.jpg')} alt="" />
                                </div>
                                <div className="what-cap">
                                    <span className="color1">Night party</span>
                                    <h4><a href="#">Welcome To The Best Model  Winner Contest</a></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
           </div>
        </div>
    </div>           
    <div className="pagination-area pb-45 text-center">
        <div className="container">
            <div className="row">
                <div className="col-xl-12">
                    <div className="single-wrap d-flex justify-content-center">
                        <nav aria-label="Page navigation example">
                            <ul className="pagination justify-content-start">
                              <li className="page-item"><a className="page-link" href="#"><span className="flaticon-arrow roted"></span></a></li>
                                <li className="page-item active"><a className="page-link" href="#">01</a></li>
                                <li className="page-item"><a className="page-link" href="#">02</a></li>
                                <li className="page-item"><a className="page-link" href="#">03</a></li>
                              <li className="page-item"><a className="page-link" href="#"><span className="flaticon-arrow right-arrow"></span></a></li>
                            </ul>
                          </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </main>
			</div>
		)
	}
}

export default Home;