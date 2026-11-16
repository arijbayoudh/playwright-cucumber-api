import * as reporter from 'cucumber-html-reporter';

reporter.generate({
  theme: 'bootstrap',                           // thème du rapport
  jsonFile: 'reports/report.json',     // JSON généré par Cucumber
  output: 'reports/cucumber-report.html',       // nom du fichier HTML
  reportSuiteAsScenarios: true,                 // montre chaque scénario
  launchReport: true,                            // ouvre le rapport automatiquement
  metadata: {
    "App Version": "1.0.0",
    "Test Environment": "STAGING",
    "Browser": "Playwright API",
    "Platform": process.platform,
    "Executed": "Local"
  }
});
