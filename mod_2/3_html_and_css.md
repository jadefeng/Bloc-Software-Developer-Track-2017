# Explain the difference between absolute and relative positioning.

* Position property is about the type of positioning element used in an element in CSS
* There are 5 main kinds of position properties: absolute, relative, fixed, static, inherit
* Absolute positioning (`position:absolute;`) is positioned relative to the nearest positioned ancestor, up to the document `<body>`. It is removed from the normal flow, and is not affected by other elements
* Relative posioning (`position:relative;`) is positioned relative to its normal position
* You can place a `position:absolute` div inside a larger `position:relative` div to align the first div accurately within the second relative div


# Explain how box-sizing: border-box treats contained content differently than the default browser box-sizing.

* The box model incorporates many aspects of a box element e.g. div: content, padding, borders, and margins
* the `box-sizing` property allows you to manipulate what the sizing properties should include in the size manipulation (i.e. height, width)
* Box-sizing can have 4 main properties: content-box, border-box, initial, and inherit
* The default is `content-box`, which ensures that the width and height properties includes only the content part of the box
* Border-box property ensures that the width-height properties includes the content, but also padding and border (not the margin)
* You can manipulate the size of margin, padding, and border separately in CSS if desired 