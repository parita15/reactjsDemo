import React,{useState} from 'react';
import {useHistory} from 'react-router-dom'
import '../cssfiles/screen1.css';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';
import Menu from '../../common/menu';
import Header from "../../common/header";

const items = [
    {
        src: 'https://source.unsplash.com/PC_lbSSxCZE/1700x630',
        altText: 'Slide 1',
        caption: 'Slide 1'
    },
    {
        src: 'https://source.unsplash.com/lVmR1YaBGG4/1700x630',
        altText: 'Slide 2',
        caption: 'Slide 2'
    },
    {
        src: 'https://source.unsplash.com/5KvPQc1Uklk/1700x630',
        altText: 'Slide 3',
        caption: 'Slide 3'
    }
];

const Screen1Basic = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = items.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >
                <img src={item.src} alt={item.altText} />
                <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
            </CarouselItem>
        );
    });

    return (
        <div className = {"screen"}>
            <Menu history={useHistory()}/>
            <Header
                title={"Screen1"}
            />
            <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
            >
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
            </Carousel>
        </div>

    );
}
export default Screen1Basic
