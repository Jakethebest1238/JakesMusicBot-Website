$.getJSON('https://api.neeko-bot.xyz/servers', response => typeText(response.servers)).catch(o_O => typeText());

function typeText(servers = null) {
    const strings = ["Share your music tastes with your friends."];
    strings.push(...[
        "Transform any song with unique audio effects.",
        "Commands with no paywall unlike popular music bots.",
        "Multiple commands to use and change your music listening experience.",
        "Jake's Music Bot is the easiest way to play music in your server."
    ]);

    new TypeIt("#typingtext", {
        breakLines: false,
        strings,
        speed: 93,
        loop: true,
        deletespeed: 1,
        nextStringDelay: 3000,
        waitUntilVisible: true
    });
};