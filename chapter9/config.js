config = {
    "_id" : "dbset",
    "members" : [
        {"_id" : 0, "host" : "localhost:4001"},
        {"_id" : 1, "host" : "localhost:4002"},
        {"_id" : 2, "host" : "localhost:4003"}
    ]
}

rs.initiate(config)