type FormSectionProps = {
    id: string;
    name: string;
    label: string;
    placeholder: string;
    error: string;
    required?: boolean;
    defaultValue: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
};

export function FormSectionComponent({
                                         id,
                                         name,
                                         label,
                                         placeholder,
                                         error,
                                         required,
                                         defaultValue,
                                         onChange,
                                     }: FormSectionProps) {
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input
                id={id}
                name={name}
                placeholder={placeholder}
                required={required}
                defaultValue={defaultValue}
                onChange={onChange}
            />
            {error && <span>{error}</span>}
        </div>
    );
}