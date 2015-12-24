(function() {
  var module;
  module = angular.module('KalturaUsageDashboard.factories.rest', []);
  return module.factory('RestFactory', [
    'Restangular', 'Collection', 'x2js', 'go', 'kmc', 'utils', '$filter', 'errorsHandler', function(Restangular, Collection, x2js, go, kmc, utils, $filter, errorsHandler) {
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
                  var keys, ref, ref1, values;
                  if (response == null) {
                    response = {};
                  }
                  keys = (ref = response.header) != null ? ref.split(',') : void 0;
                  values = (ref1 = response.data) != null ? ref1.split(',') : void 0;
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
                }
              }
            });
          }
        });
        this.addFetchInterceptor(function(response) {
          return x2js.xml_str2json(response).xml.result;
        });
        this.addFetchInterceptor((function(_this) {
          return function(parsed, payload) {
            if (parsed.error != null) {
              _this.cancelAllRequests(parsed);
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
