/**
 *
 * @param message
 * @param expr
 * @returns {boolean}
 */
function assert(message, expr){
    if(!expr){
        throw new Error(message);
    }
    assert.count++;
    return true;
}




