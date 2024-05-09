const dayjs = require('dayjs');

const plugins = [
  require('dayjs/plugin/badMutable'),
  require('dayjs/plugin/localeData'),
  require('dayjs/plugin/localizedFormat'),
  require('dayjs/plugin/pluralGetSet'),
  require('dayjs/plugin/isBetween'),
  require('dayjs/plugin/customParseFormat'),
  require('dayjs/plugin/advancedFormat'),
  require('dayjs/plugin/weekday'),
  require('dayjs/plugin/weekOfYear'),
];

plugins.forEach(p => dayjs.extend(p));

dayjs.isMoment = dayjs.isDayjs;
dayjs.invalid = () => dayjs(NaN);

module.exports = dayjs;
