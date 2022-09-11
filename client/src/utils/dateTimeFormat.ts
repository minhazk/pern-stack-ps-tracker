const DATE_TIME_FORMATTER = new Intl.DateTimeFormat(undefined);

const timeDifference = (time: Date) => {
    const currentTime = new Date().getTime();
    const seconds = (currentTime - new Date(time).getTime()) / 1000;
    const minutes = seconds / 60;
    const hours = minutes / 60;
    const days = hours / 24;

    const formatGrammar = (number: number, unit: string) => `${Math.round(number)} ${Math.round(number) > 1 ? unit : unit.slice(0, unit.length - 1)} ago`;

    if (seconds < 60) return formatGrammar(seconds, 'seconds');
    if (minutes < 60) return formatGrammar(minutes, 'minutes');
    if (hours < 24) return formatGrammar(hours, 'hours');
    return formatGrammar(days, 'days');
};

const dateFormatter = (date: Date) => {
    return DATE_TIME_FORMATTER.format(new Date(date));
};

export { timeDifference, dateFormatter };
