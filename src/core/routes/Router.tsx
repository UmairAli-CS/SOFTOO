import React, { lazy } from "react"
import { Routes, Route } from "react-router-dom";

const Dashboard = lazy(() => import('../../views/dashboard/dashboard'));

class AppRoute extends React.Component {

  render() {
    return (
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    )
  }
}


export default AppRoute