---
title: Setting Up MIT AI2 on a Debian 9 Stretch
date: "2020-05-17T16:30:00.000Z"
template: "post"
draft: false
slug: "setting-up-mit-ai2-on-a-debian-stretch"
category: "Notes"
tags:
  - "mit-ai2"
  - "programming"
  - "android"

description: "Today I've setup MIT App Inventor 2 on my old laptop that ships a Debian 9 Stretch (oldstable). Maybe I will need it in the future for some projects or maybe not, anyway, I was curious enough to install it to try it (and yes, I really like it!)."
socialImage: "/media/mit-app-inventor.png"
---

![MIT App Inventor Logo](/media/mit-app-inventor.png)

Today I've setup [MIT App Inventor 2](https://appinventor.mit.edu/) on my old laptop that ships a Debian 9 Stretch (_oldstable_). Maybe I will need it in the future for some project or maybe not, anyway, I was curious enough to install it to try it (and yes, I really like it!).

These are notes mainly for me, I used to write down things a lot in the past, and I do it less more recently, but I think this kind of note-taking 'tutorial-like' can be helpful in case I needed to do this again (much probably) in order to save up time instead of rambling across Internet pages to find answers.

First, a good old
```
# apt update
```

To run App Inventor on an amd64 (x86_64) architecture, we need to add some 32-bit libraries, all available in the amd64 repositories, except one (lib32bz2-1.0). To get a 32-bit version of this library we need to enable [multiarch](https://wiki.debian.org/Multiarch/HOWTO).

```
# dpkg --add-architecture i386
```
To verify that the previous cmd was successful (the first should output 'amd64' and the second 'i386')
```
# dpkg –print-architecture
# dpkg –print-foreign-architectures
```
Then, finally:
```
# apt install lib32z1 lib32ncurses5 libbz2-1.0:i386 lib32stdc++6
```
Now get the .deb for MIT AI2 from [here](https://appinv.us/aisetup_linux_deb) and run
```
# dpkg -i appinventor2-setup_*.deb
```
Then launch (in background) with
```
/usr/google/appinventor/commands-for-Appinventor/aiStarter &
```
and we're ready to go.

_Sources_:

* [Setting Up App Inventor](https://appinventor.mit.edu/explore/ai2/setup) (very good docs)
* [How to compile and run MIT App Inventor 2 on Debian GNU/Linux systems and derivatives](https://moxalt.wordpress.com/2015/12/24/how-to-compile-app-inventor-on-debian-systems/)