import type { Expressions } from '@/constants';

import styles from './expressionField.module.css';

export default function ExpressionField({
    name,
    placeholder,
    state,
    value,
    setState
}: {
    name: string;
    placeholder: string;
    state: Expressions;
    value: 'left' | 'right',
    setState: React.Dispatch<React.SetStateAction<Expressions>>;
}) {
    return (
        <div className={styles.container}>
            <input
                type="text"
                name={name}
                placeholder={placeholder}
                className={styles.input}
                value={state[value]}
                onChange={(e) =>
                    setState((prevState: Expressions) => ({
                        ...prevState,
                        left: e.target.value,
                    }))
                }
            />
        </div>
    );
}