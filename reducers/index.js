import { combineReducers } from 'redux';
import { region_red } from './coord_red'
import { button_red } from './button_red';
export default combineReducers({
	region: region_red,
	button: button_red
});




