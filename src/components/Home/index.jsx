import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import LogoTitle from '../../assets/images/logo-a.png';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';
import Loader from 'react-loaders';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    const nameArray = ['d', 'r', 'i', 'a', 'n']
    const jobArray = ['W', 'e', 'b', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i,</span>
                        <br />
                        <span className={`${letterClass} _13`}>I</span>
                        <span className={`${letterClass} _14`}>'m</span>
                        <img src={LogoTitle} alt="A" />
                        <AnimatedLetters letterClass={letterClass} strArr={nameArray} index={15} />
                        <br />
                        <AnimatedLetters letterClass={letterClass} strArr={jobArray} index={22} />
                    </h1>
                    <h2>Software Engineer | Frontend Developer
                        <br/>
                        Javascript, TypeScript, Python, Node.js, React, Next.js
                        <br/>
                        Learning about 3D Websites & Game Development
                    </h2>
                    <Link to="/contact" className='flat-button'>CONTACT ME</Link>
                </div>
                <Logo />
            </div>

            <Loader active={true} type="pacman" />
        </>
    );
}

export default Home;