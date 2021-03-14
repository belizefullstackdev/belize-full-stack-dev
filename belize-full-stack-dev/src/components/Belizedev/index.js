import React, { useState } from 'react';
import Video from '../../videos/video.mp4';
import { Button } from '../ButtonElements';
import { BelizeDevContainer, BelizeBag, VideoBg, BelizeContent, BelizeH1, BelizeP, BelizeBtnWrapper, ArrowForward, ArrowRight } from './BelizeDev';

const Belizedev = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    };


    return (
        <BelizeDevContainer id="home">
            <BelizeBag >
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </BelizeBag>
            <BelizeContent>
                <BelizeH1>
                    Web Application Made Easy
                </BelizeH1>
                <BelizeP>
                    Bringing Inovation to your business and website to enhance customer satisfaction with the lates web frames and technologies being used world wide.
                </BelizeP>
                <BelizeBtnWrapper>
                    <Button to='contact-us' onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'>
                        Contact Us {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>

                </BelizeBtnWrapper>
            </BelizeContent>
        </BelizeDevContainer>
    )
}

export default Belizedev
