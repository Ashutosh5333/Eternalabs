type Listener = (data: any) => void;

class MockSocket {
  private listeners: Listener[] = [];
  private ids: string[] = [];

  setTokenIds(ids: string[]) {
    this.ids = ids;
  }

  start() {
    setInterval(() => {
      if (!this.ids.length) return;

      const randomId =
        this.ids[Math.floor(Math.random() * this.ids.length)];

      this.listeners.forEach(cb =>
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
      this.listeners = this.listeners.filter(l => l !== cb);
    };
  }
}

export const socket = new MockSocket();
socket.start();

