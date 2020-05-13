export default (str) => {
	if (typeof str !== 'string') return null;
	return str.replace(/\s+/g, '');
}
