import type React from 'react'
import {forwardRef} from 'react'

import {classes, st} from './button.st.css'

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    variant?: 'secondary' | 'primary'
    loading?: boolean
}

export const Button = forwardRef<HTMLButtonElement, Props>(({
    className,
    children,
    variant = 'secondary',
    loading,
    ...attrs
}, ref) =>
    <button
        {...attrs}
        className={st(classes.root, {variant, loading}, className)}
        ref={ref}
    >
        {children}
    </button>,
)
