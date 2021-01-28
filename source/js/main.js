import {ieFix} from './utils/ie-fix';
import {iosVhFix} from './utils/ios-vh-fix';

import {initModals} from './modules/init-modals';
import {setupPreload} from './modules/preload';
import {onContentToggle} from './modules/toggle';


// Utils
// ---------------------------------

ieFix();
iosVhFix();

// Modules
// ---------------------------------
setupPreload();
initModals();
onContentToggle();
