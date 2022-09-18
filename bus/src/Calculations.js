let fullCurrent = new Date();

export const findY = (t) => {
    let givenHour = parseInt(t.substring(0, t.indexOf(':')));
    let givenMinutes = parseInt(t.substring(t.indexOf(':')+1))

    if (t.includes('PM')) {
        return ((givenHour + 12)*60 + givenMinutes - (fullCurrent.getHours()*60 + fullCurrent.getMinutes()));
    } else {
        return (givenHour*60 + givenMinutes - (fullCurrent.getHours()*60 + fullCurrent.getMinutes()));
    }
}