import {useSelector, TypedUseSelectorHook} from 'react-redux';
import type {State} from '../types/state';

export const useAppSelector: TypedUseSelectorHook<State> = useSelector;
