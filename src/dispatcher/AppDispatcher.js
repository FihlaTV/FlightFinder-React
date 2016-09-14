// IMPORTANT: There is only ever one dispatcher for a given React + Flux application, and it's created by simply calling new Dispatcher()
import { Dispatcher } from 'flux';

const AppDispatcher = new Dispatcher();

export default AppDispatcher;
