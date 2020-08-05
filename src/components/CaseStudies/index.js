import React from 'react'
import Link from 'gatsby-link'

import Quote from './Quote';

import routes from '../../constants/routes';

import './index.scss'

const caseStudies = [
  {
    project: "Mixily",
    image: "/projects/mixily.png",
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
    quote: {
      text: "Indie Worldwide shows that you don’t have to trade interaction quality just because you’re online. If anything, this enables more possibilities. I was ready for the next event before the first one was over.",
      image: "",
      person: "Dru Riley",
      title: "Founder",
      company: "Trends.vc",
    }
  }
].map((project, idx) => (
  <div className="project" key={idx}>
    <h3>{ project.project }</h3>
    <img alt={`Screenshot of ${project.project}`} src={`${routes.IMG}/${project.image}`} />
    <Quote
      text={ project.quote.text }
      image={ project.quote.image }
      person={ project.quote.person }
      title={ project.quote.title }
      company={ project.quote.company } />
  </div>
));

const CaseStudies = () => (
  <div className="caseStudies">
    <div className="projects">
      { caseStudies }
    </div>
  </div>
)

export default CaseStudies;
