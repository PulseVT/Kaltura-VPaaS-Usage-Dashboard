(function() {
  var module;
  module = angular.module('KalturaUsageDashboard.directives.graph', ['classy']);
  module.directive('graph', function() {
    return {
      replace: true,
      restrict: 'A',
      templateUrl: 'app/scripts/common/directives/graph/graph.html',
      controller: 'GraphCtrl',
      scope: {
        data: '=graph',
        units: '@',
        yLabel: '@',
        valueField: '@',
        labelField: '@'
      }
    };
  });
  return module.classy.controller({
    name: 'GraphCtrl',
    inject: ['$filter'],
    injectToScope: ['constants'],
    init: function() {
      return this.output = this.$filter('output');
    },
    watch: {
      data: function(value) {
        if ((value != null) && !_.isEmpty(value)) {
          return this._buildGraphData();
        } else {
          return this.$.graph = null;
        }
      }
    },
    _buildGraphData: function() {
      var data, i, index, len, maxDataValue, maxYTick, month, rank, ref, str, tickSize, xaxisTicks;
      data = [];
      xaxisTicks = [];
      index = 0;
      maxDataValue = 0;
      ref = this.$.data;
      for (i = 0, len = ref.length; i < len; i++) {
        month = ref[i];
        data.push([index, month[this.$.valueField || 'value']]);
        xaxisTicks.push([index, month[this.$.labelField || 'label']]);
        if (maxDataValue < month[this.$.valueField || 'value']) {
          maxDataValue = month[this.$.valueField || 'value'];
        }
        index++;
      }
      str = parseInt(maxDataValue).toString();
      rank = Math.pow(10, (str.length - 1) || 1);
      tickSize = rank / 2;
      maxYTick = parseInt(str[0]) * rank || 10;
      if (maxYTick < maxDataValue) {
        maxYTick += rank;
      }
      while (maxYTick / tickSize <= 10 && tickSize / 2 === Math.floor(tickSize / 2)) {
        tickSize /= 2;
      }
      return this.$.graph = {
        data: [
          {
            color: this.constants.graph.colorColumn,
            data: data
          }
        ],
        options: {
          series: {
            bars: {
              show: true,
              lineWidth: 0,
              fill: true,
              fillColor: this.constants.graph.colorColumn
            }
          },
          tooltip: {
            show: true,
            content: (function(_this) {
              return function(label, x, y, flot) {
                return "<div class='text'>" + flot.series.xaxis.ticks[flot.dataIndex].label + "</div>\n<div class='value'>" + (_this.output(flot.series.data[flot.dataIndex][1])) + " " + (_this.$.units || '') + "</div>";
              };
            })(this),
            cssClass: 'graph-tooltip'
          },
          bars: {
            align: 'center',
            barWidth: 0.75
          },
          xaxis: {
            show: true,
            color: this.constants.graph.colorAxis,
            ticks: xaxisTicks,
            tickLength: 0,
            min: -0.5,
            max: data.length - 0.5
          },
          yaxis: {
            show: true,
            axisLabel: (this.$.yLabel || '') + " " + (this.$.units || ''),
            color: this.constants.graph.colorAxis,
            axisLabelUseCanvas: true,
            axisLabelFontSizePixels: 12,
            axisLabelFontFamily: 'arial,sans serif',
            axisLabelPadding: 10,
            axisLabelColour: this.constants.graph.colorText,
            reserveSpace: true,
            tickLength: 15,
            tickSize: tickSize,
            max: maxYTick,
            tickFormatter: (function(_this) {
              return function(val) {
                return "<p>" + (val % (tickSize * 2) ? '' : _this.output(val)) + "</p>";
              };
            })(this)
          },
          legend: {
            noColumns: 0,
            labelBoxBorderColor: '#000000',
            position: 'nw'
          },
          grid: {
            show: true,
            hoverable: true,
            clickable: true,
            borderWidth: {
              top: 0,
              right: 0,
              bottom: this.constants.graph.borderWidth,
              left: this.constants.graph.borderWidth
            },
            borderColor: this.constants.graph.colorAxis,
            backgroundColor: this.constants.graph.mainBg,
            aboveData: false,
            axisMargin: 10
          }
        }
      };
    }
  });
})();
