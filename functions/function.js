/*
 * The anatomy of a lambda function
*/

// Exported function named 'handler'
exports.handler = (event, context, callback) => {
  /* event */
  // data about the request, the method type, the data in the body

  /* context */
  // Information about the function, the user details, and other bits

  /* callback */
  // The callback ends the function execution and returns results/errors

  /* Do my custom business logic */

  return callback(null, {
    // HTTP status
    statusCode: 200,
    // Data to return
    body: JSON.stringify({
      data: '⊂◉‿◉つ'
    })
  })
}
