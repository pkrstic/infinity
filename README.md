# Tabs

_Please try it out in a project, and [make suggestions][issues] or [report bugs][issues]!_

## Options

Options can be set as object attributes trough javascript and/or trough markup, as attributes, or both.

In case when we use both, markup options precedes javascript.

This plugin does not change DOM in any way, only fires AJAX request, and response is passed back to user. 

AJAX data type is automatically determined by jQuery. 

After every success call, current page parameter is automatically increased.

Plugin is tested with jQuery 1.7.1

<dl>
<dt> url / data-url </dt>
<dd>URL used for content retrieve. Mandatory paramater.<br>
Type: string<br>
Default: null
</dd>
<dt>page / data-page</dt>
<dd>URL query parameter used for paging<br>
Type: string<br>
Default: 'page'
</dd>
<dt> currentPage / data-currentpage</dt>
<dd>Starting page value, automatically increased<br>
Type: integer<br>
Default: 1
</dd>
<dt> bottomTrigger / data-bottomtrigger </dt>
<dd>Value that define margin under screen bottom for triggering load event.<br>
Type: integer<br>
Default: 200
</dd>
<dt> loading / data-loading</dt>
<dd>Selector for loading message, it shows before load, and hides on load success or error event.<br>
Type: string<br>
Default: '#infiniteLoading'
</dd>
<dt> load / data-load</dt>
<dd>Callback function called when new page event fires. AJAX response is passed trough <b>data</b> parameter.<br>
Type: function or string<br>
Default: function(data){}
</dd>
<dt> error / data-error</dt>
<dd>Callback function called in case of some AJAX error.<br>
Type: function or string<br>
Default: function(){}
</dd>
</dl>

## Release History

* 2012-06-23 - v1.0.0 - Initial release.

## License
Copyright (c) 2012 Predrag Krstić  
Licensed under the MIT license.  See LICENSE.txt file.

[issues]: /pkrstic/tabs/issues
