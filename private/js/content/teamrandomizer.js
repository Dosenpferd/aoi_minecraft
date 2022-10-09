function init() {
  document.querySelectorAll(".ce-teamrandomizer #randomize").forEach(function (btn) {
    btn.addEventListener("click", randomizeTeams);
  })

  document.querySelectorAll(".ce-teamrandomizer #save").forEach(function (btn) {
    btn.addEventListener("click", saveTeam);
  })
}

function randomizeTeams() {
  const tables = document.querySelectorAll(".ce-teamrandomizer .content");
  loadJson("./js/data/members.json", function (members) {
    tables.forEach(function (wrapper) {
      wrapper.innerHTML = "";
      members.sort(() => Math.random() - 0.5);
      let teamJson = [];

      const teamAmount = document.querySelector(".ce-teamrandomizer .teamAmount input").value;
      for (let i = 0; i < teamAmount; i++) {
        let teamElement = document.createElement("div");
        teamElement.className = "team";
        teamElement.innerHTML = "<h2>Team " + (i + 1) + "</h2>"
        wrapper.appendChild(teamElement);
      }
      const teamElements = wrapper.getElementsByClassName("team");

      let currentTeam = 0;
      members.forEach(function (member) {
        if (member.ignored === true) {
          return;
        }

        let memberElement = document.createElement("div");
        memberElement.innerText = member.name + " [" + member.mc_name + "]";

        let memberImgElement = document.createElement("img");
        memberImgElement.src = "http://cravatar.eu/avatar/" + member.mc_name + ".png";
        memberElement.prepend(memberImgElement);

        teamElements.item(currentTeam).appendChild(memberElement);

        if (teamJson[currentTeam] === undefined) {
          teamJson[currentTeam] = {};
          teamJson[currentTeam]['name'] = "Team " + (currentTeam + 1);
          teamJson[currentTeam]["members"] = [];
        }
        teamJson[currentTeam]["members"].push(member);

        currentTeam++;
        if (currentTeam >= teamElements.length) {
          currentTeam = 0;
        }
      })

      document.querySelectorAll(".ce-teamrandomizer .json").forEach(function (el) {
        el.innerHTML = JSON.stringify(teamJson);
      })
    })
  })
}

function saveTeam() {
  const tables = document.querySelectorAll(".ce-teamrandomizer .json");
  tables.forEach(function (wrapper) {
    if (!navigator.clipboard) {
      wrapper.focus();
      wrapper.select();

      try {
        document.execCommand("copy");
      } catch (err) {
      }

      return;
    }
    navigator.clipboard.writeText(wrapper.innerHTML).then(r => {
    });
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
  xhttp.setRequestHeader("Cache-Control", "no-cache, no-store, must-revalidate");
  xhttp.setRequestHeader("Pragma", "no-cache");
  xhttp.setRequestHeader("Expires", "0");
  xhttp.send();
}

module.exports.init = init