import React from 'react';
import { Parallax } from "react-parallax";
import yoga_pose from '../images/yoga_pose.jpg'
import yoga_hands from '../images/yoga_hands.jpg'

function Home () {

    return (
        <>
        <Parallax
        blur={{ min: -30, max: 30 }}
        bgImage={yoga_pose}
        bgImageAlt=""
        // strength={-200}
        className="parallax"
        >            
        <div class="position-relative">
            <h1 className="hero_title">Namaste...</h1>
            <h1 className="hero_title2">|</h1>
            <p className="hero_title3">"Yoga is  a mirror to look at ourselves from within."</p>
        </div>
        
        </Parallax>

        <div>
        <h1 style={{padding:"20px"}}>Content</h1>
        </div>

        <div class="card-deck" style={{padding:"10px"}}>
            <div class="card">
                <img class="card-img-top" src="https://www.pacificcollege.edu/wp-content/uploads/2021/10/Yog-instructor-with-student.jpg" alt="Yoga Image"/>
                <div class="card-body">
                <h5 class="card-title">Event Schedule</h5>
                <p class="card-text">We have amazing yoga events throughout the day! Our earliest class starts from 7:00am and the latest class strats from 8:00pm. Find the time fits for you.</p>
                <button type="button" class="btn btn-outline-dark btn-sm">See Details</button>
                </div>
            </div>
            <div class="card">
                <img class="card-img-top" src="https://24ehj412g2u7189f7b9n98d1-wpengine.netdna-ssl.com/wp-content/uploads/2020/07/iStock-1141511884-scaled.jpg" alt="Card image cap"/>
                <div class="card-body">
                <h5 class="card-title">Instructors</h5>
                <p class="card-text">Our instructors provide professional yoga classes. They have amazing bios so see the team and find a person whom you like to get the lesson from. </p>
                <button type="button" class="btn btn-outline-dark btn-sm">See Details</button>
                
                </div>
            </div>
            <div class="card">
                <img class="card-img-top" src="https://miro.medium.com/max/1200/1*u0Kj3oG2russxhCe6H61cg.jpeg" alt="Card image cap"/>
                <div class="card-body">
                <h5 class="card-title">Create Yoga Class</h5>
                <p class="card-text">Are you a yoga instructor? We also provide a space for those who would like to share your knowledge. Type in all the requirements and be the teacher!</p>
                <button type="button" class="btn btn-outline-dark btn-sm">See Details</button>
                </div>
            </div>
        </div>  

{/* 
        <div class="card bg-dark text-white">
            <img class="card-img" src="https://tintyoga.com/wp-content/uploads/2020/03/tint_magazine_Header_Beginner-Yoga.jpeg.webp" alt="Card image" />

            <div class="card-img-overlay">

            </div>

        </div> */}

        <Parallax
        blur={{ min: -30, max: 30 }}
        bgImage="https://media.istockphoto.com/photos/women-in-meditation-while-practicing-yoga-in-a-training-room-happy-picture-id1166417394?k=20&m=1166417394&s=612x612&w=0&h=LK4GrdXUX-I6dfrHsfAzStFOaS1zyRUMuNIx7kD7JtM="
        bgImageAlt=""
        // strength={-200}
        className="parallax"
        >            
        
        </Parallax>

        <div>
            <h1 style={{padding:"20px"}}>Our Team</h1>
        </div>

        <div class="row active-with-click">
            <div class="col-md-4 col-sm-6 col-xs-12">
                <article class="material-card Red">
                    <h2>
                        <span>Reito Serizawa</span>
                        <strong>
                            {/* <i class="fa fa-fw fa-star"></i>
                            Slim Jim Morning */}
                        </strong>
                    </h2>
                    <h4>
                        <strong>
                            <i class="fa fa-fw fa-star"></i>
                            Seltzer Master
                        </strong>
                    </h4>
                    <div class="mc-content">
                        <div class="img-container">
                            <img class="img-responsive" src="https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/274848351_3125827384323770_4873740667326218204_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=nf2pLxNftq0AX-d4q_W&_nc_ht=scontent-lga3-1.xx&oh=00_AT9tcX6qOT3jZe9aZ1B_pt8FJ5uDbxsv73OIf1FFhuReeQ&oe=629D8093" style={{height:"50%", width:"50%"}}/>
                        </div>
                        {/* <div class="mc-description">
                            He has appeared in more than 100 films and television shows, including The Deer Hunter, Annie Hall, The Prophecy trilogy, The Dogs of War ...
                        </div> */}
                    </div>
                    <a class="mc-btn-action">
                        <i class="fa fa-bars"></i>
                    </a>
                    <div class="mc-footer">
                        <h4>
                            Social
                        </h4>
                        <a class="fa fa-fw fa-facebook"></a>
                        <a class="fa fa-fw fa-twitter"></a>
                        <a class="fa fa-fw fa-linkedin"></a>
                        <a class="fa fa-fw fa-google-plus"></a>
                    </div>
                </article>
            </div>
            <div class="col-md-4 col-sm-6 col-xs-12">
                <article class="material-card Pink">
                    <h2>
                        <span>Jess Newman</span>
                    </h2>
                    <h4>
                        <strong>
                            <i class="fa fa-fw fa-star"></i>
                            Yoga Master
                        </strong>
                    </h4>
                    <div class="mc-content">
                        <div class="img-container">
                            <img class="img-responsive" src="https://media-exp1.licdn.com/dms/image/C4D03AQEShGKWMvl8Cw/profile-displayphoto-shrink_800_800/0/1528162702524?e=1659571200&v=beta&t=M_E1hq_Q_Gs39IHo5DsFP-CDoRxPaF66Xv9eoPl2Iy8" style={{height:"50%", width:"50%"}}/>
                        </div>
                        {/* <div class="mc-description">
                            He has won two Academy Awards, for his roles in the mystery drama Mystic River (2003) and the biopic Milk (2008). Penn began his acting career in television with a brief appearance in a 1974 episode of Little House on the Prairie ...
                        </div> */}
                    </div>
                    <a class="mc-btn-action">
                        <i class="fa fa-bars"></i>
                    </a>
                    <div class="mc-footer">
                        <h4>
                            Social
                        </h4>
                        <a class="fa fa-fw fa-facebook"></a>
                        <a class="fa fa-fw fa-twitter"></a>
                        <a class="fa fa-fw fa-linkedin"></a>
                        <a class="fa fa-fw fa-google-plus"></a>
                    </div>
                </article>
            </div>

            <div class="col-md-4 col-sm-6 col-xs-12">
                <article class="material-card Pink">
                    <h2>
                        <span>Rachel Katz</span>
                    </h2>
                    <h4>
                        <strong>
                            <i class="fa fa-fw fa-star"></i>
                            Vacuum Master
                        </strong>
                    </h4>
                    <div class="mc-content">
                        <div class="img-container">
                            <img class="img-responsive" src="https://robohash.org/sitsequiquia.png?size=300x300&set=set1" style={{height:"50%", width:"50%"}}/>
                        </div>
                        {/* <div class="mc-description">
                            He has won two Academy Awards, for his roles in the mystery drama Mystic River (2003) and the biopic Milk (2008). Penn began his acting career in television with a brief appearance in a 1974 episode of Little House on the Prairie ...
                        </div> */}
                    </div>
                    <a class="mc-btn-action">
                        <i class="fa fa-bars"></i>
                    </a>
                    <div class="mc-footer">
                        <h4>
                            Social
                        </h4>
                        <a class="fa fa-fw fa-facebook"></a>
                        <a class="fa fa-fw fa-twitter"></a>
                        <a class="fa fa-fw fa-linkedin"></a>
                        <a class="fa fa-fw fa-google-plus"></a>
                    </div>
                </article>
            </div>
       

        </div>
        <Parallax
        blur={{ min: -30, max: 30 }}
        bgImage={yoga_hands}
        bgImageAlt=""
        // strength={-200}
        className="parallax"
        >            
        
        </Parallax>
        </>
    )
}

export default Home
