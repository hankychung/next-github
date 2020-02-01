const Redis = require('ioredis')

const redis = new Redis({
  port: 6379, // Redis port
  host: "awesomehan.com", // Redis host
  family: 4, // 4 (IPv4) or 6 (IPv6)
  password: "han",
});

redis.set('other', 'hello world')