import { Card } from "antd";
import { useLocation } from "react-router-dom";
import "./style.css";

const ProfileData = () => {
  const {state} = useLocation();
  const {firstName, lastName, email} = state;
  return (
<div className="profile">
    <Card
      title="User Profile"
      bordered={true}
      style={
          {
            width:300
          }
      }
    >
      <label>First Name: </label>{firstName}
      <br />
      <label>Last Name: </label>{lastName}
      <br />
      <label>Email: </label>{email}
      <br />
    </Card></div>
  );
};
export default ProfileData;
