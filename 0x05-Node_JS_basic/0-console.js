/**
 * Prints a message to the standard output.
 *
 * @param message - The message to be printed.
 */
function displayMessage (message) {
  process.stdout.write(message + '\n');
}

module.exports = displayMessage;
