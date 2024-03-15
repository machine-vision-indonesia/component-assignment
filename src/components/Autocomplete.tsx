import { useState, useEffect, forwardRef } from "react";
import MUIAutocomplete, {
  AutocompleteProps as MUIAutocompleteProps,
} from "@mui/material/Autocomplete";
import { useQuery } from "@tanstack/react-query";

interface Option {
  value: string;
  label: string;
}

interface CustomAutocompleteProps
  extends Omit<MUIAutocompleteProps<Option, false, false, false>, "options"> {
  options: () => Promise<Option[]>;
  queryKey: string;
}

export const Autocomplete = forwardRef<HTMLDivElement, CustomAutocompleteProps>(
  (props, ref) => {
    const { options, queryKey, ...autocompleteProps } = props;
    const [optionsData, setOptionsData] = useState<Option[]>([]);
    const { isLoading, isError, data } = useQuery({
      queryKey: [queryKey],
      queryFn: options,
    });

    useEffect(() => {
      if (data) {
        setOptionsData(data);
      }
    }, [data]);

    return (
      <MUIAutocomplete
        ref={ref}
        loading={isLoading}
        options={optionsData}
        getOptionLabel={(option) => option.label}
        {...autocompleteProps}
      />
    );
  }
);
