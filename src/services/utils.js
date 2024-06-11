
const formatDate = () => {
    const now = new Date();

    const year = now.getFullYear();

    // getMonth() returns months from 0-11, so we add 1 and pad with leading zeros if necessary
    const month = String(now.getMonth() + 1).padStart(2, '0');

    // padStart ensures the day is two digits
    const day = String(now.getDate()).padStart(2, '0');

    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');

    // Concatenate all parts to get the final formatted date
    return `${year}${month}${day}${hours}${minutes}`
}
export default formatDate