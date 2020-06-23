import React from 'react';
import { Link } from 'react-router-dom';

class Note extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div>
        <div className="entire-note">
            <div className="note-section1">
                <div className="note-title-1">
                    The Line Blog
                </div>
                <div className="note-below">
                    <a href="https://mathworld.wolfram.com/GoldenRatio.html">
                        <p>
                            <img className="external-link" src={window.gray_external_link} /> &nbsp;
                            The Golden Ratio
                        </p>
                    </a>
                    <a href="https://www.youtube.com/watch?v=SrU9YDoXE88">
                        <p>
                            <img className="external-link" src={window.gray_external_link} /> &nbsp;
                            Past infinity?
                        </p>
                    </a>
                </div>
                <div className="note-title-2">
                    Featured
                </div>
                <div className="note-below">
                    <a href="https://statisticsbyjim.com/fun/monty-hall-problem/">
                        <p>
                            <img className="external-link" src={window.gray_external_link} /> &nbsp;
                            The Monty Hall Problem
                        </p>
                    </a>
                    <a href="http://www.math.uwaterloo.ca/tsp/">
                        <p>
                            <img className="external-link" src={window.gray_external_link} /> &nbsp;
                            The Traveling Salesman Problem
                        </p>
                    </a>
                    <a href="https://medium.com/basecs/a-gentle-introduction-to-graph-theory-77969829ead8">
                        <p>
                            <img className="external-link" src={window.gray_external_link} /> &nbsp;
                            Graph theory
                        </p>
                    </a>
                    <a href="https://www.ugrad.math.ubc.ca/coursedoc/math100/notes/approx/newton.html">
                        <p>
                            <img className="external-link" src={window.gray_external_link} /> &nbsp;
                            Newton's Method
                        </p>
                    </a>
                </div>
            </div>
        </div>
        <div className="ad1">
            <a href = "https://www.ibm.com/cloud/bare-metal-servers?utm_content=000016GC&utm_term=10006171&p1=Display&p2=269853773&p3=130448700&cm_mmc=Display_N1114924.1948300STACKOVERFLOW-_-Cloud+and+Data+Platform_Cloud+Platform+Digital-_-WW_WW-_-269853773_Bare+Metal-IT+Architect-V1-300x250-Nonanimated-Standard+Load-NULL-NULL-NULL-NULL&cm_mmca1=000016GC&cm_mmca2=10006171&cm_mmca4=269853773&cm_mmca5=130448700&cm_mmca6=AMsySZbHZcqjRw8_dVJKrxZwJ0n6&dclid=CjkKEQjw57b3BRCsmJzWyIar290BEiQAjC3zZvK2HUV7FrbZNfAfNzGhv6B8c8C_vMddKD6-TDqzYLLw_wcB">
                <img className="side-ad" src ={window.ibm_ad}/>
            </a>
        </div>
        <div className="ad2">
            <a href= "https://www.linkedin.com/in/ngocthily/">
                <img className="personal-ad" src={window.personal_ad}/>
            </a> 
        </div>
        </div>
    )}
}

export default Note;