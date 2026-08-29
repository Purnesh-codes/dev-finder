import { createFileRoute } from '@tanstack/react-router';
import { Bird, Building2, Link, MapPin } from 'lucide-react';

export const Route = createFileRoute('/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="bg-bg-light flex flex-col  gap-5  p-5 rounded-2xl ">
      {/* user-top */}
      <div className="flex items-center gap-4 ">
        <div className="h-25 w-25  rounded-full overflow-hidden ">
          <img
            className="w-full h-auto  object-cover"
            // src="/public/octocat.png"
            src="https://avatars.githubusercontent.com/u/180254849?v=4"
            alt="profile picture"
          />
        </div>

        <div className="flex-1 flex flex-col lg:flex-row gap-1 ">
          <div className="lg:flex-1 ">
            <h3 className="text-2xl">Purnesh Amzare</h3>
            <p className="text-blue-500 text-lg">@Purnesh-codes</p>
          </div>
          <p className=" text-lg">Joined 03 Jan 2024</p>
        </div>
      </div>

      {/* user-info */}
      <div className="space-y-5">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A dolores
          iure harum, assumenda illum laborum quos quas obcaecati.
        </p>

        <div className="bg-bg-color flex justify-evenly gap-5 py-1 rounded-2xl">
          <div className="p-2 flex flex-col items-center gap-2">
            <span className="text-lg">Repos</span>
            <span className="font-bold text-2xl">3</span>
          </div>
          <div className="p-2 flex flex-col items-center gap-2">
            <span className="text-lg">Followers</span>
            <span className="font-bold text-2xl">2</span>
          </div>
          <div className="p-2 flex flex-col items-center gap-2">
            <span className="text-lg">Following</span>
            <span className="font-bold text-2xl">1</span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row lg:gap-12 gap-3  ">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <MapPin />
              <span className="text-base">Not Availble</span>
            </div>
            <div className="flex items-center gap-2">
              <Link />
              <span className="text-base">Not Availble</span>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Bird />
              <span className="text-base">Not Availble </span>
            </div>
            <div className="flex items-center gap-2">
              <Building2 />
              <span className="text-base">Not Availble</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
