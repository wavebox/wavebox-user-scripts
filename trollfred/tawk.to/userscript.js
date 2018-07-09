setInterval( function () {
    var unopened_chats_counter = document.querySelector('#visitors .chat-count')
    var unopened_chats_count = read_counter(unopened_chats_counter)

    var unseen_messages_counters = document.querySelectorAll('#activeVisitors .unseen-count:not(.hidden)')
    var unseen_messages_count = Array.prototype.reduce.call(unseen_messages_counters, (acc, c) => acc + read_counter(c), 0)

    var total = unopened_chats_count + unseen_messages_count

    var unread_highlights = document.querySelectorAll('#left-panel .waiting, #left-panel .flash-new-message')
    var unread_activity = unread_highlights.length > 0

    wavebox.badge.setCount(total)
    wavebox.badge.setHasUnreadActivity(unread_activity)
}, 1000)

function read_counter (counter) {
    if (counter && counter.innerText) {
        return parseInt(counter.innerText)
    }
    else {
        return 0
    }
}
