# Cat Tracker 
i.e. Bru, where are you?

Hi! Welcome to the site for our Cat Tracker, made during CSE 145 in Spring Quarter 2023 at UCSD.

The goal of this project is to build a basic alternative for existing cat trackers so Sean doesn't lose his cat anymore. 

Existing pet trackers cost monthly amounts in addition to a high upfront cost for the device itself. Or, like Apple AirTags, they have limited range.

Our goal was to use LoRa to communicate with the world and send our GPS data to some mapping software. We hoped that that would allow us to produce a compact and energy efficient system that could still provide real time location updates wherever Bru goes. 

The most important piece of code is available [here](https://github.com/ArturoAmaya/CSE145-CatTracker/blob/main/final_project.ino)

Check out a *static* demo of some points plotted before 6/5/23 here:

<div class='tableauPlaceholder' id='viz1686079279494' style='position: relative'><noscript><a href='#'><img alt='Cat, tracked ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;9D&#47;9DB3ZR9CG&#47;1_rss.png' style='border: none' /></a></noscript><object class='tableauViz'  style='display:none;'><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='embed_code_version' value='3' /> <param name='path' value='shared&#47;9DB3ZR9CG' /> <param name='toolbar' value='yes' /><param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;9D&#47;9DB3ZR9CG&#47;1.png' /> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /><param name='language' value='en-US' /><param name='filter' value='publish=yes' /></object></div>                <script type='text/javascript'>                    var divElement = document.getElementById('viz1686079279494');                    var vizElement = divElement.getElementsByTagName('object')[0];                    vizElement.style.width='100%';vizElement.style.height=(divElement.offsetWidth*0.75)+'px';                    var scriptElement = document.createElement('script');                    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';                    vizElement.parentNode.insertBefore(scriptElement, vizElement);                </script>

## Learn More

* Read a quick [how-to](howto.md)
* Read about the [software](software.md)
* Read about the [hardware](hardware.md)
* Read about the [team](team.md)
* Read our [final thoughts](thoughts.md)