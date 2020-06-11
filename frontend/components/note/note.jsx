import React from 'react';

export default () => (
    <div className="entire-note">
        <div className="note-section1">
            <div className="note-title">
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
            <div className="note-title">
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
)