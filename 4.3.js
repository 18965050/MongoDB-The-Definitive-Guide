// Generated by CoffeeScript 1.6.3
var insertUsers;

insertUsers = function() {
  var birthday, i, _i, _results;
  db.users.drop();
  _results = [];
  for (i = _i = 5; _i <= 60; i = ++_i) {
    birthday = new Date('01/01/' + (2014 - i));
    _results.push(db.users.insert({
      name: 'yong' + i,
      birthday: birthday,
      age: i
    }));
  }
  return _results;
};

insertUsers();

db.users.find({
  name: /yong2/i
});

db.food.insert({
  fruit: ['apple', 'banana', 'peach']
});

db.food.find({
  fruit: 'banana'
});

db.food.insert({
  fruit: ['apple', 'kumquat', 'orange']
});

db.food.insert({
  fruit: ['cherry', 'banana', 'apple']
});

db.food.find({
  fruit: {
    $all: ['apple', 'banana']
  }
});

db.food.find({
  'fruit.2': 'peach'
});

db.food.find({
  fruit: {
    $size: 3
  }
});
