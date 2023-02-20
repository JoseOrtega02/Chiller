import React from 'react'
import { Link } from 'react-router-dom'
import "./footer.scss"
function Footer() {
  return (
    <div className="footer__container">
        <div><h4>Created by:  </h4>
        <Link to="https://www.linkedin.com/in/jose-manuel-ortega-gordillo">José Ortega</Link></div>
        <Link to="https://www.themoviedb.org" ><img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg" alt="" /></Link>
        
        
        
        
    </div>
  )
}

export default Footer