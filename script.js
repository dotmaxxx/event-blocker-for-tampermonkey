// ==UserScript==
// @name         Privacy Event Blocker
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Block visibility, focus, clipboard, and key events from edupage (or any site).
// @match        *://*/*
// @run-at       document-start
// @grant        none
// ==/UserScript==
// https://discord.gg/Up2gNZEBqG

(function() {
    'use strict';

    const blockedEvents = [
        'visibilitychange', 'webkitvisibilitychange',
        'blur', 'focus',
        'copy', 'cut', 'paste',
        'keydown', 'keyup', 'keypress',
        'contextmenu'
    ];

    // Block event listeners
    blockedEvents.forEach(ev => {
        window.addEventListener(ev, e => e.stopImmediatePropagation(), true);
        document.addEventListener(ev, e => e.stopImmediatePropagation(), true);
    });

    console.log("anti-cheat bypassed successfully | 0x | https://discord.gg/Up2gNZEBqG");


    // Override document visibility APIs
    Object.defineProperty(document, 'hidden', {
        get() { return false; }
    });

    Object.defineProperty(document, 'visibilityState', {
        get() { return 'visible'; }
    });

    // Hook addEventListener to silently ignore blocked events
    const originalAddEvent = EventTarget.prototype.addEventListener;
    EventTarget.prototype.addEventListener = function(type, listener, options) {
        if (blockedEvents.includes(type)) {
            // Prevent site from ever attaching
            return;
        }
        return originalAddEvent.call(this, type, listener, options);
    };

    const emptySelection = { toString() { return "anti-cheat bypass by 0x | https://discord.gg/Up2gNZEBqG | dogshit security in 2026 good job edupage"; }, rangeCount: 0, getRangeAt() { return null; } };
    window.getSelection = function() { return emptySelection; };
    document.getSelection = function() { return emptySelection; };
})();
