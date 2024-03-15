import React, { useState, forwardRef, ForwardedRef } from 'react';
import { TextField, Autocomplete as MUIAutocomplete, AutocompleteProps as MUIAutocompleteProps } from '@mui/material';
import { useQuery } from '@tanstack/react-query';

export interface Option {
  value: string;
  label: string;
}

export interface AutocompleteProps {
  options: () => Promise<Option[]>;
  label?: string;
  props?: Omit<MUIAutocompleteProps<Option, false, false, false>, 'options' | 'loading' | 'inputValue' | 'onInputChange' | 'getOptionLabel' | 'renderInput'>;
  inputRef?: ForwardedRef<HTMLInputElement>;
}

const Autocomplete: React.ForwardRefExoticComponent<AutocompleteProps> = forwardRef(
  ({ options, label = '', props, inputRef }, ref) => {
    const [inputValue, setInputValue] = useState('');
    const { data: optionsData = [], isLoading } = useQuery<Option[], Error>({
      queryKey: ['autocompleteOptions'],
      queryFn: () => options(),
    });

    return (
      <MUIAutocomplete
        disablePortal
        options={optionsData}
        loading={isLoading}
        inputValue={inputValue}
        onInputChange={(_, newInputValue) => {
          setInputValue(newInputValue);
        }}
        sx={{ width: 300 }}
        getOptionLabel={(option: Option) => option.label}
        renderInput={(params) => <TextField {...params} label={label} inputRef={inputRef} />}
        {...props}
        ref={ref}
      />
    );
  }
);

export default Autocomplete;
