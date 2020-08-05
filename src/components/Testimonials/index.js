import React from 'react'
import Link from 'gatsby-link'

import Quote from './Quote';

import './index.scss'

const quotes = [
  {
    text: "Great work. Implemented features, fixed bugs, and went above and beyond to polish user experience and suggest business-level improvements.",
    image: "",
    person: "Andrew Badr",
    title: "CEO",
    company: "Mixily",
  },
  {
    text: "Wow. Can't believe how amazing and yada yada they were so good",
    image: "",
    person: "Sarah Sogood",
    title: "CEO",
    company: "Amazon",
  },
  {
    text: "Wow. Can't believe how amazing and yada yada they were so good",
    image: "",
    person: "Kyle McDogal",
    title: "VP Engineering",
    company: "Apple",
  }
].map((quote, idx) => (
  <Quote key={ idx }
    text={ quote.text }
    image={ quote.image }
    person={ quote.person }
    title={ quote.title }
    company={ quote.company } />
));

const Testimonials = () => (
  <div className="testimonials">
    <h1 className="mobile">What our clients are saying about us</h1>
    <div className="quotes">
      { quotes }
    </div>
  </div>
)

export default Testimonials
