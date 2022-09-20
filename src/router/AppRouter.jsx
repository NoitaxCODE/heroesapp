import { Routes, Route } from "react-router-dom";
import { LoginPage } from "../auth";
import { HeroesRoutes } from "../heroes";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRouter } from "./PublicRouter";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={

          <PublicRouter>
            <LoginPage />
          </PublicRouter>

        }/>


        <Route path="/*" element={

            <PrivateRoutes>
              <HeroesRoutes />
            </PrivateRoutes>

        }/>

      </Routes>
    </>
  )
}
