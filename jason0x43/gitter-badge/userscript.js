setInterval(() => {
  const count = getUnreadCount();
  wavebox.badge.setCount(count);
  if (count === 0) {
    wavebox.badge.setHasUnreadActivity(hasActivity());
  }
}, 5000);

function hasActivity() {
  return (
    document.querySelector(
      '.room-menu .room-item__unread-indicator.has-activity'
    ) != null
  );
}

function getUnreadCount() {
  const unreads = Array.from(
    document.querySelectorAll(
      '.room-menu .room-item__unread-indicator.has-unreads'
    )
  );
  return unreads.reduce(
    (total, node) => total + Number(node.textContent.trim()),
    0
  );
}
