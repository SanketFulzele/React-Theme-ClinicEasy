import React from 'react'
import "./clinicPage.css";

const ClinicPage = () => {
    return (
        <div>

            <section>
                <div className="content-row ">
                    <div className="imgContainer">
                        <div
                            id="carouselExampleSlidesOnly"
                            className="carousel slide"
                            data-bs-ride="carousel"
                        >
                            <div className="carousel-inner ">
                                <h3 className="carouselText">Coming Soon</h3>
                                <div className="carousel-item active">
                                    <img
                                        src='/assets/images/ClinicPage/userImgOne.jpg'
                                        className="d-block w-100 carouselImg"
                                        alt="UserImg"
                                    />
                                </div>
                                <div className="carousel-item">
                                    <img
                                        src="/assets/images/ClinicPage/userImgThree.avif"
                                        className="d-block w-100 carouselImg"
                                        alt="UserImg"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="infoContainer">
                        <img
                            src="/assets/MySVG/ClinicEasyLogo.webp"
                            alt="Clinic-Easy-Logo"
                            className="cliniceasy-logo"
                        />
                        <h3 className="infoHeading"> Clinic Easy User </h3>
                        <p className="infotext">
                            {" "}
                            Get Medicine From Your Local pharmacy within 15 minutes and Easiest
                            Way to Book Online and Offline Appointments from Your Local Clinic's
                        </p>
                    </div>
                </div>
                <div className="content-row pharma-row">
                    <div className="infoContainer">
                        <img
                            src="/assets/MySVG/ClinicEasyLogo.webp"
                            alt="Clinic-Easy-Logo"
                            className="cliniceasy-logo"
                        />
                        <h3 className="infoHeading"> Clinic Easy Pharma </h3>
                        <p className="infotext">
                            {" "}
                            Digitalization of Local Pharmacies with Improved Customer Retention
                            Rate
                        </p>
                    </div>
                    <div className="imgContainer">
                        <div
                            id="carouselExampleSlidesOnly"
                            className="carousel slide"
                            data-bs-ride="carousel"
                        >
                            <div className="carousel-inner ">
                                <h3 className="carouselText">Coming Soon</h3>
                                <div className="carousel-item active">
                                    <img
                                        src="/assets/images/ClinicPage/pharmOne.jpg"
                                        className="d-block w-100 carouselImg"
                                        alt="UserImg"
                                    />
                                </div>
                                <div className="carousel-item">
                                    <img
                                        src="/assets/images/ClinicPage/pharmTwo.jpg"
                                        className="d-block w-100 carouselImg"
                                        alt="UserImg"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content-row ">
                    <div className="imgContainer">
                        <div
                            id="carouselExampleSlidesOnly"
                            className="carousel slide"
                            data-bs-ride="carousel"
                        >
                            <div className="carousel-inner ">
                                <h3 className="carouselText">Coming Soon</h3>
                                <div className="carousel-item active">
                                    <img
                                        src="/assets/images/ClinicPage/docOne.jpg"
                                        className="d-block w-100 carouselImg"
                                        alt="UserImg"
                                    />
                                </div>
                                <div className="carousel-item">
                                    <img
                                        src="/assets/images/ClinicPage/docTwo.jpg"
                                        className="d-block w-100 carouselImg"
                                        alt="UserImg"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="infoContainer">
                        <img
                            src="/assets/MySVG/ClinicEasyLogo.webp"
                            alt="Clinic-Easy-Logo"
                            className="cliniceasy-logo"
                        />
                        <h3 className="infoHeading"> Clinic Easy Doctor </h3>
                        <p className="infotext">
                            {" "}
                            Digitalization of Local Clinic's for The Offline and Online
                            Appointment's
                        </p>
                    </div>
                </div>
            </section>


        </div>
    )
}

export default ClinicPage
