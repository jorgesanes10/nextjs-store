'use client';

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ reset }: ErrorProps) {
  return (
    <div>
      <h1>There was an error in the application</h1>
      <button onClick={reset}>Retry</button>
    </div>
  );
}
