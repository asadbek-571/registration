import {toast} from "react-toastify";

export const notify = (status, message)=>{
    status ?
        toast.success(message, {
            position: toast.POSITION.TOP_RIGHT,
            theme: 'colored'
        })
        :
        toast.error(message, {
            position: toast.POSITION.TOP_RIGHT,
            theme: 'colored'
        })
}