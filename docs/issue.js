function getIssueNumber() {
  const params = new URLSearchParams(window.location.search);
  return params.get('number');
}
async function loadIssue() {
  const number = getIssueNumber();
  if (!number) return;
  const response = await fetch(`https://api.github.com/repos/fuckuestc/DoubleLuo/issues/${number}`);
  const issue = await response.json();
  document.getElementById('title').textContent = issue.title;
  const content = document.getElementById('content');
  content.innerHTML = issue.body.replace(/\n/g, '<br>');
}
loadIssue();
