// Generated by CoffeeScript 1.6.3
var end, i, start, _i;

for (i = _i = 1; _i <= 1000000; i = ++_i) {
  db.foo.insert({
    foo: 'bar',
    baz: i,
    z: 10 - i
  });
}

start = (new Date).getTime();

db.foo.remove();

db.foo.findOne();

end = (new Date).getTime();

end - start;

db.foo.drop();
