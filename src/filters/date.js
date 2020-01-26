export default (value) => {
    const date = new Date(value)
    return date.toLocaleString(['hr-HR'], {month: 'short', day:'2-digit', year: 'numeric'})
}