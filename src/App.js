import { users } from "./Components/data";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  // let filterSearch = [];

  // if(search !== ""){
  //   filterSearch = users.filter(items => items.first_name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
  // }else {
  //   filterSearch = users
  // }
  let filteredUsers = [];

  if (search !== "") {
    filteredUsers = users.filter((item) =>
      item.first_name.toLowerCase().includes(search.toLowerCase())
    );
  } else {
    filteredUsers = users;
  }

  return (
    <div className="px-28">
      <h1 className="display-4 text-center my-4 text-2xl font-semibold">
        React Search Filter
      </h1>
      <div>
        <label htmlFor="search" className="sr-only">
          Email
        </label>
        <input
          type="text"
          name="search"
          onChange={handleChange}
          id="search"
          className="block w-full rounded-md border px-3 py-3 outline-none border-gray-300 shadow-sm sm:text-sm"
          placeholder="Search contact by name"
        />
      </div>
      <div>
        <div className="mt-8 flex flex-col">
          <div className="inline-block w-full py-2">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      First Name
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Last Name
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Country
                    </th>
                  </tr>
                </thead>

                {filteredUsers.map((items) => (
                  <tbody
                    key={items.id}
                    className="divide-y divide-gray-200 bg-white">
                    <tr key={items.id}>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {items.first_name}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {items.last_name}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {items.email}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {items.Country}
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
