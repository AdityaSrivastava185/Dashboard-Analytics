import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <>
      <div className="flex flex-col justify-center items-center  w-full">
        <h1 className="text-2xl font-medium mb-4">Please sign in to continue</h1>
        <SignIn />
      </div>
    </>
  );
}
