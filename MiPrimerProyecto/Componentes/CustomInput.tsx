
type Props = {
    label?: string;
    value: string;
    tpye?: 'text' | 'password' | 'email' | 'number';
    onChange: (text: string) => void;
    required: boolean;
}