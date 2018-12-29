import React, { Component } from 'react';

class Main extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-sm-3 well">
                    <div className="well">
                        <p><a href="#">My Profile</a></p>
                        <img src="bird.jpg" className="img-circle" height="65" width="65" alt="Avatar" />
                    </div>
                    <div className="well">
                        <p><a href="#">Interests</a></p>
                        <p>
                            <span className="label label-default">News</span>
                            <span className="label label-primary">W3Schools</span>
                            <span className="label label-success">Labels</span>
                            <span className="label label-info">Football</span>
                            <span className="label label-warning">Gaming</span>
                            <span className="label label-danger">Friends</span>
                        </p>
                    </div>
                    <div className="alert alert-success fade in">
                        <a href="#" className="close" data-dismiss="alert" aria-label="close">×</a>
                        <p><strong>Ey!</strong></p>
                        People are looking at your profile. Find out who.
              </div>
                    <p><a href="#">Link</a></p>
                    <p><a href="#">Link</a></p>
                    <p><a href="#">Link</a></p>
                </div>
                <div className="col-sm-7">

                    <div className="row">
                        <div className="col-sm-12">
                            <div className="panel panel-default text-left">
                                <div className="panel-body">
                                    <p >Status: Feeling Blue</p>
                                    <button type="button" className="btn btn-default btn-sm">
                                        <span className="glyphicon glyphicon-thumbs-up"></span> Like
                      </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col-sm-3">
                            <div className="well">
                                <p>Anja</p>
                                <img src="bird.jpg" className="img-circle" height="55" width="55" alt="Avatar" />
                            </div>
                        </div>
                        <div className="col-sm-9">
                            <div className="well">
                                <p>Just Forgot that I had to mention something about someone to someone about how I forgot something, but
                      now I forgot it. Ahh, forget it! Or wait. I remember.... no I don't.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-2 well">
                    <div className="thumbnail">
                        <p>Upcoming Events:</p>
                        <img src="paris.jpg" alt="Paris" width="400" height="300" />
                        <p><strong>Paris</strong></p>
                        <p>Fri. 27 November 2015</p>
                        <button className="btn btn-primary">Info</button>
                    </div>
                    <div className="well">
                        <p>ADS</p>
                    </div>
                    <div className="well">
                        <p>ADS</p>
                    </div>
                </div>
            </div>

        );
    }
}

export default Main;