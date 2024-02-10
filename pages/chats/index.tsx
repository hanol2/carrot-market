import type { NextPage } from "next";
import Link from "next/link";
import Layout from "../../components/layout";

const Chats: NextPage = () => {
  return (
    // divide로 구분선 넣기 (마지막 border-b 이 나타나지 않게 하기 위한 지름길)
    // 다른 방법도 있음 last:border-b-0
    <Layout hasTabBar title="채팅">
      <div className="divide-y-[1px] ">
        {[1, 1, 1, 1, 1, 1, 1].map((_, i) => (
          <Link href={`/chats/${i}`} key={i}>
            <a className="flex px-4 cursor-pointer py-3 items-center space-x-3">
              <div className="w-12 h-12 rounded-full bg-slate-300" />
              <div>
                <p className="text-gray-700">Steve Jebs</p>
                <p className="text-sm  text-gray-500">
                  See you tomorrow in the corner at 2pm!
                </p>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </Layout>
  );
};

export default Chats;
