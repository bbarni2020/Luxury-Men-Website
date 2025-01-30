import React, { useState, useEffect } from 'react';

interface CartQuantityInputProps {
  quantity: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
}

export const CartQuantityInput: React.FC<CartQuantityInputProps> = ({
  quantity,
  onChange,
  min = 1,
  max = 99
}) => {
  const [inputValue, setInputValue] = useState(quantity.toString());
  
  useEffect(() => {
    setInputValue(quantity.toString());
  }, [quantity]);

  const handleBlur = () => {
    let newValue = parseInt(inputValue, 10);
    
    if (isNaN(newValue) || newValue < min) {
      newValue = min;
    } else if (newValue > max) {
      newValue = max;
    }
    
    setInputValue(newValue.toString());
    onChange(newValue);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '' || /^\d+$/.test(value)) {
      setInputValue(value);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.currentTarget.blur();
    }
  };

  return (
    <input
      type="text"
      value={inputValue}
      onChange={handleChange}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
      className="w-12 text-center bg-transparent border border-primary-dark/20 
                rounded-sm focus:border-accent-gold focus:ring-0 px-1 py-0.5"
      aria-label="Item quantity"
    />
  );
};