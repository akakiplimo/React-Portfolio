import { faReact, faCss3, faGitAlt, faHtml5, faJsSquare, faPython } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArr={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                            index={15} />
                    </h1>
                    <p>
                        I'm a dedicated front-end developer looking for a role in an
                        established IT company with the opportunity to work with the latest
                        technologies on challenging and diverse projects.
                    </p>
                    <p align="LEFT">
                        I'm quiet, confident, naturally curious, and perpetually working on
                        improving my development skills and knowledge problem at a time.
                    </p>
                    <p>
                        I would define myself as a family
                        person, a sports fanatic, music & photography enthusiast, and tech-obsessed!!!
                    </p>
                </div>

                <div className='stage-cube-container'>
                    <div className='cubeSpinner'>
                        <div className='side1'>
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                        </div>
                        <div className='side2'>
                            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                        </div>
                        <div className='side3'>
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                        </div>
                        <div className='side4'>
                            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                        </div>
                        <div className='side5'>
                            <FontAwesomeIcon icon={faPython} color="#646464" />
                        </div>
                        <div className='side6'>
                            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                        </div>
                    </div>
                </div>
            </div>

            <Loader type="pacman" />
        </>
    );
}

export default About;