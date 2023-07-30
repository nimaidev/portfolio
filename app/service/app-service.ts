import { BlogRepo, GitHubRepository } from "../model/app-models";
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
    const response = await fetch("/api/get-blogs?username=0x4e43");
    setBlogData(sortBlogs(await response.json()).slice(0,5));
  } catch (error) {
    console.error("Error fetching articles:", error);
  }
}
