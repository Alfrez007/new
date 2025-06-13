'use client';

import { useEffect, useState } from 'react';

export default function LastUpdated() {
  const [date, setDate] = useState('');

  useEffect(() => {
    setDate(new Date().toLocaleDateString());
  }, []);

  return (
    <span className="text-xs text-muted-foreground">
      Last updated: {date}
    </span>
  );
}
