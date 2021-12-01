import React , {useState} from 'react'
import './Section.css'
function Section() {
    const[signIn,setSignIn]=useState(false);

    return (
        <div>
            <section className="Section_first">
                <div className="section__content">
                    <div className="section__text">
                    <h1>Enjoy on your TV.</h1>
                    <br/>
                    <h3>Watch on Smart TVs, Playstation, Xbox, <br/> Chromecast, Apple TV, Blu-ray players, and <br /> more.</h3>
                    </div>
                    <img className="section__img1" src="/images/1.png"/> 
                </div>
            </section>

            <section className="Section">
            
                <div className="section__content">
                    <img className="section__img2" src="/images/2.jpg"/> 
                    <div className="section__text">
                    <h1>Download your shows <br />to watch offline.</h1>
                   <br/>
                    <h3>Watch on Smart TVs, Playstation, Xbox, <br/> Chromecast, Apple TV, Blu-ray players, and <br /> more.</h3>
                    </div>
                </div>            
            </section>

            <section className="Section">
                <div className="section__content">
                    <div className="section__text">
                    <h1>Watch everywhere.</h1>
                    <h3>Stream unlimited movies and TV shows on <br/> your phone, tablet, laptop, and TV without <br/>paying more.</h3>
                    </div>
                    <img className="section__img3" src="/images/3.png"/> 
                </div>
            </section>

            <section className="Section">
                <div className="section__content">
                 
                    <img className="section__img4" src="/images/4.png"/> 
                    <div className="section__text">
                    <h1>Create profiles for kids.</h1>
                    <h3>Send kids on adventures with their favorite <br/> characters in a space made just for them— <br />free with your membership.</h3>
                    </div>
                </div>
            </section>
                
            <section className="Section_GetStated">
                <h2>Ready to watch? Enter your email to create or restart your membership.</h2>                
                    <div className="loginScreen__input" >
                        <form>
                            <input type="email" placeholder="enter your email please"/>
                            <button 
                                className="loginScreen__getStared"
                                onClick={()=> setSignIn(true)}
                            >GET STARED</button>
        
                        </form>
                    </div>
            </section>
        </div>
    )
}

export default Section
