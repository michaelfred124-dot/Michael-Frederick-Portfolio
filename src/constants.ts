/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Skill, Project } from './types';
import stickyFingersImg from './assets/Sticky_Fingers_Poster.jpg';
import animationImg from './assets/AnimRef.jpg';

export const COLORS = {
  yellow: '#FFE28B',
  green: '#86DE00',
  blue: '#00B1FF',
  purple: '#8E7AFE',
  pink: '#FF6B6B',
  offWhite: '#F1EDE1',
  black: '#222222',
};

export const NAV_LINKS = [
  { name: 'About Michael', href: '/', color: COLORS.yellow },
  { name: 'Animation', href: '/animation', color: COLORS.green },
  { name: 'Rigging', href: '/rigging', color: COLORS.blue },
  { name: 'Project Management', href: '/production', color: COLORS.purple },
  { name: 'Contact', href: '/contact', color: COLORS.yellow },
];

export const SKILLS: Skill[] = [
  {
    title: 'Animation',
    description: 'I’m a 3D Animator with a passion for combining creativity and technical skill to bring stories to life. My experience on short films and student projects like Sticky Fingers and Falky Freedom Fighter has sharpened my ability to handle complex animation challenges.',
    icon: 'Film',
    color: COLORS.green,
  },
  {
    title: 'Rigger / Tech Art',
    description: 'I’ve recently developed a deep passion for rigging and the technical side of art, where creativity meets problem-solving. Exploring technical challenges along the production pipeline and discovering new, more effective workflows has fueled my love for innovation and efficiency.',
    icon: 'Settings2',
    color: COLORS.blue,
  },
  {
    title: 'Project Management',
    description: 'I’m a project manager currently working on the short film Sticky Fingers, where I oversee schedules, coordinate teams, and ensure the creative vision is executed smoothly from start to finish.',
    icon: 'Briefcase',
    color: COLORS.purple,
  },
  {
    title: 'Problem Solver',
    description: 'I love being the person people turn to when challenges arise. Even if I don’t have the answer right away, I work tirelessly to find the right solution. I strive to be the solution.',
    icon: 'Search',
    color: COLORS.yellow,
  },
];

export const PROJECTS: Project[] = [
  {
    title: 'Sticky Fingers',
    description: '3D Short Film - Project Manager & Animator',
    tags: ['Animation', 'Project Management', 'Rigging'],
    image: stickyFingersImg,
    link: '#',
  },
  {
    title: 'Animation Reference',
    description: '3D Short Film - Animation Reference Library',
    tags: ['Animation', 'Reference', 'Systems'],
    image: animationImg,
    link: '#',
  },
];

export const BIO = "I am a 3D Animator and Technical Artist driven by a love for building systems and bringing characters to life. I’ve become the “go to” person for troubleshooting complex pipelines; while I might not have every answer immediately, I have a proven track record of finding the solution. My background in production and leadership has shaped me into an effective collaborator who knows how to guide a team through the technical hurdles of a project to reach the finish line.";
