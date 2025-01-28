const modeButton = document.querySelector(".Light-Dark-Mode-Button")
const modeText = document.querySelector(".Light-Dark-Mode-text")
const modeClouds = document.querySelectorAll(".Light-Dark-Mode-cloud")

const toggleMode = () => {
  if (modeButton.classList.contains("Light-Dark-Mode-Button")) {
    modeButton.classList.replace(
      "Light-Dark-Mode-Button",
      "Dark-Light-Mode-Button"
    )
    modeText.classList.replace("Light-Dark-Mode-text", "Dark-Light-Mode-text")
    modeClouds.forEach((cloud) =>
      cloud.classList.replace("Light-Dark-Mode-cloud", "Dark-Light-Mode-cloud")
    )
    document.body.style.backgroundColor = "#010825" // Dark mode background
  } else {
    modeButton.classList.replace(
      "Dark-Light-Mode-Button",
      "Light-Dark-Mode-Button"
    )
    modeText.classList.replace("Dark-Light-Mode-text", "Light-Dark-Mode-text")
    modeClouds.forEach((cloud) =>
      cloud.classList.replace("Dark-Light-Mode-cloud", "Light-Dark-Mode-cloud")
    )
    document.body.style.backgroundColor = "lightblue" // Light mode background
  }
}

modeButton.addEventListener("click", toggleMode)
