import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";

import { AppDispatch, RootState } from "../store";

export const useAppDispatch = () => useDispatch<AppDispatch>();
// we alias the useSelector by adding more types to it
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
