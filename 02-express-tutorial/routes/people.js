const express = require('express')
const router = express.Router()

const {
    person,
    createPerson,
    createPersonPostman,
    updatePerson,
    deletePerson 
} = require('../controller/people')

// router.get('/', person)
// router.post('/', createPerson)
// router.post('/postman', createPersonPostman)
// router.put('/:id', updatePerson)
// router.delete('/:id', deletePerson)

//alternative for the above

router.route('/').get(person).post(createPerson);
router.route('/postman').post(createPersonPostman);
router.route('/:id').put(updatePerson).delete(deletePerson);

module.exports = router