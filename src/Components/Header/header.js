import React from 'react'
import './home.css'

const Header = () => {
  return (
    <div className="container">
        <section class="home">
            <div class="content">
                <h3>E-learning is a better way of learning</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia repellat aperiam libero, beatae debitis iusto quia sit aliquid placeat facilis?</p>
                <a href="#" class="btn">get started</a>
            </div>

            <div class="image">
                <img src="images/home-img.svg" alt=""/>
            </div>
        </section>
    </div>
    
    )
}

export default Header;