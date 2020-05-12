import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import { v4 as uuidv4 } from 'uuid';
import h from '../helpers';

export class MapContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			initialCenter: {
				lat: this.props.initialLat,
				lng: this.props.initialLng
			},
			center: {
				lat: this.props.initialLat,
				lng: this.props.initialLng
			},
			zoom: this.props.initialZoom,
			activeMarker: {},
			showingInfoWindow: false
		}
	}

	onMapClick(ev, a, b) {
		const center = { lat: b.latLng.lat(), lng: b.latLng.lng() };
		this.setState({ center });
	}

	onMapDragEnd(ev, a) {
		const center = {
			lat: a.center.lat(),
			lng: a.center.lng()
		}
		this.setState({
			center
		});
	}

	onMarkerClick(ev, m) {
		const center = {
			lat: m.position.lat(),
			lng: m.position.lng()
		}
		this.setState({
			activeMarker: m,
			showingInfoWindow: true,
			center

		})
	}

	onInfoWindowClose() {
		this.setState({
			activeMarker: {},
			showingInfoWindow: false
		});
	}

	render() {
		const containerStyle = {
			position: 'relative',
			width: '100%',
			height: '400px',
			overflow: 'hidden',
			marginBottom: '20px',
		};

		if (!this.props.loaded) {
      return <div>Loading...</div>
    }
		return (
			<StaticQuery
				query={graphql`
					query {
						retailers: allContentfulWebsiteRetailers {
							nodes {
								latlng {
									lat
									lon
								}
								name
								province
								tel
								url
								email
								contact
							}
						}
					}
				`}
				render={ data => {
					return (
						<Map
							containerStyle={containerStyle}
							google={this.props.google}
							zoom={this.state.zoom}
							initialCenter={{
								lat: this.state.initialCenter.lat,
								lng: this.state.initialCenter.lng
							}}
							center={{
								lat: this.state.center.lat,
								lng: this.state.center.lng
							}}
							onClick={this.onMapClick.bind(this)}
							onDragend={this.onMapDragEnd.bind(this)}
						>
							{data.retailers.nodes.map( retailers => {
								return (
									<Marker
										key={uuidv4()}
										onClick={this.onMarkerClick.bind(this)}
										title={retailers.name}
										position={{ lat: retailers.latlng.lat, lng: retailers.latlng.lon }}
										email={retailers.email}
										tel={retailers.tel}
										province={retailers.province}
										url={retailers.url}
										options={{icon:`http://maps.google.com/mapfiles/ms/icons/purple-dot.png`}}
									/>
								)
							})}
							<InfoWindow
								onClose={this.onInfoWindowClose.bind(this)}
								marker={this.state.activeMarker}
								visible={this.state.showingInfoWindow}
							>
								<div>
									<span><b>{this.state.activeMarker.title}</b></span>
									{this.state.activeMarker.tel && <span><br /><b>tel:</b> <a href={`tel:${h.removeBlanks(this.state.activeMarker.tel)}`}>{this.state.activeMarker.tel}</a></span>}
									{this.state.activeMarker.email && <span><br /><b>email:</b> <a href={`mailto:${this.state.activeMarker.email}`}>{this.state.activeMarker.email}</a></span>}
									{this.state.activeMarker.url && <span><br /><a href={this.state.activeMarker.url} target='_blank' rel='noopener noreferrer'>website</a></span>}
								</div>
							</InfoWindow>
						</Map>
					)
				}}
			>
			</StaticQuery>
    );
  }
}

MapContainer.defaultProps = {
	initialLat: -28.596277007179136,
	initialLng: 22.296852618749984,
	initialZoom: 5
}

MapContainer.propTypes = {
	initialLat: PropTypes.number,
	initialLng: PropTypes.number
}

export default GoogleApiWrapper({
  apiKey: (process.env.GOOGLE_MAPS_API_KEY)
})(MapContainer)
