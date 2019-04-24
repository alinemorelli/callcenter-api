const router = require('express').Router()

router.get('/', (_, res) => res.send('Integrated call center'))

router.get('/health', (_, res) => res.send('OK'))

router.post('/webhook', (req, res) => {
  require('../../Domain/UseCases/HandleCallEvents')(req.body)
  res.status(200).json({ message: 'ok' })
})

router.get('/dashboard', async (req, res) => {
  const response = await require('../../Domain/UseCases/GetCurrentCalls/GetCurrentCalls.js')()
  res.status(200).json(response)
})

router.all('*', (_, res) => res.status(404).json({ message: 'Not Found' }))

module.exports = router
