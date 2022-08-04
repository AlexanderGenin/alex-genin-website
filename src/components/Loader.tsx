const Loader = () => {
  return (
    <div className="loading">
      <div>
        <p className="loading_text">Hello</p>
        <div className="loading_bar">
          <span className="loading_bar_shape">
            <span className="loading_bar__progress"></span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Loader;
