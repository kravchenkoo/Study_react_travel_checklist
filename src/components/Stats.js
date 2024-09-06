export function Stats({ items }) {
  if (!items.length)
    return (
      <footer className="stats">
        <em>Start selecting items</em>
      </footer>
    );
  const numberOfItems = items.length;
  const itemsPacked = items.filter((item) => item.packed).length;
  const itemsPackedProgress = Math.round((itemsPacked / numberOfItems) * 100);
  return (
    <footer className="stats">
      <em>
        {itemsPackedProgress === 100
          ? 'You got everything! Ready to go ✈'
          : `💼 You have ${numberOfItems} items on your list, and you already packed
        ${itemsPacked} (${itemsPackedProgress}%)`}
      </em>
    </footer>
  );
}
