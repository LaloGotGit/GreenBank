import React, {useState} from 'react'
import Video from '../../videos/video.mp4'
import {HeroContainer, HeroBg,VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight} from './HeroElements'
import {Button} from '../ButtonElement'
const HeroSection = () => {

    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer>
            <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </HeroBg>
            <HeroContent>
                <HeroH1>El Banco virtual del futuro</HeroH1>
                <HeroP>
                    Crea una cuenta hoy y recibe $1,500 de crédito para tu primera compra.
                </HeroP>
                <HeroBtnWrapper>
                    <Button to='signup' onMouseEnter={onHover} onMouseLeave={onHover} primary= 'true' dark='true'>
                        Me interesa {hover ? <ArrowForward/> : <ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
