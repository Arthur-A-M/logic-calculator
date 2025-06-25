'use client';

import React, { useState } from 'react';

import { Expressions, InitialExpressions } from '@/constants'
import { ExpressionField } from '@/components';

export default function Home() {
  const [expressions, setExpressions]: [Expressions, React.Dispatch<React.SetStateAction<Expressions>>] = useState(InitialExpressions);
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
      <ExpressionField
        name="left"
        placeholder="Expressão 1"
        state={expressions}
        value="left"
        setState={setExpressions}
      />
      <ExpressionField
        name="right"
        placeholder="Expressão 2"
        state={expressions}
        value="right"
        setState={setExpressions}
      />
      <button onClick={handleCheck}>Check</button>
    </div>
  );
}
