import { BlogRepo, GitHubRepository } from "../model/app-models";

export const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
  
    // Format day with "th", "st", "nd", or "rd" suffix
    const day = date.getDate();
    const daySuffix = getDaySuffix(day);
    const formattedDay = `${day}${daySuffix}`;
  
    // Format month
    const month = date.toLocaleString('default', { month: 'long' });
  
    // Format year with only the last two digits
    const year = date.getFullYear().toString().slice(-2);
  
    // Format time in 12-hour clock with "AM" or "PM"
    const hours = date.getHours();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 === 0 ? '12' : (hours % 12).toString().padStart(2, '0');
    const minutes = date.getMinutes();
    const formattedMinutes = minutes.toString().padStart(2, '0');
  
    // Construct the final formatted date string
    const formattedDate = `${formattedDay} ${month} ${year} at ${formattedHours}:${formattedMinutes}${ampm}`;
  
    return formattedDate;
  };

  const getDaySuffix = (day: number): string => {
    if (day >= 11 && day <= 13) {
      return 'th';
    }
    const lastDigit = day % 10;
    switch (lastDigit) {
      case 1:
        return 'st';
      case 2:
        return 'nd';
      case 3:
        return 'rd';
      default:
        return 'th';
    }
  };


  export const sortRepository = (repoList : GitHubRepository[]): GitHubRepository[] =>{
    return repoList.sort((repo1, repo2) => {
        const date1 = new Date(repo1.pushed_at).getTime();
        const date2 = new Date(repo2.pushed_at).getTime();
        return date2 - date1;
      });
  }


  export const sortBlogs = (repoList : BlogRepo[]): BlogRepo[] =>{
    return repoList.sort((repo1, repo2) => {
        const date1 = new Date(repo1.published_timestamp).getTime();
        const date2 = new Date(repo2.published_timestamp).getTime();
        return date2 - date1;
      });
  }