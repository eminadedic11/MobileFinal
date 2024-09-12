
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../redux/store'; // Adjust path as needed

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
