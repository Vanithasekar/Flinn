import { useState, type ReactNode } from "react";
import StudentList from "../StudentList-block/StudentList-block";
import "./profile-management-block.css";

// Only ONE tab
type TabKey = "Student List";

const profileTabs: TabKey[] = ["Student List"];

const ProfileManagement: React.FC = () => {
  const [selectTab, setSelectTab] = useState<TabKey>("Student List");

  const tabsList: Record<TabKey, ReactNode> = {
    "Student List": <StudentList />,
  };

  return (
    <div className="container profile-management-container">
      {/* Tabs */}
      <div className="profile-management-tab-container overflow-auto">
        {profileTabs.map((pt) => (
          <div
            key={pt}
            className={`profile-management-tabs profile-management-tabs-active`}
            onClick={() => setSelectTab(pt)}
          >
            {pt}
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="tab-content py-3">
        {tabsList[selectTab]}
      </div>
    </div>
  );
};

export default ProfileManagement;
