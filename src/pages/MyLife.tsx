import { useState } from "react";
import AddLifeItemButton from "../components/AddLifeItemButton";
import LifeItemList from "../components/LifeItemList";
import MyLifeHeader from "../components/MyLifeHeader";

const MyLife = () => {
  const [edit, setEdit] = useState(false);

  return (
    <div className="flex flex-col gap-4 py-4">
      <MyLifeHeader />
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="flex-1">
            <AddLifeItemButton />
          </div>
          <button
            onClick={() => setEdit(!edit)}
            className={` ${edit ? "bg-accent text-white" : "bg-dark text-white"} transition-colors duration-200 flex items-center gap-1  border border-dark rounded-lg px-4 py-4 font-bold text-sm  shrink-0`}
          >
            Edit
          </button>
        </div>
        <LifeItemList edit={edit} />
      </div>
    </div>
  );
};

export default MyLife;
