import { combineReducers } from 'redux';

import global from "./global";
import venues from "./venues";
import artists from "./artists";
import musics from "./musics";

export default combineReducers({global, venues, artists, musics});