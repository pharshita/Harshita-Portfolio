import React from 'react'
import "./Style.css"
import skill from "../../Images/skill.png"

export default function Skill() {
    return (
        <div id='Skills' className='skills'>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-12 col-lg-6 col-md-6 skills_containt'>
                        <div className='c1'>
                        <h3>My Skills</h3>
                        <div className='row mt-5'>
                            <div className='col-lg-6 col-md-6 col-sm-12' style={{borderRight:"1px solid black",display:"flex",justifyContent:"center"}}>
                                <div>

                                <div className='skills_data'>
                                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSouo35olUMABRtk82_z9W5CTen-WFDysgPt1ZdCv-PzFBuC-yc97X5jj-voLOZmk8kcbQ&usqp=CAU' width={60} height={50}></img>
                                    {/* <img src='https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png' width={50} height={50}></img> */}
                                    <h5>&nbsp;&nbsp;HTML</h5>
                                </div>
                                <div className="skills_data">
                                <img src='https://www.kindpng.com/picc/m/67-678384_transparent-javascript-icon-png-png-download.png' width={60} height={50}></img>
                                    <h5>&nbsp;&nbsp;javascript</h5>
                                </div>
                                <div className="skills_data" >
                                    <img src='https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png' width={50} height={50}></img>
                                    <h5>&nbsp;&nbsp;React Js</h5>
                                </div>
                                <div className="skills_data" style={{border:"none"}}>
                                    <img src='https://seeklogo.com/images/M/mui-logo-56F171E991-seeklogo.com.png' width={40} height={40}></img>
                                    <h5>&nbsp;&nbsp;Material UI</h5>
                                </div>
                                </div>

                            </div>
                            <div className='col-lg-6 col-md-6 col-sm-12' style={{display:"flex",justifyContent:"center"}}>
                                <div>

                            <div className="skills_data1">
                                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png' width={50} height={50}></img>
                                    <h5>&nbsp;&nbsp;CSS</h5>
                                </div>
                                <div className="skills_data1">
                                <img src='https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo-shadow.png' width={60} height={50}></img>
                                    <h5>&nbsp;&nbsp;Bootstrap</h5>
                                </div>
                                <div className="skills_data1"  >
                                <img src='https://seeklogo.com/images/J/jquery-logo-CFE6ECE363-seeklogo.com.png' width={50} height={50}></img>
                                    <h5>&nbsp;&nbsp;Jquery</h5>
                                </div>
                                <div className="skills_data1"  style={{border:"none"}}>
                                <img src='https://cdn-icons-png.flaticon.com/512/25/25231.png' width={50} height={50}></img>
                                    <h5>&nbsp;&nbsp;Github</h5>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                        </div>
                    <div className='col-sm-12 col-lg-6 col-md-6'>
                        <img src={skill} width="100%"></img>
                    </div>
                </div>

            </div>
        </div>
    )
}
