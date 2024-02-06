import { NextPage } from "next";

const Chats: NextPage = () => {
  return (
    // divide로 구분선 넣기 (마지막 border-b 이 나타나지 않게 하기 위한 지름길)
    // 다른 방법도 있음 last:border-b-0
    <div className="py-10 divide-y-[1px]">
      {[1, 2, 3, 4, 5].map((_, i) => (
        <div
          key={i}
          className="flex px-4 cursor-pointer py-3 items-center space-x-3"
        >
          <div className="w-12 h-12 rounded-full bg-slate-300" />
          <div>
            <p className="text-gray-700">Steve Jebs</p>
            <p className="text-xs font-medium text-gray-500">
              See you tomorrow in the corner at 2pm!
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chats;
