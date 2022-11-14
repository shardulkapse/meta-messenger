import Pusher from "pusher";
import ClientPusher from "pusher-js";

export const serverPusher = new Pusher({
  appId: "1506794",
  key: "65288fa7a582ccabd59c",
  secret: "13badcc01f581583b0c0",
  cluster: "ap2",
  useTLS: true,
});

export const clientPusher = new ClientPusher("65288fa7a582ccabd59c", {
  cluster: "ap2",
  forceTLS: true,
});
