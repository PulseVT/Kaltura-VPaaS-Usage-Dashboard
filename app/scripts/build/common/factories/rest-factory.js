(function() {
  var module;
  module = angular.module('KalturaUsageDashboard.factories.rest', []);
  return module.factory('RestFactory', [
    'Restangular', 'Collection', 'go', 'kmc', 'utils', '$filter', 'errorsHandler', function(Restangular, Collection, go, kmc, utils, $filter, errorsHandler) {
      return function(config) {
        _.defaults(config, {
          dontCollect: true,
          params: {}
        });
        _.defaults(config.params, {
          ks: kmc.vars.ks,
          service: 'report',
          'reportInputFilter:timeZoneOffset': (new Date).getTimezoneOffset(),
          'reportInputFilter:objectType': 'KalturaReportInputFilter'
        });
        _.extend(this, new Collection(Restangular.one(''), config), {
          modifiers: function(fields) {
            if (!_.isArray(fields)) {
              fields = [fields];
            }
            return _.extend(this, {
              extract: {
                dict: function(response) {
                  var keys, line, lines, ref, ref1, values;
                  if (response == null) {
                    response = {};
                  }
                  keys = (ref = response.header) != null ? ref.split(',') : void 0;
                  lines = _.compact((ref1 = response.data) != null ? ref1.split(';') : void 0);
                  values = _.unzip((function() {
                    var i, len, results;
                    results = [];
                    for (i = 0, len = lines.length; i < len; i++) {
                      line = lines[i];
                      results.push(line.split(','));
                    }
                    return results;
                  })());
                  return _.zipObject(keys, values);
                },
                graph: function(response) {
                  var keys, values;
                  keys = _.pluck(response.item, 'id');
                  values = _.pluck(response.item, 'data').map(function(data) {
                    var day, i, len, parts, ref, results;
                    ref = data.split(';');
                    results = [];
                    for (i = 0, len = ref.length; i < len; i++) {
                      day = ref[i];
                      if (!day.length) {
                        continue;
                      }
                      parts = day.split(',');
                      results.push({
                        date: Date.fromn(parseInt(parts[0])),
                        value: parts[1]
                      });
                    }
                    return results;
                  });
                  return _.zipObject(keys, values);
                },
                months: (function(_this) {
                  return function(response, payload) {
                    var date, field, from, i, j, k, len, len1, len2, monthMark, months, parsed, parsed_objects, ref, to;
                    parsed = _this.extract.graph(response);
                    parsed_objects = {};
                    for (i = 0, len = fields.length; i < len; i++) {
                      field = fields[i];
                      parsed_objects[field] = utils.arrToObjByFn(parsed[field] || [], function(day) {
                        return day.date.toYMD();
                      });
                    }
                    months = {};
                    from = payload['reportInputFilter:fromDay'];
                    to = payload['reportInputFilter:toDay'];
                    date = Date.fromYMDn(from);
                    while (date.toYMDn() <= to) {
                      monthMark = date.toYM();
                      if (months[monthMark] == null) {
                        months[monthMark] = {
                          label: $filter('date')(date, 'MMMM, yyyy'),
                          dates: []
                        };
                        for (j = 0, len1 = fields.length; j < len1; j++) {
                          field = fields[j];
                          months[monthMark][field] = 0;
                        }
                      }
                      months[monthMark].dates.push(new Date(date));
                      for (k = 0, len2 = fields.length; k < len2; k++) {
                        field = fields[k];
                        months[monthMark][field] += parseFloat(((ref = parsed_objects[field][date.toYMD()]) != null ? ref.value : void 0) || 0);
                      }
                      date.setDate(date.getDate() + 1);
                    }
                    return _this.convert.monthsLabels(utils.objToArr(months), {
                      from: Date.fromYMDn(from),
                      to: Date.fromYMDn(to)
                    });
                  };
                })(this),
                monthsComprehensive: (function(_this) {
                  return function(response, payload) {
                    var dict, from, i, index, key, ref, result, to, values;
                    dict = _this.extract.dict(response);
                    result = [];
                    for (index = i = 0, ref = dict.month_id.length - 1; 0 <= ref ? i <= ref : i >= ref; index = 0 <= ref ? ++i : --i) {
                      result[index] = {};
                      for (key in dict) {
                        values = dict[key];
                        result[index][key] = values[index];
                      }
                    }
                    from = payload['reportInputFilter:fromDay'];
                    to = payload['reportInputFilter:toDay'];
                    return _this.convert.parseFloat(_this.convert.monthsLabelsComprehensive(result, {
                      from: Date.fromYMDn(from),
                      to: Date.fromYMDn(to)
                    }));
                  };
                })(this)
              },
              convert: {
                MBtoGB: function(months) {
                  var field, i, j, len, len1, month;
                  for (i = 0, len = months.length; i < len; i++) {
                    month = months[i];
                    for (j = 0, len1 = fields.length; j < len1; j++) {
                      field = fields[j];
                      month[field] /= 1024;
                    }
                  }
                  return months;
                },
                monthsLabels: function(months, dates) {
                  var firstDate, i, lastDate, len, month, monthDate, ref;
                  for (i = 0, len = months.length; i < len; i++) {
                    month = months[i];
                    monthDate = new Date(month.dates[0]);
                    if (month.dates.length !== monthDate.nDaysInMonth() && ((ref = monthDate.toYMn()) === dates.from.toYMn() || ref === dates.to.toYMn())) {
                      firstDate = monthDate.getDate();
                      lastDate = month.dates[month.dates.length - 1].getDate();
                      month.label = "" + firstDate + (firstDate !== lastDate ? '-' + lastDate : '') + " " + month.label;
                    }
                  }
                  return months;
                },
                monthsLabelsComprehensive: function(months, dates) {
                  var firstDate, fromYMn, i, lastDate, len, month, monthDate, monthDateYMn, toYMn;
                  fromYMn = dates.from.toYMn();
                  toYMn = dates.to.toYMn();
                  for (i = 0, len = months.length; i < len; i++) {
                    month = months[i];
                    monthDateYMn = parseInt(month.month_id);
                    monthDate = Date.fromYMn(monthDateYMn);
                    firstDate = monthDateYMn === fromYMn ? dates.from.getDate() : 1;
                    lastDate = monthDateYMn === toYMn ? dates.to.getDate() : monthDate.nDaysInMonth();
                    month.label = $filter('date')(monthDate, 'MMMM, yyyy');
                    if (firstDate !== 1 || lastDate !== monthDate.nDaysInMonth()) {
                      month.label = "" + firstDate + (firstDate !== lastDate ? '-' + lastDate : '') + " " + month.label;
                    }
                  }
                  return months;
                },
                parseFloat: function(months) {
                  var i, key, len, month, value;
                  for (i = 0, len = months.length; i < len; i++) {
                    month = months[i];
                    for (key in month) {
                      value = month[key];
                      if (key !== 'label') {
                        month[key] = parseFloat(value) || 0;
                      }
                    }
                  }
                  return months;
                },
                sum: function(months, field) {
                  var i, len, month, sum;
                  sum = 0;
                  for (i = 0, len = months.length; i < len; i++) {
                    month = months[i];
                    sum += parseFloat(month[field]) || 0;
                  }
                  return sum;
                },
                pick: function(months, field) {
                  var i, item, len, month, results;
                  results = [];
                  for (i = 0, len = months.length; i < len; i++) {
                    month = months[i];
                    item = _.pick(month, 'label', field);
                    item[field] = parseFloat(item[field]) || 0;
                    results.push(item);
                  }
                  return results;
                }
              }
            });
          }
        });
        this.addFetchInterceptor((function(_this) {
          return function(parsed, payload) {
            if ((parsed.error != null) || parsed.objectType === 'KalturaAPIException') {
              _this.cancelAllRequests(parsed);
              errorsHandler(parsed);
              return {};
            } else {
              return parsed;
            }
          };
        })(this));
        this.extendFetch({
          b: function() {
            return go.inc();
          },
          f: function() {
            return go.dec();
          },
          e: errorsHandler
        });
        return this;
      };
    }
  ]);
})();
