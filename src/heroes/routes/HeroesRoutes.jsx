import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../../ui"
import { HeroesProvider } from "../context/HeroesProvider"
import { DcPage, HeroPage, MarvelPages, SearchPage } from "../pages"

export const HeroesRoutes = () => {
  return (
    <>
      <HeroesProvider>
        <div className="container">

          <Navbar/>

          <Routes>
            <Route path="marvel" element={<MarvelPages />} />
            <Route path="dc" element={<DcPage />} />

            <Route path="search" element={<SearchPage />} />
            <Route path="hero/:id" element={<HeroPage />} />

            <Route path="/" element={<Navigate to="/marvel" />} />
          </Routes>

        </div>
      </HeroesProvider>
    </>
  )
}
