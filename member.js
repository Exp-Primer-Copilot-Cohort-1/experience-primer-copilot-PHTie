function skillsMember() {
    var member = document.getElementById("member");
    var memberSkills = document.getElementById("memberSkills");
    var memberSkillsBtn = document.getElementById("memberSkillsBtn");
    var memberSkillsBtnIcon = document.getElementById("memberSkillsBtnIcon");
    if (memberSkills.style.display === "none") {
        memberSkills.style.display = "block";
        memberSkillsBtn.style.backgroundColor = "#333";
        memberSkillsBtnIcon.style.color = "#fff";
        member.style.height = "auto";
    } else {
        memberSkills.style.display = "none";
        memberSkillsBtn.style.backgroundColor = "#fff";
        memberSkillsBtnIcon.style.color = "#333";
        member.style.height = "auto";
    }
}