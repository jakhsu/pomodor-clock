# Pomodoro Timer

Pomodoro timer application made with Electron and written in  Javascript, HTML and CSS.

### About

The Pomodoro Technique is a time management method developed by Francesco Cirillo in the late 1980s. The technique uses a timer to break down work into intervals, traditionally 25 minutes in length, separated by short breaks. These intervals are named pomodoros, the plural in English of the Italian word pomodoro (tomato), after the tomato-shaped kitchen timer that Cirillo used as a university student. More on [Wikipedia](https://en.wikipedia.org/wiki/Pomodoro_Technique).

### Features

* Material design UI.
* Customizable length of work, break and long break sessions.
* Pause/Unpause function.
* Reset function.
* Single, discreet bell ring at the end of each session.
* Optimized for all screens down to 240x320 pixel resolution.

### Installation

* clone the repository
  ```bash
  git clone https://github.com/czonios/pomodoro-electron.git
  ```
* cd into repository
  ```bash
  cd pomodoro-electron
  ```
* Install dependencies and run
  ```bash
  npm install && npm start
  ```

### Packaging

* Install [electron-packager](https://github.com/electron-userland/electron-packager)
  ```bash
  npm install electron-packager -g
  ```

* Package files
  ```bash
  electron-packager <sourcedir> <appname> --platform=<platform> --arch=<arch> [optional flags...]
  ```

* Example
  ```bash
  electron packager ~/pomodoro-electron pomodoro-timer --all
  ```

* See more about electron-packager in it's [GitHub page](https://github.com/electron-userland/electron-packager)

* You can also make it into .deb, .rpm etc.
  * example - .deb
    ```bash
    npm install -g electron-installer-debian
    electron-installer-debian --src ~/pomodoro-electron/pomodoro-timer/pomodoro-timer-linux-x64/ --dest ~/pomodoro-electron/pomodoro-timer/installers/ --arch amd64
    ```

### To do
* Show completed pomodoro counter.
* Add a settings menu.
* Add setting for how many completed pomodoros before long break.
* Add setting for selecting colors from a list.
* Add setting for volume control (with preview).

## [https://czonios.github.io/pomodoro](https://czonios.github.io/pomodoro)

### Author

[Christos Zonios](https://czonios.github.io).

### My other websites

[Portfolio](https://czonios.github.io/)

[Weather App](https://czonios.github.io/weather-app)

[Javascript Calculator](https://czonios.github.io/javascript-calculator)

[Wikipedia Search](https://czonios.github.io/wikipedia-viewer)

[Random Quote Machine](https://czonios.github.io/random-quote-machine)