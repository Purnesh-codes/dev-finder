import { useState } from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { Bird, Building2, Link as LinkIcon, MapPin } from 'lucide-react';
import SearchBar from '../components/SearchBar';
import useUserSearch from '../hooks/useUserSearch';

export const Route = createFileRoute('/')({
  component: RouteComponent,
});

function RouteComponent() {
  //State to set user input
  const [searchTerm, setSearchTerm] = useState('Purnesh-codes');
  const { data: user, isLoading, isError, error } = useUserSearch(searchTerm);

  return (
    <main className="w-full max-w-2xl mx-auto space-y-6 p-4">
      <SearchBar
        onSearch={setSearchTerm}
        isLoading={isLoading}
      />

      {isLoading && (
        <div className="bg-bg-light p-8 rounded-2xl text-center text-gray-400">
          Loading user data...
        </div>
      )}

      {isError && (
        <div className="bg-bg-light p-8 rounded-2xl text-center text-red-400">
          {error ? error.message : 'An error occurred'}
        </div>
      )}

      {user && !isLoading && !isError && (
        <div className="bg-bg-light flex flex-col gap-6 p-6 rounded-2xl shadow-sm">
          {/* Header */}
          <div className="flex items-start gap-5">
            <div className="h-24 w-24 rounded-full overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={user.avatar}
                alt={`${user.username}'s profile`}
              />
            </div>

            <div className="flex-1 flex flex-col lg:flex-row lg:justify-between gap-1">
              <div>
                <h1 className="text-2xl font-bold">
                  {user.name ?? user.username}
                </h1>
                <a
                  href={`https://github.com/${user.username}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 text-lg hover:underline"
                >
                  @{user.username}
                </a>
              </div>
              <p className="text-gray-400 text-sm lg:text-base">
                Joined {user.join}
              </p>
            </div>
          </div>

          {/* User Details */}
          <div className="space-y-6">
            <p className={`text-base ${!user.bio && 'text-gray-400'} `}>
              {user.bio || 'This profile has no bio'}
            </p>

            {/* Stats */}
            <div className="bg-bg-color grid grid-cols-3 py-4 px-6 rounded-xl text-center">
              <div>
                <span className="text-sm text-gray-400 block">Repos</span>
                <span className="font-bold text-2xl">{user.repos}</span>
              </div>
              <div>
                <span className="text-sm text-gray-400 block">Followers</span>
                <span className="font-bold text-2xl">{user.followers}</span>
              </div>
              <div>
                <span className="text-sm text-gray-400 block">Following</span>
                <span className="font-bold text-2xl">{user.following}</span>
              </div>
            </div>

            {/* Links */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div
                className={`flex items-center gap-3 ${!user.location ? 'opacity-50' : ''}`}
              >
                <MapPin className="w-5 h-5 shrink-0" />
                <span className="text-base truncate">
                  {user.location ?? 'Not Available'}
                </span>
              </div>

              <div
                className={`flex items-center gap-3 ${!user.twitter ? 'opacity-50' : ''}`}
              >
                <Bird className="w-5 h-5 shrink-0" />
                {user.twitter ? (
                  <a
                    href={`https://twitter.com/${user.twitter}`}
                    target="_blank"
                    className="hover:underline text-base truncate"
                  >
                    @{user.twitter}
                  </a>
                ) : (
                  <span className="text-base">Not Available</span>
                )}
              </div>

              <div
                className={`flex items-center gap-3 ${!user.blog ? 'opacity-50' : ''}`}
              >
                <LinkIcon className="w-5 h-5 shrink-0" />
                {user.blog ? (
                  <a
                    href={
                      user.blog.startsWith('http')
                        ? user.blog
                        : `https://${user.blog}`
                    }
                    target="_blank"
                    className="hover:underline text-base truncate"
                  >
                    {user.blog}
                  </a>
                ) : (
                  <span className="text-base">Not Available</span>
                )}
              </div>

              <div
                className={`flex items-center gap-3 ${!user.company ? 'opacity-50' : ''}`}
              >
                <Building2 className="w-5 h-5 shrink-0" />
                <span className="text-base truncate">
                  {user.company ?? 'Not Available'}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
