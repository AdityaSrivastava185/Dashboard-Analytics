import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return   <>
        <div className="flex flex-col justify-center items-center  w-full">
          <h1 className="text-2xl font-medium mb-4">Please sign up to continue</h1>
          <SignUp />
        </div>
      </>
}