import module1 from './module1'
import module2 from './module2'
import module3 from './module3'
import img1File from './assets/imgs/small.png';
import img2File from './assets/imgs/big.jpg';
import './assets/css/common.css'
import './assets/css/index.css'
import './style.css'

function showModuleHello(moduleArr) {
  moduleArr.forEach(i => {
    if (i && i instanceof Function) {
      const helloStr = i()
      document.write(`<h2>${helloStr}</h2>`)
    }
  })
}
const moduleArr = [
  module1,
  module2,
  module3
]
showModuleHello(moduleArr)

// ========================================
// image Test
// ========================================
const oImg1 = document.createElement('img')
oImg1.src = img1File
const oImg2 = document.createElement('img')
oImg2.src = img2File
document.body.appendChild(oImg1)
document.body.appendChild(oImg2)