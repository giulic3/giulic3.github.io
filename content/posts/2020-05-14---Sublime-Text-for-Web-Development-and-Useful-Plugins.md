---
title: Sublime Text for Web Development and Useful Plugins
date: "2020-05-14T16:00:00.000Z"
template: "post"
draft: false
slug: "sublime-text-for-web-development-and-useful-plugins"
category: "Web Development"
tags:
  - "webdev"
  - "sublime-text-3"
  - "coding"

description: "This post is a collection of useful plugins available in Sublime Text 3, that I'm using as text editor in the development of this blog."
socialImage: "/media/sublime-text-webdev.jpg"
---

![Code example on Sublime Text Editor](/media/sublime-text-webdev.jpg)

This post is a collection of useful plugins available in [Sublime Text 3](https://www.sublimetext.com/) that I'm using as text editor in the development of this blog.

_***Why Sublime?***_   
Usually for those projects that are not overly complicated but at the same time require a little bit more effort than just writing some spare lines of code, I opt for using a (fancy) text editor, not a sophisticated IDE nor a command line editor (say bare _vim_), but something in-between. So far I've tried [Lime](http://www.limetext.org/), [Atom](https://atom.io/) and Sublime Text 3, this one giving me the best overall experience in terms of usability, speed, customization - there are tons of plugins out there, really - I even wrote my master thesis in LaTeX with it!  
That said, it still hurts me to know that it isn't open source; but hey.

Sublime can be easily installed following the instructions on the [website](https://www.sublimetext.com/3), in Linux it is straightforward using the official repository.

The first thing to do is to install _Package Control_, the package manager: just press _ctrl/cmd+shift+p_, type "Install Package Control" and enter. Voilá, now you're ready to install all these cool plugins (Note: Sublime must be restarted everytime we install something new, in order to make the modifications effective).

#### [_BracketHighlighter_]()
As its name says, it highlights matching brackets. Especially useful for HTML tags.

#### [_MarkdownLivePreview_](https://github.com/math2001/MarkdownLivePreview)
It lets you write Markdown while previewing live what the result will look like when rendered in a HTML page (_WYSIWYG_). A must-have if you keep forgetting the syntax or making mistakes like me.

#### [_Origami_](https://github.com/SublimeText/Origami)
This plugin enables to customize the layout by giving the possibility to split views, add panes, move them etc. in a very powerful way. To be used in addition with the predefined shortcuts already available in Sublime from _View > Layout_, since it actually gives more freedom.

#### [_SublimeGit_](https://github.com/SublimeGit/SublimeGit)
This offers Git integration into Sublime. Mostly I use the terminal, but in case of merging or other annoying issues a nice UI can be helpful.

#### [_Terminus_](https://github.com/randy3k/Terminus)
Adds a terminal as pane inside the window.



That's all for now, I'm going to update this list with new findings when I have, let me know if I missed something essential.
