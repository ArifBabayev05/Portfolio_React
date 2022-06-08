import React from 'react';
import './Skills.css';
import skillsVector from './../../assets/skills_vector.png';
import Header from '../Header/Header';
import SkillCard from './SkillCard';
import { skillList } from '../../assets/skillsData';
import FooterLink from '../FooterLink/FooterLink';

const Skills = () => {
    return (
        <div className='section-container'>
            <Header
                heading='Our Skills.'
                details="We Never Stop for Learning(I Hope) :)"
            />
            <div className='skill-card-container'>
                {skillList.map((skill) => (
                    <SkillCard
                        skillName={skill.skillName}
                        skillUrl={skill.skillUrl}
                    />
                ))}
            </div>
            <FooterLink phrase='(Do Not)  Get in ' link='touch.' toAddress='/contact' />
            <div className='skills-vector-frame'>
                <img className='skills-vector' src={skillsVector} alt='' />
            </div>
        </div>
    );
};

export default Skills;
