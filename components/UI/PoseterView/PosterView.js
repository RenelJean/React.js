const PosterView = (props) => {
  const loopComp = (comp, digit) => {
    let thumbnails = [];
    for (let index = 0; index <= digit; index++) {
      thumbnails.push(comp);
    }
    return thumbnails;
  };
  return (
    <div className="poster-view">
      <h3 className="poster-view__title">Anime</h3>
      <div className="poster-view__thumbnails">
        {loopComp(
          <div className="poster-view__thumbnail">
            <img src="https://d.newsweek.com/en/full/1640774/attack-titan-final-season-4-poster.jpg?w=1600&h=1600&l=51&t=14&q=88&f=5046b2da19b0bcc99b68a84042c94412" />
            <div className="poster-view__top-layer">
              <i className="fas fa-play" />
            </div>
          </div>,
          10
        )}
      </div>
    </div>
  );
};

export default PosterView;
