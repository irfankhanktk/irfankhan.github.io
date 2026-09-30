import { useId } from "react";

interface FormFieldProps {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  multiline?: boolean;
  placeholder?: string;
  autoComplete?: string;
}

const inputClasses =
  "w-full rounded-xl border border-border bg-bg px-4 py-3 text-fg placeholder:text-muted/70 transition-[border-color,box-shadow] duration-300 outline-none focus:border-accent focus:shadow-[0_0_0_4px_var(--color-accent-soft)] user-invalid:border-red-500";

export function FormField({ label, name, type = "text", required, multiline, ...rest }: FormFieldProps) {
  const id = useId();
  return (
    <div className="grid gap-2">
      <label htmlFor={id} className="text-sm font-medium text-fg">
        {label}
        {required && (
          <span aria-hidden className="text-accent">
            {" "}
            *
          </span>
        )}
      </label>
      {multiline ? (
        <textarea id={id} name={name} required={required} rows={5} className={`${inputClasses} resize-y`} {...rest} />
      ) : (
        <input id={id} name={name} type={type} required={required} className={inputClasses} {...rest} />
      )}
    </div>
  );
}
