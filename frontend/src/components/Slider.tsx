import React, {useState, CSSProperties} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "../css/Slider.css";

// @ts-ignore
import { EffectCoverflow, Navigation, Pagination} from 'swiper/modules';

import Modal from 'react-modal';
import {LiaArrowAltCircleLeft, LiaArrowAltCircleRight} from "react-icons/lia";

import closeButton from "../images/buttons/close.png";
import slide_image_1 from '../images/myWorks/1.jpg';
import slide_image_3 from '../images/myWorks/2.jpg';
import slide_image_4 from '../images/myWorks/3.jpg';
import slide_image_5 from '../images/myWorks/4.jpg';
import slide_image_6 from '../images/myWorks/5.jpg';
import slide_image_7 from '../images/myWorks/6.png';


interface StylesForModal {
    overlay: CSSProperties;
    content: CSSProperties;
}


export default function Slider(): React.JSX.Element {
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
    const [selectedImage, setSelectedImage] = useState<null | string>(null);

    const modalStyles: StylesForModal = {
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 1)',
            zIndex: 9999
        },
        content: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100%',
            height: '100%',
            paddingTop: '160px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'transparent',
            overflow: 'auto',
            padding: "120px"
        },
    };
    const openModal = (image: string): void => {
        setSelectedImage(image);
        setModalIsOpen(true);
    };

    const closeModal = (): void => {
        setModalIsOpen(false);
    };

    return (
        <div id="container" className="container">
            <div className="blender-info">
                <h2 className="descr">Work examples</h2>
            </div>

            <Swiper
                // @ts-ignore
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={false}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 2,
                    stretch: 0,
                    depth: 80,
                    modifier: 77,

                }}
                pagination={{el: '.swiper-pagination', clickable: true}}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true,
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}

                className="swiper_container"
                speed={1222}
                initialSlide={2}
            >
                <SwiperSlide key={1} onClick={(): void => openModal(slide_image_1)}>
                    <img src={slide_image_1} alt="slide_image1"/>
                </SwiperSlide>
                <SwiperSlide key={2} onClick={(): void => openModal(slide_image_3)}>
                    <img src={slide_image_3} alt="slide_image2"/>
                </SwiperSlide>
                <SwiperSlide key={3} onClick={(): void => openModal(slide_image_4)}>
                    <img src={slide_image_4} alt="slide_image3"/>
                </SwiperSlide>
                <SwiperSlide key={4} onClick={(): void => openModal(slide_image_5)}>
                    <img src={slide_image_5} alt="slide_image4"/>
                </SwiperSlide>
                <SwiperSlide key={5} onClick={(): void => openModal(slide_image_6)}>
                    <img src={slide_image_6} alt="slide_image5"/>
                </SwiperSlide>
                <SwiperSlide key={6} onClick={(): void => openModal(slide_image_7)}>
                    <img src={slide_image_7} alt="slide_image6"/>
                </SwiperSlide>

                <div className="slider-controller">
                    <div className="swiper-button-prev slider-arrow">
                        <LiaArrowAltCircleLeft className="left-arrow" name="arrow-back-outline"/>
                    </div>
                    <div className="swiper-button-next slider-arrow">
                        <LiaArrowAltCircleRight className="right-arrow" name="arrow-forward-outline"/>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </Swiper>

            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={modalStyles}>
                <div className="modal-close-button" onClick={closeModal}>
                    <img src={closeButton} alt=""/>
                </div>
                {selectedImage && <img src={selectedImage} alt="middle image"/>}

            </Modal>
        </div>
    );
}
