import { BlogRepo, GitHubRepository, GitHubUser } from "../model/app-models";
import { sortBlogs, sortRepository } from "./custom-service";


export async function getRepoData(
  setRepositories: (repos: GitHubRepository[]) => void
) {
  try {
    const response = await fetch("/api/get-repos");
    setRepositories(sortRepository(await response.json()).slice(0, 5));
  } catch (error) {
    console.error("Error fetching articles:", error);
  }
}

export async function getBlogData(setBlogData: (repos: BlogRepo[]) => void) {
  try {
    const username = process.env.GITHUB_PROFILE;
    const response = await fetch("/api/get-blogs?username="+username);
    setBlogData(sortBlogs(await response.json()).slice(0,5));
  } catch (error) {
    console.error("Error fetching articles:", error);
  }
}

export async function getProfile(setProfile: (profile: GitHubUser) => void): Promise<void> {
  try {
      const response = await fetch("/api/get-profile");
      if (!response.ok) {
          throw new Error(`Failed to fetch profile: ${response.statusText}`);
      }
      const data: GitHubUser = await response.json();
      setProfile(data);
  } catch (error) {
      console.error("Error fetching profile:", error);
  }
}
