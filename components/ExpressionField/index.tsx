import type { Expressions } from '@/constants';

import styles from './expressionField.module.css';

export default function ExpressionField({
    name,
    placeholder,
    state,
    setState
}: {
    name: 'left' | 'right';
    placeholder: string;
    state: Expressions;
    setState: React.Dispatch<React.SetStateAction<Expressions>>;
}) {
    return (
        <div className={styles.container}>
            <input
                type="text"
                name={name}
                placeholder={placeholder}
                className={styles.input}
                value={state[name]}
                onChange={(e) =>
                    setState((prevState: Expressions) => ({
                        ...prevState,
                        [name]: e.target.value,
                    }))
                }
            />
        </div>
    );
}