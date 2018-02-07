# Question
**_Design a widget which lets web developers find colors and grab the hex values (#RRGGBB) for those colors._**

**_It can be implemented with sliders or any DOM element of your choice._**

**Solution summary:** Three input sliders with a range of 0 to 255 to represent the Red, Blue and Green colour options, and the slider-thumb with the background colour showing which slider is for which colour. A value with text to the right updates on the slider change to show the value in decimal.
Below the sliders is a circular swatch which shows the combined RGB of the three colours as well as the converted RGB hex value, both of which also update on the slider change.

**Functions used:** Values on the slider needed to be parsed from strings before being converted to hex. They also needed to be tested for length (and left-padded with a single 0 if length = 1) as RGB hex values need to be length 2. The slider function is generic and detects the "next" span to update the text value so it doesn't require three functions (one for each slider).

**ES6:** I originally tried to pass the arguments to `calculateRGB` as `(...args)` and then treat them as an array to loop through, convert to hex, test for length, then push to the array, but the babel.js file was throwing a strange error and I gave up. This may be a future fix for later.

**Updated:** RGB value returned as a self-invoking callback instead of a static function; initial values set as static to start; flat CSS change to LESS (now stored in /less folder and compiled through a grunt/watch function into the /css folder); old CSS renamed to styles_old.