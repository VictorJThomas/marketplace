import { Route } from "react-router"
import { Routes } from "react-router-dom"
import { RouterLayout } from "./common/RouterLayout"
import { HomePage } from "./pages/home"
import { LoginPage } from "./pages/login"

export const AppRouter:React.FC<{}> = () => {
    return (
        <Routes>
            <Route path="/" element={<RouterLayout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
            </Route>
            <Route/>
        </Routes>
    )
}