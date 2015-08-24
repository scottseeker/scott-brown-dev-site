module.exports = function(config){
  config.set({

    basePath : './',  

    preprocessors: {      
      'sts-app/*.html': 'ng-html2js',
      'sts-app/components/**/*.html' : 'ng-html2js'
    },

    files : [     
      'js/libs/angular/angular.js',
      'js/libs/angular-mocks/angular-mocks.js',
      'js/libs/angular-scroll/angular-scroll.js',
      'js/libs/html5shiv/dist/html5shiv.js',
      'sts-app/**/*.module.js',
      'sts-app/*.js',
      'sts-app/components/**/*.js',
      'sts-app/shared/**/*.js',      
      // if you wanna load template files in nested directories, you must use this
      'sts-app/*.html',
      'sts-app/components/**/*.html'
    ],

    autoWatch : true,

    ngHtml2JsPreprocessor: {
        moduleName: 'dir-templates'
    },

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',           
            'karma-jasmine',
            'karma-junit-reporter',
            'karma-ng-html2js-preprocessor'
            ],

    

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};