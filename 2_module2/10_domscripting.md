## Write a few sentences, in your own words, that detail the difference between textContent and innerText. Send your write-up to your mentor.

* textContent is the text context of a node and its descendants 
* textContent gets the content of all elements on a HTML document, including elements in the <head> such as <script> and <style>
* innerText returns the text between the start and end tags of a DOM object
* innerText will not return the text of hidden elements e.g. hidden by CSS
* innerText is supported in all common browsers

# Examples

`<p id="test">    This element    contains <span>an inner span</span>. </p>`

The values of these properties of the "test" paragraph will be:

* innerText: ` "This element contains an inner span." `  * Just the text, trimmed and space-collapsed.
* innerHtml: ` " This element     contains <span>an inner span</span>. " `
  * All spacing and inner element tags.
* textContent: ` " This element     contains an inner span. " ` 
  * Spacing, but no tags.

# Other Notes

* innerHTML returns the HTML
* nodeValue returns or sets the value of the current node 
	* Q. How does whitespace yield a #text node?
* firstChild returns the node's first child in the tree 
* childNotes returns a collection of children of a node