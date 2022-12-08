import React from 'react'
import './features.css'
const FeatureHeading = (props) => (
  <div className="feature-heading">
    <div className="feature-heading-line"></div>
    <div className="feature-heading-text">{props.heading}</div>
  </div>
)

const Feature = (props) => (
  <div className="feature-card">
  <div className="feature-card-heading">
    <FeatureHeading heading={props.heading} />
  </div>
  <div className="feature-card-content">{props.content}</div>
</div>
)

const Features = () => {
  return (
    <div className='gpt3__features'>
      <div className='gpt3__features_container'>
        <div className='gpt3__features_head'>
          <h3>The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h3>
          <p>Request Early Access to Get Started</p>
        </div>
        <div className='gpt3__feature_list'>
          <Feature
            heading='Improving end distrusts instantly'
            content='From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.'
          />
          <Feature
            heading='Become the tended active'
            content='Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.'
          />
          <Feature
            heading='Message or am nothing'
            content='Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.'
          />
          <Feature
            heading='Really boy law county'
            content='Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.'
          />

        </div>
      </div>

    </div>
  )
}

export default Features