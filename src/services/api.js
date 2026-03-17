const BASE = "https://hacker-news.firebaseio.com/v0";

export async function getNewStoryIds() {
  const res = await fetch(`${BASE}/newstories.json`);
  const data = await res.json();
  return data.slice(25, 100);
}

export async function getStory(id) {
  const res = await fetch(`${BASE}/item/${id}.json`);
  return await res.json();
}
