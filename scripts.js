newCommand("musical info");
newLog()
newLogLine("HACK: The Musical");
newLogLine("Welcome to the site! What is this musical?")
newLogLine("This musical showcases the hackathon life in an approximately 90 minute")
newLogLine("film with song, dance, and everything you know and love about hackathons!")

setTimeout(function() {
    newCommand("musical producers");
    newLog()
    newLogLine("Tristan Wiley");
    newLogLine("Jon Kingsley")
    newLogLine("Alyssa McDevitt!")
}, 2000);

setTimeout(function() {
    newCommand("musical help");
    newLog()
    newLogLine("Want to help?");
    newLogLine("Contact Tristan at tristan@tristanwiley.com");
}, 4000);

function newCommand(text) {
    var terminal = document.getElementById("terminal");
    terminal.insertAdjacentHTML('beforeend', '<div class="group"><p class="command">' + text + '</p></div')
}

function newLog() {
    var groups = document.getElementsByClassName("group");
    var group = groups[groups.length - 1]
    group.insertAdjacentHTML("beforeend", '<p class="log"></p>')
}

function newLogLine(text) {
    var logs = document.getElementsByClassName("log");
    var log = logs[logs.length - 1]
    log.insertAdjacentHTML('beforeend', text + "<br>")
    var elem = document.getElementById('content');
    elem.scrollTop = elem.scrollHeight;
}
