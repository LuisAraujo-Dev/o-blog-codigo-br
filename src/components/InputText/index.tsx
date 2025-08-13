import clsx from "clsx";
import React, { useId } from "react"

type InputTextProps = {
  labelText?: string
} & React.ComponentProps<'input'>

export function InputText({ labelText, ...props }: InputTextProps) {
  const id = useId();
  return <div className="flex flex-col gap-2">
    {labelText && (
      <label className="text-sm" htmlFor={id}>
        {labelText}
      </label>
    )}
    <input {...props} className={clsx(
      'bg-white outline-0 text-base/tight',
      'ring-2 ring-slate-400 rounded',
      'p-2 transition focus:ring-blue-600',
      'placeholder-slate-300',
      'disabled:bg-slate-200 disabled:text-slate-500 disabled:placeholder-slate-300',
      'read-only:bg-slate-200 read-only:placeholder-slate-400',
      props.className,
    )} id={id} />
  </div>
}