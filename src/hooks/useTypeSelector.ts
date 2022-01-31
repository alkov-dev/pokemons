import { RootState } from './../redux/reducer/index';
import { TypedUseSelectorHook, useSelector } from "react-redux";


export const useTypeSelector: TypedUseSelectorHook<RootState> = useSelector