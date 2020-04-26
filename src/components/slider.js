import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import { v4 as uuidv4 } from 'uuid';
import Img from 'gatsby-image';
import 'react-awesome-slider/dist/styles.css';
import sliderStyles from './slider.module.scss';

const AutoplaySlider = withAutoplay(AwesomeSlider);

class Slider extends Component {
	static defaultProps = {
    play: true,
		cancelOnInteraction: false,
		interval: 3000,
		bullets: true,
		organicArrows: true,
		fillParent: false,
		infinite: true,
		buttons: true,
		customContent: null,
	}
	
	render() {
		return (
			<div>
				<AutoplaySlider
					className={sliderStyles.container}
					play={this.props.play}
					cancelOnInteraction={this.props.cancelOnInteraction}
					interval={this.props.interval}
					bullets={this.props.bullets}
					organicArrows={this.props.organicArrows}
					fillParent={this.props.fillParent}
					infinite={this.props.infinite}
					buttons={this.props.buttons}
					customContent={this.props.customContent}
				>
					{this.props.images.edges.map(edge => {
						return (
							<div key={uuidv4()} className={sliderStyles.imageContainer}>
								<Img
									className={sliderStyles.image}
									alt={edge.node.alt}
									fluid={edge.node.childImageSharp.fluid}
								/>
							</div>
						)
					})}
				</AutoplaySlider>
			</div>
		)
	}
}

Slider.propTypes = {
	cssModule: PropTypes.object,
	play: PropTypes.bool,
	cancelOnInteraction: PropTypes.bool,
	interval: PropTypes.number,
	bullets: PropTypes.bool,
	organicArrows: PropTypes.bool,
	fillParent: PropTypes.bool,
	infinite: PropTypes.bool,
	buttons: PropTypes.bool,
	customContent: PropTypes.func,
	images: PropTypes.object.isRequired
}

export default Slider 
