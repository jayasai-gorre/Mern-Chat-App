// Function to convert MongoDB createdAt field to time
export function extractTime(dateString) {
    // Create a new Date object from the MongoDB createdAt string
    const date = new Date(dateString);
    
    // Get the hours and minutes from the Date object
    const hours = padZero(date.getHours());
    const minutes = padZero(date.getMinutes());
    
    // Return the formatted time string
    return `${hours}:${minutes}`;
}

// Helper function to pad single-digit numbers with a leading zero
function padZero(number) {
    return number.toString().padStart(2, "0");
}
