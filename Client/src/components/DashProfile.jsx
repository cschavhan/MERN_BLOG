import { Button, TextInput } from "flowbite-react";
import { useSelector } from "react-redux";

function DashProfile() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="relative bottom-10">
      <h1 className="my-7 text-center  font-semibold text-3xl">Profile</h1>

      <form className="flex flex-col gap-4">
        <TextInput
          className="w-[500px]"
          type="text"
          placeholder="username"
          id="username"
          defaultValue={currentUser.username}
        />
        <TextInput
          type="email"
          placeholder="email"
          id="email"
          defaultValue={currentUser.email}
        />
        <TextInput type="password" placeholder="******" id="password" />

        <Button type="submit" gradientDuoTone="purpleToBlue" outline>
          Update
        </Button>
      </form>

      <div className="text-red-500 flex justify-between mt-5">
        <span className="cursor-pointer">Delete Account</span>
        <span className="cursor-pointer">Sign Out</span>
      </div>
    </div>
  );
}

export default DashProfile;
