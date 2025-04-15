// scripts.js
document.getElementById("ticketForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Get ticket details
    const title = document.getElementById("ticketTitle").value;
    const description = document.getElementById("ticketDescription").value;
    
    // Create a new ticket object
    const ticket = {
        title: title,
        description: description,
        status: "Pending",
    };
    
    // Add ticket to the ticket list (in local storage for persistence)
    addTicketToList(ticket);

    // Simulate sending an email notification (just an alert for this case)
    alert(`Ticket "${title}" submitted! You will be notified when it's resolved.`);

    // Clear form fields
    document.getElementById("ticketForm").reset();
});

// Function to add ticket to list and display
function addTicketToList(ticket) {
    const ticketList = document.getElementById("ticketList");

    // Create list item
    const li = document.createElement("li");
    li.innerHTML = `
        <strong>${ticket.title}</strong><br>
        ${ticket.description}<br>
        <span class="status ${ticket.status === "Pending" ? "pending" : "resolved"}">${ticket.status}</span>
        <button onclick="resolveTicket(this)">Resolve</button>
    `;
    
    // Add to ticket list
    ticketList.appendChild(li);
}

// Function to mark ticket as resolved
function resolveTicket(button) {
    const li = button.parentElement;
    const statusSpan = li.querySelector(".status");

    // Update ticket status to resolved
    statusSpan.textContent = "Resolved";
    statusSpan.classList.remove("pending");
    statusSpan.classList.add("resolved");

    // Simulate sending email notification of resolution
    alert("Your ticket has been resolved. Thank you for reaching out!");
}
