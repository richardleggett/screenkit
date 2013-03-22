screenkit
=========

What is ScreenKit?
ScreenKit provides the tools to let devices like phones and tablets to remote-control displays from shop-fronts to billboards. Interactive digital signage can be used for commercial purposes like advertising, product displays or personal experiments, real-time multiplayer games and more.

>>DEMO<<

ScreenKit runs on top of node.js and socket.io. You can run both the client and the server on your local computer for development as long as your computer is visible to other devices on the network, for example on some networks you can access it by opening http://computername.local:1337/ or simply http://computername:1337/ in a device’s web browser.

The demos were built to avoid any 3rd-party libraries so beware they may not run on all browsers/devices but should be fine in modern webkit browsers.

Installing
----------
	OSX: Either download and install Node directly from nodejs.org or preferably use Homebrew (or a similar package manager to install) node, the benefit of using a package manager is the ability to upgrade Node to the latest release with a simple command.

Running the tests
	If you plan on extending ScreenKit or getting into the nuts and bolts ScreenKit includes a number of tests you can run using Mocha: http://visionmedia.github.com/mocha/
	npm install -g mocha
	Then run: mocha


Launching client with QR-Codes and NFC Tags
-------------------------------------------
The primary way in which ScreenKit was intended to be used was via a mobile device scanning a sticker in a window, either through a QR-Code, or an embedded NFC chip. QR-Codes can be generated for free many places online, but NFC tags/stickers can also contain a URL that will launch automatically when scanned. Many NFC tag providers offer the ability to pre-program your tags with a URL when you purchase them. Alternative there are free apps for Android that let you program single-write and re-writable tags, such as NXP's TagWriter: https://play.google.com/store/apps/details?id=com.nxp.nfc.tagwriter&hl=en


TODO




TODO
----
Remove socket.io from git - make it a dependency? (depends on license)
