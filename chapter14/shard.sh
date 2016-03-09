#准备工作
mkdir -p /data/db/sh/config1
mkdir -p /data/db/sh/config2
mkdir -p /data/db/sh/config3

mkdir -p /data/db/sh/logs

mkdir -p /data/db/sh/shard1
mkdir -p /data/db/sh/shard2
mkdir -p /data/db/sh/shard3

# 启动config server 1
mongod --configsvr -f ../sh/sh-config-1.conf

# 启动config server 2
mongod --configsvr -f ../sh/sh-config-2.conf

# 启动config server 3
mongod --configsvr -f ../sh/sh-config-3.conf

# 启动shard server 1
mongod --shardsvr -f ../sh/sh-shard-1.conf

# 启动shard server 2
mongod --shardsvr -f ../sh/sh-shard-2.conf

# 启动shard server 3
mongod --shardsvr -f ../sh/sh-shard-3.conf

# 启动router
mongos --configdb localhost:5011,localhost:5012,localhost:5013 -f ../sh/sh-router.conf


mongo登录 mongos,运行如下命令:
sh.addShard("localhost:7011");
sh.addShard("localhost:7012");
sh.addShard("localhost:7013");

