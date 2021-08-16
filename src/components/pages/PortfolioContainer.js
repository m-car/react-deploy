import React, { useState } from "react";
import NavTabs from "../NavTabs";
import Home from "../../../../../../unit_20_day_1_activities/00-practice-app/src/components/pages/Home";
import About from "../../../../../../unit_20_day_1_activities/00-practice-app/src/components/pages/About";
import Blog from "../../../../../../unit_20_day_1_activities/00-practice-app/src/components/pages/Blog";
import Contact from "../../../../../../unit_20_day_1_activities/00-practice-app/src/components/pages/Contact";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("Home");

  // TODO: Add a comment describing the functionality of this method
  //a switch statement deciding which page to render and something about props here
  const renderPage = () => {
    switch (currentPage) {
      case "Home":
        return <Home />;

      case "About":
        return <About />;

      case "Blog":
        return <Blog />;

      default:
        return <Contact />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* // TODO: Add a comment describing what we are passing as props */}
    {/* we are passing one state value and one is a function .  */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* // TODO: Add a comment explaining what is happening on the following line */}
      {/* this is running that switch case based on the current state and rendering page */}
      {renderPage()}
    </div>
  );
}
