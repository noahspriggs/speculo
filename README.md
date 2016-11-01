# speculo

[![d](https://github.com/noahspriggs/speculo/blob/master/speculo/client/assets/player12x16.png?raw=true)](https://github.com/noahspriggs/speculo "nice")

Top down arena game
### How run it locally on windows
##### Downloads
1. Get python 2.7 https://www.python.org/getit/
    * Make sure it's in your PATH
2. Get Visual Studio https://go.microsoft.com/fwlink/?LinkId=532606&clcid=0x409
   * Make sure to install the c++ binaries
3. Get Node.js https://nodejs.org/en/download/
4. Run 
```sh
$ npm install -g node-gyp
```
5. Download GTK (make sure to put it in C:/GTK)
    * 32-bit: http://ftp.gnome.org/pub/GNOME/binaries/win32/gtk+/2.24/gtk+-bundle_2.24.10-20120208_win32.zip
    * 64-bit: http://ftp.gnome.org/pub/GNOME/binaries/win64/gtk+/2.22/gtk+-bundle_2.22.1-20101229_win64.zip
6. Clone or download the node-canvas repo: https://github.com/Automattic/node-canvas

##### Setup
1. in the node-canvas repo, run:
```sh
$ npm install
$ node-gyp rebuild
```
2. In the speculo repo, run:
```sh
$ npm install
```
3. Then start the app with:
```sh
$ node app.js
```

4. You're done! You should now be able to see the game at [localhost:2000](localhost:2000)