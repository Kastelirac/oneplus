export default (value) => {
    const date = new Date(value)
    return date.toLocaleString(['hr-HR'], {hour:'2-digit', minute:'2-digit' })
}
/*
const date = new Date(this.date)
if (typeof this.timestart === 'string') {
    let hours = this.timestart.match(/^(\d+)/)[1]
    const minutes = this.timestart.match(/:(\d+)/)[1]
    date.setHours(hours)
    date.setMinutes(minutes)
} else {
date.setHours(this.timestart.getHours())
date.setMinutes(this.timestart.getMinutes())
}
return date */