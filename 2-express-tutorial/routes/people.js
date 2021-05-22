const express = require('express')
const router = express.Router();

const {
    getPeople,
    postPeople,
    createPersonPostman,
    updatePerson,
    deletePerson
} = require('../controllers/people')
router.use(express.json())

// router.get('/',getPeople)
// router.post('/',postPeople)
// router.post('/postman',createPersonPostman)
// router.put('/:id',createPersonPostman)
// router.delete('/:id',deletePerson)

router.route('/').get(getPeople).post(postPeople);
router.route('/postman').post(createPersonPostman)
router.route('/:id').put(updatePerson).delete(deletePerson)

module.exports = router