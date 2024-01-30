function removeAndReturnFront(arr) {
    if (!arr || arr.length === 0) {
        
        return undefined; 
    }

    return arr.shift();
}
