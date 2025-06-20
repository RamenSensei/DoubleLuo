async function loadIssues() {
  const response = await fetch('https://api.github.com/repos/fuckuestc/DoubleLuo/issues');
  const issues = await response.json();
  const container = document.getElementById('issues');
  issues.forEach(issue => {
    const card = document.createElement('a');
    card.className = 'card';
    card.href = `issue.html?number=${issue.number}`;
    const title = document.createElement('h2');
    title.textContent = issue.title;
    const body = document.createElement('p');
    body.textContent = issue.body.slice(0, 100) + (issue.body.length > 100 ? '…' : '');
    card.appendChild(title);
    card.appendChild(body);
    container.appendChild(card);
  });
}
loadIssues();
