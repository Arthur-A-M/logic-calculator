'use client';

import React, { useState } from 'react';

import { Expressions, InitialExpressions } from '@/constants'
import { ExpressionField } from '@/components';

export default function Home(): React.ReactElement {
  const [expressions, setExpressions]: [Expressions, React.Dispatch<React.SetStateAction<Expressions>>] = useState<Expressions>(InitialExpressions);
  const [areEqual, setAreEqual]: [boolean | null, React.Dispatch<React.SetStateAction<boolean | null>>] = useState<boolean | null>(null);
  const [error, setError]: [string | null, React.Dispatch<React.SetStateAction<string | null>>] = useState<string | null>(null);

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
        setState={setExpressions}
      />
      <ExpressionField
        name="right"
        placeholder="Expressão 2"
        state={expressions}
        setState={setExpressions}
      />
      <button onClick={handleCheck}>Check</button>
    </div>
  );
}
