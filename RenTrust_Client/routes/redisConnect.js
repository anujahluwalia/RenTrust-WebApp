/**
 * Created by shalin on 12/2/2016.
 */
var redis = require('redis');
var client = redis.createClient(6379, "redis");
client.on("connect", function () {
    console.log("Redis is connected");
});
client.on("error",function (err) {
    console.log("error in connecting redis");
});
function getClient() {
    return client;
}

exports.getClient = getClient;
