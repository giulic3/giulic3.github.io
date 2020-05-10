Why Sublime? 
Usually for those projects that are not overly complicated, and thus would require a more sophisticated tool like an IDE, and at the same time require a little bit more effort than just writing some spare lines of code (vim?) I usually go for a text editor. So far I've tried [Lime](http://www.limetext.org/), [Atom](https://atom.io/) and [Sublime Text 3](https://www.sublimetext.com/), the latter being the one who gave me the best overall experience in terms of usability, speed, customization - there are tons of plugins out there, really - I even wrote my master thesis in LaTeX with it! That said, it still hurts me to know that it isn't open source; it can be used freely for trial but a license must be purchased for a use free from those annoying popups.

First install Sublime Text, as always the easiest way to do it on Linux is through the official repository

apt
Install the GPG key:

wget -qO - https://download.sublimetext.com/sublimehq-pub.gpg | sudo apt-key add -
Ensure apt is set up to work with https sources:

sudo apt-get install apt-transport-https
Select the channel to use:

Stable
echo "deb https://download.sublimetext.com/ apt/stable/" | sudo tee /etc/apt/sources.list.d/sublime-text.list
Update apt sources and install Sublime Text

sudo apt-get update
sudo apt-get install sublime-text

(first install Package control, and use it to install packages)

## _[Origami]_(https://github.com/SublimeText/Origami)


Going to update this list with new findings ;)
