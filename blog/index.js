const express = require('express') // nạp thư viện (đi vào node module để lấy thư viện)
const app = express() // gọi function
const port = 3000 // run website cổng nào

// Định nghĩa route
app.get('/manhtrannnnn', (req, res) => {
  return res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})