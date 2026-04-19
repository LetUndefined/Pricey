type AuthInputProps = {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  value: string;
  autoComplete?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const AuthInput = ({
  label,
  name,
  type,
  placeholder,
  value,
  autoComplete,
  onChange,
}: AuthInputProps) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-xs font-bold tracking-widest uppercase text-muted">
        {label}
      </label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        autoComplete={autoComplete}
        onChange={onChange}
        className="w-full bg-transparent border-b-2 border-border font-bold text-white outline-none py-2 placeholder:text-subtle focus:border-accent transition-colors"
      />
    </div>
  );
};

export default AuthInput;
