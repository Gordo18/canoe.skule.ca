Canoe Club Website theme
========================

A website is a heavy modification from [st4ple's jekyll version](https://github.com/st4ple/solid-jekyll) of the [Solid theme](http://www.blacktie.co/2014/05/solid-multipurpose-theme/) by [blacktie.co](http://www.blacktie.co/). 

Managing the website
--------------------

This website was built with Jekyll. Jekyll is a static site builder that uses the Liquid Templating System and Markdown Post Rendering (with extra bits like Sass compilers and pagination).

For an example, let's look at **index.html**. It starts out with:

```
---
layout: default
---
```

 - The actual index you find at [canoe.skule.ca](http://canoe.skule.ca), is automatically generated in **_site/index.html**
 - The layout line tells Jekyll to create a page starting with a layout template found in **_layouts/default.html**.
 - When Jekyll encounters an {% include %} tag it looks in the include folder for that name. (e.g. **_includes/head.html** will replace {% include head.html %})
 - **_includes/head.html** has several liquid tags mainly divided into [variables](https://jekyllrb.com/docs/variables/) and [functions](https://github.com/Shopify/liquid/wiki/Liquid-for-Designers). Most are variables that pull information from the website (**_config.yml**), the page (**index.html**), or somewhere else.
 - When a  {{ content }} tag is found, all the information in the **index.html** after the dashed header replaces the {{ content }} tag.
 - Other html files on the root of the directory as well as files in **_posts** work the same way, but the generated html file will be located in other places within **_site**. So don't be changing any of the files in **_site** it's all done for you!

### Setting up the repository

#### Installation

 1. Install [Notepad++](https://notepad-plus-plus.org/download/v6.8.8.html) or an equivalent. Do not use Windows Notepad becuase it does not support [Unix line endings](https://en.wikipedia.org/wiki/Comparison_of_text_editors#Newline_support)  
 2. Install Jekyll.  
   - Standard Installation: [Ruby](https://www.ruby-lang.org/en/downloads/), [RubyDevKit](http://rubyinstaller.org/downloads/), and [Jekyll](http://jekyllrb.com/docs/installation/)  
   - Windows, Easy: download [Portable Jekyll](https://github.com/madhur/PortableJekyll/releases) and run setpath.cmd. (Use [7zip](http://www.7-zip.org/) if you have trouble)  
   - Android, Easy: install [Mr. Hyde](https://play.google.com/store/apps/details?id=org.faudroids.mrhyde&hl=en) and get a [GitHub account](https://github.com/join)  
   - Mac, Extra: Xcode command line tools are a preresquite to install Jekyll  
 3. (OPTIONAL) Using [Git](https://git-scm.com/) and [GitHub](https://github.com/join) really helps with managing the website.
   
#### Basic Operations

 - DOWNLOADING: If you have Git installed, clone or fork the repo. Otherwise, download the zip file.  
 - CHECKING WORK: Go to command line and run "jekyll serve" inside the mse.skule.ca folder.  
 - UPDATING SKULE: Copy the contents of the **_site** folder to **public_html**, deleting everything that previously exist there.
   - note: Make sure you delete the contents of **public_html** and not the folder itself, so that the index should be found at **~/public_html/index.html**.

### Editing information

#### Members

They are found in **_data/members.yml**. Please mimic all the spaces/quotes/dashes perfectly, as even one extra character can cause unexpected results. Or you can read up on YML to understand what is going on.  
Images for members are found in **assets/img/members** and have dimensions of 600x600. Other sizes can cause problems.

#### Canoes

Look in the **_posts/canoes** folder and follow the template provided. It should be quite intuitive. All posts must have a YYYY-MM-DD-[name].md format to actually show up on the website. Images are found in the **assets/img/canoes** folder. The thumbnail has a set size of 600x450.

#### Sponsors

Follow the format presented in **_data/sponsors.yml**. Pictures are 500x246 transparent pngs found in **assets/img/sponsors**.  
The sponsorship package is currently **assets/2015-Sponsorship-Package.pdf** and is hardcoded on line 64 of **sponsors.html**.

#### Development

Look in the **_posts/development** folder and **assets/img/development** for a general idea of the process.

#### Background/color changes

The background image and the little favicon are in the **assets/img** folder.  
To edit the site colors (making up the navigation, footer, and buttons) look for it in **_config.yml**


Voila! Thanks for reading ~ Nanosmasher