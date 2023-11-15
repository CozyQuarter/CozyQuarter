/**
 * Map Component
 * 
 * A React component that displays a campus map using an embedded Google Maps iframe.
 * 
 * This component renders the campus map within a container and provides the necessary
 * iframe configuration for displaying the map.
 * 
 * Dependencies:
 * - React: For creating and rendering the component.
 * 
 * Exported Component:
 * - MapComponent: A React component for displaying the campus map.
 */

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