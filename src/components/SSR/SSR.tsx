export default async function UsersSSR() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store"
  });

  const users = await res.json()

  return (
    <div>

      <h1>
        SSR -- Server Side Rendered Users
      </h1>
      <ul>
        {users.map((u:any) => <li key={u.id}>{u.name}</li>)}
      </ul>

    </div>

  );
}

