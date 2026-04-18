import AddLifeItemButton from "../components/AddLifeItemButton";
import MyLifeHeader from "../components/MyLifeHeader";

const MyLife = () => {
  return (
    <div className="flex flex-col gap-4 py-4">
      <MyLifeHeader />
      <div className="flex flex-col ">
        <AddLifeItemButton />
      </div>
    </div>
  );
};

export default MyLife;
