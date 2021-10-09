import React from 'react';

const container: React.CSSProperties = {
  display: 'inline-flex',
  flexDirection: 'row',
  alignItems: 'center',
  border: '1px solid var(--c-border)',
};

const item: React.CSSProperties = {
  padding: 12,
  cursor: 'pointer',
  justifyContent: 'center',
  display: 'flex',
};

export const ComboboxContainer: React.FC = ({ children }) => {
  return <div style={container}>{children}</div>;
};

export const ComboboxItem: React.FC<{
  onClick: () => void;
  selected: boolean;
}> = ({ children, onClick, selected }) => {
  return (
    <div
      style={{
        ...item,
        backgroundColor: selected ? 'rgba(0, 0, 0, 0.1)' : 'transparent',
      }}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
