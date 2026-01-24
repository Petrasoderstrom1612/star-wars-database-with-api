import type { FC } from "react";

interface SearchBarProps {
  value: string;
  onChange: (val: string) => void;
  onSubmit: () => void;
  placeholder?: string;
}

export const SearchBar: FC<SearchBarProps> = ({value, onChange, onSubmit, placeholder = "Search..."}) => (
  <div className="mb-3 d-flex gap-2">
    <input
      className="form-control"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onKeyDown={(e) => e.key === "Enter" && onSubmit()}
    />
    <button className="btn btn-primary" onClick={onSubmit}>
      Search
    </button>
  </div>
);
