# Menahariya — Telebirr Macle MiniApp

Native Macle miniapp for bus booking with Telebirr InApp payment (`ma.startPay`).

## Structure

```
menahariya/
├── app.js / app.json / app.mass
├── project.config.json
├── utils/api.js          # Backend API via ma.request
└── pages/
    ├── index/            # Search (from, to, date)
    ├── schedules/        # Available buses
    ├── seats/            # Seat selection
    ├── passenger/        # Passenger details
    ├── payment/          # Ticket + Telebirr pay
    ├── success/          # Confirmation
    ├── login/            # Auth
    └── history/          # Ticket history
```

## Setup

1. Start backend: `telebirr-miniapp` on port 4000
2. Set `baseUrl` in `app.js` if not using `http://localhost:4000`
3. Open project in **Macle Developer Toolkit** (Telebirr SuperApp test bed)
4. Run inside Telebirr host app — payment requires `ma.startPay`

## Payment flow

1. `POST /tickets` — create pending ticket
2. `POST /payment/preorder` or `POST /payment/create/order` — get `rawRequest`
3. `ma.startPay({ rawRequest })` — native Telebirr payment
4. Backend receives `POST /payment/notify` — confirms ticket
5. App polls `GET /tickets/status/:reference` until `issued`

## Env

Configure `TELEBIRR_NOTIFY_URL` and Telebirr credentials in `telebirr-miniapp/.env`.
