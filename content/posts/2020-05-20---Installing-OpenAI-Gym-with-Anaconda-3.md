---
title: Installing OpenAI Gym with Anaconda 3
date: "2020-05-20T21:00:00.000Z"
template: "post"
draft: false
slug: "installing-openai-gym-with-anaconda-3"
category: "Notes"
tags:
  - "reinforcement-learning"

description: "A friendly reminder on how to install Gym with conda."
socialImage: "/media/space-invaders-openaigym.jpg"
---


![Frame from Atari Space Invaders](/media/space-invaders-openaigym.jpg)

_Reminder_: [gym](https://gym.openai.com/) can be installed from the conda channel _powerai_, but it depends on some packages not available on _defaults_, so we need also _conda-forge_ and the command to issue is:

```
conda install -c conda-forge -c powerai gym
```

It took me a while to figure out that both channels were needed, since conda was reporting some generic error on incompatibility packages.

_Sources_

* [https://stackoverflow.com/questions/58224472/how-to-conda-install-openai-gym-on-linux-package-conflicts](https://stackoverflow.com/questions/58224472/how-to-conda-install-openai-gym-on-linux-package-conflicts)
* [https://github.com/IBM/powerai/issues/164](https://github.com/IBM/powerai/issues/164)

