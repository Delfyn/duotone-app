// Benchmark example
// More info: https://benchmarkjs.com

const Benchmark = require('Benchmark');
const suite = new Benchmark.Suite;

suite
.add('RegExp#test', () => /o/.test('Hello World!'))
.add('String#indexOf', () => 'Hello World!'.indexOf('o') > -1)
.add('String#match', () => !!'Hello World!'.match(/o/))
.on('cycle', (event) => console.log(String(event.target)))
.on('complete', function () {
  console.log('Fastest is ' + this.filter('fastest').map('name'))
})
.run({ async: true });
