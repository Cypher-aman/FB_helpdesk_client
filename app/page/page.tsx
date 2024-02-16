'use client';

import { GQLClient } from '@/clients/api';
import LoadingSpinner from '@/components/Skeletons/LoadingSpinner/LoadingSpinner';
import FacebookLogin from '@/components/auth/FacebookLogin/FacebookLogin';
import { Page } from '@/gql/graphql';
import { GetPagesQuery } from '@/graphql/queries/page';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const Page = () => {
  const router = useRouter();

  const [pages, setPages] = useState<Page[]>([]);
  const [laoding, setLoading] = useState(true);

  useEffect(() => {
    const fetchPages = async () => {
      try {
        const { getPages: _pages } = await GQLClient.request(GetPagesQuery);

        setPages(_pages as Page[]);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchPages();
  }, []);

  if (laoding) {
    return (
      <div className="w-screen h-screen bg-blue-900 flex justify-center items-center">
        <div className="p-6 max-w-[300px] w-full rounded-xl bg-white flex-col justify-center items-center">
          <h1 className="py-4 font-semibold text-center">
            Facebook Page Integration
          </h1>
          <div className="flex justify-center mt-4 py-3">
            <LoadingSpinner />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-screen h-screen bg-blue-900 flex justify-center items-center">
      <div className="p-6 max-w-[300px] w-full rounded-xl bg-white flex-col justify-center items-center">
        <h1 className="py-4 font-semibold text-center">
          Facebook Page Integration
        </h1>
        {pages.length === 0 ? (
          <FacebookLogin setPages={setPages} setLoading={setLoading} />
        ) : (
          <>
            <p className="py-4 text-center">Integrated Pages:</p>
            <ul>
              {pages.map((page) => (
                <li
                  key={page.id}
                  className="p-2 px-4 rounded bg-gray-100 flex flex-col justify-center items-center gap-1"
                >
                  <p className="pb-2 font-semibold text-center">{page.name}</p>
                  <button className="w-full py-2 rounded bg-red-700 text-white mt-4">
                    Delete Integration
                  </button>
                  <button
                    onClick={() => router.push(`/page/${page.id}`)}
                    className="w-full py-2 rounded bg-blue-900 text-white mt-4"
                  >
                    Reply Messages
                  </button>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default Page;
