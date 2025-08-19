const Page = () => {
  return (
    <div className="w-screen h-screen p-5 bg-gray-900 text-white">

      <div className="mt-5 ">
        <h1 className="text-3xl font-bold text-center">Login System</h1>

        <div className="my-6">
          <label className="block text-lg mb-2" htmlFor="emailField">Email address</label>
          <input className="w-full p-2 rounded-md text-lg bg-gray-800 border border-gray-600 outline-yellow-500" type="email" id="emailField" />
        </div>

        <div className="my-6">
          <label className="block text-lg mb-2" htmlFor="passwordField">Password</label>
          <input className="w-full p-2 rounded-md text-lg bg-gray-800 border border-gray-600 outline-yellow-500" type="password" id="passwordField" />
        </div>

        <div className="my-6">
          <button className="w-full p-2 rounded-md text-lg font-bold border-none text-white bg-yellow-500">Login</button>
        </div>

      </div>

      <div className="text-center text-gray-400">
        Not a member? <a className="text-yellow-500 font-bold" href="" >Register now</a>
      </div>

    </div>
  );
}

export default Page;