import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DashProfile from "../components/DashProfile";
import DashSidebar from "../components/DashSidebar";
import DashPosts from "../components/DashPosts";
import DashUsers from "../components/DashUsers";
import DashComments from "../components/DashComments";
import DashboardComp from "../components/DashboardComp";

function Dashboard() {
  const location = useLocation();
  const [tab, setTab] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);
  return (
    <div className="min-h-[75vh] flex flex-col md:flex-row">
      <div className="md:w-56">
        <DashSidebar />
      </div>
      <div className="flex justify-center items-center m-auto">
        {tab === "profile" && <DashProfile />}
      </div>
      {/* posts */}
      {tab === "posts" && <DashPosts />}

      {/* users */}
      {tab === "users" && <DashUsers />}

      {/* comments */}
      {tab === "comments" && <DashComments />}

      {/* dashboard components */}

      {tab === "dash" && <DashboardComp />}
    </div>
  );
}

export default Dashboard;
