import SignUp from "./sign-up";

export default function Home() {
  return (
    <>
      <div className="flex flex-col h-screen justify-center items-center gap-4">
        <SignUp />
      </div>
    </>
  );
}
