export function Item({ item, onDeleteItem, handlePackedItems }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => handlePackedItems(item.id)}
      />
      <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
        {item.description} {item.quantity}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
