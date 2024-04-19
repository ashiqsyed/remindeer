import UpdateReminder from "../components/addreminder/UpdateReminder.js";
import { useRouter } from 'next/router';

export default function UpdatingReminder() {
    const router = useRouter();
    const { reminderId } = router.query; // This assumes you're passing the reminder ID in the URL

    return <UpdateReminder reminderId={reminderId} />
}
