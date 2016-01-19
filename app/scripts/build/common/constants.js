(function() {
  var module;
  module = angular.module('KalturaUsageDashboard.constants', []);
  module.service('constants', [
    'ModuleConsolidator', function(ModuleConsolidator) {
      return new ModuleConsolidator(module);
    }
  ]);
  module.constant('dayms', 1000 * 60 * 60 * 24);
  module.constant('graph', {
    colorColumn: '#02a3d1',
    colorAxis: '#c2d2e1',
    colorText: '#585858',
    mainBg: '#f0eeef',
    borderWidth: 7,
    labelRotation: {
      tiny: 10,
      small: 14,
      medium: 19,
      large: 26,
      full: 32
    }
  });
  module.constant('reports', {
    'overall-usage': {
      name: 'Overall Usage report'
    },
    plays: {
      name: 'Plays report'
    },
    storage: {
      name: 'Average Storage report'
    },
    bandwidth: {
      name: 'Bandwidth Consumption report'
    },
    'transcoding-consumption': {
      name: 'Transcoding Consumption report'
    },
    'media-entries': {
      name: 'Media Entries report'
    }
  });
  module.constant('columns', {
    "default": [
      {
        title: 'Month',
        field: 'label'
      }
    ],
    reports: {
      plays: [
        {
          title: 'Plays (CPM)',
          field: 'total_plays',
          csvHeader: 'plays'
        }
      ],
      storage: [
        {
          title: 'Average Storage (GB)',
          field: 'avg_storage_gb',
          csvHeader: 'plays'
        }
      ],
      bandwidth: [
        {
          title: 'Bandwidth Consumption (GB)',
          field: 'bandwidth_gb',
          csvHeader: 'plays'
        }
      ],
      'transcoding-consumption': [
        {
          title: 'Transcoding Consumption (GB)',
          field: 'transcoding_gb',
          csvHeader: 'plays'
        }
      ],
      'media-entries': [
        {
          title: 'Total',
          field: 'total_media_entries',
          csvHeader: 'plays'
        }
      ],
      'end-users': [
        {
          title: 'Total',
          field: 'total_end_users',
          csvHeader: 'plays'
        }
      ],
      'overall-usage': [
        {
          title: 'Plays (CPM)',
          field: 'total_plays',
          csvHeader: 'plays'
        }, {
          title: 'Average Storage (GB)',
          field: 'avg_storage_gb',
          csvHeader: 'plays'
        }, {
          title: 'Transcoding Consumption (GB)',
          field: 'transcoding_gb',
          csvHeader: 'plays'
        }, {
          title: 'Bandwidth Consumption (GB)',
          field: 'bandwidth_gb',
          csvHeader: 'plays'
        }, {
          title: 'Media Entries',
          field: 'total_media_entries',
          csvHeader: 'plays'
        }, {
          title: 'End Users',
          field: 'total_end_users',
          csvHeader: 'plays'
        }
      ]
    }
  });
  module.constant('ArrayPrototype', {
    byField: function(field, value) {
      var e, index, j, len;
      for (index = j = 0, len = this.length; j < len; index = ++j) {
        e = this[index];
        if (e[field] === value) {
          return this[index];
        }
      }
    },
    each: function(fn) {
      var e, index, j, len, results;
      results = [];
      for (index = j = 0, len = this.length; j < len; index = ++j) {
        e = this[index];
        results.push(fn(e, index, this));
      }
      return results;
    },
    contains: function(k) {
      var e, index, j, len;
      if (k) {
        for (index = j = 0, len = this.length; j < len; index = ++j) {
          e = this[index];
          if ((k.id != null) && e.id === k.id || this[index] === k || e.id === k) {
            return true;
          }
        }
      }
      return false;
    },
    pushArray: function(arr) {
      var e, j, len;
      if (arr && arr.length) {
        for (j = 0, len = arr.length; j < len; j++) {
          e = arr[j];
          this.push(e);
        }
      }
      return this;
    },
    replace: function(wht, wth) {
      var e, index, j, len, results;
      results = [];
      for (index = j = 0, len = this.length; j < len; index = ++j) {
        e = this[index];
        if (e === wht) {
          results.push(this[index] = wth);
        }
      }
      return results;
    },
    remove: function(item) {
      var i, index, j, len;
      for (index = j = 0, len = this.length; j < len; index = ++j) {
        i = this[index];
        if (item === i) {
          this.splice(index, 1);
          break;
        }
      }
      return item;
    },
    clear: function() {
      while (this.length) {
        this.remove(this[0]);
      }
      return this;
    }
  });
  module.constant('StringPrototype', {
    noSpaces: function() {
      return this.replace(/\s/g, '');
    },
    splice: function(idx, rem, s) {
      return this.slice(0, idx) + s + this.slice(idx + Math.abs(rem));
    },
    nMatches: function(str) {
      var r;
      r = new RegExp(str, 'g');
      return (this.match(r) || []).length;
    },
    nPoints: function() {
      return this.nMatches('\\\.');
    },
    contains: function(str) {
      return this.indexOf(str) >= 0;
    }
  });
  module.constant('NumberPrototype', {
    isFloat: function() {
      return this % 1 !== 0;
    }
  });
  module.constant('NumberExtension', {
    round: function(n, nDecimalPlaces) {
      var rank;
      if (nDecimalPlaces == null) {
        nDecimalPlaces = 0;
      }
      rank = Math.pow(10, nDecimalPlaces);
      return Math.round(n * rank) / rank;
    }
  });
  module.service('DatePrototype', [
    '$filter', 'dayms', function($filter, dayms) {
      return {
        fullzero: function() {
          this.setYear(0);
          this.setMonth(0);
          this.setDate(1);
          return this.zero();
        },
        zero: function() {
          this.setHours(0, 0, 0, 0);
          return this;
        },
        dateTimeZoneFix: function() {
          return new Date(this.setHours(this.getHours() + this.getTimezoneOffset() / 60));
        },
        toMonthStart: function() {
          this.setDate(1);
          return this;
        },
        toMonthEnd: function() {
          this.setMonth(this.getMonth() + 1);
          this.setDate(0);
          return this;
        },
        toYMD: function() {
          return $filter('date')(this, 'yyyy-MM-dd');
        },
        toMDY: function() {
          return $filter('date')(this);
        },
        toYMDn: function() {
          return parseInt(this.toYMD().replace(/\-/g, ''));
        },
        toYM: function() {
          return $filter('date')(this, 'yyyy-MM');
        },
        toYMn: function() {
          return parseInt(this.toYM().replace(/\-/g, ''));
        },
        subMonth: function(nMonths) {
          if (nMonths == null) {
            nMonths = 1;
          }
          this.setMonth(this.getMonth() - nMonths);
          return this;
        },
        nDaysInMonth: function() {
          var d;
          d = new Date(this);
          d.toMonthEnd();
          return d.getDate();
        },
        dg: function(date) {
          var v1, v2;
          v1 = parseInt(this.valueOf() / dayms);
          v2 = parseInt((new Date(date)).valueOf() / dayms);
          return v1 > v2;
        },
        ds: function(date) {
          return (new Date(date)).dg(this);
        },
        dge: function(date) {
          var v1, v2;
          v1 = parseInt(this.valueOf() / dayms);
          v2 = parseInt((new Date(date)).valueOf() / dayms);
          return v1 >= v2;
        },
        dse: function(date) {
          return (new Date(date)).dge(this);
        },
        de: function(date) {
          var v1, v2;
          v1 = parseInt(this.valueOf() / dayms);
          v2 = parseInt((new Date(date)).valueOf() / dayms);
          return v1 === v2;
        },
        dg_ms: function(date) {
          var v1, v2;
          v1 = this.valueOf();
          v2 = (new Date(date)).valueOf();
          return v1 > v2;
        },
        ds_ms: function(date) {
          var v1, v2;
          v1 = this.valueOf();
          v2 = (new Date(date)).valueOf();
          return v1 < v2;
        },
        dge_ms: function(date) {
          var v1, v2;
          v1 = this.valueOf();
          v2 = (new Date(date)).valueOf();
          return v1 >= v2;
        },
        dse_ms: function(date) {
          var v1, v2;
          v1 = this.valueOf();
          v2 = (new Date(date)).valueOf();
          return v1 <= v2;
        },
        dgNow: function() {
          return this.dg_ms(new Date);
        },
        dsNow: function() {
          return this.ds_ms(new Date);
        },
        de_ymd: function(date) {
          var d1, d2, v1, v2;
          d1 = new Date(this);
          d2 = new Date(date);
          v1 = (d1.setHours(0, 0, 0, 0)).valueOf() / dayms;
          v2 = (d2.setHours(0, 0, 0, 0)).valueOf() / dayms;
          return v1 === v2;
        },
        tge: function(date) {
          var d1, d2, h1, h2, m1, m2;
          d2 = new Date(date);
          d1 = new Date(this);
          h1 = d1.getHours();
          h2 = d2.getHours();
          m2 = d2.getMinutes();
          m1 = d1.getMinutes();
          return h1 * 60 + m1 >= h2 * 60 + m2;
        },
        te: function(date) {
          var d1, d2, h1, h2, m1, m2;
          d1 = new Date(this);
          d2 = new Date(date);
          h1 = d1.getHours();
          h2 = d2.getHours();
          m1 = d1.getMinutes();
          m2 = d2.getMinutes();
          return h1 === h2 && m1 === m2;
        },
        tse: function(date) {
          var d1, d2, h1, h2, m1, m2, s1, s2;
          d1 = new Date(this);
          d2 = new Date(date);
          h1 = d1.getHours();
          h2 = d2.getHours();
          m1 = d1.getMinutes();
          m2 = d2.getMinutes();
          s1 = d1.getSeconds();
          s2 = d2.getSeconds();
          return h1 === h2 && m1 === m2 && s1 === s2;
        },
        isInMonth: function(date) {
          date = new Date(date);
          return date.getFullYear() === this.getFullYear() && date.getMonth() === this.getMonth();
        },
        isInPreviousMonth: function(date) {
          date = new Date(date);
          return this.isInMonth(date.setMonth(date.getMonth() - 1));
        },
        nMonths: function() {
          return this.getFullYear() * 12 + this.getMonth() - 11;
        }
      };
    }
  ]);
  return module.constant('DateExtension', {
    fromYMDn: function(n) {
      return new Date(Math.floor(n / 10000), Math.floor(n % 10000 / 100 - 1), n % 100);
    },
    fromYMn: function(n) {
      return new Date(Math.floor(n / 100), n % 100 - 1);
    },
    fromn: function(n) {
      return Date[(function() {
        switch (("" + n).length) {
          case 6:
            return 'fromYMn';
          case 8:
            return 'fromYMDn';
        }
      })()](n);
    },
    fromYMD: function(str) {
      return new Date(str);
    },
    fromYM: function(str) {
      return new Date(str + "-01");
    },
    nMonths: function(d1, d2) {
      return (new Date(d2)).nMonths() - (new Date(d1)).nMonths();
    }
  });
})();
