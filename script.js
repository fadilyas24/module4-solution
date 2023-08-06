/*
Solution of assignment 4:

Expected output:

Hello jammie
Good Bye eddie
Good Bye roman
Good Bye John
Hello sue
Hello phil
Hello martis
Hello rashy
Hello antony
Good Bye harry
*/

(function() {
    var names = ["jammie", "eddie", "roman", "john", "sue", "phil", "martis", "rashy", "antony", "harry"];
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'j') {
            byeSpeaker.speak(names[i]);
        } else {
            helloSpeaker.speak(names[i]);
        }
    }
})();
