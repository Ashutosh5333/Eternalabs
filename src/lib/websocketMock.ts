type Status = "connecting" | "online" | "offline" | "reconnecting";
type StatusListener = (status: Status) => void;
type Listener = (data: any) => void;

class MockSocket {
  private listeners: Listener[] = [];
  private statusListeners: StatusListener[] = [];
  private ids: string[] = [];

  private connected = false;
  private heartbeatTimer: any;
  private reconnectTimer: any;
  private backoff = 1000;

  setTokenIds(ids: string[]) {
    this.ids = ids;
  }

  onStatus(cb: StatusListener) {
    this.statusListeners.push(cb);

    cb(this.connected ? "online" : "offline");

    return () => {
      this.statusListeners = this.statusListeners.filter((x) => x !== cb);
    };
  }

  private setStatus(status: Status) {
    this.statusListeners.forEach((cb) => cb(status));
  }

  connect() {
    this.setStatus("connecting");

    setTimeout(() => {
      this.connected = true;
      this.backoff = 1000;
      this.setStatus("online");
      this.startHeartbeat();
    }, 700);
  }

  disconnect() {
    this.connected = false;
    this.setStatus("offline");
    clearInterval(this.heartbeatTimer);
  }

  private startHeartbeat() {
    clearInterval(this.heartbeatTimer);

    this.heartbeatTimer = setInterval(() => {
      if (!this.connected) return;

      const alive = Math.random() > 0.1;

      if (!alive) {
        this.handleConnectionLost();
      }
    }, 4000);
  }

  private handleConnectionLost() {
    this.connected = false;
    this.setStatus("offline");

    clearInterval(this.heartbeatTimer);

    this.reconnect();
  }

  private reconnect() {
    this.setStatus("reconnecting");

    clearTimeout(this.reconnectTimer);

    this.reconnectTimer = setTimeout(() => {
      this.connect();
      this.backoff = Math.min(this.backoff * 2, 8000);
    }, this.backoff);
  }

  start() {
    this.connect();

    setInterval(() => {
      if (!this.ids.length || !this.connected) return;

      const randomId = this.ids[Math.floor(Math.random() * this.ids.length)];

      this.listeners.forEach((cb) =>
        cb({
          id: randomId,
          priceChange: Number((Math.random() * 20 - 10).toFixed(2)),
          volumeDelta: Math.floor(Math.random() * 5000),
          txnsBuy: Math.floor(Math.random() * 10),
          txnsSell: Math.floor(Math.random() * 10),
        })
      );
    }, 1200);
  }

  subscribe(cb: Listener) {
    this.listeners.push(cb);
    return () => {
      this.listeners = this.listeners.filter((l) => l !== cb);
    };
  }
}

export const socket = new MockSocket();
socket.start();
