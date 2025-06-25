import type { Expressions } from '@/constants';

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
        <input
            type="text"
            name={name}
            placeholder={placeholder}
            style={{ width: "100%" }}
            value={state[value]}
            onChange={(e) =>
                setState((prevState: Expressions) => ({
                    ...prevState,
                    left: e.target.value,
                }))
            }
        />
    );
}