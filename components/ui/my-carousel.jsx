import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image';

const BrandsCarousel = () => {
    const images = [
        '/next.svg',
        '/vercel.jpg',
        '/next.svg',
        '/vercel.svg',
        '/next.svg',
        '/vercel.svg',
    ];

    return (
        <Carousel
            showArrows={true}
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            infiniteLoop={true}
            emulateTouch={true}
            centerMode={true}
            centerSlidePercentage={33.33}
            renderArrowPrev={(onClickHandler, hasPrev) =>
                hasPrev && (
                    <button
                        type="button"
                        onClick={onClickHandler}
                        title="Previous"
                        style={{
                            left: '10px',
                            zIndex: 2,
                        }}
                    >
                        Previous
                    </button>
                )
            }
            renderArrowNext={(onClickHandler, hasNext) =>
                hasNext && (
                    <button
                        type="button"
                        onClick={onClickHandler}
                        title="Next"
                        style={{
                            right: '10px',
                            zIndex: 2,
                        }}
                    >
                        Next
                    </button>
                )
            }
        >
            {images.map((image, index) => (
                <div key={index}>
                    <Image
                        src={image}
                        alt={`Brand Logo ${index + 1}`}
                        width={600}
                        height={300}
                        layout="responsive"
                    />
                </div>
            ))}
        </Carousel>
    );
};

export default BrandsCarousel;
