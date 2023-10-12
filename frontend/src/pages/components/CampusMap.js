function MapComponent() {
    return (
      <div className="map-container">
        <p align="center">
          <iframe
            title='Campus Map'
            width="1200vh"
            height="500vh"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/d/embed?mid=1lNfe_HxPpE97weLfceFuvpAhQQJvaFo&ehbc=2E312F&noprof=1"
          />
        </p>
      </div>
    );
  }
  
  export default MapComponent;
  