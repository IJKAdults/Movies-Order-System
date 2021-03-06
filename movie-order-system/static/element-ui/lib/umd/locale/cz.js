(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define('element/locale/cz', ['module', 'exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports);
    global.ELEMENT.lang = global.ELEMENT.lang || {}; 
    global.ELEMENT.lang.cz = mod.exports;
  }
})(this, function (module, exports) {
  'use strict';

  exports.__esModule = true;
  exports.default = {
    el: {
      colorpicker: {
        confirm: 'OK',
        clear: 'Vymazat'
      },
      datepicker: {
        now: 'Teď',
        today: 'Dnes',
        cancel: 'Zrušit',
        clear: 'Vymazat',
        confirm: 'OK',
        selectDate: 'Vybrat datum',
        selectTime: 'Vybrat čas',
        startDate: 'Datum Začátku',
        startTime: 'Čas Začátku',
        endDate: 'Datum Konce',
        endTime: 'Čas Konce',
        day: 'Den',
        week: 'Týden',
        month: 'Měsíc',
        year: 'Rok',
        month1: 'Leden',
        month2: 'Únor',
        month3: 'Březen',
        month4: 'Duben',
        month5: 'Květen',
        month6: 'Červen',
        month7: 'Červenec',
        month8: 'Srpen',
        month9: 'Září',
        month10: 'Říjen',
        month11: 'Listopad',
        month12: 'Prosinec',
        weeks: {
          sun: 'Ne',
          mon: 'Po',
          tue: 'Út',
          wed: 'St',
          thu: 'Čt',
          fri: 'Pá',
          sat: 'So'
        },
        months: {
          jan: 'Led',
          feb: 'Úno',
          mar: 'Bře',
          apr: 'Dub',
          may: 'Kvě',
          jun: 'Čer',
          jul: 'Čvc',
          aug: 'Srp',
          sep: 'Zář',
          oct: 'Říj',
          nov: 'Lis',
          dec: 'Pro'
        }
      },
      select: {
        loading: 'Načítání',
        noMatch: 'Žádná shoda',
        noData: 'Žádná data',
        placeholder: 'Vybrat'
      },
      cascader: {
        noMatch: 'Žádná shoda',
        placeholder: 'Vybrat'
      },
      pagination: {
        goto: 'Jít na',
        pagesize: 'na stranu',
        total: 'Vše {total}',
        pageClassifier: ''
      },
      messagebox: {
        title: 'Zpráva',
        confirm: 'OK',
        cancel: 'Zrušit',
        error: 'Neplatný vstup'
      },
      upload: {
        delete: 'Vymazat',
        preview: 'Náhled',
        continue: 'Pokračovat'
      },
      table: {
        emptyText: 'Žádná data',
        confirmFilter: 'Potvrdit',
        resetFilter: 'Resetovat',
        clearFilter: 'Vše'
      },
      tree: {
        emptyText: 'Žádná data'
      }
    }
  };
  module.exports = exports['default'];
});