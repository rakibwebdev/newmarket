export const getTimeAgo = (date: string) => {
    const timeAgo = new Date(date);
    const now = new Date();
    const diff = now.getTime() - timeAgo.getTime();
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);
    if (years > 0) {
        return `${years} years ago`;
    }
    if (months > 0) {
        return `${months} months ago`;
    }
    if (weeks > 0) {
        return `${weeks} weeks ago`;
    }
    if (days > 0) {
        return `${days} days ago`;
    }
    if (hours > 0) {
        return `${hours} hours ago`;
    }
    if (minutes > 0) {
        return `${minutes} minutes ago`;
    }
    return `${seconds} seconds ago`;
    
}