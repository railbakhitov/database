function addPersonData(personData) {
    return {
        type: 'ADD_PERSON_DATA',
        payload: {
            dateRegistration: personData.dateRegistration,
            department: personData.department,
            direction: personData.direction,
            email: personData.email,
            firstName: personData.firstName,       
            institute: personData.institute,
            lastName: personData.lastName,
            location: personData.location,
            middleName: personData.middleName,
            position: personData.position,
            status: personData.status,
            telephone: personData.telephone,
            university: personData.university
        }
    }
}

export default addPersonData;