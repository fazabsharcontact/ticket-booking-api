CREATE TABLE events (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    starts_at TIMESTAMPTZ NOT NULL
);

CREATE TABLE seats (
    id SERIAL PRIMARY KEY,
    event_id INT NOT NULL REFERENCES events(id),
    label TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'available' CHECK (status IN ('available', 'sold')),
    UNIQUE (event_id, label)
);

CREATE TABLE bookings (
    id SERIAL PRIMARY KEY,
    seat_id INT NOT NULL REFERENCES seats(id),
    user_email TEXT NOT NULL,
    idempotency_key TEXT NOT NULL UNIQUE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);