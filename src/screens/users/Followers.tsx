import { useParams, useOutletContext } from "react-router-dom";

interface FollowerShape {
  nameOfMyUser: string;
}

function Followers() {
  const { nameOfMyUser } = useOutletContext<FollowerShape>();
  console.log(nameOfMyUser);
  return <h1>Here are {nameOfMyUser}의 followers</h1>;
}

export default Followers;
