import "./SearchBar.css";

function SearchBar({
  value,
  onChange,
  placeholder = "Search...",
}) {
  return (
    <div className="search-bar">

      <span className="search-icon">
        🔍
      </span>

      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />

      {value && (
        <button
          className="clear-search"
          onClick={() =>
            onChange({
              target: { value: "" },
            })
          }
        >
          ✕
        </button>
      )}

    </div>
  );
}

export default SearchBar;