export default function Register() {
    return (
      <div className="p-8 ">
        <h1 className="text-2xl font-bold">Register</h1>
        <form className="mt-4">
          <input
            type="text"
            placeholder="Name"
            className="p-2 border rounded block mb-4"
          /><br/>
          <input
            type="email"
            placeholder="Email"
            className="p-2 border rounded block mb-4"
          /><br/>
          <input
            type="password"
            placeholder="Password"
            className="p-2 border rounded block mb-4"
          />
          <br/>
          <button className="p-2 bg-primary text-white font-bold rounded">Register</button>
        </form>
      </div>
    );
  }
  