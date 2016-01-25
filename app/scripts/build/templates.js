angular.module('KalturaUsageDashboard').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('app/scripts/common/directives/csv/csv.html',
    "<span class='export-to-csv'>\r" +
    "\n" +
    "\t<!-- <span class='csv-button' ng-csv='exportCsv()' filename='{{filename_()}}' ng-hide='utils.navigator.isIE9orLess()'>\r" +
    "\n" +
    "\t\tExport to CSV\r" +
    "\n" +
    "\t</span>\r" +
    "\n" +
    "\t<span class='csv-button' ng-show='utils.navigator.isIE9orLess()'>\r" +
    "\n" +
    "\t\t<p id='downloadify'></p>\r" +
    "\n" +
    "\t</span> -->\r" +
    "\n" +
    "\t<span class='csv-button' ng-click='export()'>\r" +
    "\n" +
    "\t\tExport to CSV\r" +
    "\n" +
    "\t</span>\r" +
    "\n" +
    "</span>"
  );


  $templateCache.put('app/scripts/common/directives/datepicker/datepicker.html',
    "<span class='datepicker' ng-class='{disabled:disabled}'>\r" +
    "\n" +
    "\t<input ui-date='options' name='name' ng-model='model' ng-disabled='disabled'/>\r" +
    "\n" +
    "\t<span class='icon' ng-click='disabled || open()'>\r" +
    "\n" +
    "\t\t<i class='fa fa-calendar'></i>\r" +
    "\n" +
    "\t</span>\r" +
    "\n" +
    "</span>"
  );


  $templateCache.put('app/scripts/common/directives/graph/graph.html',
    "<div class='row-fluid graph-row' ng-class='{\r" +
    "\n" +
    "\t\"rotate-x-labels-tiny\": graph.data[0].data.length >=constants.graph.labelRotation.tiny && graph.data[0].data.length < constants.graph.labelRotation.small,\r" +
    "\n" +
    "\t\"rotate-x-labels-small\": graph.data[0].data.length >=constants.graph.labelRotation.small && graph.data[0].data.length < constants.graph.labelRotation.medium,\r" +
    "\n" +
    "\t\"rotate-x-labels-medium\": graph.data[0].data.length >= constants.graph.labelRotation.medium && graph.data[0].data.length < constants.graph.labelRotation.large,\r" +
    "\n" +
    "\t\"rotate-x-labels-large\": graph.data[0].data.length >= constants.graph.labelRotation.large && graph.data[0].data.length < constants.graph.labelRotation.full,\r" +
    "\n" +
    "\t\"rotate-x-labels-full\": graph.data[0].data.length >= constants.graph.labelRotation.full\r" +
    "\n" +
    "}'>\r" +
    "\n" +
    "\t<span>\r" +
    "\n" +
    "\t\t<div flot ng-if='graph!=null' dataset='graph.data' options='graph.options'></div>\r" +
    "\n" +
    "\t</span>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('app/scripts/common/directives/header/header.html',
    "<header class=\"usage-dashboard-header row-fluid\">\r" +
    "\n" +
    "\t<div class='usage-dashboard-header-inner container-fluid'>\r" +
    "\n" +
    "\t\t<ul class='usage-dashboard-header-menu'>\r" +
    "\n" +
    "\t\t\t<li ng-repeat='item in items' ng-class='{active:go.current().name.contains(item.name)}'>\r" +
    "\n" +
    "\t\t\t\t<a ng-click='go.path(item)'>\r" +
    "\n" +
    "\t\t\t\t\t{{item.data.pageTitle}}\r" +
    "\n" +
    "\t\t\t\t</a>\r" +
    "\n" +
    "\t\t\t</li>\r" +
    "\n" +
    "\t\t</ul>\r" +
    "\n" +
    "\t\t<!-- <a ng-href='{{helpHref}}' target='_blank'>\r" +
    "\n" +
    "\t\t\t<i class='info' uib-tooltip='Go to Kaltura documentation' tooltip-placement='left' tooltip-animation='true' tooltip-trigger='mouseenter' tooltip-append-to-body='true'></i>\r" +
    "\n" +
    "\t\t</a> -->\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\t<hr class='row-fluid'/>\r" +
    "\n" +
    "</header>"
  );


  $templateCache.put('app/scripts/common/directives/modal/modal.html',
    "<span>\t\r" +
    "\n" +
    "\t<div class='modal-header'>\r" +
    "\n" +
    "\t\t<h3 class='modal-title'>{{ttl || 'Modal'}}</h3>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\t<div class='modal-body'>\r" +
    "\n" +
    "\t\t<div ng-transclude></div>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\t<div class='modal-footer'>\r" +
    "\n" +
    "\t\t<button class='btn btn-primary' type='button' ng-click='$parent.$close()' ng-show='okText'>{{okText}}</button>\r" +
    "\n" +
    "\t\t<button class='btn btn-default' type='button' ng-click='$parent.$dismiss()' ng-show='cancelText'>{{cancelText}}</button>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "</span>"
  );


  $templateCache.put('app/scripts/common/directives/monthly-breakdown/monthly-breakdown.html',
    "<div class='row-fluid' ng-show='months!=null'>\r" +
    "\n" +
    "\t<div class='row-fluid title-text'>\r" +
    "\n" +
    "\t\tMonthly Usage Breakdown\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\t<table class='usual-table row-fluid' ng-class='cls'>\r" +
    "\n" +
    "\t\t<thead>\r" +
    "\n" +
    "\t\t\t<tr>\r" +
    "\n" +
    "\t\t\t\t<th ng-repeat='column in columns'>{{column.title}}</th>\r" +
    "\n" +
    "\t\t\t</tr>\r" +
    "\n" +
    "\t\t</thead>\r" +
    "\n" +
    "\t\t<tbody>\r" +
    "\n" +
    "\t\t\t<tr ng-repeat='month in (months | arr_reverse)' ng-class='{odd:$index%2==1, even:$index%2==0}'>\r" +
    "\n" +
    "\t\t\t\t<td ng-repeat='column in columns'>{{month[column.field] | output}}</td>\r" +
    "\n" +
    "\t\t\t</tr>\r" +
    "\n" +
    "\t\t</tbody>\r" +
    "\n" +
    "\t</table>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('app/scripts/common/directives/overlay/overlay.html',
    "<div class='overlay' ng-show='show()'></div>"
  );


  $templateCache.put('app/scripts/common/directives/report-controls/report-controls.html',
    "<div class='row-fluid controls-row'>\r" +
    "\n" +
    "\t<span class='text'>Date Range:</span>\r" +
    "\n" +
    "\t<span class='select'>\r" +
    "\n" +
    "\t\t<div select2 ng-model=\"select.model\" s2-options=\"range.id as range.name for range in select.data\" options='select.options' ng-disabled='disabled || go.isLoading()'></div>\r" +
    "\n" +
    "\t</span>\r" +
    "\n" +
    "\t<span class='dates' ng-show='range.allowDatepickers'>\r" +
    "\n" +
    "\t\t<span class='text'>Dates:</span>\r" +
    "\n" +
    "\t\t<span kaltura-datepicker='dates.low' disabled='disabled || go.isLoading() || !range.allowDatepickers' max='dates.high' min='minDate'></span>\r" +
    "\n" +
    "\t\t<span kaltura-datepicker='dates.high' disabled='disabled || go.isLoading() || !range.allowDatepickers' min='dates.low'></span>\r" +
    "\n" +
    "\t</span>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('app/scripts/common/directives/side-menu/side-menu.html',
    "<div class='side-menu row-fluid span2'>\r" +
    "\n" +
    "\t<ul class='top-ul'>\r" +
    "\n" +
    "\t\t<!-- <li class='side-menu-top-ul-item' ng-click='go.go(\"usage-dashboard\")'>\r" +
    "\n" +
    "\t\t\t<span>Dashboard Usage Reports</span>\r" +
    "\n" +
    "\t\t</li> -->\r" +
    "\n" +
    "\t\t<li>\r" +
    "\n" +
    "\t\t\t<div ng-show='angular!=null'>ANGULAR</div>\r" +
    "\n" +
    "\t\t\t<ul class='inner-ul'>\r" +
    "\n" +
    "\t\t\t\t<li ng-repeat='menuItem in menuItems' ng-class='{active:menuItem.name==go.current().name}'>\r" +
    "\n" +
    "\t\t\t\t\t<span>\r" +
    "\n" +
    "\t\t\t\t\t\t<a ng-click='go.path(menuItem)'>\r" +
    "\n" +
    "\t\t\t\t\t\t\t{{menuItem.data.pageTitle}}\r" +
    "\n" +
    "\t\t\t\t\t\t</a>\r" +
    "\n" +
    "\t\t\t\t\t</span>\r" +
    "\n" +
    "\t\t\t\t</li>\r" +
    "\n" +
    "\t\t\t</ul>\r" +
    "\n" +
    "\t\t</li>\r" +
    "\n" +
    "\t</ul>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('app/scripts/common/directives/spinner/spinner.html',
    "<span>\r" +
    "\n" +
    "\t<wave:spinner class='spinner' ng-show='go.isLoading()'></wave:spinner>\r" +
    "\n" +
    "</span>"
  );


  $templateCache.put('app/scripts/common/modals/info-modal.html',
    "<div modal ttl='data.title || \"Information\"' ok-text='data.okText' cancel-text='data.cancelText' ng-class='data.type'>\r" +
    "\n" +
    "\t<div html-bind-compile='data.message'></div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('app/scripts/pages/usage-dashboard/bandwidth-report/bandwidth-report.html',
    "<div class='main-content container-fluid span10' id='bandwidth-report'>\r" +
    "\n" +
    "\t<div report-controls from='dates.from' to='dates.to' changed='fetch()'></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\t<div class='row-fluid title-text'>\r" +
    "\n" +
    "\t\t<!-- 50 GB Bandwidth consumed -->\r" +
    "\n" +
    "\t\t<div csv='bandwidth' filename='bandwidth-consumption' dates='dates'></div>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\t<div graph='months' decorate='\"months\"' y-label='Bandwidth Consumption' units='(GB)' value-field='bandwidth_gb'></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\t<div monthly-breakdown='bandwidth' months='months' cls='half-width'></div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('app/scripts/pages/usage-dashboard/end-users-report/end-users-report.html',
    "<div class='main-content container-fluid span10' id='end-users-report'>\r" +
    "\n" +
    "\t<div report-controls from='dates.from' to='dates.to' changed='fetch()'></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\t<div class='row-fluid title-text'>\r" +
    "\n" +
    "\t\t<div csv='end-users' dates='dates'></div>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\t<div graph='months' decorate='\"months\"' y-label='End Users Total' value-field='total_end_users'></div>\r" +
    "\n" +
    "\t\r" +
    "\n" +
    "\t<div monthly-breakdown='end-users' months='months' cls='half-width'></div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('app/scripts/pages/usage-dashboard/media-entries-report/media-entries-report.html',
    "<div class='main-content container-fluid span10' id='media-entries-report'>\r" +
    "\n" +
    "\t<div report-controls from='dates.from' to='dates.to' changed='fetch()'></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\t<div class='row-fluid title-text'>\r" +
    "\n" +
    "\t\t<div csv='media-entries' dates='dates'></div>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\t<div graph='months' decorate='\"months\"' y-label='Media Entries Total' value-field='total_media_entries'></div>\r" +
    "\n" +
    "\t\r" +
    "\n" +
    "\t<div monthly-breakdown='media-entries' months='months' cls='half-width'></div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('app/scripts/pages/usage-dashboard/overall-usage-report/overall-usage-report.html',
    "<div class='main-content container-fluid span10' id='overall-usage-report' ng-hide='go.isLoading()'>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\t<div class='row-fluid'>\r" +
    "\n" +
    "\t\t<div class='row-fluid title-text'>\r" +
    "\n" +
    "\t\t\tMonth to Date Usage Summary\r" +
    "\n" +
    "\t\t\t<div csv='overall-usage' dates='lastThreeMonthsDates'></div>\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t\t<table class='panel-table row-fluid' ng-if='currentMonth!=null'>\r" +
    "\n" +
    "\t\t\t<thead>\r" +
    "\n" +
    "\t\t\t\t<tr>\r" +
    "\n" +
    "\t\t\t\t\t<th class='span'>\r" +
    "\n" +
    "\t\t\t\t\t\t<div class='title'>Plays</div>\r" +
    "\n" +
    "\t\t\t\t\t\t<div class='units'>(CPM)</div>\r" +
    "\n" +
    "\t\t\t\t\t\t<div class='value'>{{currentMonth.total_plays | output}}</div>\r" +
    "\n" +
    "\t\t\t\t\t</th>\r" +
    "\n" +
    "\t\t\t\t\t<th class='span'>\r" +
    "\n" +
    "\t\t\t\t\t\t<div class='title'>Average Storage</div>\r" +
    "\n" +
    "\t\t\t\t\t\t<div class='units'>(GB)</div>\r" +
    "\n" +
    "\t\t\t\t\t\t<div class='value'>{{currentMonth.avg_storage_gb | output}}</div>\r" +
    "\n" +
    "\t\t\t\t\t</th>\r" +
    "\n" +
    "\t\t\t\t\t<th class='span'>\r" +
    "\n" +
    "\t\t\t\t\t\t<div class='title'>Bandwidth Consumption</div>\r" +
    "\n" +
    "\t\t\t\t\t\t<div class='units'>(GB)</div>\r" +
    "\n" +
    "\t\t\t\t\t\t<div class='value'>{{currentMonth.bandwidth_gb | output}}</div>\r" +
    "\n" +
    "\t\t\t\t\t</th>\r" +
    "\n" +
    "\t\t\t\t\t<th class='span'>\r" +
    "\n" +
    "\t\t\t\t\t\t<div class='title'>Transcoding Consumption</div>\r" +
    "\n" +
    "\t\t\t\t\t\t<div class='units'>(GB)</div>\r" +
    "\n" +
    "\t\t\t\t\t\t<div class='value'>{{currentMonth.transcoding_gb | output}}</div>\r" +
    "\n" +
    "\t\t\t\t\t</th>\r" +
    "\n" +
    "\t\t\t\t\t<th class='span'>\r" +
    "\n" +
    "\t\t\t\t\t\t<div class='title'>Media Entries</div>\r" +
    "\n" +
    "\t\t\t\t\t\t<div class='units'></div>\r" +
    "\n" +
    "\t\t\t\t\t\t<div class='value'>{{currentMonth.total_media_entries | output}}</div>\r" +
    "\n" +
    "\t\t\t\t\t</th>\r" +
    "\n" +
    "\t\t\t\t\t<th class='span'>\r" +
    "\n" +
    "\t\t\t\t\t\t<div class='title'>End Users</div>\r" +
    "\n" +
    "\t\t\t\t\t\t<div class='units'></div>\r" +
    "\n" +
    "\t\t\t\t\t\t<div class='value'>{{currentMonth.total_end_users | output}}</div>\r" +
    "\n" +
    "\t\t\t\t\t</th>\r" +
    "\n" +
    "\t\t\t\t</tr>\r" +
    "\n" +
    "\t\t\t</thead>\r" +
    "\n" +
    "\t\t</table>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "<!-- \r" +
    "\n" +
    "\t<div class='row-fluid'>\r" +
    "\n" +
    "\t\t<table class='panel-table richer row-fluid'>\r" +
    "\n" +
    "\t\t\t<thead>\r" +
    "\n" +
    "\t\t\t\t<tr>\r" +
    "\n" +
    "\t\t\t\t\t<th class='span'>\r" +
    "\n" +
    "\t\t\t\t\t\t<div class='title'>Plays</div>\r" +
    "\n" +
    "\t\t\t\t\t\t<div class='units'>(CPM)</div>\r" +
    "\n" +
    "\t\t\t\t\t\t<div class='values'>\r" +
    "\n" +
    "\t\t\t\t\t\t\t<div class='value under-bound'>{{currentMonth.count_plays | output}}</div>\r" +
    "\n" +
    "\t\t\t\t\t\t\t<div class='total'>of 700 used</div>\r" +
    "\n" +
    "\t\t\t\t\t\t\t<div class='text'>Allowance reset on 1st of the Month</div>\r" +
    "\n" +
    "\t\t\t\t\t\t</div>\r" +
    "\n" +
    "\t\t\t\t\t</th>\r" +
    "\n" +
    "\t\t\t\t\t<th class='span'>\r" +
    "\n" +
    "\t\t\t\t\t\t<div class='title'>Average Storage</div>\r" +
    "\n" +
    "\t\t\t\t\t\t<div class='units'>(GB)</div>\r" +
    "\n" +
    "\t\t\t\t\t\t<div class='values'>\r" +
    "\n" +
    "\t\t\t\t\t\t\t<div class='value near-bound'>{{currentMonth.average_storage | output}}</div>\r" +
    "\n" +
    "\t\t\t\t\t\t\t<div class='total'>of 1000 used</div>\r" +
    "\n" +
    "\t\t\t\t\t\t\t<div class='text'>Allowance reset on 1st of the Month</div>\r" +
    "\n" +
    "\t\t\t\t\t\t</div>\r" +
    "\n" +
    "\t\t\t\t\t</th>\r" +
    "\n" +
    "\t\t\t\t\t<th class='span'>\r" +
    "\n" +
    "\t\t\t\t\t\t<div class='title'>Bandwidth Consumption</div>\r" +
    "\n" +
    "\t\t\t\t\t\t<div class='units'>(GB)</div>\r" +
    "\n" +
    "\t\t\t\t\t\t<div class='values'>\r" +
    "\n" +
    "\t\t\t\t\t\t\t<div class='value over-bound'>{{currentMonth.bandwidth_consumption | output}}</div>\r" +
    "\n" +
    "\t\t\t\t\t\t\t<div class='total'>of 1000 used</div>\r" +
    "\n" +
    "\t\t\t\t\t\t\t<div class='text'>Allowance reset on 1st of the Month</div>\r" +
    "\n" +
    "\t\t\t\t\t\t</div>\r" +
    "\n" +
    "\t\t\t\t\t</th>\r" +
    "\n" +
    "\t\t\t\t\t<th class='span'>\r" +
    "\n" +
    "\t\t\t\t\t\t<div class='title'>Transcoding Consumption</div>\r" +
    "\n" +
    "\t\t\t\t\t\t<div class='units'>(GB)</div>\r" +
    "\n" +
    "\t\t\t\t\t\t<div class='values'>\r" +
    "\n" +
    "\t\t\t\t\t\t\t<div class='value near-bound'>{{currentMonth.transcoding_consumption | output}}</div>\r" +
    "\n" +
    "\t\t\t\t\t\t\t<div class='total'>of 25 used</div>\r" +
    "\n" +
    "\t\t\t\t\t\t\t<div class='text'>Allowance reset on 1st of the Month</div>\r" +
    "\n" +
    "\t\t\t\t\t\t</div>\r" +
    "\n" +
    "\t\t\t\t\t</th>\r" +
    "\n" +
    "\t\t\t\t\t<th class='span'>\r" +
    "\n" +
    "\t\t\t\t\t\t<div class='title'>Media Entries</div>\r" +
    "\n" +
    "\t\t\t\t\t\t<div class='units'></div>\r" +
    "\n" +
    "\t\t\t\t\t\t<div class='values'>\r" +
    "\n" +
    "\t\t\t\t\t\t\t<div class='value under-bound'>{{currentMonth.count_total | output}}</div>\r" +
    "\n" +
    "\t\t\t\t\t\t\t<div class='total'>of 800 used</div>\r" +
    "\n" +
    "\t\t\t\t\t\t\t<div class='text'>Allowance reset on 1st of the Month</div>\r" +
    "\n" +
    "\t\t\t\t\t\t</div>\r" +
    "\n" +
    "\t\t\t\t\t</th>\r" +
    "\n" +
    "\t\t\t\t\t<th class='span'>\r" +
    "\n" +
    "\t\t\t\t\t\t<div class='title'>End Users</div>\r" +
    "\n" +
    "\t\t\t\t\t\t<div class='units'></div>\r" +
    "\n" +
    "\t\t\t\t\t\t<div class='values'>\r" +
    "\n" +
    "\t\t\t\t\t\t\t<div class='value under-bound'>{{endUsers | output}}</div>\r" +
    "\n" +
    "\t\t\t\t\t\t\t<div class='total'>of 40 used</div>\r" +
    "\n" +
    "\t\t\t\t\t\t\t<div class='text'>Allowance reset on 1st of the Month</div>\r" +
    "\n" +
    "\t\t\t\t\t\t</div>\r" +
    "\n" +
    "\t\t\t\t\t</th>\r" +
    "\n" +
    "\t\t\t\t</tr>\r" +
    "\n" +
    "\t\t\t</thead>\r" +
    "\n" +
    "\t\t</table>\r" +
    "\n" +
    "\t</div> -->\r" +
    "\n" +
    "\r" +
    "\n" +
    "\t<div monthly-breakdown='overall-usage' months='lastThreeMonths'></div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('app/scripts/pages/usage-dashboard/plays-report/plays-report.html',
    "<div class='main-content container-fluid span10' id='plays-report'>\r" +
    "\n" +
    "\t<div report-controls from='dates.from' to='dates.to' changed='fetch()'></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\t<div class='row-fluid title-text'>\r" +
    "\n" +
    "\t\t<!-- <span ng-show='mediaEntriesNumber!=null && playsNumber!=null && !go.isLoading()' class='title-text-inner'>\r" +
    "\n" +
    "\t\t\t{{mediaEntriesNumber | output}} media entries played {{playsNumber | output}} times\r" +
    "\n" +
    "\t\t</span> -->\r" +
    "\n" +
    "\t\t<div csv='plays' dates='dates'></div>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\t<div graph='months' y-label='Plays' units='(CPM)' value-field='total_plays'></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\t<div monthly-breakdown='plays' months='months' cls='half-width'></div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('app/scripts/pages/usage-dashboard/storage-report/storage-report.html',
    "<div class='main-content container-fluid span10' id='storage-report'>\r" +
    "\n" +
    "\t<div report-controls from='dates.from' to='dates.to' changed='fetch()'></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\t<div class='row-fluid title-text'>\r" +
    "\n" +
    "\t\t<div csv='storage' filename='average-storage' dates='dates'></div>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\t<div graph='months' decorate='\"months\"' y-label='Average Storage' units='(GB)' value-field='avg_storage_gb'></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\t<div monthly-breakdown='storage' months='months' cls='half-width'></div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('app/scripts/pages/usage-dashboard/transcoding-consumption-report/transcoding-consumption-report.html',
    "<div class='main-content container-fluid span10' id='transcoding-consumption-report'>\r" +
    "\n" +
    "\t<div report-controls from='dates.from' to='dates.to' changed='fetch()'></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\t<div class='row-fluid title-text'>\r" +
    "\n" +
    "\t\t<div csv='transcoding-consumption' dates='dates'></div>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\t<div graph='months' decorate='\"months\"' y-label='Transcoding Consumption' units='(GB)' value-field='transcoding_gb'></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\t<div monthly-breakdown='transcoding-consumption' months='months' cls='half-width'></div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('app/scripts/pages/usage-dashboard/usage-dashboard.html',
    "<div class=\"usage-dashboard container-fluid\">\r" +
    "\n" +
    "\t<div class='main-content-wrapper row-fluid'>\r" +
    "\n" +
    "\t\t\r" +
    "\n" +
    "\t\t<div side-menu></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\t\t<div ui-view='main'></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "</div>"
  );

}]);
