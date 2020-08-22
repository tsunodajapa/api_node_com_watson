import React from 'react';

interface TextAreaProps {
    value: string
    onChange(value: string): void
}

const TextArea: React.FC<TextAreaProps> = ({ onChange, value }) => {
    return (
        <textarea value={value} onChange={e => onChange(e.target.value as string)} rows={5}/>
    );
}

export default TextArea;