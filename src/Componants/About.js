/** @format */

import React from "react";
// import { Link } from "react-router-dom";
export default function About() {
  return (
    // <div className='footer ' style={{"overflow-x":"auto;"}}>
    //   <br />

    //   <table style={{"width":"100%"}}>
    //     <tbody>
    //     <tr>
    //       <td style={{"width":"30%"}}>
    //         <Link to='/about' className='footer-item'>
    //           <img
    //             src='images/logo/logo.png'
    //             alt='GoodLuck Soda Logo'
    //             height={"120px"}
    //             style={{ padding: "20px" }}
    //           />
    //         </Link>
    //       </td>
    //       <td style={{"width":"40%"}}>
    //         <h5 className='footer-item'>
    //           <b>Address </b>
    //         </h5>
    //       </td>
    //       <td style={{"width":"30%"}}>
    //         <h5 className='footer-item'>
    //           <b>Contact Us </b>
    //         </h5>
    //       </td>
    //     </tr>
    //     <tr>
    //       <td >
    //         <Link
    //           className='footer-item'
    //           style={{ textDecoration: "none", color: "white" }}
    //           to='/about'>
    //           Goodluck Soda
    //         </Link>
    //       </td>
    //       <td>
    //         <h5>
    //           <a href='https://maps.app.goo.gl/a5B7RYBvpd9oZV5P6' rel="noreferrer" target="_blank">
    //             <i>
    //               S No-8/1, NDA Rd, Deshmukhwadi, Deshmukh Nagar, Shivane, Pune,
    //               NDA Rd, Uttam Nagar, Deshmukh Nagar, Shivane, Pune,
    //               Maharashtra 411023
    //             </i>
    //           </a>
    //         </h5>
    //       </td>
    //       <td className="footer-item">
    //         8308986134 / 9588680935 <br/>
    //         <a href="mailto:goodlucksodashop@gmail" >goodlucksodashop@gmail.com</a>
    //       </td>
    //     </tr>
    //     </tbody>
    //   </table>
    // </div>
    <footer>
      <div className="row">
        <div className="col">
          <img  src="images/logo/logo2.jpg" alt="a boy drinking soda" style={{borderRadius:50, height:"17vw" ,alignSelf:"center"}}/>
        </div>

        <div className="col">
        <h3>Address </h3>
        <a href='https://maps.app.goo.gl/a5B7RYBvpd9oZV5P6' rel="noreferrer" target="_blank">
              <p className="email-id">
                   S No-8/1, NDA Rd, Deshmukhwadi, Deshmukh Nagar, Shivane, Pune,
                   NDA Rd, Uttam Nagar, Deshmukh Nagar, Shivane, Pune,
                   Maharashtra 411023
                 </p>
               </a>

        </div>
        <div className="col">
          <h3>Contact Us</h3>
          <p>8308986134 / 9588680935</p>
          <p><a className="email-id" href="mailto:goodlucksodashop@gmail" >goodlucksodashop@gmail.com</a></p>
        </div>
        <div className="col">
          <img src="images/logo/logo3.jpg" alt="A girl drinking orange soda."  style={{borderRadius:50, height:"17vw"}}/>
        </div>

      </div>
    </footer>
  );
}
