'Use Client'

import React from 'react';

const TeamSection = () => {
  return (
    <section className="team__section section--padding pb-0">
      <div className="container">

        <div className="section__heading text-center mb-50">
          <h2 className="section__heading--maintitle text__secondary mb-10">Our Team</h2>
          <p className="section__heading--desc">
            Beyond more stoic this along goodness this sed wow manatee mongos flusterd impressive man farcrud opened.
          </p>
        </div>
        
        <div className="team__container">
          <div className="row row-cols-md-3 row-cols-sm-2 row-cols-2 mb--n30">
            {/* Individual Team Members */}
            <TeamMemberCard
              imgSrc="/assets/img/other/team1.png"
              name="Brandon Bokle"
              position="Secretary"
            />

            <TeamMemberCard
              imgSrc="/assets/img/other/team2.png"
              name="Sarrison Samuel"
              position="CEO - Founder"
            />
            
            <TeamMemberCard
              imgSrc="/assets/img/other/team3.png"
              name="Warrison Samuel"
              position="Managery"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

const TeamMemberCard = ({ imgSrc, name, position }) => {
  return (
    <div className="col custom-col mb-30">
      <article className="team__card">
        <div className="team__card--thumbnail">
          <img className="team__card--thumbnail__img display-block" src={imgSrc} alt="team-thumb" />
        </div>
        <div className="team__card--content ">
          <h3 className="team__card--content__title">{name}</h3>
          <span className="team__card--content__subtitle text__secondary">{position}</span>
        </div>
      </article>
    </div>
  );
};

export default TeamSection;
