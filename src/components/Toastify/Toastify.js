import { toast } from "react-toastify"

export const notifyCarAdded = () => toast.success(`The car is added to favorites 💖`)
export const notifyCarRemoved = () => toast.info(`The car is removed from favorites`)
export const notifyCarSearch = (number) => toast.success(`We've found ${number} options!`)
export const notifyCarSearchError = () => toast.info(`Please, search another variants`)
