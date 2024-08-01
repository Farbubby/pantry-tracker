import SignUp from "./sign-up";

export default function Home() {
  return (
    <>
      <div className="flex flex-col h-screen justify-center items-center gap-4 lg:px-16 md:px-8 px-4 pb-8">
        <SignUp />
      </div>
    </>
  );
}
