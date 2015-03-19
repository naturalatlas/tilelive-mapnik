/**
 * Default map bounds / resolutions for Spherical Mercator
 */
module.exports = {
	srs: "+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0.0 +k=1.0 +units=m +nadgrids=@null +wktext +no_defs +over",
	minx: -6378137*Math.PI,
	miny: -6378137*Math.PI,
	maxx: 6378137*Math.PI,
	maxy: 6378137*Math.PI,
	resolutions: range(0,30).map(getSphericalMercatorResolution).join(',')
}

function range(min, max){
	var result = [];
	for(var i = min; i <= max; i++){
		result.push(i);
	}
	return result;
}

//map units per tile width (not per pixel)
function getSphericalMercatorResolution(z){
	var max_res = 6378137 * 2 * Math.PI;
	return max_res / (1 << z);
}