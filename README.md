# event-blocker-for-tampermonkey
Block majority of JS events used by school exam sites that monitor if and when the user left the exam window (to cheat probably). With this script the events get blocked and make these exam websites not able to detect leaving the exam window, copy pasting, etc...

# How it works?
The script blocks all JavaScript events that may trigger the exam sites anti-cheat. Then it hooks the `addEventListener` function and if there is a call to it from the site to asing a JavaScript event that is in the list of blocked events it will return `true` while in reality not running the `addEventListener` function. Other events go through the function without any issues.

# Will I get in trouble for using this?
If they catch you then most probably yes. However so far I am not aware of any methods to detect this script. If you are not a [removed] you can easily get away with it.
