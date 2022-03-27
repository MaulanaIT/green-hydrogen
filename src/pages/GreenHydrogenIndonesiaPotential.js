import React, { Component } from 'react'
import BackgroundMainBanner from '../assets/green-hydrogen-indonesia-potential/background-main-banner.png';
import BackgroundBanner1 from '../assets/green-hydrogen-indonesia-potential/background-banner-1.png';
import BackgroundBanner2 from '../assets/green-hydrogen-indonesia-potential/background-banner-2.png';
import IconMainBanner from '../assets/green-hydrogen-indonesia-potential/icon-main-banner.png';
import IconBanner1 from '../assets/green-hydrogen-indonesia-potential/icon-banner-1.png';

import LatestNews from '../component/LatestNews';
import Sponsor from '../component/Sponsor';
import MultipleBannder from '../component/MultipleBannder';
import Sidebar from '../component/Sidebar';

export class GreenHydrogenIndonesiaPotential extends Component {

    componentDidMount() {
        var sphereRad = 420;
        var radius_sp = 1;
        //for debug messages
        var Debugger = function () { };
        Debugger.log = function (message) {
            try {
                console.log(message);
            }
            catch (exception) {
                return;
            }
        }

        var theCanvas = document.getElementById("canvasOne");
        var context = theCanvas.getContext("2d");

        var displayWidth;
        var displayHeight;
        var timer;
        var wait;
        var count;
        var numToAddEachFrame;
        var particleList;
        var recycleBin;
        var particleAlpha;
        var r, g, b;
        var fLen;
        var m;
        var projCenterX;
        var projCenterY;
        var zMax;
        var turnAngle;
        var turnSpeed;
        var sphereCenterX, sphereCenterY, sphereCenterZ;
        var particleRad;
        var zeroAlphaDepth;
        var randAccelX, randAccelY, randAccelZ;
        var gravity;
        var rgbString;
        //we are defining a lot of variables used in the screen update functions globally so that they don't have to be redefined every frame.
        var p;
        var outsideTest;
        var nextParticle;
        var sinAngle;
        var cosAngle;
        var rotX, rotZ;
        var depthAlphaFactor;
        var i;
        var theta, phi;
        var x0, y0, z0;

        init();

        function init() {
            wait = 1;
            count = wait - 1;
            numToAddEachFrame = 8;

            //particle color
            r = 70;
            g = 255;
            b = 140;

            rgbString = "rgba(" + r + "," + g + "," + b + ","; //partial string for color which will be completed by appending alpha value.
            particleAlpha = 1; //maximum alpha

            displayWidth = theCanvas.width;
            displayHeight = theCanvas.height;

            fLen = 320; //represents the distance from the viewer to z=0 depth.

            //projection center coordinates sets location of origin
            projCenterX = displayWidth / 2;
            projCenterY = displayHeight / 2;

            //we will not draw coordinates if they have too large of a z-coordinate (which means they are very close to the observer).
            zMax = fLen - 2;

            particleList = {};
            recycleBin = {};

            //random acceleration factors - causes some random motion
            randAccelX = 0.1;
            randAccelY = 0.1;
            randAccelZ = 0.1;

            gravity = -0; //try changing to a positive number (not too large, for example 0.3), or negative for floating upwards.

            particleRad = 4;

            sphereCenterX = 0;
            sphereCenterY = 0;
            sphereCenterZ = -3 - sphereRad;

            //alpha values will lessen as particles move further back, causing depth-based darkening:
            zeroAlphaDepth = -750;

            turnSpeed = 2 * Math.PI / 1200; //the sphere will rotate at this speed (one complete rotation every 1600 frames).
            turnAngle = 0; //initial angle

            timer = setInterval(onTimer, 10 / 24);
        }

        function onTimer() {
            //if enough time has elapsed, we will add new particles.		
            count++;
            if (count >= wait) {

                count = 0;
                for (i = 0; i < numToAddEachFrame; i++) {
                    theta = Math.random() * 2 * Math.PI;
                    phi = Math.acos(Math.random() * 2 - 1);
                    x0 = sphereRad * Math.sin(phi) * Math.cos(theta);
                    y0 = sphereRad * Math.sin(phi) * Math.sin(theta);
                    z0 = sphereRad * Math.cos(phi);

                    //We use the addParticle function to add a new particle. The parameters set the position and velocity components.
                    //Note that the velocity parameters will cause the particle to initially fly outwards away from the sphere center (after
                    //it becomes unstuck).
                    var p = addParticle(x0, sphereCenterY + y0, sphereCenterZ + z0, 0.002 * x0, 0.002 * y0, 0.002 * z0);

                    //we set some "envelope" parameters which will control the evolving alpha of the particles.
                    p.attack = 50;
                    p.hold = 50;
                    p.decay = 100;
                    p.initValue = 0;
                    p.holdValue = particleAlpha;
                    p.lastValue = 0;

                    //the particle will be stuck in one place until this time has elapsed:
                    p.stuckTime = 90 + Math.random() * 20;

                    p.accelX = 0;
                    p.accelY = gravity;
                    p.accelZ = 0;
                }
            }

            //update viewing angle
            turnAngle = (turnAngle + turnSpeed) % (2 * Math.PI);
            sinAngle = Math.sin(turnAngle);
            cosAngle = Math.cos(turnAngle);

            //background fill
            context.fillStyle = "#000000";
            context.fillRect(0, 0, displayWidth, displayHeight);

            //update and draw particles
            p = particleList.first;
            while (p != null) {
                //before list is altered record next particle
                nextParticle = p.next;

                //update age
                p.age++;

                //if the particle is past its "stuck" time, it will begin to move.
                if (p.age > p.stuckTime) {
                    p.velX += p.accelX + randAccelX * (Math.random() * 2 - 1);
                    p.velY += p.accelY + randAccelY * (Math.random() * 2 - 1);
                    p.velZ += p.accelZ + randAccelZ * (Math.random() * 2 - 1);

                    p.x += p.velX;
                    p.y += p.velY;
                    p.z += p.velZ;
                }

                /*
                We are doing two things here to calculate display coordinates.
                The whole display is being rotated around a vertical axis, so we first calculate rotated coordinates for
                x and z (but the y coordinate will not change).
                Then, we take the new coordinates (rotX, y, rotZ), and project these onto the 2D view plane.
                */
                rotX = cosAngle * p.x + sinAngle * (p.z - sphereCenterZ);
                rotZ = -sinAngle * p.x + cosAngle * (p.z - sphereCenterZ) + sphereCenterZ;
                m = radius_sp * fLen / (fLen - rotZ);
                p.projX = rotX * m + projCenterX;
                p.projY = p.y * m + projCenterY;

                //update alpha according to envelope parameters.
                if (p.age < p.attack + p.hold + p.decay) {
                    if (p.age < p.attack) {
                        p.alpha = (p.holdValue - p.initValue) / p.attack * p.age + p.initValue;
                    }
                    else if (p.age < p.attack + p.hold) {
                        p.alpha = p.holdValue;
                    }
                    else if (p.age < p.attack + p.hold + p.decay) {
                        p.alpha = (p.lastValue - p.holdValue) / p.decay * (p.age - p.attack - p.hold) + p.holdValue;
                    }
                }
                else {
                    p.dead = true;
                }

                //see if the particle is still within the viewable range.
                if ((p.projX > displayWidth) || (p.projX < 0) || (p.projY < 0) || (p.projY > displayHeight) || (rotZ > zMax)) {
                    outsideTest = true;
                }
                else {
                    outsideTest = false;
                }

                if (outsideTest || p.dead) {
                    recycle(p);
                }

                else {
                    //depth-dependent darkening
                    depthAlphaFactor = (1 - rotZ / zeroAlphaDepth);
                    depthAlphaFactor = (depthAlphaFactor > 1) ? 1 : ((depthAlphaFactor < 0) ? 0 : depthAlphaFactor);
                    context.fillStyle = rgbString + depthAlphaFactor * p.alpha + ")";

                    //draw
                    context.beginPath();
                    context.arc(p.projX, p.projY, m * particleRad, 0, 2 * Math.PI, false);
                    context.closePath();
                    context.fill();
                }

                p = nextParticle;
            }
        }

        function addParticle(x0, y0, z0, vx0, vy0, vz0) {
            var newParticle;
            var color;

            //check recycle bin for available drop:
            if (recycleBin.first != null) {
                newParticle = recycleBin.first;
                //remove from bin
                if (newParticle.next != null) {
                    recycleBin.first = newParticle.next;
                    newParticle.next.prev = null;
                }
                else {
                    recycleBin.first = null;
                }
            }
            //if the recycle bin is empty, create a new particle (a new ampty object):
            else {
                newParticle = {};
            }

            //add to beginning of particle list
            if (particleList.first == null) {
                particleList.first = newParticle;
                newParticle.prev = null;
                newParticle.next = null;
            }
            else {
                newParticle.next = particleList.first;
                particleList.first.prev = newParticle;
                particleList.first = newParticle;
                newParticle.prev = null;
            }

            //initialize
            newParticle.x = x0;
            newParticle.y = y0;
            newParticle.z = z0;
            newParticle.velX = vx0;
            newParticle.velY = vy0;
            newParticle.velZ = vz0;
            newParticle.age = 0;
            newParticle.dead = false;
            if (Math.random() < 0.5) {
                newParticle.right = true;
            }
            else {
                newParticle.right = false;
            }
            return newParticle;
        }

        function recycle(p) {
            //remove from particleList
            if (particleList.first == p) {
                if (p.next != null) {
                    p.next.prev = null;
                    particleList.first = p.next;
                }
                else {
                    particleList.first = null;
                }
            }
            else {
                if (p.next == null) {
                    p.prev.next = null;
                }
                else {
                    p.prev.next = p.next;
                    p.next.prev = p.prev;
                }
            }
            //add to recycle bin
            if (recycleBin.first == null) {
                recycleBin.first = p;
                p.prev = null;
                p.next = null;
            }
            else {
                p.next = recycleBin.first;
                recycleBin.first.prev = p;
                recycleBin.first = p;
                p.prev = null;
            }
        }
    }

