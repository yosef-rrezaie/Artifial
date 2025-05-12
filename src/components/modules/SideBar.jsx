import { BiMicrophone } from "react-icons/bi";
import { HiOutlineFolder } from "react-icons/hi";

function SideBar() {
  return (
    <div className="bg-gradient-to-b from-[#00C9A7] to-[#00B18A] w-[166px] h-screen text-white rounded-bl-2xl rounded-tl-2xl box-border">
      <div className="flex pt-[48px] justify-center">
        <div className="flex items-center gap-1">
          <div className="w-1 h-3 bg-white rounded"></div>
          <div className="w-1 h-6 bg-white rounded"></div>
          <div className="w-1 h-4 bg-white rounded"></div>
        </div>
        <p className="pr-[7px] text-[20px]">آوا</p>
      </div>
      <div className="pt-[267px] text-[16px] flex flex-col items-center">
        <div className="flex items-center gap-x-2 w-[150px] bg-[#02816E] h-[48px] justify-center rounded-xl">
          <BiMicrophone className="text-[22px]" />
          <p>تبدیل گفتار</p>
        </div>
        <div className="flex items-center gap-x-2 w-[150px] h-[48px] justify-evenly pt-[12px]">
          <HiOutlineFolder className="text-[22px]" />
          <p>آرشیو</p>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
