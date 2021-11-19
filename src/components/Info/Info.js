import React from 'react';

const InfoSection = props => (
  <section className={`bx--row ${props.className} info-section`}>
    <div className="bx--col-md-8 bx--col-lg-4 bx--col-xlg-3">
      <h3 className="info-section__heading">{props.heading}</h3>
    </div>
    {props.children}
  </section>
);

const InfoCard = props => {
  return (
    <article className="info-card bx--col-md-4 bx--col-lg-4 bx--col-xlg-3 bx--offset-xlg-1" onClick={props.link_func}>
      <img src={props.img_src} alt={props.img_src}></img>
      <h4 className="info-card__heading">
        <strong>{props.heading}</strong>
      </h4>
      <h5>Start Price: {props.price}</h5>
      <p className="info-card__body">{props.body}</p>
    </article>
  );
};

export { InfoCard, InfoSection };
