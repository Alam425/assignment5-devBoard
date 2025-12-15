const themes = ["bg-yellow-100", "bg-orange-100", "bg-pink-100", "bg-purple-100", "bg-indigo-100", "bg-green-100", "bg-blue-100", "bg-red-100", "bg-teal-100"];

document.getElementById("themeBtn").addEventListener("click", () => {
    const needThemeColor = document.querySelectorAll(".themeColor")

    themes.forEach(themes => {
        needThemeColor.forEach(color => color.classList.remove(themes))
    })
    
    let randomTheme = themes[Math.floor(Math.random() * themes.length)];    
    needThemeColor.forEach(color => color.classList.add(randomTheme))
});
