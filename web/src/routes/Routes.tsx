import { Route, Routes } from "react-router-dom";
import {HomePage} from '../pages/HomePage'
import { RoomPage } from "@/pages/RoomPage";

export function AppRoutes() {
    return(
        <Routes>
            <Route element={<HomePage/>} path="/"/>
            <Route element={<RoomPage/>} path="/room"/>
        </Routes>
    )
}

