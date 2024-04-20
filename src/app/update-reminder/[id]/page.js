"use client"
import UpdateReminder from "../../components/addreminder/UpdateReminder.js";

export default function UpdatingReminder({params}) {
    return (
        <UpdateReminder reminderId={params.id} />
    )
}