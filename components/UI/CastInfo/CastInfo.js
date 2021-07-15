const CastInfo = (props) => {
  return (
    <div className="cast-info">
      <div className="cast__group-title">Cast & Crew</div>
      <div className="cast-info__list">
        <ul className="cast-info__crew">
          <li> Studio</li>
          <li> MAPPA </li>
        </ul>
        <ul className="cast-info__crew">
          <li> Director</li>
          <li> MAPPA </li>
        </ul>
        <ul className="cast-info__crew">
          <li> Actor</li>
          <li> MAPPA </li>
        </ul>
      </div>
    </div>
  );
};

export default CastInfo;
