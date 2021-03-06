const FeaturedMedia = (props) => {
  return (
    <div className="featured-media">
      <iframe
        className="featured-media__video"
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/idlLFNNpZiI?autoplay=1"
        title="Tokyo Revengers"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>

      <div className="featured-media__bg">
        <div className="featured-media__container">
          <div className="featured-media__title">Tokyo Revengers</div>
          <div className="featured-media__playing">NOW PLAYING</div>
          <div className="featured-media__location">New Eps Every Sat</div>
          <div className="featured-media__buttons">
            <div className="featured-media__play-btn">
              <i className="fas fa-play" />
            </div>
            <div className="featured-media__info-btn">MORE INFO</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedMedia;
