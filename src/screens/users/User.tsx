import { Outlet, useParams, Link } from "react-router-dom";
import { users } from "../../db";

function User() {
  const { userId } = useParams();
  // 자식 route가 부모 route에서 보낸 메세지를 받아서 사용할 수 있다.
  return (
    <div>
      <h1>
        User with it {userId} is named: {users[Number(userId) - 1].name}
      </h1>
      <Link to="followers">See followers</Link>
      <Outlet context={{ nameOfMyUser: users[Number(userId) - 1].name }} />
    </div>
  );
}
export default User;
