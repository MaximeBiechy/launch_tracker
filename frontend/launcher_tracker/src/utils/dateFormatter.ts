import dayjs from 'dayjs';

export const formatDate = (date: string) => {
    return dayjs(date).format('MMMM D, YYYY - HH:mm [CET]');
};