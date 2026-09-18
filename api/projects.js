import { projectPhotoIds } from "../src/data/projectPhotos.js";

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate");

  const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
  const USERNAME = "AyushBhardwaj-AdRuntime";

  try {
    const headers = GITHUB_TOKEN
      ? { Authorization: `token ${GITHUB_TOKEN}` }
      : {};

    const response = await fetch(
      `https://api.github.com/users/${USERNAME}/repos?per_page=100&sort=pushed&type=owner`,
      { headers }
    );

    if (!response.ok) {
      throw new Error(`GitHub API failed: ${response.status}`);
    }

    const repos = await response.json();
    
    const PINNED_REPOS = [];

    const projects = repos
      .filter(repo => !repo.private)
      .sort((a, b) => {
        const aPinned = PINNED_REPOS.indexOf(a.name);
        const bPinned = PINNED_REPOS.indexOf(b.name);
        
        if (aPinned !== -1 && bPinned !== -1) return aPinned - bPinned;
        if (aPinned !== -1) return -1;
        if (bPinned !== -1) return 1;
        return b.stargazers_count - a.stargazers_count;
      })
      .map(repo => {
        const photoId = projectPhotoIds[repo.id % projectPhotoIds.length];
        return {
          id: repo.id,
          title: repo.name.replace(/-/g, ' ').replace(/_/g, ' '),
          slug: repo.name,
          category: repo.language || "Open Source",
          year: new Date(repo.created_at).getFullYear().toString(),
          description: repo.description || "A technical system built for high-performance execution.",
          stars: repo.stargazers_count,
          url: repo.html_url,
          homepage: repo.homepage,
          pushed_at: repo.pushed_at,
          image: `https://images.unsplash.com/photo-${photoId}?q=80&w=1000&auto=format&fit=crop`
        };
      });

    res.status(200).json(projects);
  } catch (error) {
    console.error("Projects API Error:", error);
    res.status(500).json({ error: "Failed to fetch projects" });
  }
}
