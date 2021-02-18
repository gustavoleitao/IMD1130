const Redis = require("ioredis");

const cluster = new Redis.Cluster(
    [
      {
        host: "127.0.0.1",
        port: 7001,
      },
      {
        host: "127.0.0.1",
        port: 7002,
      },
      {
        host: "127.0.0.1",
        port: 7003,
      },
      {
        host: "127.0.0.1",
        port: 7004,
      },
      {
        host: "127.0.0.1",
        port: 7005,
      },
      {
        host: "127.0.0.1",
        port: 7006,
      },
      {
        host: "127.0.0.1",
        port: 7001,
      },
      
    ],
    {
      natMap: {
        "172.20.0.2:7001": { host: "127.0.0.1", port: 7001 },
        "172.20.0.3:7002": { host: "127.0.0.1", port: 7002 },
        "172.20.0.4:7003": { host: "127.0.0.1", port: 7003 },
        "172.20.0.5:7004": { host: "127.0.0.1", port: 7004 },
        "172.20.0.6:7005": { host: "127.0.0.1", port: 7005 },
        "172.20.0.7:7006": { host: "127.0.0.1", port: 7006 },
      },
    }
  );

const startup = async () => {
    await cluster.set("foo", "bar");
    const data = await cluster.get("foo");
    console.log(data)
}

startup()
