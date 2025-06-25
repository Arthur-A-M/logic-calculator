'use client';

import { useState } from 'react';

export default function Home() {
  const [expressions, setExpressions] = useState({
    left: '',
    right: '',
  });
  const [areEqual, setAreEqual] = useState(false);
  const [error, setError]: any = useState(null);

  const handleCheck = () => {
    if (expressions.left === null || expressions.right === null) {
      setError('One of the fields is empty');
      return;
    }

    try {
      setAreEqual(expressions.left === expressions.right);
    } catch (e: any) {
      setError(e.message);
    }
  };

  return (
    <div>
      <p>{JSON.stringify(areEqual)}</p>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input
        type="text"
        name="left"
        id=""
        placeholder='Expressão 1'
        value={expressions.left}
        onChange={(e) =>
          setExpressions((prevState) => ({
            ...prevState,
            left: e.target.value,
          }))
        }
      />
      <input
        type="text"
        name="right"
        id=""
        placeholder='Expressão 2'
        value={expressions.right}
        onChange={(e) =>
          setExpressions((prevState) => ({
            ...prevState,
            right: e.target.value,
          }))
        }
      />
      <button onClick={handleCheck}>Check</button>
    </div>
  );
}
