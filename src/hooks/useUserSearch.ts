import { useQuery } from '@tanstack/react-query';

export interface GitHubUser {
  avatar: string;
  username: string;
  name: string | null;
  bio: string | null;
  join: string;
  repos: number;
  followers: number;
  following: number;
  location: string | null;
  blog: string | null;
  twitter: string | null;
  company: string | null;
}

export default function useUserSearch(username: string) {
  return useQuery<GitHubUser>({
    queryKey: ['UserSearch', username],
    queryFn: () => getUser(username),
    enabled: !!username.trim(),
    retry: 1,
  });
}

async function getUser(username: string): Promise<GitHubUser> {
  const response = await fetch(
    `https://api.github.com/users/${encodeURIComponent(username)}`
  );

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error('No user found with this username');
    }
    throw new Error('Unable to fetch user details');
  }

  const data = await response.json();

  return {
    avatar: data.avatar_url,
    username: data.login,
    name: data.name,
    bio: data.bio,
    join: new Date(data.created_at).toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    }),
    repos: data.public_repos,
    followers: data.followers,
    following: data.following,
    location: data.location,
    blog: data.blog,
    twitter: data.twitter_username,
    company: data.company,
  };
}
