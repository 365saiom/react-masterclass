// function Home() {
//   const users: any = [];
//   return <h1>{users[0].name}</h1>;
// }

// export default Home;

import { Link, useSearchParams } from "react-router-dom";
import { users } from "../db";

function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  setTimeout(() => {
    setSearchParams({
      day: "today",
      tomorrow: "123",
    });
  });
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Home;
