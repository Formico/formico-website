import React from 'react'
import Link from 'gatsby-link'

import Quote from './Quote';

import routes from '../../constants/routes';

import './index.scss'

const caseStudies = [
  {
    project: "Mixily",
    image: "/projects/mixily.png",
    overview: "Mixily is a super slick event-hosting tool. We contributed major frontend and backend features, implemented UI, created new API endpoints, wrote tests, and optimized DB queries. We also led the Product Hunt launch campaign and achieved #4 product of the day.",
    quote: {
      text: "Great work. Implemented features, fixed bugs, and went above and beyond to polish user experience and suggest business-level improvements.",
      image: "",
      person: "Andrew Badr",
      title: "CEO",
      company: "Mixily",
    },
  },
  {
    project: "ContigoU",
    image: "/projects/contigou.png",
    overview: "ContigoU connects patients to skilled nursing facilities in California. We developed the first version of their platform from the ground up, conducted user interviews, created the initial product specification, and implemented the project from top to bottom.",
    quote: {
      text: "Why can't everyone communicate between tech and product the way you do?",
      image: "",
      person: "Reneé Donnelly",
      title: "CEO",
      company: "ContigoU",
    },
  },
  {
    project: "Indie Worldwide",
    image: "/projects/indieworldwide.png",
    overview: "Indie Worldwide is an online meetup group for hackers, makers, and founders. We host multiple meetups a month, sometimes inviting guests for live Q&A sessions. Indie Worldwide currently has over 1000 members across Facebook, Slack, and our Email List.",
    quote: {
      text: "Indie Worldwide shows that you don’t have to trade interaction quality just because you’re online. If anything, this enables more possibilities. I was ready for the next event before the first one was over.",
      image: "",
      person: "Dru Riley",
      title: "Founder",
      company: "Trends.vc",
    }
  },
  {
    project: "Remine",
    image: "/projects/remine.png",
    overview: "Remine handles the backend for the modern real-estate delevoper. We took on a greenfield project to build out their internal messaging tool, allowing agents to reliably connect in real time using a sleek modern interface. We used React and react-native to build out both a modern responsive website and a cross-platform mobile app.",
  }
].map((project, idx) => (
  <div className="project" key={idx}>
    <h3>{ project.project }</h3>
    <div className="project-description">
      <div className="preview">
        <img
          alt={`Screenshot of ${project.project}`}
          src={`${routes.IMG}/${project.image}`}
        />
      </div>
      <div className="overview">
        <h4>Overview:</h4>
        <p>{project.overview}</p>
        { project.quote ?
          <Quote
            text={ project.quote.text }
            image={ project.quote.image }
            person={ project.quote.person }
            title={ project.quote.title }
            company={ project.quote.company } />
          : <div styles={{width: '360px'}} />
        }
      </div>
    </div>
  </div>
));

const CaseStudies = () => (
  <div className="caseStudies">
    <h2 className="caseStudies-header">{"Here's what we've been building lately..."}</h2>
    { caseStudies }
  </div>
)

export default CaseStudies;
