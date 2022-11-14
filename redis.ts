import Redis from "ioredis";

const redis = new Redis(
  "redis://:3a2bcba870544af59cc11825233db729@global-relieved-duck-32067.upstash.io:32067"
);

export default redis;
