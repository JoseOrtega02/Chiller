import React from 'react'
import { Link } from 'react-router-dom'
import "./detail-btn.scss"
function DetailBtn(props) {
  return (
    <><button className="detail-btn"><Link to="/details" state={props.data}>Details</Link></button></>
  )
}

export default DetailBtn