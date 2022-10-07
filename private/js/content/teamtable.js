function init() {
  const tables = document.querySelectorAll(".ce-teamtable .content");
  const teams = loadJson("./js/data/currentTeams.json", function (teams) {
    tables.forEach(function (wrapper) {
      teams.forEach(function (team) {
        let teamElement = document.createElement("div");
        teamElement.className = "team";
        wrapper.appendChild(teamElement);

        let teamTitle = document.createElement("h2");
        teamTitle.innerText = team.name;
        teamElement.appendChild(teamTitle);

        team.members.forEach(function (member) {
          let memberElement = document.createElement("div");
          memberElement.innerText = member.name + " [" + member.mc_name + "]";
          teamElement.appendChild(memberElement);

          if (member.died === true) {
            memberElement.className = "dead";
          }

          let memberImgElement = document.createElement("img");
          memberImgElement.src = "http://cravatar.eu/avatar/" + member.mc_name + ".png";
          memberElement.prepend(memberImgElement);
        })
      })
    })
  })
}

function loadJson(path, success) {
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      success(JSON.parse(xhttp.responseText))
    }
  };
  xhttp.open("GET", path);
  xhttp.send();
}

module.exports.init = init