function getMOTD() {
    var motds = Array("The best free utility client.", "Utility client for 1.8", "Mojang EULA-abiding Hypixel client.",
        "Death to Pay2Pixel", "koljan gaming", "mechanical hands", "devs are based lmao", "Errorcrafter swag"); // type more in yourself
    return motds[Math.floor(Math.random() * motds.length)];
}

window.onload = () => {
    document.getElementById('motd').innerHTML = getMOTD();
}
