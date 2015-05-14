module.exports = {
  node: true,
  boss: true,
  curly: true,
  devel: true,
  eqnull: true,
  expr: true,
  funcscope: true,
  globalstrict: true,
  loopfunc: true,
  newcap: false,
  noempty: true,
  nonstandard: true,
  sub: true,
  undef: true,
  unused: 'vars',
  esnext: true,
  predef: [
    // testing tools
    'it',
    'sinon',
    'describe',
    'expect'
  ]
};
