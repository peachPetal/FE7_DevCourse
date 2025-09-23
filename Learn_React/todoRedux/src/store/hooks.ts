import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store";

// 타입이 지정된 useDispatch와 useSelector를 앱 전체에서 사용하세요.
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();