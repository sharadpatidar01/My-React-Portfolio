import React from 'react';
import './Testimonials.css';
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const ClientReview = [
    {
        id: 1,
        image: AVTR1,
        imageAlt: "Avatar One",
        clientName: "Shivani Sharma",
        clientReview: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ab eum deleniti voluptatum ipsum facere recusandae sequi aperiam magnam nam."
    },
    {
        id: 2,
        image: AVTR2,
        imageAlt: "Avatar Two",
        clientName: "Ravi Jain",
        clientReview: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ab eum deleniti voluptatum ipsum facere recusandae sequi aperiam magnam nam."
    },
    {
        id: 3,
        image: AVTR3,
        imageAlt: "Avatar Three",
        clientName: "Sourabh Rawat",
        clientReview: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ab eum deleniti voluptatum ipsum facere recusandae sequi aperiam magnam nam."
    },
    {
        id: 4,
        image: AVTR4,
        imageAlt: "Avatar Four",
        clientName: "Alifa Khan",
        clientReview: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ab eum deleniti voluptatum ipsum facere recusandae sequi aperiam magnam nam."
    },
]


function Testimonials() {

    return (
        <section id='testimonials'>
            <h5>Review from Clients</h5>
            <h2>Testimonials</h2>
            <Swiper className="container testimonials_container"
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}>
                {ClientReview.map(({ id, image, imageAlt, clientName, clientReview }) => {
                    return (
                        <SwiperSlide key={id} className="testimonial">
                            <div className="client_avatar">
                                <img src={image} alt={imageAlt} />
                            </div>
                            <h5 className="client_name">{clientName}</h5>
                            <small className="client_review">{clientReview}</small>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </section>
    )
}

export default Testimonials;
