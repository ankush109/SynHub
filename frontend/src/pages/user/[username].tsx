import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import AppBar from "@/components/AppBar";
import LeftBar from "@/components/LeftBar";
import User from "@/components/User";
import RightUpbar from "@/components/RightUpbar";
import RightDownbar from "@/components/RightDownbar";

function username() {
  const router = useRouter();
  const [username, setUsername] = useState("");

  useEffect(() => {
    let unique_id = router.query.username?.toString();
    setUsername(unique_id!);
  }, [router]);
  return (
    <div className="">
      <div className="">
        <AppBar />
        <div className="flex flex-row h-[91vh]">
          <LeftBar />
          <User username={username} />
          <div className="grid justify-items-center w-[44%]  bg-zinc-900">
            <RightUpbar />

            <RightDownbar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default username;
