CREATE TABLE IF NOT EXISTS "task" (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  completed BOOLEAN NOT NULL DEFAULT FALSE,
  created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT now()
);

-- Sample data (optional)
INSERT INTO "task"(title, description)
VALUES
('Sample task 1', 'This is a sample'),
('Sample task 2', 'Another one');
