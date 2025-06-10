const username = "koda-m";
const projectList = document.getElementById("project-list");

fetch(`https://api.github.com/users/${username}/repos`)
  .then(res => res.json())
  .then(data => {
    data.forEach(repo => {
      const project = document.createElement("div");
      project.classList.add("project");

      project.innerHTML = `
        <a class="button" href="${repo.html_url}" target="_blank">${repo.name}</a>
        <p>${repo.description || "No description provided."}</p>
      `;

      projectList.appendChild(project);
    });
  })
  .catch(error => {
    projectList.innerHTML = `<p>Error loading projects. Please try again later.</p>`;
    console.error("GitHub API fetch error:", error);
  });