    render() {
        return (
            <>
                {/*  Fluid Section One */}
                <div className='position-absolute w-100'>
                    <div className='container-width p-0 text-center text-lg-end'>
                        <canvas id="canvasOne" width={800} height={800}></canvas>
                    </div>
                </div>
                <section className="fluid-section-one" style={{ background: `url(${BackgroundMainBanner}) no-repeat`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div className='container-width h-100'>
                        <div className="outer-box clearfix">
                            {/*  Content Column */}
                            <div className="content-column">
                                <div className="inner-column">
                                    <div className='text-center text-lg-start'>
                                        <p className='fw-bold primary-color text-center text-lg-start text-size-8 text-size-lg-10'>INDONESIA</p>
                                        <p className='fw-bold primary-color text-center text-lg-start text-size-8 text-size-lg-10'>GREEN HYDROGEN</p>
                                        <p className='fw-bold text-center text-lg-start text-size-20 text-size-lg-25'>POTENTIAL</p>
                                        <p className='text-center text-lg-start'>The main hydrogen production processes can be classified into electrolysis, photolysis, and thermolysis.</p>
                                    </div>
                                </div>
                            </div>
                            {/*  Content Column */}
                            <div className="content-column d-none d-lg-flex">
                                <div className="inner-column">
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Fluid Section One */}

                <div className='container-article container-width'>
                    <Sidebar />
                    <div>
                        <section className='container-article-section'>
                            <p className='text-black'>Currently, in the green hydrogen sector, the Indonesian government needs a supply of economic financing from investors. The hydrogen price itself is still not stable; the price is still moving. The Green hydrogen price range is between 2-6 dollars/kg.
                                <br /><br />
                                In Indonesia, almost all major sectors are trying to manage this green hydrogen, but all of them are still being developed with no significant results. Most industries in Indonesia make fuel cells the heart of hydrogen itself. Unfortunately, there has been no specific regulation regarding green hydrogen in Indonesia. In general, if the nuclear energy sector has been developed in Indonesia, producing Green Hydrogen will be enormous in the future.</p>
                        </section>

                        <section className='container-article-section'>
                            <div className='banner-container-image landscape'>
                                <img src={IconBanner1} alt="" />
                            </div>
                        </section>
                    </div>
                </div>

                <LatestNews />

                <Sponsor />
            </>
        )
    }
}

export default GreenHydrogenIndonesiaPotential
