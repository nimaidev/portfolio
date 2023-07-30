export interface GitHubRepository {
    name: string;
    url: string
    watchers_count: number
    updated_at: string
    pushed_at: string
    html_url: string
    forks: number
  }

  export interface BlogRepo {
    title: string;
    url: string
    positive_reactions_count: number
    published_timestamp: string
  }