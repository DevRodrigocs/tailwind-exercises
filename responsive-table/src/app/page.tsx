const Page = () => (
  <div className="container mx-auto">

    <table className="w-full mx-2">
      <thead>
        <tr className="border-b text-left border-gray-200">
          <th className="py-2">Name</th>
          <th className="hidden md:table-cell">Title</th>
          <th className="hidden md:table-cell">Email</th>
          <th>Function</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b text-left text-sm text-gray-400 border-gray-200">
          <td className="py-2">
            <p className="font-bold text-black">John Titor</p>
            <p className="block md:hidden">Soldier</p>
            <p className="block md:hidden">johntitor@hotmail.com</p>
          </td>
          <td className="hidden md:table-cell">Soldier</td>
          <td className="hidden md:table-cell">johntitor@hotmail.com</td>
          <td>Member</td>
          <td>
            <a href="">Edit</a>
          </td>
        </tr>
        <tr className="border-b text-left text-sm text-gray-400 border-gray-200">
          <td className="py-2">
            <p className="font-bold text-black">John Titor</p>
            <p className="block md:hidden">Soldier</p>
            <p className="block md:hidden">johntitor@hotmail.com</p>
          </td>
          <td className="hidden md:table-cell">Soldier</td>
          <td className="hidden md:table-cell">johntitor@hotmail.com</td>
          <td>Member</td>
          <td>
            <a href="">Edit</a>
          </td>
        </tr>
        <tr className="border-b text-left text-sm text-gray-400 border-gray-200">
          <td className="py-2">
            <p className="font-bold text-black">John Titor</p>
            <p className="block md:hidden">Soldier</p>
            <p className="block md:hidden">johntitor@hotmail.com</p>
          </td>
          <td className="hidden md:table-cell">Soldier</td>
          <td className="hidden md:table-cell">johntitor@hotmail.com</td>
          <td>Member</td>
          <td>
            <a href="">Edit</a>
          </td>
        </tr>
        <tr className="border-b text-left text-sm text-gray-400 border-gray-200">
          <td className="py-2">
            <p className="font-bold text-black">John Titor</p>
            <p className="block md:hidden">Soldier</p>
            <p className="block md:hidden">johntitor@hotmail.com</p>
          </td>
          <td className="hidden md:table-cell">Soldier</td>
          <td className="hidden md:table-cell">johntitor@hotmail.com</td>
          <td>Member</td>
          <td>
            <a href="">Edit</a>
          </td>
        </tr>
      </tbody>
    </table>

  </div>
);

export default Page;